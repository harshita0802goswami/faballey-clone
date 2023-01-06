import React from 'react'
import styles from '../../Pages/Cart/Cart.module.css'
function CartFooter() {
  return (
    <div><div className={styles.CartFooter}>
    <div className={styles.FooterLinks}>
      <div>Home</div>
      <div>Contact us</div>
      <div>Privacy</div>
      <div>Terms</div>
    </div>
    <div className={styles.FooterAllRightsReserved}>
      <p>© 2023 Faballey.com. All Rights Reserved</p>
    </div>
  </div></div>
  )
}

export default CartFooter