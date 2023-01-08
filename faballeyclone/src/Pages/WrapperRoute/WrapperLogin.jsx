import React from 'react'
import Footer from '../../Components/Footer/Footer'
import Midbar from '../../Components/Navbar/Midbar'
import Topbar from '../../Components/Navbar/Topbar'

const WrapperLogin = ({children}) => {
  return (
    <div>
        <Topbar/>
        <Midbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default WrapperLogin