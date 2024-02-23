import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GlobalStyles from '@mui/material/GlobalStyles';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Home.css';
import { Link } from 'react-router-dom';


import homeImage from '../images/home.jpg'; // Import the image

const defaultTheme = createTheme();

export default function InstituteHomepage() {
  return (
    <div style={{ backgroundColor: '#C3D1CE' }}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <CssBaseline />
        <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
        component="h1"
        variant="h4"
        align="left"
        color="text.secondary"
        gutterBottom
        style={{
          marginLeft: '-250px',
          marginTop: '80px',
          fontSize: '2.5em',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          color: '#333',
          lineHeight: '1.2',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        Students, Own Your Future...
      </Typography>

      <Typography
        variant="h4"
        align="left"
        color="text.secondary"
        component="p"
        style={{
          marginLeft: '-150px',
          marginTop: '50px',
          fontSize: '1.8em',
          fontWeight: 'bold',
          color: '#333',
          lineHeight: '1.2',
          animation: 'fadeIn 1s ease-in-out',
        }}
      >
        Teachers, Shape Your Path...
      </Typography>
      <Link to="/services" style={{ textDecoration: 'none', display: 'block', textAlign: 'center', marginTop: '60px' ,marginLeft:'-500px',marginRight:'000px'}}>
  <button className="what-we-provide-button">
    What We Provide
  </button>
</Link>


        </Container>
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            <img
              src={homeImage}
              alt="Home"
              style={{ 
                width: '60%', 
                height: '40%',
                margin: '100px 100px', 
                marginTop: '-280px',
                marginBottom: '150px', 
                marginLeft: '600px',
                transition: 'transform 0.3s', // Add transition for smooth effect
                borderRadius: '20px', // Adds rounded corners
                //boxShadow: '0 0 10px 10px rgba(255,255,255,1) ', // Adds a subtle box shadow
                //filter: 'grayscale(20%) brightness(120%) contrast(120%) blur(1px)', // Adds multiple effects
                
              }}
              className="hover-effect" // Add a class for CSS targeting
            />
           

            <Grid item xs={12} sm={6} md={4}>
              {/* Add content for the grid item */}
            </Grid>
            {/* Add other content here */}
            

          </Grid>
        </Container>
      </ThemeProvider>
    </div>
  );
}
