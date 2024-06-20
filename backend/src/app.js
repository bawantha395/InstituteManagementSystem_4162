require('dotenv').config();
const express = require('express');
const app = express();
const createHttpError = require('http-errors');
const cors = require('cors');

const TeacherRouter = require('./routes/teacher');
const StudentRouter = require('./routes/student');
const MarkRouter = require('./routes/mark');

app.use(cors());
app.use(express.json());

app.use('/api/v1/teachers', TeacherRouter);
app.use('/api/v1/students', StudentRouter);
app.use('/api/v1/marks', MarkRouter);

// Root route to display "Backend connected"
app.get('/', (req, res) => {
  res.send('Backend connected');
});

app.use((err, req, res, next) => {
  if (createHttpError.isHttpError(err)) {
    res.status(err.status).send({ message: err.message });
  } else {
    res.status(500).send({ message: err.message });
  }
  // error known
  res.status(500).send({ message: "Error Unknown" });
});

module.exports = app;
