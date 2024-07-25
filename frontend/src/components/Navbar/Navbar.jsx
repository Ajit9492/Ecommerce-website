import React, { useContext, useRef, useState } from 'react'
import "./Navbar.css";
import logo from "../Assests/logo.png";
import cart_icon from "../Assests/cart_icon.png";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
//import { IoIosArrowDropdown } from "react-icons/io";
import dropdown_icon from "../Assests/down-arrow-icon.png"

function Navbar() {
  const [menu, setMenu] = useState("shop");
  const {getTotalCartItems} = useContext(ShopContext);
  const menuRef = useRef();

  const dropdown_toogle = (e) =>{
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="" />
        <p>Shoppers</p>
      </div>
       <img onClick={dropdown_toogle} src={dropdown_icon} className='nav-dropdown' alt="" /> 
       {/* <IoIosArrowDropdown onClick={dropdown_toogle} className='nav-dropdown' /> */}
      <ul ref={menuRef} className="nav-menu">
        <li onClick={() =>{setMenu("shop")}}><Link style={{color:'black',textDecoration : 'none'}} to="/">Shop</Link> {menu === "shop"?<hr/> : <></>} </li>
        <li onClick={() =>{setMenu("mens")}}><Link style={{color:'black',textDecoration : 'none'}} to="/mens">Men</Link> {menu === "mens"?<hr/> : <></>} </li>
        <li onClick={() =>{setMenu("women")}}><Link style={{color:'black',textDecoration : 'none'}} to="/women">Women</Link> {menu === "women"?<hr/> : <></>} </li>
        <li onClick={() =>{setMenu("kids")}}><Link style={{color:'black',textDecoration : 'none'}} to="/kids">Kids</Link> {menu === "kids"?<hr/> : <></>} </li>
      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ? <button onClick={()=>{localStorage.removeItem('auth-token');
                                window.location.replace('/')}}>Logout</button>
                              :<Link style={{textDecoration : 'none'}} to="/login"><button>Login</button></Link> }
        <Link style={{textDecoration : 'none'}} to="/cart"><img src={cart_icon} alt="" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar

