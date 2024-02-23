import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChalkboardTeacher, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C3D1CE;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const SignUpContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  margin-top: 150px;
  margin-bottom: 100px;
  background-color: #1d1d1d;
  border-radius: 10px;
  padding: 30px;
  background-color: #C3D1CE;
`;

const SignUpHeading = styled(Typography)`
  margin-bottom: 50px;
`;

const ButtonsContainer = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 30px;
margin-bottom: 100px;
`;

const StyledButton = styled(Button)`
  background-color: #1d1d1d;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;

  &:hover {
    background-color: #1d1d1d;
    transform: scale(1.05);
  }
`;

const StyledIcon = styled(FontAwesomeIcon)`
  font-size: 2rem;
  margin-right: 20px;
`;

const TsSignUp = () => {
  return (
    <>
      <GlobalStyle />
      <SignUpContainer>
        <SignUpHeading variant="h5">Choose Your Role</SignUpHeading>
        <ButtonsContainer>
          <StyledButton onClick={() => window.location.href = "/signup"}>
            <StyledIcon icon={faChalkboardTeacher} /> Sign Up as a Teacher
          </StyledButton>
          <StyledButton onClick={() => window.location.href = "/signup2"}>
            <StyledIcon icon={faUserGraduate} /> Sign Up as a Student
          </StyledButton>
        </ButtonsContainer>
      </SignUpContainer>
    </>
  );
};

export default TsSignUp;
