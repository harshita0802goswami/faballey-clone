import React from 'react'
import styles from '../../Pages/Cart/Cart.module.css'
import {MdDelete } from "react-icons/md";
const CartItemsCard = ({Cartdata=[]}) => {
  
  function DeleteCartItem(id){
    console.log(id);
    fetch(`http://localhost:3001/CartItems/${id}`,{
      method:"DELETE"
    })
  }
  return (
    <div>
        <div className={styles.IndivCartDetailCard}>
            <div className={styles.ProductImage}>
              <img
                src={Cartdata.image}
                alt=""
              />
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
                  <p className={styles.ProductPriceInCart}>Rs. {Cartdata.MRP}</p>&nbsp;
                  <p className={styles.ProductStrikedPriceInCart}>Rs. 7000</p>
                </div>
              </div>
              <div className={styles.LowerProductDetailsDiv}>
                <div className={styles.EditDetails}>
                  <p>Edit Item</p>
                  <p>Add to wishlish</p>
                </div>
                <div className={styles.DeleteCartItem}>
                  <MdDelete className={styles.ReactDeleteIcon} onClick={()=>{DeleteCartItem(Cartdata.id)}}/>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}

export default CartItemsCard