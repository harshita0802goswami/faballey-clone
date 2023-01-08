import React from 'react'
import './Navbar.css'
import MidbarList from './MidbarList'

const Midbar = ({filters,changeFilters}) => {
  return (
    <div className='midBar'>
        <div><img src="https://static.faballey.com/images/logo.png?v=11.38" alt="" /></div>
        <div>
          <MidbarList filters={filters} changeFilters={changeFilters} />
        </div>
        <div style={{display:'flex'}}>
            <p>🔍</p>
            <select name="" id="corancy" style={{border:'.5px solid grey', fontSize:'12px', fontWeight:'600',marginLeft:'10px'}}>
                <option value="inr">₹ INR</option>
                <option value="usd">$ USD</option>
                <option value="cad">$ CAD</option>
                <option value="aud">$ AUD</option>
                <option value="sgd">$ SGD</option>
            </select>
        </div>
    </div>
  )
}

export default Midbar

