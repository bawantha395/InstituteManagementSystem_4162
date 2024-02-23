import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #C3D1CE;
    margin: 0;
    font-family: Arial, sans-serif;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  text-align: center;
`;

const PageTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 16px;
  outline: none;

  &::placeholder {
    color: #999;
  }
`;

const SearchIcon = styled.i`
  font-size: 24px;
  color: #333;
`;

const MarksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const MarkCard = styled.div`
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 300px;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  p {
    margin: 8px 0;
  }

  .registration-number {
    font-size: 18px;
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
  }

  .mark-info {
    font-size: 16px;
    margin-top: 10px;
    color: #555;
  }
`;

const ViewMarks2 = () => {
  const [marks, setMarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchMarks = async () => {
      try {
        const response = await axios.get('http://localhost:4162/api/v1/marks/all');
        setMarks(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarks();
  }, []);

  const filteredMarks = marks.filter((mark) =>
    mark.sRegNo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <GlobalStyle />
      <Container>
        <PageTitle>Student Marks </PageTitle>
        <SearchContainer>
          <SearchInput
            type="text"
            placeholder="Search by Registration Number"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <SearchIcon className="fas fa-search" />
        </SearchContainer>
        <MarksContainer>
          {filteredMarks.map((mark) => (
            <MarkCard key={mark._id} className="mark-card">
              <p className="registration-number">Reg. Number: {mark.sRegNo}</p>
              <p className="mark-info">Mark Value: {mark.markValue}</p>
              <p className="mark-info">Grade: {mark.grade}</p>
              <p className="mark-info">Teacher Name: {mark.teacherName}</p>
            </MarkCard>
          ))}
        </MarksContainer>
      </Container>
    </>
  );
};

export default ViewMarks2;
