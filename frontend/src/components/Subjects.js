import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledButton = styled(Button)`
  background-color: #333;
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1.2rem;
  transition: background-color 0.3s, transform 0.3s;
  font-family: 'Arial', sans-serif;

  &:hover {
    background-color: black;
    transform: scale(1.05);
  }
`;

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
  background-color: #C3D1CE;
  padding: 20px;
`;

const Description = styled.p`
  max-width: 600px;
  text-align: center;
  font-size: 1.2rem;
  margin-bottom: 30px;
  font-family: 'Georgia', serif;
  color: #333;
`;

const Heading = styled.h1`
  font-family: 'Times New Roman', serif;
  font-size: 2rem;
  margin-bottom: 20px;
  color: #333;
`;

const Subjects = () => {
  return (
    <PageContainer>
      <Heading>Importance of O/L Exams</Heading>
      <Description>
        The Ordinary Level (O/L) examinations play a crucial role in a student's academic journey. They serve as a milestone, providing a strong foundation for higher education and future career prospects. O/L results are often used for college admissions and serve as a testament to a student's academic prowess.
      </Description>
      <StyledButton
        component={Link}
        to="/createmark"
        variant="contained"
        color="primary"
      >
        Maths
      </StyledButton>
    </PageContainer>
  );
}

export default Subjects;
