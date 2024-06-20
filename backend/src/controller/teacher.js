const TeacherModel = require('../model/teacher')
const createHttpError = require('http-errors')
//const bcrypt = require('bcrypt');
const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');


exports.login = async (req, res, next) => {

  const email = req.body.email
  const password = req.body.password

  try {
      if (!email || !password) {
          throw createHttpError(400, 'Missing required parameters')
      }

      const teacher = await TeacherModel.findOne({email: email}).exec();

      if (!teacher) {
          throw createHttpError(400, 'User does not exist')
      }

      const isPasswordValid = await bcrypt.compare(password, teacher.password);

      if (!isPasswordValid) {
          throw createHttpError(400, 'Invalid credentials')
      }
      const user = await TeacherModel.findOne({ email: email}).exec();

      const token = jwt.sign(
          { 
              user_id: user._id,
              email: user.email,
          }, 
          process.env.JWT_TOKEN_KEY, 
          { 
              expiresIn: '4h',
          }
          )

          user.token = token;

          const result = await user.save();

          const response = {
            id: result._id,
            name:result.name,
            email: result.email,
            role: result.role,
            token: result.token,
            userType: "teacher"
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
    //const phone = req.body.phone
    const role = req.body.role
    
    
  
  
    try {
      if(!name || !email || !password  ||!role ){
        throw createHttpError(400, 'Missing required parameters')
      }
      
      const isTeacherAvailable = await TeacherModel.findOne({email: email}).exec();
      if (isTeacherAvailable) {
        throw createHttpError(400, 'User already exists')
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const teacher = new TeacherModel({
        
        name: name,
        email: email,
        password: hashedPassword,
        role: role
        
  
      })
  
      const result = await teacher.save();
  
      res.status(201).send(result);
    } catch (error) {
      next(error)
      
    }
       
}
