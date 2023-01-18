const mongoose = require("mongoose");

const childSchema = mongoose.Schema({
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

const ChildModel = mongoose.model("child",childSchema);

module.exports={
    ChildModel
}