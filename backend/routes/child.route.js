const {ChildModel} = require("../models/child.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const childroute = express.Router();

childroute.post("/create",async(req,res)=>{
    const data = req.body;
    try {
        for(let i = 0;i<req.body.length;i++){
            req.body[i].price= Number(req.body[i].price.replace( /[^\d\.]*/g, ''));
            req.body[i].rating= Number(req.body[i].rating.replace( /[^\d\.]*/g, ''));
        }
         await ChildModel.insertMany(req.body)
        res.send("all working good")
    } catch (error) {
        console.log(error);
        res.send("not working try again")
    }
})




module.exports={
    childroute
}