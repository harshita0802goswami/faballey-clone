import './App.css';
import MyLogin from './Components/Login-SignUp/Login';
import Login from './Components/Login-SignUp/LoginSignUp';
import MySignUp from './Components/Login-SignUp/SignUp';
function App() {
  return (
    <div className="App">
      <Login />
      <MyLogin />
      <MySignUp/>
    </div>
  );
}

export default App;
