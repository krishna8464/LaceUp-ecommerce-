const mongoose = require("mongoose");

const masterSchema = mongoose.Schema({
    product:String,
    name:String,
    tilname: String,
    price: Number,
    compvalue: String,
    stars: String,
    rating: Number,
    type : String,
    category : String
},{
    versionKey:false
})

const MasterModel = mongoose.model("masterstore",masterSchema);

module.exports={
    MasterModel
}