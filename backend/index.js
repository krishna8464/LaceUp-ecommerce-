const express = require("express");
const {connection} = require("./config/db");
const {userRoute}= require("./routes/users.route");
const {cartroute}= require("./routes/cart.route");
const {favroute} = require("./routes/favirote.route");
const {masterroute}= require("./routes/masterdata.route");
const {feedbackroute} = require("./routes/feedback.routes");
const {paymentroute} = require("./routes/payment.route")
require("dotenv").config();
const cors = require("cors")

const app = express();
app.use(express.json());
app.use(cors({
    origin:"*"
}))

 app.use("/masterdata",masterroute)



app.use("/user",userRoute);
app.use("/user",cartroute);
app.use("/user",favroute);
app.use("/user",feedbackroute);
app.use("/user",paymentroute)


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Server is connected to DB")
    } catch (error) {
        console.log("Not able to connect to DB")
    }
    console.log(`The server is connected to ${process.env.port}`)
})
