import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MyLogin from '../../Components/Login-SignUp/Login'
import MySignUp from '../../Components/Login-SignUp/SignUp'
import SingleProduct from '../../Components/SinglePage/SingleProduct'
import Cart from '../Cart/Cart'
import Checkout from '../Cart/Checkout'
import OrderConfirmation from '../Cart/OrderConfirmation'
import Payment from '../Cart/Payment'
import PaymentGateway from '../Cart/PaymentGateway'
import PaymentProcessing from '../Cart/PaymentProcessing'
import Redirect from '../Cart/Redirect'
import Home from '../Home/Home'
import { Products } from '../Products/Products'
import WrapperRoute from '../WrapperRoute/WrapperRoute'

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<WrapperRoute><Home/></WrapperRoute>}/>
        <Route path='/login' element={<MyLogin/>}/>
        <Route path='/signup' element={<MySignUp/>}/>
        <Route path='/products' element={<WrapperRoute><Products/></WrapperRoute>}/>
        <Route path='/products/:id' element={<WrapperRoute><SingleProduct/></WrapperRoute>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/redirect' element={<Redirect/>} />
      </Routes>   
    </div>
  )
}

export default AllRoutes