const mongoose = require("mongoose");
const Users=mongoose.model('Users',{
    name:{
      type:String
    },
    email:{
      type:String,
      unique:true
    },
    password:{
      type:String
    },
    cartData:{
      type:Object
    },
    date:{
      type:Date,
      dafault:Date.now
    }
  });
module.exports = Users;
