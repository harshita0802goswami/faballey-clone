import React from 'react'
import styles from '../../Pages/Cart/Cart.module.css'
import { FaShoppingCart, FaCreditCard, FaUserAlt } from "react-icons/fa";
import { MdLocalShipping } from "react-icons/md"
function CartNavbar() {
  return (
    <div><div className={styles.CartNavbar}>
    <div className={styles.CartSiteLogo}>
      <img src="https://www.faballey.com/images/logo.png" alt="img" />
    </div>
    <div className={styles.CartAllIcons}>
      <div className={styles.ActiveIconLowerBorder}>
        <FaShoppingCart className={styles.ReactFaCart} />
        <p>Bag</p>
      </div>
      <div className={styles.InactiveIconColor}>
        <MdLocalShipping className={styles.ReactMdShip} />
        <p>Shipping</p>
      </div>
      <div className={styles.InactiveIconColor}>
        <FaCreditCard className={styles.ReactFaCart} />
        <p>Payment</p>
      </div>
    </div>
    <div className={styles.CartUserName}>
      <FaUserAlt className={styles.UserIcon}/>
      <p>nishant</p>
    </div>
  </div>
</div>
  )
}

export default CartNavbar