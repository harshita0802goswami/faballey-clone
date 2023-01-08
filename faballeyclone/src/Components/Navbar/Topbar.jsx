import React, { useState } from 'react'
import './Navbar.css'
import {BsHandbag} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'


const Topbar = () => {
 
  return (<div>
    <div className='topBar' style={{width:'100%',boxSizing:'border-box'}} >
        <div></div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <Link to={'/'} style={{backgroundColor:'black', padding:'10px 15px '}}><img src="https://static.faballey.com/images/indya/fabwht.png?v=11.38" alt=""  width='70px'/></Link>
            <Link to={'/'}  style={{ padding:'6px 15px', boxShadow:'0 0 1px black'}}><img src="https://static.faballey.com/images/indya/indblk.png?v=11.38" alt="" width='30px' /></Link>
        </div>
        <div >
            <ul style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <li>Track Order</li>
                <li>Store Locator</li>
                <li><Link to={'/login'}>Login</Link></li>
                <li><Link to={'/signup'}>Sign up</Link></li>
                <li><Link to={'/cart'}><BsHandbag/></Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Topbar