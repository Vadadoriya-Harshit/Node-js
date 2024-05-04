import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function EmpEdit() {
  const { empId } = useParams();
  const [id, setId] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [item, setItem] = useState("");
  const navigate = useNavigate();
    useEffect(() => {
      const fetchItem = async () => {
        try {
          const response = await axios.get(`http://localhost:4000/CRUD/EMPDTBYID/${empId}`);
          setId(response.data.id);
          setName(response.data.name);
          setCity(response.data.city);
        
        } catch (error) {
          console.error('Error fetching item:', error);
        }
      };

      fetchItem();
    }, [empId]);
 
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = { name, city };
      try {
        const response = await axios.post(`http://localhost:4000/CRUD/EMPDTUPD/${empId}`, formData);
        if (response.data.error) {
          throw new Error(response.data.error);
        }
        alert('Data updated successfully');
        // Redirect or perform any other actions upon successful update
        navigate('/');
      } catch (error) {
        console.error('Error updating data:', error);
        // Handle error, maybe show an error message to the user
      }
    }
    

  return (
    <Container>
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Edit Employee
              </Typography>
              <form onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="ID"
                      disabled
                      value={id}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      label="City"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="success" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button variant="contained" color="primary" fullWidth>
                        Back
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default EmpEdit;
