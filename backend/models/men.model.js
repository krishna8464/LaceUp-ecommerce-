const mongoose = require("mongoose");

const menSchema = mongoose.Schema({
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

const MenModel = mongoose.model("men",menSchema);

module.exports={
    MenModel
}