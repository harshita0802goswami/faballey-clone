import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'

const WrapperRoute = ({children}) => {
  return (
    <div>
        <Navbar/>
        {children}
    </div>
  )
}

export default WrapperRoute