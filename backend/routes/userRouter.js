const Users = require('../models/userModel');
const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();

router.post('/signup', async(req,res)=>{
    let check = await Users.findOne({email:req.body.email});
    if(check){
        return res.status(400).json({success:false,errors:"existing user found with same email address"});
      
    }
    let cart = {};
    for(let i=0; i<300;i++){
        cart[i]=0;
    }
    const user = new Users({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        cartData:cart,
    })
    await user.save();

    const data = {
        user:{
            id:user.id
        }
    }
    const token = jwt.sign(data, 'secret_ecom');
    res.json({success:true,token})
})

router.post('/login', async(req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if(user){
        const passCompare = req.body.password === user.password;
        if(passCompare){
            const data = {
            user:{
                id:user.id
            }
        }
        const token = jwt.sign(data, 'secret_ecom');
        res.json({success:true,token})
    }
    else{
        res.json({success:false,errors:"wrong password"});
    }
}
else{
    res.json({success:false,errors:"wrong email id"});
}
})

//creating middleware to fetch user
const fetchUser = async(req,res,next)=>{
    const token = req.header('auth-token');
    if(!token){
        res.status(401).send({errors:"Please authenticate using valid token"})
    }
    else{
        try{
            const data = jwt.verify(token,'secret_ecom');
            req.user = data.user;
            next();
        }catch(error){
            res.status(401).send({errors:"Please authenticate using valid token"})
        }
    }
}

//creating endpoint for adding products in cartdata
router.post('/addtocart',fetchUser,async(req,res)=>{
    console.log("Added",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    userData.cartData[req.body.itemId] += 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Added")
})

//creating endpoint to remove product from cartdata
router.post('/removefromcart',fetchUser,async(req,res)=>{
    console.log("removed",req.body.itemId);
    let userData = await Users.findOne({_id:req.user.id});
    if(userData.cartData[req.body.itemId]>0)
    userData.cartData[req.body.itemId] -= 1;
    await Users.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData});
    res.send("Removed")
})

//creating endpoint to get cartdata
router.post('/getcart',fetchUser,async(req,res)=>{
    console.log('GetCart');
    let userData = await Users.findOne({_id:req.user.id});
    res.json(userData.cartData);
})
module.exports = router;