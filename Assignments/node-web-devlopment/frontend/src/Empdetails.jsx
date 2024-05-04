import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import * as XLSX from 'xlsx';
import { Paginator } from 'primereact/paginator';
import { useSnackbar } from 'notistack';

function Empdetailst() {
  const [empData, setEmpdata] = useState([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:4000/CRUD/GETDATA");
      setEmpdata(response.data.data);
    } catch (error) {
      console.error('Error fetching employee data: ', error);
      enqueueSnackbar('Error fetching employee data', { variant: 'error' });
    }
  };

  const handleView = (id) => {
    navigate("/View/" + id);
  };

  const handleEdit = (id) => {
    navigate("/Edit/" + id);
  };

  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(empData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'employees.xlsx');
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure...?")) {
      try {
        const response = await axios.delete('http://localhost:4000/CRUD/DELETEDATA', { data: { id: id } });
        if (response.data.success) {
          enqueueSnackbar(`${response.data.message}`, { variant: 'success' });
         
          // Refetch data to ensure UI reflects the updated state
          getData();
        } else {
          console.error('Failed to delete document:', response.data.message);
          enqueueSnackbar(`${response.data.message}`, { variant: 'error' });

        }
      } catch (error) {
        console.error('Error deleting document:', error);
        enqueueSnackbar('Error deleting document', { variant: 'error' });
      }
    }
  };

  const actionBodyTemplate = (rowData) => {
    return (
      <div className="d-flex justify-content-between col-6">
        <IconButton aria-label="edit" onClick={() => handleEdit(rowData._id)}>
          <EditIcon style={{ color: 'blue' }} />
        </IconButton>

        <IconButton aria-label="delete" onClick={() => handleDelete(rowData._id)}>
          <DeleteIcon style={{ color: 'red' }} />
        </IconButton>

        <IconButton aria-label="view" onClick={() => handleView(rowData.id)}>
          <VisibilityIcon style={{ color: 'green' }} />
        </IconButton>
      </div>
    );
  };

  const header = (
    <div className="table-header">
      <h1>Employee List</h1>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          type="search"
          onInput={(e) => setGlobalFilter(e.target.value)}
          placeholder="Global Search"
        />
        <Link to="/create" className="btn btn-warning m-3">
          <AddIcon style={{ marginRight: '5px' }} />
          Add New Employee
        </Link>
        <IconButton className='bg-muted' aria-label="export-excel" onClick={exportToExcel}>
          <FileDownloadIcon style={{ color: 'blue' }} />
        </IconButton>
      </span>
    </div>
  );

  const filterData = () => {
    return empData.filter((data) => {
      return (
        data.id.toString().includes(globalFilter) ||
        data.name.toLowerCase().includes(globalFilter.toLowerCase()) ||
        data.city.toLowerCase().includes(globalFilter.toLowerCase())
      );
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <DataTable
            value={filterData()}
            header={header}
            emptyMessage="No records found"
            paginator
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink"
            rows={rows}
            first={first}
            onPageChange={(e) => setFirst(e.first)}
          >
            <Column field="id" header="ID" sortable></Column>
            <Column field="name" header="NAME" sortable></Column>
            <Column field="city" header="EMAIL" sortable></Column>
            <Column body={actionBodyTemplate} header="ACTIONS"></Column>
          </DataTable>
        </div>
      </div>
    </div>
  );
}

export default Empdetailst;
