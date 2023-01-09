import React from "react";
import styles from "../../Pages/Cart/Cart.module.css";
import { MdDelete } from "react-icons/md";
import { BsPlusCircle } from "react-icons/bs";
import { SlMinus } from "react-icons/sl";
import { useState } from "react";
import { useRef, useEffect } from "react";
import {Link} from 'react-router-dom'
const CartItemsCard = ({ Cartdata = [], DeleteFunction, isUpdate }) => {

  let [RandomSize, setRandomSize] = useState('')
  let [RandomSKUCode, setRandomSKUCode] = useState('')
  let [colorName, setColorName] = useState('')

  useEffect(()=>{
    random_item(items);
    generateString(8)
    ColorString();
  },[])
  
  let [quantity, setQuantity] = useState(Cartdata.qty);
  function SendQtyToServer(id, quantity) {
    fetch(`https://cheddar-pentagonal-torta.glitch.me/cart/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ qty: quantity }),
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


  // Random String //

  // program to generate random strings

// declare all characters
const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789';
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    let string =Cartdata.category.toUpperCase()+"-"+(result)
    setRandomSKUCode(string)
}


var items = ['M', 'S', 'L', 'XL'];
function random_item(items)
{
  
let size= items[Math.floor(Math.random()*items.length)];
     setRandomSize(size)
}

function ColorString(){
  let string = Cartdata.color;
  let newstr='';
  let FirstChar = string.charAt(0).toUpperCase();
  for(let i=1; i<string.length; i++){
      newstr= newstr+string.charAt(i);
  }
  newstr=FirstChar+newstr
  setColorName(newstr)
}


  return (
    <div>
      <div className={styles.IndivCartDetailCard}>
        <div className={styles.ProductImage}>
          <img src={Cartdata.img1} alt="" />
        </div>
        <div className={styles.ProductDetailsMainDiv}>
          <div className={styles.UpperProductDetailsDiv}>
            <div className={styles.UpperLeftProductDetailsDiv}>
            <Link to={`/products/${Cartdata.uniqueId}`}>{Cartdata.title}</Link>
              <div className={styles.QtySizeColorDetailsDiv}>
                <p>Size: {RandomSize}</p>
                <p>Qty: {quantity}</p>
                <p>Color: {colorName}</p>
              </div>
              <p className={styles.ProductCode}>SKU CODE : {RandomSKUCode}</p>
            </div>
            <div className={styles.UpperRightProductDetailsDiv}>
              <p className={styles.ProductPriceInCart}>
              ₹ {Cartdata.price1 * quantity}
              </p>
              &nbsp;
              <p className={styles.ProductStrikedPriceInCart}>₹ {Cartdata.price2}</p>
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
              <p>Add to wishlist</p>
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
