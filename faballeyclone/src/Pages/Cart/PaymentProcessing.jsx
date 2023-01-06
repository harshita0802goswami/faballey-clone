import React,{useEffect, useState}  from 'react'
import {useNavigate} from 'react-router-dom'
import './PaymentProcessing.css'
function PaymentProcessing() {
    let navigatetoPaymentGateWay = useNavigate();

    useEffect(()=>{
        setTimeout(()=>{
            navigatetoPaymentGateWay('/orderconfirmation')
        },3000)

    },[])
   
  return (
    <div id='PaymentProcessingDiv'>
        <div id='imgProcess'>
            <img src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="" />
        </div>
        <div id='infoPaymentProcessing'>
        <p>Processinging your Payment </p>
        </div>
    </div>
  )
}

export default PaymentProcessing