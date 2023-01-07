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

const AllRoutes = () => {
  return (
    <div>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<MyLogin/>}/>
        <Route path='/signup' element={<MySignUp/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/products/:id' element={<SingleProduct/>}/>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/paymentgateway' element={<PaymentGateway/>} />
        <Route path='/paymentprocessing' element={<PaymentProcessing/>} />
        <Route path='/orderconfirmation' element={<OrderConfirmation/>} />
        <Route path='/redirect' element={<Redirect/>} />
        
      </Routes>   
    </div>
  )
}

export default AllRoutes