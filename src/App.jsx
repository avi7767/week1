import { useState } from 'react'; // Import useState hook to manage cart state
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; // Import NavBar component
import CartPage from './pages/CartPage';
import CategoryPage from './pages/CategoryPage';
import Home from './pages/Home';

function App() {
  // Step 1: Initialize state for cartItems
  const [cartItems, setCartItems] = useState([]);

  // Step 2: Function to add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <Router>
      <div>
        <header className="header">
          <h1>Best Electronics</h1> {/* Updated company name */}
          <NavBar cartItems={cartItems} /> {/* Pass cartItems to NavBar */}
        </header>
        <Routes>
          <Route
            path="/"
            element={<Home addToCart={addToCart} />} // Pass addToCart to Home
          />
          <Route
            path="/:category"
            element={<CategoryPage addToCart={addToCart} />} // Pass addToCart to CategoryPage
          />
          <Route
            path="/cart"
            element={<CartPage cartItems={cartItems} />} // Pass cartItems to CartPage
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
