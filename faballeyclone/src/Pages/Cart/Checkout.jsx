import React from "react";
import CartFooter from "../../Components/CartAndCheckout/CartFooter";
import CartNavbar from "../../Components/CartAndCheckout/CartNavbar";
import styles from "./Checkout.module.css";
import CheckoutPaymentDetails from "../../Components/CartAndCheckout/CheckoutPaymentDetails";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

const Checkout = () => {
  let InitialAddressForm = {
    name: "",
    mobile: "",
    country: "",
    pincode: "",
    city: "",
    state: "",
    localaddress: "",
  };
  let [AddressDetail, setAddressDetails] = useState(InitialAddressForm);

  let [IncompleteAddress, setIncompleteAddress] = useState(true)



  function AddressFormInput(e) {
    let { name, value } = e.target;
    setAddressDetails({ ...AddressDetail, [name]: value });
  }

  let RedirectToPayment = useNavigate();

  let { name, mobile, country, pincode, localaddress, city, state } =
    AddressDetail;
  function SaveUserAddress(e) {
    e.preventDefault();
    if (
      name !== "" &&
      mobile !== "" &&
      pincode !== "" &&
      localaddress !== "" &&
      state !== ""
    ) {
      localStorage.setItem("AddessDetails", JSON.stringify(AddressDetail));
      setAddressDetails(InitialAddressForm);
      console.log(AddressDetail);
      RedirectToPayment("/payment");
    }else{
      IncompleteAddressMessageFunction()
    }
  }

  function IncompleteAddressMessageFunction(){
      setIncompleteAddress(false)
      setTimeout(() => {
        setIncompleteAddress(true)
      }, 2500);
  }

  return (
    <div>
      <CartNavbar ShippingIconStyle={true} />

      {/* Address and Payment Details */}
      <Box margin={"auto"} w="100%" position="fixed" transition=".3s" zIndex="5"
        style={IncompleteAddress ? { opacity: 0 } : { opacity: 1 }}>
      <Alert w="300px" margin="auto" status="error">
          <AlertIcon />
          Please fill all address details
        </Alert>
      </Box>

      <div className={styles.CheckoutMainDiv}>
        <div className={styles.AddressMainDiv}>
          <p>Where do you want us to deliver</p>
          <form action="">
            <div>
              <div>
                <label htmlFor="">Full name*</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={AddressFormInput}
                />
              </div>
              <div>
                <label htmlFor="">Mobile number*</label>
                <input
                  type="text"
                  name="mobile"
                  value={mobile}
                  onChange={AddressFormInput}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">Country*</label>
                <select
                  name="country"
                  value={country}
                  onChange={AddressFormInput}
                >
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
              </div>
              <div>
                <label htmlFor="">Pin Code*</label>
                <input
                  type="text"
                  value={pincode}
                  name="pincode"
                  onChange={AddressFormInput}
                />
              </div>
            </div>
            <div>
              <div>
                <label htmlFor="">City*</label>
                <input
                  type="text"
                  name="city"
                  value={city}
                  onChange={AddressFormInput}
                />
              </div>
              <div>
                <label htmlFor="">State*</label>
                <input
                  type="text"
                  name="state"
                  value={state}
                  onChange={AddressFormInput}
                />
              </div>
            </div>
            <div>
              <label htmlFor="">Address*</label>
              <textarea
                onChange={AddressFormInput}
                value={localaddress}
                name="localaddress"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div>
              <input type="checkbox" onChange={AddressFormInput} />
              <label htmlFor="">Make this my default address</label>
            </div>
            <div>
              <button type="submit" onClick={SaveUserAddress}>
                Deliver to this address
              </button>
            </div>
          </form>
        </div>
        <div className={styles.PaymentDetailsDiv}>
          <p>Price Details</p>
          <div className={styles.EditCart}>
            <BsFillCaretLeftFill className={styles.EditCartIcon} />
            <p>
              {" "}
              <Link to={"/cart"}>Edit Cart</Link>
            </p>
          </div>
        
{/* ******************************* */}
            <CheckoutPaymentDetails />

          <div className={styles.EstimatedDelivery}>
            <p>Estimated Delivery Time</p>
            <p>India : 1-3 business days.</p>
            <p> International: 7-10 business days.</p>
          </div>
        </div>
      </div>
      {/* Cart Footer */}
      <CartFooter />
    </div>
  );
};

export default Checkout;
