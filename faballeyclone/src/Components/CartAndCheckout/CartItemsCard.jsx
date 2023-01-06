import React from "react";
import styles from "../../Pages/Cart/Cart.module.css";
import { MdDelete } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import { useState } from "react";
const CartItemsCard = ({ Cartdata = [], DeleteFunction, isUpdate }) => {
  let [quantity, setQuantity] = useState(Cartdata.Qty);
  function SendQtyToServer(id, quantity) {
    fetch(`http://localhost:3001/CartItems/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Qty: quantity }),
    })
      .then((res) => {
        isUpdate(true)
        return res.json();
      })
      .then((val) => {
        isUpdate(false);
      });
  }
  function Add(id) {
    setQuantity((prev) => prev + 1);
    SendQtyToServer(id, (quantity = quantity + 1));
  }

  function Minus(id) {
    setQuantity((prev) => prev - 1);
    SendQtyToServer(id, (quantity = quantity - 1));
  }
  return (
    <div>
      <div className={styles.IndivCartDetailCard}>
        <div className={styles.ProductImage}>
          <img src={Cartdata.image} alt="" />
        </div>
        <div className={styles.ProductDetailsMainDiv}>
          <div className={styles.UpperProductDetailsDiv}>
            <div className={styles.UpperLeftProductDetailsDiv}>
              <a href="">{Cartdata.title}</a>
              <div className={styles.QtySizeColorDetailsDiv}>
                <p>Size: {Cartdata.Size}</p>
                <p>Qty: {Cartdata.Qty}</p>
                <p>Color: {Cartdata.Color}</p>
              </div>
              <p className={styles.ProductCode}>SKU CODE : TOP05375A</p>
            </div>
            <div className={styles.UpperRightProductDetailsDiv}>
              <p className={styles.ProductPriceInCart}>
                Rs. {Cartdata.MRP * quantity}
              </p>
              &nbsp;
              <p className={styles.ProductStrikedPriceInCart}>Rs. 7000</p>
            </div>
          </div>
          <div className={styles.LowerProductDetailsDiv}>
            <div className={styles.EditDetails}>
              <div>
                <button
                  onClick={() => Add(Cartdata.id)}
                  disabled={quantity < 5 ? false : true}
                  style={quantity===5 ? {color:"gray"}:{color:"rgb(49, 49, 49)"}}
                >
                  <BsPlusCircle />
                </button>
                <p>{quantity}</p>
                <button
                  onClick={() => Minus(Cartdata.id)}
                  disabled={quantity > 1 ? false : true} style={quantity===1 ? {color:"gray"}:{color:"rgb(49, 49, 49)"}}
                >
                  <SlMinus />
                </button>
              </div>
              <p>Add to wishlish</p>
            </div>
            <div className={styles.DeleteCartItem}>
              <MdDelete
                className={styles.ReactDeleteIcon}
                onClick={() => {
                  DeleteFunction(Cartdata.id);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemsCard;
