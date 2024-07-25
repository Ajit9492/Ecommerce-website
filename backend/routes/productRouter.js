const express = require('express');
const Product = require('../models/productModel');
const jwt = require('jsonwebtoken');



const router = express.Router();

router.post('/addproduct', async(req,res)=>{
    let products = await Product.find({})
    let id;
    if(products.length > 0){
        let last_product_array = products.slice(-1);
        let last_product = last_product_array[0];
        id = last_product.id + 1;
    }
    else{
        id=1;
    }
    const product = new Product({
        id: id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        new_price: req.body.new_price,
        old_price: req.body.old_price,
    })
    await product.save();
    console.log(product);
    // res.send(products);
    res.json({
        success: true,
        name: req.body.name,
    })
})

router.post('/removeproduct', async(req,res) => {
    await Product.findOneAndDelete({id:req.body.id});
    console.log("Removed");
    res.json({
        success:true,
        name:req.body.name,
    })
})

router.get('/allproducts', async(req,res) =>{
    let products = await Product.find({});
    res.send(products);
    console.log("All product fetched!");
})

//creating endpoint for newcollection data
router.get('/newcollections',async(req,res)=>{
    let products = await Product.find({});
    let newcollection = products.slice(1).slice(-8);
    console.log("Newcollection fetched");
    res.send(newcollection);
})

//creating endpoint for popular in woman section
router.get('/popularinwomen',async(req,res)=>{
    let products = await Product.find({category:"women"});
    let popular_in_women = products.slice(0,4);
    console.log("Popular in women fetched");
    res.send(popular_in_women);
})



module.exports = router;