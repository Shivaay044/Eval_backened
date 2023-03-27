const express = require("express")
const { userModel } = require("../model/users.model")
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const userRouter = express.Router()

//register
userRouter.post("/register",async(req,res)=>{
    const {name,email,gender,password,age,city,is_married} = req.body
   try {
      const userAlready = await userModel.find({email,name})
     if(userAlready.length>0){
        res.status(200).send({"msg":"User already exist, please login"})
     }else{
        bcrypt.hash(password, 5, async(err, hash) =>{
            const newUser =  new userModel({name,email,gender,password:hash,age,city,is_married})
             await newUser.save()
        });
       res.status(200).send({"msg":"Registered Successfully"})
     }
   } catch (error) {
      res.status(400).send({"msg":error.message})
   }
})

//login 
userRouter.post("/login",async(req,res)=>{
    const {name,email,gender,password,age,city,is_married} = req.body
    try {
        const user = await userModel.find({email})
        if(user.length>0){
        bcrypt.compare(password, user[0].password, async(err, result) => {
            result ? res.status(200).send({"msg":"Login Successfully","token":jwt.sign({ "userID": user[0].id}, 'post')}) : res.status(200).send({"msg":"User doesn't exist"});
        });
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})
    }
})


module.exports = {userRouter}