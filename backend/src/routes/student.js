const express = require('express');

const router = express.Router();
const StudentController = require('../controller/student');


router.post('/' , StudentController.register)
router.post('/login', StudentController.login);





module.exports = router;