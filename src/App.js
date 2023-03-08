import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar/navbar";
import { GlobalStyle } from "./GlobalStyle";
import Shop from "./pages/shop/Shop";
import Cart from "./pages/cart/Cart";
import ShopContextProvider from "./context/shop-context";

function App() {
  return (
    <div>
      <ShopContextProvider>
        <GlobalStyle />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
