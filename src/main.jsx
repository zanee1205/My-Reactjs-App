import React from "react";
import ReactDOM from "react-dom/client";
import App from "./application/App";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./pages/cart/CartContext"
import { Provider } from "react-redux";
import store from "./redux/store";  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <CartProvider>
        <Provider store = {store}>
          <App />
        </Provider>
      </CartProvider>
    </BrowserRouter>
  </React.StrictMode>
);

