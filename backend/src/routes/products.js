const ProductModel = require("../models/productModel");
const products={
    addProduct:async (req, res) => {
        let products=await ProductModel.find({});
        let id;
        if(products.length>0){
            let last_product_array=products.slice(-1);
            let last_product=last_product_array[0];
            id=last_product.id+1;
        }else{
            id=1;
        }
        const product=new ProductModel({
            id:id,
            name:req.body.name,
            image:req.body.image,
            category:req.body.category,
            new_price:req.body.new_price,
            old_price:req.body.old_price
        });
        console.log(product);
        await product.save();
        console.log("Saved");
        res.json({
            success:true,
            name:req.body.name
        })
    },
    removeProduct:async (req, res) => {
        await ProductModel.findOneAndDelete({id:req.body.id});
        console.log("Removed");
        res.json({
            success:true,
            name:req.body.name
        })
    },
    allProducts:async (req, res) => {
        let products= await ProductModel.find({});
        console.log("All products fetched");
        res.send(products);
    }
}

module.exports = products;