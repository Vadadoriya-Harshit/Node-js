import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useSnackbar } from 'notistack'; // Import useSnackbar hook

function Create() {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const { enqueueSnackbar } = useSnackbar(); // Destructure enqueueSnackbar from useSnackbar hook
  const go = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const newData = { id, name, city };
      const response = await axios.post('http://localhost:4000/CRUD/ADDDATA', newData);
      go('/');
      // Display success snackbar message
      enqueueSnackbar(response.data.message, { variant: 'success' });
    } catch (error) {
     
      // Display error snackbar message
      enqueueSnackbar('Error adding data', { variant: 'error' });
    }
  };

  return (
    <Container>
      <Grid container justifyContent="center" mt={4}>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card elevation={3}>
            <CardContent>
              <Typography variant="h5" component="h1" gutterBottom>
                Add Employee
              </Typography>
              <form onSubmit={handleClick}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      label="ID"
                      value={id}
                      onChange={(e) => setId(e.target.value)}
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
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Submit
                    </Button>
                  </Grid>
                  <Grid item xs={12}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                      <Button variant="outlined" color="primary" fullWidth>
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

export default Create;
