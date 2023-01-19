const {FeedbackModel} = require("../models/feedback.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");

const feedbackroute = express.Router();

//Feedback post form user send is done ------->localhost:6060/user/feedback
                     // Authorization -------> requiread
                     // body --------> {"feedback":"the products are awsome"}

feedbackroute.post("/feedback",async(req,res)=>{
    
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            req.body.userID=userid
            const cartt = new FeedbackModel(req.body);
            await cartt.save()
            res.status(200).send("Feed back sent")
        }else{
            res.status(401).send("Authorization Requiread")
        }
    } catch (error) {
        res.sendStatus(404)
    }
})

//Feedback to get the all feedbacks of the user ----->localhost:6060/user/feedback
                                //Authorization -----> required
                            // give the response of the user feedbacks 
feedbackroute.get("/feedback",async(req,res)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            const data = await FeedbackModel.find({userID:userid});
            if(data.length===0){
                res.status(200).send("No FeedBacks🥲!")
            }else{
                res.status(200).send(data)
            }
        }else{
            res.status(401).send("Authorization Requiread")
        }
    } catch (error) {
        res.sendStatus(404)
    }
})


//admin routes

//admin can delete the feedback of the user by useing the feedback id ----->localhost:6060/user/admin/feedback/63c948087970c1a0977e8ccd
                                                          // the id of the feedback has to be passed to the api to delete
feedbackroute.delete("/admin/feedback/:id",async(req,res)=>{
    const id = req.params.id
    try {
            await FeedbackModel.findByIdAndDelete({_id:id});
            res.status(200).send("FeedBack Deleted...")
    } catch (error) {
        res.sendStatus(404)
    }
})

//for admin to get all the feed backs the user posted by the userid --->localhost:6060/user/admin/feedback/63c83a0e441566011b7f20d9
             // admin can see the all feedbacks of the users 
feedbackroute.get("/admin/feedback/:id",async(req,res)=>{
    const userid = req.params.id
    try {
            const data = await FeedbackModel.find({userID:userid});
            res.status(200).send(data)
    } catch (error) {
        res.sendStatus(404)
    }
})





module.exports={
    feedbackroute
}