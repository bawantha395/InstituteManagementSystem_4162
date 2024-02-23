const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const markSchema = new Schema({
    markValue: {
        type: String,
        required: true,
    },
    grade: {
        type: String,
        required: true,
    },
    
    teacherName: {
        type: String,
        // ref: 'Teacher',
        required: true,
    },
    sRegNo: {
        type: String,
        // ref: 'Student',
        required: true,
    },
});

const Mark = mongoose.model('Mark', markSchema);

module.exports = Mark; 
