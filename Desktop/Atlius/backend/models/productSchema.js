const mongoose=require('mongoose')
const product=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
});
const Product=new mongoose.model("Product",product);
module.exports=Product;