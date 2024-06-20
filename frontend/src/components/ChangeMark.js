import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router';
import Box from '@mui/material/Box';
import EditIcon from '@mui/icons-material/Edit';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

const ChangeMark = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [mark, setMark] = useState({
    sRegNo: '',
    markValue: '',
    grade: '',
    teacherName: '',
  });

  useEffect(() => {
    axios.get(`http://localhost:6000/api/v1/marks/${id}`)
      .then((response) => {
        setMark(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setMark({
      ...mark,
      [name]: value,
    });
  };
  
  const handleUpdate = () => {
    axios.put(`http://localhost:4162/api/v1/marks/${id}`, mark)
      .then((response) => {
        console.log('Mark details updated:', response.data);
        navigate('/viewmarks');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <EditIcon sx={{ m: 1, bgcolor: 'secondary.main' }} />
          <Typography component="h1" variant="h5">
            Edit Mark
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="sRegNo"
                  label="Student Registration Number"
                  name="sRegNo"
                  value={mark.sRegNo}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="markValue"
                  label="Mark Value"
                  name="markValue"
                  value={mark.markValue}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="grade"
                  label="Grade"
                  name="grade"
                  value={mark.grade}
                  onChange={handleInputChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="teacherName"
                  label="Teacher Name"
                  name="teacherName"
                  value={mark.teacherName}
                  onChange={handleInputChange}
                />
              </Grid>
            </Grid>
            <Button
              type="button"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: '#4aa3df' }}
              onClick={handleUpdate}
            >
              Update Mark
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ChangeMark;
