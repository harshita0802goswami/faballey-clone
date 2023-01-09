import React,{useEffect, useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import './OrderConfirmation.css'
function OrderConfirmation() {
    let navigatetoPaymentGateWay = useNavigate();
    let [dot, setDot] = useState("")
    useEffect(()=>{
        setTimeout(()=>{
            navigatetoPaymentGateWay('/cart')
        },5000)

    },[])
 
  return (
    <div id='OrderConfirmationDiv'>
        <div id='OrderSuccessimgProcess'>
            <img src="https://cajobs.icai.org/images/new_home/success.gif" alt="" />
        </div>
        <div id="OrderInfo">
            <p>Payment Successful </p>
            <p>Order ID:- fab-1625871004 </p>
        </div>
        <div id='infoOrderConfirmation'>
            <p>Redirecting you to Cart Page </p><div id='dot'>{dot}</div>
        </div>
    </div>
  )
}

export default OrderConfirmation