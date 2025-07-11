const express =require('express')
const Product=require('../models/productSchema')
const router=express.Router();
router.post('/',async(req,res)=>{
    const product=req.body
    const newProduct= new Product(product);
    try{
        await newProduct.save();
        res.status(201).json({status:true,data:newProduct})

    }catch(err){
        console.log(err);
        res.status(500).json({status:false,message:"Internal Server Error"})
    }

})
router.get('/',async(req,res)=>{
    try{
         const product=  await Product.find({},{name:1,price:1,image:1,_id:0});
         res.status(200).json({status:true,data:product});
    }
    catch(err){
        res.status(404).json({status:false,message:"Unable to fetch products"})
    }
})
router.put("/:id",async(req,res)=>{
    const {id}=req.params;
    const product = req.body;
    try{
        const prod=await Product.findByIdAndUpdate(id,product,{new:true,runValidators: true});
        res.status(200).json({status:true,data:prod});
    }
    catch(err){
        res.status(404).json({status:false,message:"Unable to update"});
    }
})
router.delete("/:id",async(req,res)=>{
    const {id}=req.params;
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({status:true,message:"Deleted successfully"});
    }
    catch(err){
        res.status(404).json({status:false,message:"Unable to update"});
    }
})
module.exports= router