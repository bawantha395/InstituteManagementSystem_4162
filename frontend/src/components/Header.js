import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { logout } from '../slices/userSlice';
import styled from 'styled-components';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import logo from '../images/logo.png'; // Adjust the path to your logo file

const NavigationLink = styled.a`
  font-family: 'YourPreferredFont', sans-serif;
  font-size: 1.2em;
  color: #D9D9D9;
  text-decoration: none;
  margin: 0 1.5rem;
  cursor: pointer;
`;

const Logo = () => (
    <img
    src={logo}
    alt="BTM Institute Logo"
    style={{
      width: '80px',
      height: '80px',
      marginRight: '20px',
      border: '2px solid #546F75', // Adds a border around the image
      borderRadius: '8px', // Adds rounded corners
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Adds a slight shadow
      transition: 'transform 0.2s, filter 0.2s', // Adds transitions for smoother effects
    }}
    onMouseEnter={(e) => {
      e.target.style.transform = 'scale(1.1)'; // Scales up on hover
      e.target.style.filter = 'grayscale(100%)'; // Turns grayscale on hover
      e.target.style.transform = 'rotate(360deg)'; // Rotates 360 degrees on hover
    }}
    onMouseLeave={(e) => {
      e.target.style.transform = 'scale(1)'; // Returns to normal size on hover out
      e.target.style.filter = 'grayscale(0%)'; // Returns to normal color on hover out
      e.target.style.transform = 'rotate(0deg)'; // Returns to normal rotation on hover out
    }}
  />
);

export default function Header() {
    const dispatch = useDispatch();

    const handleNavigation = (path) => {
        window.location.href = `/${path}`;
    }

    return (

        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{
                borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
                backgroundColor: '#0D6368' , display:'flex'
            }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
            <Logo /> 
                <Typography variant="h6" color="#D9D9D9" noWrap sx={{ flexGrow: 1 }}>
                    
                <span 
  style={{ 
    fontFamily: 'Roboto, sans-serif',
    fontSize: '2.7em',
    fontWeight: 'semibold',
    color: '#D9D9D9',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',

    // textAlign: 'center',
    // padding: '10px 20px',
    // borderRadius: '8px',
    // cursor: 'pointer',
    // transition: 'box-shadow 0.2s', // Added transition for box shadow effect
    // boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)', // Initial box shadow
  }}
  //onMouseEnter={(e) => e.target.style.boxShadow = '4px 4px 8px rgba(0, 0, 0, 0.2)'} // Adds a stronger box shadow on hover
  //onMouseLeave={(e) => e.target.style.boxShadow = '2px 2px 4px rgba(0, 0, 0, 0.1)'} // Returns to initial box shadow on hover out
>
  BTM INSTITUTE
</span>




                </Typography>
                <nav>
                    <NavigationLink onClick={() => handleNavigation('home')}>Home</NavigationLink>
                    <NavigationLink onClick={() => handleNavigation('about')}>About Us</NavigationLink>
                    <NavigationLink onClick={() => handleNavigation('services')}>Services</NavigationLink>
                    {/* <NavigationLink onClick={() => handleNavigation('staff')}>Staff</NavigationLink> */}
                </nav>
                <Button
                    onClick={() => handleNavigation('ts_signup')}
                    href="#"
                    variant="contained"
                    sx={{
                        my: 1,
                        mx: 1.5,
                        color: "#D9D9D9",
                        backgroundColor: "#02474d",
                        fontWeight: '600'
                    }}
                >
                    Signup
                </Button>
                <Button
                    onClick={() => handleNavigation('ts_signin')}
                    href="#"
                    variant="contained"
                    sx={{
                        my: 1,
                        mx: 1.5,
                        color: "#D9D9D9",
                        backgroundColor: "#02474d",
                        fontWeight: '600'
                    }}
                >
                    Login
                </Button>
                <IconButton
                    onClick={() => {
                        dispatch(logout());
                        handleNavigation('home');
                    }}
                    color="#D9D9D9"
                >
                    <ExitToAppIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    )
}
