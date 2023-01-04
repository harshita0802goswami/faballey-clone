import React from "react";
import styles from "./Cart.module.css";
import CartNavbar from "../../Components/CartAndCheckout/CartNavbar";
import CartItemsCard from "../../Components/CartAndCheckout/CartItemsCard";
import Loading from "../../Components/CartAndCheckout/Loading";
import { FaShoppingCart, FaCreditCard, FaUserAlt } from "react-icons/fa";
import { MdLocalShipping, MdDelete } from "react-icons/md";
import { BsFillCaretLeftFill } from "react-icons/bs";

import { RiAddCircleFill } from "react-icons/ri";
import { useEffect } from "react";
import { useState } from "react";

function Cart() {
  let [CartItems, setCartItems] = useState([]);
  let [isLoading, setIsLoading] = useState(true)
  useEffect(() => {
    getData();
  }, []);

  function getData() {
    fetch(`http://localhost:3001/CartItems`)
      .then((res) => res.json())
      .then((val) => {
        setIsLoading(false);
        setCartItems(val)
      });
  }
  if(isLoading){
    return <Loading />
  }
  return (
    <div id={styles["cart-main-div"]}>
      <CartNavbar />
      {/* Cart Details */}
      <div className={styles.CartDescriptionAndPaymentDetails}>
        <div className={styles.CartItemDescription}>
          {/* Individual Card */}
          <p>My Shopping Bag</p>
          {CartItems.map((ele)=>{
            return <CartItemsCard key={ele.id} Cartdata={ele}/>
          })}
          
          {/* Routing to other pages */}
          <div className={styles.RouteToProductAndWishListDiv}>
            <div>
              <BsFillCaretLeftFill />
              <p>Continue Shopping</p>
            </div>
            <p>Add more from wishlist</p>
          </div>
        </div>

        {/* Payement Card */}
        <div className={styles.CartPaymentDescriptionDiv}>
          <p>My Shopping Bag</p>
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
                <input type="checkbox" />
              </div>
            </div>
            <div className={styles.ApplyCoupon}>
              <RiAddCircleFill />
              <p>Apply Coupon</p>
            </div>
            <div className={styles.RedeemGift}>
              <RiAddCircleFill />
              <p>Redeem Gift Card</p>
            </div>
            <div className={styles.PriceDetailDiv}>
              <div className={styles.ProductMRP}>
                <p>Sub Total</p>
                <p>₹ 5248</p>
              </div>
              <div>
                <p className={styles.ProductDiscountAmount}>Discount</p>
                <p>-₹ 233</p>
              </div>
              <div className={styles.DonationAmonut}>
                <p>Donation</p>
                <p>₹ 10</p>
              </div>
            </div>
            <div className={styles.TotalAmountDiv}>
              <p>Total</p>
              <p>Rs. 5025</p>
            </div>
            <div className={styles.PlaceOrderDiv}>
              <button>Place Order</button>
            </div>
          </div>
          <div className={styles.EstimatedDelivery}>
            <p>Estimated Delivery Time</p>
            <p>India : 1-3 business days.</p>
            <p> International: 7-10 business days.</p>
          </div>
        </div>
      </div>
      <div className={styles.CartFooter}>
        <div className={styles.FooterLinks}>
          <div>Home</div>
          <div>Contact us</div>
          <div>Privacy</div>
          <div>Terms</div>
        </div>
        <div className={styles.FooterAllRightsReserved}>
          <p>© 2023 Faballey.com. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Cart;

//  />
