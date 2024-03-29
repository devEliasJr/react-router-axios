import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css'

function App() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
