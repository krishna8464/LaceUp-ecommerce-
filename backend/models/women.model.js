const mongoose = require("mongoose");

const womenSchema = mongoose.Schema({
    product:String,
    name:String,
    tilname: String,
    price: Number,
    compvalue: String,
    stars: String,
    rating: Number
},{
    versionKey:false
})

const WomenModel = mongoose.model("women",womenSchema);

module.exports={
    WomenModel
}