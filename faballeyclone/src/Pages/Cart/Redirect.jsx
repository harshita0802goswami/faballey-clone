import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './Redirect.css'
function Redirect() {
    let navigatetoPaymentGateWay = useNavigate();
 let [dot, setDot] = useState("")
    useEffect(()=>{
        setTimeout(()=>{
            navigatetoPaymentGateWay('/paymentgateway')
        },3000)

    },[])
 
  return (
    <div className='redirectDiv'>
        <div className='imgProcess'>
            <img src="https://gifimage.net/wp-content/uploads/2017/09/animated-loading-gif-transparent-background-8.gif" alt="" />
        </div>
        <div className='infoRedirect'>
        <p>Redirecting you to Payment Gateway... </p>
        </div>
    </div>
  )
}

export default Redirect