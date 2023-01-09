import React from 'react'

const BottomBar = () => {
  return (
    <div className='nav-botton' style={{display:'flex', fontSize:"13px", fontWeight:'600' ,margin:'105px 0 5px 0',textAlign:'center'}}>
        <div style={{width:'33.33%', backgroundColor:'#FFE9E5', padding:'7px'}}>
            <p>Party'22 | Shop Now</p>
        </div>
        <div style={{width:'33.33%', backgroundColor:'#F8C9C8', padding:'7px'}}>
            <p>Sale | Upto 70% off</p>
        </div>
        <div style={{width:'33.33%',  backgroundColor:'#FFE9E5', padding:'7px'}}>
            <p>Free shipping on all orders</p>
        </div>
    </div>
  )
}

export default BottomBar