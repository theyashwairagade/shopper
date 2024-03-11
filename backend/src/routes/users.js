const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");
const users={
    signup:async (req, res) => {
        let check=await UserModel.findOne({email:req.body.email});
        if(check) return res.status(400).json({success:false, errors:"Email already exists"})
        let cart={};
        for (let i = 0; i < 300; i++) {
            cart[i]=0;
            }
        const user=new UserModel({
            name:req.body.username,
            email:req.body.email,
            password:req.body.password,
            cartData:cart
        })
        await user.save();
        const data={
            user:{
                id:user.id
            }
        }
        const token=jwt.sign(data,'secret_ecom');
        res.json({success:true,token})
    },
    login:async (req, res) => {
        let user=await UserModel.findOne({email:req.body.email});
        if(user){
            const passCompare=req.body.password === user.password;
            if(passCompare){
                const data={
                    user:{
                    id:user.id
                    }
                }
                const token=jwt.sign(data,'secret_ecom');
                res.json({success:true,token})
            }else{
                res.json({success:false,errors:"Invalid Password!"})
            }
        }else{
            res.json({success:false,errors:"Email Not Found! Please Signup."})
        }
    }
}

module.exports = users;
