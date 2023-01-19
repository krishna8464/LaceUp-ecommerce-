const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    product:String,
    name:String,
    tilname: String,
    price: Number,
    compvalue: String,
    stars: String,
    rating: Number,
    userID:String
},{
    versionKey:false
})

const CartModel = mongoose.model("cart",cartSchema);

module.exports={
    CartModel
}