import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

import AllRoutes from "./Pages/AllRoutes/AllRoutes";
function App() {
  return (
    <div className="app">
      <Navbar/>
      <AllRoutes />
    </div>
  );
}

export default App;
