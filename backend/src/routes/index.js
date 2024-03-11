const express = require("express");
const router = express.Router();

const fetchUser = require("../middleware/fetchUser");
const products = require("./products");
const users = require("./users");
const cart = require("./cart");
const collection = require("./collection");

router.post("/addproduct",products.addProduct);
router.post("/removeproduct",products.removeProduct);
router.get("/allproducts",products.allProducts);

router.post("/signup",users.signup);
router.post("/login",users.login);

router.post("/addtocart",fetchUser,cart.addToCart);
router.post("/removefromcart",fetchUser,cart.removeFromCart);
router.post("/getcart",fetchUser,cart.getCart);

router.get("/newcollections",collection.newCollections);
router.get("/popularinwomen",collection.popularInWomen);
module.exports = router;