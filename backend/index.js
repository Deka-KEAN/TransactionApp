const express = require("express");
const { mainRouter } = require("./routes/index");
const { userRouter } = require("./routes/user");
const cors = require("cors");
const app=express();
const bodyParser= require("body-parser");
const { mongoose } = require("mongoose");



const PORT= 3000;
mongoose.connect("mongodb://localhost:27017/paytm");

app.use(cors());
app.use(bodyParser.json());

app.use("/api/v1",mainRouter);


app.listen(PORT,()=>console.log(`Server listening on ${PORT}`));

