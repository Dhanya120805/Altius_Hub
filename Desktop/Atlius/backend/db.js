const mongoose=require('mongoose')
const connectDB=()=>{
  mongoose
  .connect("mongodb://localhost:27017/orderProducts", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err));
};
module.exports=connectDB;