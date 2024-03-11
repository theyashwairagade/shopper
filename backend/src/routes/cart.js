const UserModel = require("../models/userModel");
const cart={
    addToCart:async(req,res)=>{
        let userData=await UserModel.findOne({_id:req.user.id});
        userData.cartData[req.body.itemId]+=1;
        await UserModel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
        res.send("Added")
    },
    removeFromCart:async(req,res)=>{
        let userData=await UserModel.findOne({_id:req.user.id});
        if(userData.cartData[req.body.itemId]>0)  userData.cartData[req.body.itemId]-=1;
        await UserModel.findOneAndUpdate({_id:req.user.id},{cartData:userData.cartData})
        res.send("Removed")
    },
    getCart:async(req,res)=>{
        console.log("Get Cart");
        let userData=await UserModel.findOne({_id:req.user.id});
        res.json(userData.cartData);
    }
}
module.exports = cart;