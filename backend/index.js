const express = require("express");
const {connection} = require("./config/db");
const {womenroute}= require("./routes/womens.route");
const {menroute}= require("./routes/men.rout");
const {childroute}= require("./routes/child.route");
const {accessroute}= require("./routes/acc.route");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use("/women",womenroute);
app.use("/men",menroute);
app.use("/accessors",accessroute);
app.use("/children",childroute);


app.listen(process.env.port,async()=>{
    try {
        await connection;
        console.log("Server is connected to DB")
    } catch (error) {
        console.log("Not able to connect to DB")
    }
    console.log(`The server is connected to ${process.env.port}`)
})
