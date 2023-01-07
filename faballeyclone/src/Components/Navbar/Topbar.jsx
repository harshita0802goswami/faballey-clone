import React from 'react'
import './Navbar.css'
import {BsHandbag} from 'react-icons/bs'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <div className='topBar' >
        <div></div>
        <div style={{display:'flex', justifyContent:'center'}}>
            <a href="#" style={{backgroundColor:'black', padding:'10px 15px '}}><img src="https://static.faballey.com/images/indya/fabwht.png?v=11.38" alt=""  width='70px'/></a>
            <a href="#" style={{ padding:'6px 15px', boxShadow:'0 0 1px black'}}><img src="https://static.faballey.com/images/indya/indblk.png?v=11.38" alt="" width='30px' /></a>
        </div>
        <div >
            <ul style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <li>Track Order</li>
                <li>Store Locator</li>
                <li>Login</li>
                <li>Sign up</li>
                <li><Link to={'/cart'}><BsHandbag/></Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Topbar