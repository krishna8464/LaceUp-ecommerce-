const mongoose = require("mongoose");

const paymentSchema = mongoose.Schema({
    items : Array,
    amount : Number,
    paymentmethod : String,
    address : Array,
    date : String,
    userID:String
},{
    versionKey:false
})

const PaymentModel = mongoose.model("payment_history",paymentSchema);

module.exports={
    PaymentModel
}