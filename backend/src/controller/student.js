
const createHttpError = require('http-errors')
const bcrypt = require('bcrypt');
const StudentModel = require('../model/student');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.login = async (req, res, next) => {

  const email = req.body.email
  const password = req.body.password

  try {
      if (!email || !password) {
          throw createHttpError(400, 'Missing required parameters')
      }

      const student = await StudentModel.findOne({email: email}).exec();
      console.log(student)

      if (!student) {
          throw createHttpError(400, 'STUDENT does not exist')
      }

      const isPasswordValid = await bcrypt.compare(password, student.password);
      console.log(isPasswordValid)

      if (!isPasswordValid) {
          throw createHttpError(400, 'Invalid credentials')
      }
      //const user = await StudentModel.findOne({ email: email}).exec();
      console.log(process.env.JWT_TOKEN_KEY)

      const token = jwt.sign(
          { 
              user_id: student._id,
              email: student.email,
          }, 
          process.env.JWT_TOKEN_KEY, 
          { 
              expiresIn: '4h',
          }
          )

          student.token = token;
         

          const result = await student.save();

          console.log(result)

          const response = {
            id: result._id,
            name:result.name,
            email: result.email,
            role: result.role,
            token: result.token,
            userType: "student"
          }

          console.log(response);

          res.status(200).send(response);

      

  } catch (error) {
      next(error)
  }
}


exports.register = async (req,res,next) => {  
    const name =  req.body.name
    const email = req.body.email
    const password = req.body.password
    const role = req.body.role
    const phoneNumber = req.body.phoneNumber
    const regNumber = req.body.regNumber
    
    
  
  
    try {
      // const { images } = req.files;
      //   if(!images) {
      //       throw createHttpError(404, "Image not found")
      //   };
      //   if(!images.mimetype.startWith('images')){
      //       throw createHttpError(400, 'Only images are allowed');
      //   }
      //   let filepath = __dirname + '../../../public/vehicles/' + images.vehicle_name
      //   images.mv(filepath);

      //   let filepathUpload = '/public/vehicles/' + images.vehicle_name

      if(!name || !email || !password  || !role || !phoneNumber || !regNumber  ){
        throw createHttpError(400, 'Missing required parameters')
      }
      
      const isStudentAvailable = await StudentModel.findOne({email: email}).exec();
      if (isStudentAvailable) {
        throw createHttpError(400, 'User already exists')
      }
      
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const student = new StudentModel({
        
        name: name,
        email: email,
        password: hashedPassword,
        role: role,
        phoneNumber: phoneNumber,
        regNumber: regNumber
         
  
      })
  
      const result = await student.save();
  
      res.status(201).send(result);
    } catch (error) {
        next(error)
      
    }
       
}

