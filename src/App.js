import './App.css';
import AppNavbar from './components/AppNavbar';
import {Routes, Route } from "react-router";
import Products from './components/Products';
import Cart from './components/Cart';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <AppNavbar />
      <div className='contentContainer' style={{marginTop: "60px"}}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
