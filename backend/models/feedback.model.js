const mongoose = require("mongoose");

const feedbackSchema = mongoose.Schema({
    feedback:String,
    userID:String
},{
    versionKey:false
})

const FeedbackModel = mongoose.model("feedback",feedbackSchema);

module.exports={
    FeedbackModel
}