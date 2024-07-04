const express = require('express')
const app = express()

const bodyparser = require('body-parser')
const cors =  require('cors')

const productRouter = require("./routes/productRouter")
const userRouter = require("./routes/userRouter")
// const paymentRouter = require('./routes/paymentRoutes')

const orderModel = require("./models/orderModel")

const db = require('./db/dbConnection')

const env = require('dotenv').config({path:'../.env'})

const Razorpay = require('razorpay');

// export var instance = new Razorpay({
//     key_id: process.env.RAZORPAY_API_KEY,
//     key_secret: process.env.RAZORPAY_SECRET_KEY,
//   });

const PORT = process.env.SERVER_PORT;
 
var instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY,
  });

const corsOption = {
    origin: "http://localhost:3000"
}


app.use(cors(corsOption));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use('/api/', userRouter);
app.use('/apiP/', productRouter);
// app.use('/pay', paymentRouter);

app.get("/", (req, res) => {
    res.json({ message: "Welcome to Food Ordering"});
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});




