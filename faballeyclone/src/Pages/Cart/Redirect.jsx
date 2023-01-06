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
    <div id='redirectDiv'>
        <div id='imgProcess'>
            <img src="https://flevix.com/wp-content/uploads/2019/12/Quarter-Circle-Loading-Image-1.gif" alt="" />
        </div>
        <div id='infoRedirect'>
        <p>Redirecting you to Payment Gateway... </p>
        </div>
    </div>
  )
}

export default Redirect