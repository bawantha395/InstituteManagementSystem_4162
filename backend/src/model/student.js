const mongoose = require("mongoose");
//const nodemon = require("nodemon");
const Schema = mongoose.Schema;

const studentSchema = new Schema({

    

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        default: "Student"
        
    },
    phoneNumber: {
        type: String,
        required: true,
    },
    regNumber: {
        type: String,
        required: true,
    },
    sRegNo: {
        type: String,
        required: false,
        
    },
    token: {
        type: String,
        required: false
      },

});

const Student = mongoose.model('Student' , studentSchema);

module.exports = Student; 
