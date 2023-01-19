const {MasterModel} = require("../models/masterdata.model");
const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


const masterroute = express.Router();



            // masterroute.post("/create",async(req,res)=>{
            //     try {
            //         for(let i = 0;i<req.body.length;i++){
            //             req.body[i].price= Number(req.body[i].price.replace( /[^\d\.]*/g, ''));
            //             req.body[i].rating= Number(req.body[i].rating.replace( /[^\d\.]*/g, ''));
            //             req.body[i].type="",
            //             req.body[i].category =""
            //         }
            //          await MasterModel.insertMany(req.body)
            //         res.send("all working good")
            //     } catch (error) {
            //         console.log(error);
            //         res.status(400).send("something went wrong")
            //     }
            // })

/// Admin to add the products in the list ---------> localhost:6060/masterdata/add;
                             // Body -------------> 
                                                //  {
                                                //     "product": "https://images.dsw.com/is/image/DSWShoes/471615_003_ss_01?impolicy=colpg&imwidth=400&imdensity=1",
                                                // "name": "American Leather Co.",
                                                // "tilname": "Leather Backpack",
                                                // "price": 508.99,
                                                // "compvalue": "Comp. value $195.00",
                                                // "stars": "★★★★★",
                                                // "rating": 800,
                                                // "type": "accesores",
                                                // "category": "mixdata"
                                                //   }
masterroute.post("/add",async(req,res)=>{
    const data = req.body;
    try {
        const detils = new MasterModel(data);
        await detils.save();
        res.status(200).send("data added")
    } catch (error) {
        res.status(400).send("something went wrong")
    }
})


// Admin and user get all data route ---------> localhost:6060/masterdata;
/// we can filter the data by the search of the name or it is brand ---> localhost:6060/masterdata/?name=K;
/// to get the data by query and pagination -----> localhost:6060/masterdata/?type=men&skip=0&limit=2
masterroute.get("/",async(req,res)=>{
    const query = req.query
    const queryname = req.query.name
    try {
        if(req.query.name){
            const masterdata = await MasterModel.find({name: { $regex:queryname}});
            res.send(masterdata);
        }else{
        const masterdata = await MasterModel.find(query).skip(Number(req.query.skip)).limit(Number(req.query.limit));
        res.send(masterdata);
        }
    } catch (error) {
        res.status(404).send("wrong request")
    }
})

// to get the data using the both type and category at once with pagination ---> localhost:6060/masterdata/?type=men&category=casual&skip=0&limit=2
masterroute.get("/",async(req,res)=>{
    const {type,category}=req.query;
    try {
        if(category === "mixdata"){
            const data = await MasterModel.find({type: type,category:category}).skip(Number(req.query.skip)).limit(Number(req.query.limit));;
            res.send(data)
        }else{
            res.status(404).send("wrong request")
        }
        
    } catch (error) {
        res.send("not working")
    }
})

// to get the ordered data of the order using the querys category ,type with pagination --------------
      //-------->localhost:6060/masterdata/order/priceass?type=men&category=casual&skip=0&limit=2
masterroute.get("/order/:order",async(req,res)=>{
    const order = req.params.order;
    //res.send(req.params.order)
    try {
        if(order=="priceass"){
            const masterdata = await MasterModel.find({type: req.query.type,category:req.query.category}).sort({"price":1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(masterdata)
            
        }else if(order == "pricedss"){
            const masterdata = await MasterModel.find({type: req.query.type,category:req.query.category}).sort({"price":-1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(masterdata)
        }else if(order == "ratingass"){
            const masterdata = await MasterModel.find({type: req.query.type,category:req.query.category}).sort({"rating":1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(masterdata)
        }else if(order == "ratingdss"){
            const masterdata = await MasterModel.find({type: req.query.type,category:req.query.category}).sort({"rating":-1}).skip(Number(req.query.skip)).limit(Number(req.query.limit));
            res.send(masterdata)
        }
    } catch (error) {
     res.status(404).send("Bad request")  
    }
})

// to get the data of the given id in the params ----> localhost:6060/masterdata/getitem/63c90ae100e136f2d7654fbd
masterroute.get("/getitem/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
       const data = await MasterModel.find({_id:ID});
        res.status(200).send(data)
    } catch (error) {
        res.status(400).send("Please send correct data")
    }
})



// This route is use to update the product detials from the admin -----> localhost:6060/masterdata/update/63c8fd780abffa8ae8986a63
masterroute.patch("/update/:id",async(req,res)=>{
    const ID = req.params.id;
    const body = req.body
    try {
        await MasterModel.findByIdAndUpdate({_id:ID},body);
        res.status(200).send("Updated successfully")
    } catch (error) {
        res.status(400).send("Please send correct data")
    }
})

// This route is use to delete product by passing the id in the paran ----> localhost:6060/masterdata/delete/63c8fd780abffa8ae8986a63
masterroute.delete("/delete/:id",async(req,res)=>{
    const ID = req.params.id;
    try {
        await MasterModel.findByIdAndDelete({_id:ID});
        res.status(200).send("Deleted successfully")
    } catch (error) {
        res.status(400).send("Please send correct data")
    }
})

module.exports={
    masterroute
}