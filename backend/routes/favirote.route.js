const {FavModel} = require("../models/favirote.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const mongoose = require("mongoose")

const favroute = express.Router();
favroute.use(express.json())


// to get the fav items for user  ------->  localhost:6060/user/fav;
                 // Authorization --------> requiread;
                 //Method  ---------------> GET;
favroute.get("/fav",async(req,res)=>{
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        const userid = decoded.userid;
        if(decoded){
            const data = await FavModel.find({userID:userid});
            if(data.length===0){
                res.status(200).send({"msg":"Favorites is EMPTY!"})
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

// to add to the favirote items in to the user favirote ----------> localhost:6060/user/fav
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
favroute.post("/fav",async(req,res)=>{
    data=req.body;
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
            const userid = decoded.userid;
        if(decoded){
            const clarf = await FavModel.find({userID:userid,tilname:req.body.tilname,type:req.body.type,category:req.body.category});
            if(clarf.length>0){
                res.status(200).send({"msg":"Product Already Added","status":200})
            }else{
            
            req.body.userID =  userid;
            const cartt = new FavModel(req.body);
            await cartt.save()
            res.status(200).send({"msg":"Producd Added To","status":200})
            }
        }else{
            res.status(401).send("NOt Autorizied")
        }
    
    } catch (error) {
        res.status(400).send("Bad Request")
    }
});

// use to delete the favirote item in the favirote ------------> localhost:6060/user/fav/delete/63c9835e716ce5446a5817b1
                                // Authorization ------> required
                                // we need to pass the product id as param to the api to delete the product in the cart session
favroute.delete("/fav/delete/:id",async(req,res)=>{
    let id = req.params.id;
    try {
        const token = req.headers.authorization;
        const decoded = jwt.verify(token,process.env.key);
        if(decoded){
            
            const userid = decoded.userid;
            const data = await FavModel.findByIdAndDelete({_id:id});
            res.status(200).send({"msg":"Producd deleted"})
        }else{
            res.status(401).send("NOt Autorizied")
        }
    } catch (error) {
        
        res.status(400).send("Bad Request")
    }
})
module.exports={
    favroute
}