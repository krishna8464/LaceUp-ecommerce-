const mongoose = require("mongoose");

const favSchema = mongoose.Schema({
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

const FavModel = mongoose.model("favirote",favSchema);

module.exports={
    FavModel
}