const express=require('express')
const connectDB = require('./db')
const Product =require('./models/productSchema')
const productRoutes=require('./routes/productRoutes')
const app=express()
connectDB();
app.use("/api/products",productRoutes);
app.listen(4000,()=>{
    console.log("Server is running at port 4000")
})
