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
import {Alert,AlertIcon, AlertTitle,AlertDescription,} from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
const Payment = () => {
  // let classname=isActive;
  let initialCardDetails = {name:"", cardNumber:"",mm:"",yy:"",cvv:""}
  let PaymentMethod = [
    { name: "CREDIT/DEBIT CARD", classname: styles.Inactive },
    { name: "UPI", classname: styles.Inactive },
    { name: "NET BANKING", classname: styles.Inactive },
    { name: "MOBILE WALLET", classname: styles.InactiveisActive },
    { name: "BUY NOW PAY LATER", classname: styles.Inactive },
    { name: "CASH ON DELIVERY", classname: styles.Inactive },
  ];
  let [CardDetails, setCardDetails] = useState(initialCardDetails)
  let [displaySavedCards, setDisplaySavedCards] = useState(true)
  let [CardDetailFromForm, setCardDetailsFromForm] = useState(initialCardDetails)
  let [isActive, setIsActive] = useState(PaymentMethod);
  let [deliverAddress, setDeliveryAddress] = useState({});
  let [IncompletePaymentDetail, setIncompletePaymentDetail] = useState(true)

  let classname1 = styles.Inactive;
  let SavedCards = {name:"Nishant Prajapati", cardNumber:"7843 4789 2278 1272", mm:"02", yy:24,cvv:123}




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

  let {name, cardNumber, mm,yy,cvv} = CardDetails

  function CardDetailInput(e){
    let {name, value} = e.target
    setCardDetails({...CardDetails,[name]:value})
   console.log(CardDetails)
  }

  function ShowSavedCards(e){
    e.preventDefault();
    if(displaySavedCards){
      setDisplaySavedCards(false);
    }else{
      setDisplaySavedCards(true);
    }
  }

  function SelectSavedCard(e){
    e.preventDefault(e);
      setCardDetails(SavedCards);
      console.log(CardDetails);
  }

  let RedirectToPaymentGateway=useNavigate()
  function SubmitCardDetails(e){
    e.preventDefault();
      if(name!=='' && cardNumber!=='' && mm!=='' && yy!=='' && cvv!=''){
        RedirectToPaymentGateway('/redirect')
      }else{
        IncompletePaymentDetailMessageFunction()
      }
  }
  function IncompletePaymentDetailMessageFunction(){
    setIncompletePaymentDetail(false)
    setTimeout(() => {
      setIncompletePaymentDetail(true)
    }, 2000);
}

  return (
    <div>
      <CartNavbar PaymentIconStyle={true} />
      {/* alert */}
    
      <Box margin={"auto"} w="100%" position="fixed" transition=".3s" zIndex="5"
        style={IncompletePaymentDetail ? { opacity: 0 } : { opacity: 1 }}>
      <Alert w="300px" margin="auto" status="error">
          <AlertIcon />
          Please fill all address details
        </Alert>
      </Box>
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
                    <input name="cardNumber" value={cardNumber} onChange={CardDetailInput} type="text" placeholder="xxxx xxxx xxxx xxxx" />
                  </div>
                  <div>
                    <input name="name" value={name} onChange={CardDetailInput} type="text" placeholder="Cardholder Name" />
                  </div>
                  <div className={styles.cvvDiv}>
                    <input name="mm" value={mm} onChange={CardDetailInput} type="text" placeholder="MM" />
                    <input name="yy" value={yy} onChange={CardDetailInput}  type="text" placeholder="YY" />
                    <input name="cvv" value={cvv} onChange={CardDetailInput} type="password" placeholder="CVV" />
                    <AiFillQuestionCircle className={styles.questionIcon}/>
                    
                  </div>
                  <div className={styles.savedCards}>
                    <div><button onClick={ShowSavedCards}>Auto fill from saved Cards</button></div>
                    <div hidden={displaySavedCards} className={styles.savedCardDetail}>
                    <p>Saved Cards</p>
                    <div>
                      <p>{SavedCards.name}</p>
                      <p>{SavedCards.mm}/{SavedCards.yy}</p>
                      <button onClick={SelectSavedCard}>Select</button>
                    </div>
                    </div>
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
