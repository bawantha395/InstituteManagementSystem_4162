import React from 'react';
import { Typography, Link, Container, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ModernFooter() {
  return (
    <footer style={{ backgroundColor: '#2E7C67', color: '#FFFFFF', padding: '2rem 0', fontSize: '0.9rem' }}>
      <Container maxWidth="md">
        <Grid container spacing={4} justifyContent="space-evenly">
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Contact Us
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <MailIcon style={{ marginRight: '0.5rem', color: '#FFFFFF' }} />
              <Typography variant="body2" color="textSecondary">
                BTM@gmail.com
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
              <PhoneIcon style={{ marginRight: '0.5rem', color: '#FFFFFF' }} />
              <Typography variant="body2" color="textSecondary">
                025 223 7639
              </Typography>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <LocationOnIcon style={{ marginRight: '0.5rem', color: '#FFFFFF' }} />
              <Typography variant="body2" color="textSecondary">
                No.7, 1st Lane, Anuradhapura
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Connect With Us
            </Typography>
            <Link href="#" color="inherit" style={{ marginRight: '1rem' }}>
              <FacebookIcon />
            </Link>
            <Link href="#" color="inherit" style={{ marginRight: '1rem' }}>
              <TwitterIcon />
            </Link>
            <Link href="#" color="inherit">
              <InstagramIcon />
            </Link>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" color="textPrimary" gutterBottom>
              Useful Links
            </Typography>
            <Link href="/" color="inherit" style={{ marginBottom: '0.5rem', display: 'block' }}>
              Home
            </Link>
            <Link href="/about" color="inherit" style={{ marginBottom: '0.5rem', display: 'block' }}>
              About Us
            </Link>
            <Link href="/services" color="inherit" style={{ marginBottom: '0.5rem', display: 'block' }}>
              What We Provide
            </Link>
            <Link href="/login" color="inherit" style={{ display: 'block' }}>
              Login
            </Link>
          </Grid>
        </Grid>
        
        
      </Container>
      <Typography variant="body2" color="textSecondary" align="center" style={{ marginTop: '1rem' }}>
        &copy; Copyright BTM Institute. All Rights Reserved.
      </Typography>
    </footer>
  );
}

export default ModernFooter;
