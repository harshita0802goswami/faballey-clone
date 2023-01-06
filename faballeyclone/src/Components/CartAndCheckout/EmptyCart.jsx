import { Center } from '@chakra-ui/react'
import React from 'react'
import {Link}  from 'react-router-dom'
function EmptyCart() {
  return (
    <div style={{width:"100%", height:"300px", display:"flex", flexDirection:"column", justifyContent:"Center", alignItems:"center"}}>
        <img src="https://www.faballey.com/images/emtBag.png" alt="" style={{width:"10%", marginBottom:"20px", marginTop:"200px"}}/>
        <p>Yout cart is empty! <Link to={'/'} style={{textDecoration:"underline", color:"rgb(252, 100, 134)"}}>Click here to add</Link> </p>
    </div>
 
    )
}

export default EmptyCart