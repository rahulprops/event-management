import validator from 'validator'
import User from '../models/user.model.js';
import bcrypt from 'bcrypt'
// register user
const register= async (req,res)=>{
    const {name,email,password}=req.body;
    if(!name || !email || !password){
        return res.status(400).json({message:"all feilds requred"})
    }
       if(!validator.isEmail(email)){
        return res.status(400).json({message:"please enter valid email "})
       }
    try {
        const isUser= await User.findOne({email})
        if(isUser){
            return res.status(400).json({message:"user already exists"})
        }
         
     // hash password
     const hashpassword= await  bcrypt.hash(password  , 12)
     const user = new User({
        name,
        email,
        password:hashpassword
     })
     if(user){
        await user.save()
        const data={
            name:user.name,
            email:user.email
        }
        return res.status(201).json({message:"user create sucessful",data})
     }else{
        return res.status(400).json({message:"user create failed"})
     }
    } catch (err) {
       return res.status(500).json({message:`server error ${err.message}`}) 
    }
}