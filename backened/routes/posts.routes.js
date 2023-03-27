const express = require("express")
const { postsModel } = require("../model/posts.model")
const postsRoute = express.Router()
const  jwt = require('jsonwebtoken');


//Create
postsRoute.post("/add",async(req,res)=>{
    try {
       const post = new postsModel(req.body)
       await post.save()
       res.status(200).send({"msg":"Posts Added SuccessFully"})
    } catch (error) {
        res.status(400).send({"msg":error.msg})
    }
})

//Read
postsRoute.get("/",async(req,res)=>{
    const {userID}= jwt.verify(req.headers.authorization, 'post')
    try {
       const post = await postsModel.find({userID})
       res.status(200).send(post)
    } catch (error) {
        res.status(400).send({"msg":error.msg})
    }
})

//update
postsRoute.patch("/update/:id",async(req,res)=>{
   const {id} = req.params
    try {
       const post = await postsModel.findByIdAndUpdate({_id:id},req.body)
       res.status(200).send({"msg":"post updated successfully"})
    } catch (error) {
        res.status(400).send({"msg":error.msg})
    }
})

//delete 
postsRoute.delete("/delete/:id",async(req,res)=>{
    const {id} = req.params
     try {
        const post = await postsModel.findByIdAndDelete({_id:id})
        res.status(200).send({"msg":"post deleted successfully"})
     } catch (error) {
         res.status(400).send({"msg":error.msg})
     }
 })


module.exports = {postsRoute}


