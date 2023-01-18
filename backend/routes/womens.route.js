const {WomenModel} = require("../models/women.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const womenroute = express.Router();

// Admin post route is done.
womenroute.post("/create",async(req,res)=>{
    try {
        for(let i = 0;i<req.body.length;i++){
            req.body[i].price= Number(req.body[i].price.replace( /[^\d\.]*/g, ''));
            req.body[i].rating= Number(req.body[i].rating.replace( /[^\d\.]*/g, ''));
        }
         await WomenModel.insertMany(req.body)
        res.send("all working good")
    } catch (error) {
        console.log(error);
        res.send("not working try again")
    }
})

// Admin and user get route

womenroute.get("/womendata",async(req,res)=>{
    const query = req.query
    const queryname = req.query.name
    try {
        if(req.query.name){
            const womendata = await WomenModel.find({name: { $regex:queryname}});
            res.send(womendata);
        }else{
        const womendata = await WomenModel.find(query).skip(Number(req.query.skip)).limit(Number(req.query.limit));
        res.send(womendata);
        }
    } catch (error) {
        res.status(404)
    }
})

womenroute.get("/womendata/order/:order",async(req,res)=>{
    const order = req.params.order;
    //res.send(req.params.order)
    try {
        if(order=="priceass"){
            const womendata = await WomenModel.find({}).sort({"price":1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(womendata)
            
        }else if(order == "pricedss"){
            const womendata = await WomenModel.find({}).sort({"price":-1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(womendata)
        }else if(order == "ratingass"){
            const womendata = await WomenModel.find({}).sort({"rating":1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(womendata)
        }else if(order == "ratingdss"){
            const womendata = await WomenModel.find({}).sort({"rating":-1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(womendata)
        }
    } catch (error) {
     res.status(404)   
    }
})

womenroute.patch("/womendata/update/:id",async(req,res)=>{
    const ID = req.params.id;
    const body = req.body
    try {
        await WomenModel.findByIdAndUpdate({_id:ID},body);
        res.send("Updated successfully");
        res.status(200)
    } catch (error) {
        res.status(400)
    }
})


module.exports={
    womenroute
}