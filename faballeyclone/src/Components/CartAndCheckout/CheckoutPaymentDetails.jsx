import React from 'react'
import styles from '../../Pages/Cart/Checkout.module.css'
import { useState, useEffect } from 'react';
function CheckoutPaymentDetails() {
    let [PaymentToMake, setPaymentToMake] = useState({});
    useEffect(() => {
        let PaymentDetails = JSON.parse(localStorage.getItem("PaymentDetails"));
        setPaymentToMake(PaymentDetails);
      }, []);

  return (
    <>
          <div className={styles.PaymentDetailsSubDiv}>
            <div>
              <div>
                <p>Sub Total</p>
                <p>₹ {(+PaymentToMake.SubTotal).toFixed(2)}</p>
              </div>
              <div style={{ color: "rgb(252, 100, 134)" }}>
                <p>Discount</p>
                <p>-₹ {(+PaymentToMake.Discount).toFixed(2)}</p>
              </div>
              <div>
                <p>Donation</p>
                <p>₹ {PaymentToMake.Donated}</p>
              </div>
            </div>
            <div className={styles.CheckoutTotal}>
              <p>Total</p>
              <p>₹ {(+PaymentToMake.Total).toFixed(2)}</p>
            </div>
          </div>
    </>
  )
}

export default CheckoutPaymentDetails