const {AccesModel} = require("../models/accessors.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const accessroute = express.Router();
accessroute.use(express.json())

//product,name,tilname,price,compvalue,stars,rating

accessroute.post("/create",async(req,res)=>{
    data=req.body
    // const tem = 4;
    // console.log(typeof(tem))
    // console.log(req.body);
    // res.send("done")
    try {
        for(let i = 0;i<req.body.length;i++){
            req.body[i].price= Number(req.body[i].price.replace( /[^\d\.]*/g, ''));
            req.body[i].rating= Number(req.body[i].rating.replace( /[^\d\.]*/g, ''));
        }
         await AccesModel.insertMany(req.body)
        res.send("all working good")
    } catch (error) {
        console.log(error);
        res.send("not working try again")
    }
})
module.exports={
    accessroute
}