import React from "react";
import styles from "./Cart.module.css";
import CartNavbar from "../../Components/CartAndCheckout/CartNavbar";
import CartItemsCard from "../../Components/CartAndCheckout/CartItemsCard";
import Loading from "../../Components/CartAndCheckout/Loading";
import CartFooter from "../../Components/CartAndCheckout/CartFooter";
import { FaShoppingCart, FaCreditCard, FaUserAlt } from "react-icons/fa";
import { MdLocalShipping, MdDelete } from "react-icons/md";
import { BsFillCaretLeftFill } from "react-icons/bs";
import EmptyCart from "../../Components/CartAndCheckout/EmptyCart";
import { RiAddCircleFill } from "react-icons/ri";
import { Box, Alert, AlertIcon, AlertTitle, AlertDescription} from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";
import { json, useNavigate,Link } from "react-router-dom";
function Cart() {
  let [CartItems, setCartItems] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [CartSubTotal, setCartSubTotal] = useState(0);
  let [Deleted, setIsDeleted] = useState(false);
  let [isDonated, setIsDonated] = useState(0);
  let [ProductQty, setProductQty] = useState(1);
  let [deleteAlertTime, setDeleteAlerTime] = useState(true);
  let [isApplyCoupon, setIsApplyCoupn] = useState(true);
  let [CouponCode, setCouponCode] = useState("");
  let [disableCouponbutton, setDisableCouponButton] = useState(false);
  let [CouponSucces, setCouponSuccess] = useState(true);
  let [CouponFailure, setCouponcodeFailure] = useState(true);
  let RedirectToCheckout = useNavigate();
  useEffect(() => {
    getData();
  }, [Deleted]);

  function getData() {
    fetch(`https://cheddar-pentagonal-torta.glitch.me/cart`)
      .then((res) => res.json())
      .then((val) => {
        setIsLoading(false);
        let subTotal = val.reduce((acc, ele) => {
          return ele.price1 * ele.qty + acc;
        }, 0);
        // console.log(subTotal);
        setCartSubTotal(subTotal);
        setCartItems(val);
      }).catch(error=>console.log(error));
  }
  function DeleteCartItem(id) {
    fetch(`https://cheddar-pentagonal-torta.glitch.me/cart/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
        setIsDeleted(true);
        return res.json();
      })
      .then((val) => {
        DeleteAlert();
        setIsDeleted(false);
      })
  }

  function DeleteAlert() {
    setDeleteAlerTime(false);
    setTimeout(() => {
      setDeleteAlerTime(true);
    }, 1500);
  }

  function donation(e) {
    if (e.target.checked === true) {
      setIsDonated(10);
    } else {
      setIsDonated(0);
    }
  }

  function pageUpdated(val) {
    // console.log(val);
    setIsDeleted(val);
  }

  function CouponDiv() {
    if (isApplyCoupon) {
      setIsApplyCoupn(false);
    } else {
      setIsApplyCoupn(true);
    }
  }

  function ApplyCouponCode() {
    console.log(CouponCode);
    if (CouponCode === "new25") {
      setCartSubTotal((prev) => prev * 0.75);
      setDisableCouponButton(true);
      CouponSuccess();
    } else {
      setDisableCouponButton(false);
      CouponFailureAlert();
    }
  }

  function CouponSuccess() {
    setCouponSuccess(false);
    setTimeout(() => {
      setCouponSuccess(true);
    }, 1500);
  }
  function CouponFailureAlert() {
    setCouponcodeFailure(false);
    setTimeout(() => {
      setCouponcodeFailure(true);
    }, 1500);
  }
  function CouponInput(e) {
    setCouponCode(e.target.value);
  }

  function NavigateToPage() {
    RedirectToCheckout("/checkout");
    let PaymentDetails = {
      SubTotal: CartSubTotal,
      Discount: CartSubTotal * 0.08,
      Donated: isDonated,
      Total: CartSubTotal - CartSubTotal * 0.08 + isDonated,
    };
    localStorage.setItem("PaymentDetails", JSON.stringify(PaymentDetails));
  }

  if (isLoading) {
    return <Loading />;
  }
  if (CartItems.length == 0) {
    return (
      <>
        <CartNavbar CartIconStyle={true} />
        <EmptyCart />
      </>
    );
  }
  return (
    <div id={styles["cart-main-div"]}>
      <CartNavbar CartIconStyle={true} />

      {/* Alert */}
      <Box margin={"auto"} w="100%" position="fixed" transition=".3s" zIndex="5"
        style={deleteAlertTime ? { opacity: 0 } : { opacity: 1 }}>
      <Alert w="300px" margin="auto" status="warning">
          <AlertIcon />1 item deleted from cart
        </Alert>
      </Box>

      <Box margin={"auto"} w="100%" position="fixed" transition=".3s" zIndex="5"
         style={CouponSucces ? { opacity: 0 } : { opacity: 1 }}>
      <Alert w="300px" margin="auto" status="success">
          <AlertIcon />
          Coupon applied successfully
        </Alert>
      </Box>
      <Box margin={"auto"} w="100%" position="fixed" transition=".3s" zIndex="5"
         style={CouponFailure ? { opacity: 0 } : { opacity: 1 }}>
      <Alert w="300px" margin="auto" status="error">
          <AlertIcon />
          Wrong coupon code.
        </Alert>
      </Box>

      {/* Cart Details */}
      <div className={styles.CartDescriptionAndPaymentDetails}>
        <div className={styles.CartItemDescription}>
          {/* Individual Card */}
          <p>My Shopping Bag</p>
          {CartItems.map((ele) => {
            return (
              <CartItemsCard
                key={ele.id}
                Cartdata={ele}
                DeleteFunction={DeleteCartItem}
                isUpdate={pageUpdated}
              />
            );
          })}

          {/* Routing to other pages */}
          <div className={styles.RouteToProductAndWishListDiv}>
            <div>
              <BsFillCaretLeftFill />
              <p><Link to='/'>Continue Shopping</Link></p>
            </div>
            <p>Add more from wishlist</p>
          </div>
        </div>

        {/* Payement Card */}
        <div className={styles.CartPaymentDescriptionDiv}>
          <p>Payment Details</p>
          <div className={styles.CartPaymentDescription}>
            <div className={styles.Donation}>
              <div className={styles.DonationLeft}>
                <h4>Donation </h4>
                <p>
                  Extra 10 (This donation is towards NGO Ssrishti that is
                  providing food and hygiene essentials to migrant labors during
                  the COVID-19 lockdown)
                </p>
              </div>
              <div className={styles.DonationRight}>
                <input type="checkbox" onChange={donation} />
              </div>
            </div>
            <div className={styles.ApplyCoupon}>
              <div onClick={CouponDiv}>
                <RiAddCircleFill />
                <p>Apply Coupon</p>
              </div>
              <div hidden={isApplyCoupon}>
                <input
                  type="text"
                  placeholder="Coupon code"
                  onChange={CouponInput}
                />
                <button
                  onClick={ApplyCouponCode}
                  disabled={disableCouponbutton}
                  style={disableCouponbutton ? { background: "gray" } : {}}
                >
                  Apply
                </button>
              </div>
            </div>
            <div className={styles.RedeemGift}>
              <RiAddCircleFill />
              <p>Redeem Gift Card</p>
            </div>
            <div className={styles.PriceDetailDiv}>
              <div className={styles.ProductMRP}>
                <p>Sub Total</p>
                <p>₹ {CartSubTotal.toFixed(2)}</p>
              </div>
              <div className={styles.ProductDiscountAmount}>
                <p>Discount</p>
                <p>-₹ {(CartSubTotal * 0.08).toFixed(2)}</p>
              </div>
              <div className={styles.DonationAmonut}>
                <p>Donation</p>
                <p>₹ {isDonated}</p>
              </div>
            </div>
            <div className={styles.TotalAmountDiv}>
              <p>Total</p>
              <p>
                Rs.{" "}
                {(CartSubTotal - CartSubTotal * 0.08 + isDonated).toFixed(2)}
              </p>
            </div>
            <div className={styles.PlaceOrderDiv}>
              <button onClick={NavigateToPage}>Place Order</button>
            </div>
          </div>
          <div className={styles.EstimatedDelivery}>
            <p>Estimated Delivery Time</p>
            <p>India : 1-3 business days.</p>
            <p> International: 7-10 business days.</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <CartFooter />
    </div>
  );
}

export default Cart;
