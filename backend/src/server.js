// require('dotenv').config();
// //const express = require('express');
// const mongoose = require('mongoose');
// const port = process.env.PORT;
// const app = require('./app');

// mongoose.connect(
//     process.env.MONGO_URI,
//     {}).then(result => {
//         console.log("db connected")
//         app.listen(port, () => {
//           console.log(`Example app listening on port ${port}`)
//         })


//     }
//     ).catch(error=>console.log("error"))


require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./app');

// Check if PORT and MONGO_URI are set
if (!process.env.PORT) {
  console.error('Error: PORT is not set in the environment variables.');
  process.exit(1);
}

if (!process.env.MONGO_URI) {
  console.error('Error: MONGO_URI is not set in the environment variables.');
  process.exit(1);
}

const port = process.env.PORT;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(result => {
    console.log("Database connected successfully");
    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  })
  .catch(error => {
    console.error("Error connecting to the database:", error);
    process.exit(1);
  });

// Global error handling for uncaught exceptions and unhandled rejections
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  process.exit(1); // exit the process to avoid undefined states
});

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  process.exit(1); // exit the process to avoid undefined states
});
