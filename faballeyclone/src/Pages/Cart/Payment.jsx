import React, { useEffect } from "react";
import CartNavbar from "../../Components/CartAndCheckout/CartNavbar";
import styles from "./Payment.module.css";
import CheckoutPaymentDetails from "../../Components/CartAndCheckout/CheckoutPaymentDetails";
import CartFooter from "../../Components/CartAndCheckout/CartFooter";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { MdLockOutline, MdOutlineVerifiedUser } from "react-icons/md";
import {AiFillQuestionCircle} from 'react-icons/ai'

const Payment = () => {
  // let classname=isActive;
  let initialCardDetails = {name:"", cardNumber:"",mm:"",yy:"",cvv:""}
  let [CardDetails, setCardDetails] = useState(initialCardDetails)

  let PaymentMethod = [
    { name: "CREDIT/DEBIT CARD", classname: styles.Inactive },
    { name: "UPI", classname: styles.Inactive },
    { name: "NET BANKING", classname: styles.Inactive },
    { name: "MOBILE WALLET", classname: styles.InactiveisActive },
    { name: "BUY NOW PAY LATER", classname: styles.Inactive },
    { name: "CASH ON DELIVERY", classname: styles.Inactive },
  ];
  let [isActive, setIsActive] = useState(PaymentMethod);
  let [deliverAddress, setDeliveryAddress] = useState({});
  let classname1 = styles.Inactive;
  useEffect(() => {
    let deliveryAdd = JSON.parse(localStorage.getItem("AddessDetails"));
    setDeliveryAddress(deliveryAdd);
  }, []);

  function SetActive(name, e) {
    isActive.map((ele) => {
      if (ele.name === name) {
      }
    });
    console.log(e.target);
  }


  function CardDetailInput(e){
    let {name, value} = e.target
    setCardDetails({...CardDetails,[name]:value})
  }

  let RedirectToPaymentGateway=useNavigate()
  function SubmitCardDetails(){
      RedirectToPaymentGateway('/redirect')
  }

  return (
    <div>
      <CartNavbar PaymentIconStyle={true} />

      {/* Payment  */}
      <div className={styles.PaymentMainDiv}>
        <div className={styles.PaymentMethodDiv}>
          <p>Choose Payment Mode</p>
          <div>
            <div className={styles.PaymentOptionSelectionDiv}>
              {isActive.map((ele, ind) => {
                return (
                  <div
                    key={ind}
                    className={classname1}
                    onClick={(e) => SetActive(ele.name, e)}
                  >
                    {ele.name}
                  </div>
                );
              })}
            </div>
            <div className={styles.PaymentDetailInputDiv}>
              <div className={styles.SpecificPaymentMethod}>
                <div>Credit/Debit Card</div>
                <form action="">
                  <div>
                    <input name="cardNumber" onChange={CardDetailInput} type="text" placeholder="xxxx xxxx xxxx xxxx" />
                  </div>
                  <div>
                    <input name="name" onChange={CardDetailInput} type="text" placeholder="Cardholder Name" />
                  </div>
                  <div>
                    <input name="mm" onChange={CardDetailInput} type="text" placeholder="MM" />
                    <input name="yy" onChange={CardDetailInput}  type="text" placeholder="YY" />
                    <input name="cvv" onChange={CardDetailInput} type="text" placeholder="CVV" />
                    <AiFillQuestionCircle className={styles.questionIcon}/>
                    
                  </div>
                  <div>
                    <button type="submit" onClick={SubmitCardDetails}>PAY NOW</button>
                  </div>
                </form>
              </div>
              <div className={styles.securetransaction}>
                <div>
                  <MdLockOutline />
                  <p> Secure SSL Encryption</p>
                  <MdOutlineVerifiedUser />
                  <p> Guaranteed Safe Checkout</p>
                </div>
                <div>
                  <img
                    src="https://img.faballey.com/images/pmticonsweb.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Payment */}
        <div className={styles.PaymentDetails}>
          <p>Payment Details</p>
          <CheckoutPaymentDetails />
          <div className={styles.DeliveryAddressHeading}>
            <p>Deliver To</p>
            <p>
              <Link to={"/checkout"}>Change Address</Link>
            </p>
          </div>
          <div className={styles.DeliveryAddress}>
            <p>{deliverAddress.name}</p>
            <p>
              {deliverAddress.localaddress},{deliverAddress.city}
            </p>
            <p>
              {deliverAddress.state} - {deliverAddress.pincode}
            </p>
            <p>Mobile : {deliverAddress.mobile}</p>
          </div>
          <div className={styles.EstimatedDelivery}>
            <p>Estimated Delivery Time</p>
            <p>India : 1-3 business days.</p>
            <p> International: 7-10 business days.</p>
          </div>
        </div>
      </div>
      <CartFooter/>
    </div>
  );
};

export default Payment;
