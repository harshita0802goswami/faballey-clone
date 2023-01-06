import './App.css';
import Home from './Pages/Home/Home';
import { Products } from './Pages/Products/Products';
import MyLogin from './Components/Login-SignUp/Login';
import MySignUp from "./Components/Login-SignUp/SignUp"
function App() {
  return (
    <div className='app'>
      <Products/>
      <Home/>
      <MyLogin/>
      <MySignUp/>
      
    </div>
  );
}

export default App;
