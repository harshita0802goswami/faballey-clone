import React, { useState } from 'react'
import './Navbar.css'
import {BsHandbag} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'


const Topbar = () => {
  const [name,setName] = useState('')
  const [login,setLogin] = useState(false)
  let storeData = useSelector((storeData) => {
    return storeData.signUpDetails;
  })
  useEffect(()=>{
    setName(storeData[storeData.length-1].name);
    setLogin(localStorage.getItem('login'));
  },[storeData])
  // useEffect(()=>{
  //   setName(localStorage.getItem('user') || '');
  //   setLogin(localStorage.getItem('login') || false);
  // },[name,login])


  // console.log(storeData,"store data")
  // // let name = storeData[storeData.length-1];
  function changeLocal(){
    setName('');
    setLogin(false);
  }

 
  return (<div>
    <div className='topBar' style={{width:'100%',boxSizing:'border-box'}} >
        <div></div>
        <div style={{display:'flex'}}>
            <Link to={'/'} style={{backgroundColor:'black', padding:'10px 15px '}}><img src="https://static.faballey.com/images/indya/fabwht.png?v=11.38" alt=""  width='70px'/></Link>
            <Link to={'/'}  style={{ padding:'6px 15px', boxShadow:'0 0 1px black'}}><img src="https://static.faballey.com/images/indya/indblk.png?v=11.38" alt="" width='30px' /></Link>
        </div>
        <div >
            <ul style={{display:'flex', justifyContent:'right', alignItems:'center'}}>
                <li className='hide-on-small'>Track Order</li>
                <li className='hide-on-small'>Store Locator</li>
                {(name.length!='')?<li onClick={changeLocal}>Logout</li>:<li><Link  to={'/login'}>Login</Link></li>}
                {(name.length!='')?<li>{name}</li>:<li><Link to={'/signup'}>Sign up</Link></li>}
                <li><Link to={'/cart'}><BsHandbag/></Link></li>
            </ul>
        </div>
    </div>
    </div>
  )
}

export default Topbar