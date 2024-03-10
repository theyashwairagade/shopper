import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '..//Assets/logo.png'
import cart_icon from '..//Assets/cart_icon.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { ShopContext } from '../../Context/ShopContext'
export const Navbar = () => {
    const[menu,setMenu]=useState("shop");
    const{getTotalCartItems}=useContext(ShopContext);
    const menuRef = useRef();

    const dropdown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
    }
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt="" />
            <p>SHOPPER</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/' style={{textDecoration:'none'}}>Shop</Link>{menu=="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("men")}}> <Link to='/men' style={{textDecoration:'none'}}>Men</Link>{menu=="men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to='/women' style={{textDecoration:'none'}}>Women</Link>{menu=="women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link>{menu=="kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            {localStorage.getItem('auth-token')
            ?<button onClick={()=>{
                localStorage.removeItem('auth-token');
                window.location.replace('/');
            }}>Logout</button>
            :<Link to='/login'><button>Login</button></Link>}
            <Link to='/cart'><img src={cart_icon} alt="" /></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
