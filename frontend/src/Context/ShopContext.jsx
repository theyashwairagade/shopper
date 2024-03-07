import React, { createContext, useState } from "react";
import all_product from '../Components/Assets/all_product'
import { useEffect } from "react";
export const ShopContext =createContext(null);

const getDefaultCart=()=>{
    let cart={};
    for (let index = 0; index < all_product.length+1; index++) {
        cart[index]=0;
    }
    return cart;
}
const ShopContextProvider=(props)=>{
    const [CartItems,setCartItems] = useState(getDefaultCart());
    

    const addToCart = (itemId) => {
        setCartItems((prev) => {
          return { ...prev, [itemId]: (prev[itemId] || 0) + 1 };
        });
      };
      
      const removeFromCart = (itemId) => {
        setCartItems((prev) => {
          const updatedItems = { ...prev };
          if (updatedItems[itemId] && updatedItems[itemId] > 0) {
            updatedItems[itemId]--;
          }
          return updatedItems;
        });
      };
      
      useEffect(() => {
        console.log(CartItems);
      }, [CartItems]);
      
      const getTotalCartAmount=()=>{
        let totalAmount =0;
        for(const item in CartItems)
        {
          if(CartItems[item]>0)
          {
            let itemInfo = all_product.find((product)=>product.id===Number(item));
            totalAmount+=itemInfo.new_price * CartItems[item];
          }
        }
        return totalAmount;
      }

      const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in CartItems)
        {
          if(CartItems[item]>0)
          {
            totalItem+=CartItems[item];
          }
        }
        return totalItem;
      }

    const contextValue={getTotalCartItems,getTotalCartAmount,all_product,CartItems,addToCart,removeFromCart};
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;