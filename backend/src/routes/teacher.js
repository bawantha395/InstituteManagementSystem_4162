const express = require('express');

const router = express.Router();
const TeacherController = require('../controller/teacher');



router.post('/' , TeacherController.register)
router.post('/login', TeacherController.login);





module.exports = router;