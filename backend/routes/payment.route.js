const {PaymentModel} = require("../models/payment_method");
const {CartModel} = require("../models/cart.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose");

const paymentroute = express.Router();
const cartroute = express.Router();

//Feedback post form user side is done ------->localhost:6060/user/feedback
                      // Authorization -------> requiread;
                      // Body ----------------> 
                                                //   {
                                                //     "amount" : 6565,
                                                //     "paymentmethod" : "online",
                                                //     "address" : [{
                                                //       "house_number":"85_2D",
                                                //       "city":"Hydrabad",
                                                //       "distric":"Srikakulam"
                                                //       }]
                                                // }
paymentroute.post("/payment",async(req,res)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            const cartdata = await CartModel.find({userID:userid})
            if(cartdata.length>0){
             req.body.items = cartdata
             req.body.date =  new Date().toLocaleString();
            req.body.userID=userid
            const cartt = new PaymentModel(req.body);
            await cartt.save();
           const allcartdata =  await CartModel.find({userID:userid})
            for(let i = 0 ; i<allcartdata.length;i++){
                await CartModel.findByIdAndDelete({_id:allcartdata[i]._id})
            }
            res.status(200).send("Payment Successfull")
        }else{
            res.status(200).send("No items in the cart")
        }
        }else{
            res.status(401).send("Authorization Requiread")
        }
    } catch (error) {
        res.sendStatus(404)
    }
})

//To get the payment history of the user ----->localhost:6060/user/payment;
                    // Authorization ---------> required
paymentroute.get("/payment",async(req,res)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            const data = await PaymentModel.find({userID:userid});
            if(data.length===0){
                res.status(200).send(" Did't Bought Anything!")
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


// //admin routes
// //for admin to get all the feed backs the user posted by the userid --->localhost:6060/user/admin/payment/63c83a0e441566011b7f20d9

paymentroute.get("/admin/payment/:id",async(req,res)=>{
    const userid = req.params.id
    try {
            const data = await PaymentModel.find({userID:userid});
            res.status(200).send(data)
    } catch (error) {
        res.sendStatus(404)
    }
})

module.exports={
    paymentroute,
    cartroute

}