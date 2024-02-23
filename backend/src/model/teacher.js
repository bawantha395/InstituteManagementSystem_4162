const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    // phone: {
    //     type: String,
    //     required: true,
    // },
    role: {
        type: String,
        required: true,
        default: "Teacher"
    },
    
    token: {
        type: String,
        required: false
      },
});


const Teacher = mongoose.model('Teacher' , teacherSchema);

module.exports = Teacher;
