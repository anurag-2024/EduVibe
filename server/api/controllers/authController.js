import User from "../models/User.model.js";
import bcrypt from "bcrypt";
export const register = async (req, res) => {
    try {
        const { username, email, password,role } = req.body;
        const user= await User.find({username});
        if(user){
            return res.status(400).send({message:"Username already taken"})
        }
        const checkEmail= await User.find({email});
        if(checkEmail){
            return res.status(400).send({message:"Email exists"})
        }
        const newPassword=await bcrypt(password,10);
        const newuser=await new User({
            username,
            email,
            password:newPassword,
            role
        })
        await newuser.save();
        return res.status(201).send({message:"Succesfully registered",newuser})
        
    } catch (error) {
        return res.status(500).send({message:"Internal Server Error"});
    }
}

export const login =async(req,res)=>{
    try{
        const {username,password}=req.body;
        const user= await User.find({username});
        if(!user){
          return res.status(400).send({message:"User does not exist"})
        }
        const pass=bcrypt.compare(password,user.password);
        if(!pass){
           return res.status(400).status({message:"Credentials are wrong"}); 
        }
        return res.status(200).send({message:"Succesfully logged in",user})
    }
    catch(err){
        return res.status(500).send({message:"Internal Server Error"});
    }
}