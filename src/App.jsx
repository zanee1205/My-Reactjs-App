import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import News from "./pages/newsfeed/News";
import News1 from "./pages/newsfeed/News1";
import News2 from "./pages/newsfeed/News2";
import Contact from "./pages/contacts/Contact";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/product/ProductDetail";
import Cart from "./pages/cart/Cart"
import CookingRecipe from "./pages/cooking/CookingRecipe"
import CookingRecipeDetail from "./pages/cooking/CookingRecipeDetail";
import Navbar from "./pages/header/Navbar";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<News />}>
          <Route path="News1" element={<News1 />} />
          <Route path="News2" element={<News2 />} />
        </Route> 
        <Route path="/contact" element={<Contact />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cookingrecipe" element={<CookingRecipe />} />
        <Route path="/cookingrecipe/:id" element={<CookingRecipeDetail />} />
      </Routes>
    </div>
  );
}
export default App;