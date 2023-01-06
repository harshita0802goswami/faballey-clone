import logo from './logo.svg';
import './App.css';
import Cart from './Pages/Cart/Cart';
import { ChakraProvider } from '@chakra-ui/provider';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Checkout from './Pages/Cart/Checkout';
import Payment from './Pages/Cart/Payment';
import PaymentGateway from './Pages/Cart/PaymentGateway'
import PaymentProcessing from './Pages/Cart/PaymentProcessing'
import OrderConfirmation from './Pages/Cart/OrderConfirmation'
import Redirect from './Pages/Cart/Redirect'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <BrowserRouter>
      <ChakraProvider>
        <Routes>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/checkout' element={<Checkout/>} />
        <Route path='/payment' element={<Payment/>} />
        <Route path='/paymentgateway' element={<PaymentGateway/>} />
        <Route path='/paymentprocessing' element={<PaymentProcessing/>} />
        <Route path='/orderconfirmation' element={<OrderConfirmation/>} />
        <Route path='/redirect' element={<Redirect/>} />
        </Routes>
      </ChakraProvider>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
