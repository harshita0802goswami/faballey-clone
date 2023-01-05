import React from 'react'
import CartFooter from '../../Components/CartAndCheckout/CartFooter'
import CartNavbar from '../../Components/CartAndCheckout/CartNavbar'
import styles from './Checkout.module.css'

const Checkout = () => {
  return (
    <div>
      <CartNavbar ShippingIconStyle={true}/>

      {/* Address and Payment Details */}
      <div className={styles.CheckoutMainDiv}>
        <div className={styles.AddressMainDiv}>
          <p>Where do you want us to deliver</p>
          <form action="">
            <div>
              <div>
                <label htmlFor="">Full name*</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Mobile number*</label>
                <input type="text" />
              </div>
            </div>
            <div><div>
                <label htmlFor="">Country*</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Pin Code*</label>
                <input type="text" />
              </div></div>
            <div>
              <label htmlFor="">Address*</label>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div>
              <input type="checkbox" />
              <label htmlFor="">Make this my default address</label>
            </div>
            <div>
              <button>Deliver to this address</button>
            </div>
          </form>
        </div>
        <div className={styles.PaymentDetailsDiv}></div>

      </div>
      {/* Cart Footer */}
      <CartFooter />
    </div>
  )
}

export default Checkout