const {CartModel} = require("../models/cart.model");
const {MasterModel} = require("../models/masterdata.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose")

const cartroute = express.Router();
const masterroute = express.Router();
cartroute.use(express.json())


// to get the cart items for user  ------->  localhost:6060/user/cart;
                 // Authorization --------> requiread;
                 //Method  ---------------> GET;
cartroute.get("/cart",async(req,res)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            const data = await CartModel.find({userID:userid});
            if(data.length===0){
                res.status(200).send("Cart is EMPTY!")
            }else{
                res.status(200).send(data)
            }

        }else{
            res.status(401).send("Authorization Requiread")
        }
        
    } catch (error) {
        res.status(400).send("Bad Request")
    }
})

// to add to the cart items in to the user cart ----------> localhost:6060/user/cart
                               // Authorization --------> requiread;
                               //Method  ---------------> POST;
                               //body ------------------> 
                        //    {
                    //     "product": "https://images.dsw.com/is/image/DSWShoes/471615_003_ss_01?impolicy=colpg&imwidth=400&imensity=1",
                    //     "name": "American Leather Co.",
                    //     "tilname": "Leather Backpack",
                    //     "price": 508.99,
                    //     "compvalue": "Comp. value $195.00",
                    //     "stars": "★★★★★",
                    //     "rating": 227,
                    //     "type": "accesores",
                //     "category": "mixdata"
                    //   }                                                 
cartroute.post("/cart",async(req,res)=>{
    data=req.body;
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
            const userid = decoded.userid;
        if(decoded){
            const clarf = await CartModel.find({userID:userid,tilname:req.body.tilname,type:req.body.type,category:req.body.category});
            if(clarf.length>0){
                res.status(200).send("Product already added")
            }else{
            
            req.body.userID =  userid;
            const cartt = new CartModel(req.body);
            await cartt.save()
            res.status(200).send("Producd added to cart")
            }
        }else{
            res.status(401).send("NOt Autorizied")
        }
    
    } catch (error) {
        res.status(400).send("Bad Request")
    }
});

// use to delete the cart item in the cart ------------> localhost:6060/user/cart/delete/63c9835e716ce5446a5817b1
                                // Authorization ------> required
                                // we need to pass the product id as param to the api to delete the product in the cart session
cartroute.delete("/cart/delete/:id",async(req,res)=>{
    let id = req.params.id;
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        if(decoded){
            
            const userid = decoded.userid;
            const data = await CartModel.findByIdAndDelete({_id:id});
            res.status(200).send("Producd deleted in cart")
        }else{
            res.status(401).send("NOt Autorizied")
        }
    } catch (error) {
        res.status(400).send("Bad Request")
    }
})
module.exports={
    cartroute,
    masterroute
}