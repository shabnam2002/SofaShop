import React from "react";
import { DataProvider } from "./components/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Detail from "./components/Detail";
import Home from "./components/LandingHeader"

function App() {
  return (
    <DataProvider>
      <div className="main-website">
        <div className="container">
          <BrowserRouter>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<Detail />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
