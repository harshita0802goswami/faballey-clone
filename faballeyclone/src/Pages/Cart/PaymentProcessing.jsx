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
    <div className='PaymentProcessingDiv'>
        <div className='imgProcess'>
            <img src="https://gifimage.net/wp-content/uploads/2017/09/animated-loading-gif-transparent-background-8.gif" alt="" />
        </div>
        <div className='infoPaymentProcessing'>
        <p>Processinging your Payment... </p>
        </div>
    </div>
  )
}

export default PaymentProcessing