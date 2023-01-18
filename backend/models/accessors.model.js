const mongoose = require("mongoose");

const accessSchema = mongoose.Schema({
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

const AccesModel = mongoose.model("accessors",accessSchema);

module.exports={
    AccesModel
}