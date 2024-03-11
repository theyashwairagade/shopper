const ProductModel = require("../models/productModel");
const collection={
    newCollections:async(req,res)=>{
        let products=await ProductModel.find({});
        let newcollection=products.slice(1).slice(-8);
        console.log("Fetched");
        res.send(newcollection);
    },
    popularInWomen:async(req,res)=>{
        let products=await ProductModel.find({category:"women"});
        let popular_in_women=products.slice(0,4);
        res.send(popular_in_women);
    }
}
module.exports = collection;