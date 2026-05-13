import { Routes, Route, NavLink } from "react-router-dom";
import Home from "../pages/Home";
import News from "../pages/newsfeed/News";
import News1 from "../pages/newsfeed/News1";
import News2 from "../pages/newsfeed/News2";
import Contact from "../pages/contacts/Contact";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product/ProductDetail";
import Cart from "../pages/cart/Cart"
import CookingRecipe from "../pages/cooking/CookingRecipe"
import CookingRecipeDetail from "../pages/cooking/CookingRecipeDetail";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import styles from "./App.module.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";

function App() {
  return (
    <div className={styles.appWrapper}>

      <div className={styles.leftBanner}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          <SwiperSlide>
            <img src="/banner1.png" className={styles.bannerImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner2.png" className={styles.bannerImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner3.png" className={styles.bannerImg} />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className={styles.rightBanner}>
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 3000,
            reverseDirection: true
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src="/banner1.png" className={styles.bannerImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner2.png" className={styles.bannerImg} />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/banner3.png" className={styles.bannerImg} />
          </SwiperSlide>
        </Swiper>
      </div>
      
      <Header />

      <main className={styles.content}>
        <div className={styles.body}>
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
      </main>

      <Footer style={{ background: "black", color: "white", padding: "20px" }} />
    </div>
  );
}
export default App;