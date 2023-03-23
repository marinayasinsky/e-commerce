import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import ProductDetails from './pages/ProductDetails';
import Cart from './components/Cart';
import { getProducts, getProductById } from './api';

function App() {
  const [cartItems, setCartItems] = React.useState([]);

  const addToCart = (product) => {
    setCartItems(prevCartItems => [...prevCartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(prevCartItems => prevCartItems.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetails addToCart={addToCart} getProductById={getProductById} />} />
          <Route path="/cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
