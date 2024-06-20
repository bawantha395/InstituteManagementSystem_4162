import * as React from 'react';
import { Box, Container, Typography, Grid, TextField, Button, CssBaseline, Avatar } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SchoolIcon from '@mui/icons-material/School';
import AddIcon from '@mui/icons-material/Add';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ViewListIcon from '@mui/icons-material/ViewList';

const defaultTheme = createTheme();

const StyledButton = styled(Button)({
  marginTop: '1rem',
  padding: '0.7rem',
  fontSize: '1rem',
});

export default function CreateMark() {
  const [sRegNo, setSRegNo] = React.useState('');
  const [markValue, setMarkValue] = React.useState('');
  const [grade, setGrade] = React.useState('');
  const [teacherName, setTeacherName] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:6000/api/v1/marks', {
        sRegNo,
        markValue,
        grade,
        teacherName
      });
      console.log(response.data);
      setSubmitted(true);
    } catch (error) {
      console.error(error);
    }
  };

  const handleGoToViewMarks = () => {
    navigate('/viewmarks');
  };

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '1rem',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            backgroundColor: '#fff',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'blue', marginBottom: '10px' }}>
            <SchoolIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create Exam Marks
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3, width: '100%' }}>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="sRegNo"
                  fullWidth
                  required
                  id="sRegNo"
                  label="Student Registration Number"
                  autoFocus
                  value={sRegNo}
                  onChange={(e) => setSRegNo(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="markValue"
                  label="Mark Value"
                  name="markValue"
                  value={markValue}
                  onChange={(e) => setMarkValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="grade"
                  label="Grade"
                  type="text"
                  id="grade"
                  value={grade}
                  onChange={(e) => setGrade(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="teacherName"
                  label="Teacher Name"
                  name="teacherName"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
              </Grid>
            </Grid>

            <StyledButton
              type="submit"
              variant="contained"
              sx={{ bgcolor: 'primary.main', width: '100%', mt: 2, height: '2.5rem' }} // Added height
            >
              <AddIcon />
              Submit
            </StyledButton>

            <div style={{ marginTop: '1rem' }}>
              {submitted && (
                <React.Fragment>
                  <CheckCircleIcon />
                  <Typography variant="body1">Student marks added successfully!</Typography>
                  <StyledButton
                    type="button"
                    variant="contained"
                    onClick={handleGoHome}
                    sx={{ width: '100%', mt: 1, height: '2.5rem' }} // Added height
                  >
                    Go Home
                  </StyledButton>
                </React.Fragment>
              )}

              <Button
                variant="contained"
                onClick={handleGoToViewMarks}
                startIcon={<ViewListIcon />}
                sx={{ mt: 2, bgcolor: 'primary.main', color: 'white', width: '100%', height: '2.5rem' }} // Added height
              >
                View Marks
              </Button>
            </div>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
