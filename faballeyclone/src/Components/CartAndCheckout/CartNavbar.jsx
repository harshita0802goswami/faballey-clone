import React, { useEffect } from 'react'
import styles from '../../Pages/Cart/Cart.module.css'
import { FaShoppingCart, FaCreditCard, FaUserAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md"
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
function CartNavbar(props) {
  let NavigateToPage = useNavigate();
  function Navigate(link){
    NavigateToPage(link)
  }

  let [username, setUsername] = useState('');

  useEffect(()=>{
    let name = localStorage.getItem("userName") || 'Guest';
    setUsername(name);
  },[username])

  const navigate = useNavigate();

  return (
    <div><div className={styles.CartNavbar}>
    <div className={styles.CartSiteLogo}>
     <img onClick={()=>navigate('/')} style={{cursor:'pointer'}} src="https://www.faballey.com/images/logo.png" alt="img" />
     <img onClick={()=>navigate('/')} style={{cursor:'pointer'}} src="https://www.faballey.com/images/mobile/moblogo.png" alt="" />
    </div>
    <div className={styles.CartAllIcons}>
      <div onClick={()=>Navigate('/cart')} style={{cursor:"pointer"}} className={props.CartIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <FaShoppingCart className={styles.ReactFaCart} />
        <p>Bag</p>
      </div>
      <div onClick={()=>Navigate('/checkout')} style={{cursor:"pointer"}} className={props.ShippingIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <MdLocalShipping className={styles.ReactMdShip} />
        <p>Shipping</p>
      </div>
      <div onClick={()=>Navigate('/payment')} style={{cursor:"pointer"}} className={props.PaymentIconStyle ? styles.ActiveIconLowerBorder:styles.InactiveIconColor}>
        <FaCreditCard className={styles.ReactFaCart} />
        <p>Payment</p>
      </div>
    </div>
    <div className={styles.CartUserName}>
      <FaUserAlt className={styles.UserIcon}/>
      <p>{username}</p>
    </div>
  </div>
</div>
  )
}

export default CartNavbar