// import { createRoot } from 'react-dom/client'
// import { useState } from 'react';
// import App from './App';


// createRoot(document.getElementById('root')).render(
//   <App />
// )

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./application/App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./pages/cart/CartContext"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <App />
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);