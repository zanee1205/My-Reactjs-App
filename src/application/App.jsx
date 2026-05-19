// npx json-server --watch db.json --port 3000

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../pages/homepage/Home";
import News from "../pages/newsfeed/News";
import NewsDetail from "../pages/newsfeed/NewsDetail";
import Contact from "../pages/contacts/Contact";
import Product from "../pages/product/Product";
import ProductDetail from "../pages/product/ProductDetail";
import Cart from "../pages/cart/Cart";
import CookingRecipe from "../pages/cooking/CookingRecipe";
import CookingRecipeDetail from "../pages/cooking/CookingRecipeDetail";
import Header from "../pages/components/Header";
import Footer from "../pages/components/Footer";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import NotFound from "../pages/404/NotFound";

import styles from "./App.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ProtectedRoute from "../../ProtectedRoute";
import { Navigate } from "react-router-dom";

import "swiper/css";
import "swiper/css/autoplay";

function App() {
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/login" ||
    location.pathname === "/register";

  return (
    <div
      className={`${styles.appWrapper} ${
        isAuthPage ? styles.authLayout : ""
      }`}
    >

      {!isAuthPage && (
        <>
          <div className={styles.leftBanner}>
            <Swiper modules={[Autoplay]} autoplay={{ delay: 3000 }} loop>
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
              autoplay={{ delay: 3000, reverseDirection: true }}
              loop
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
        </>
      )}

      {!isAuthPage && <Header />}

      <main className={styles.content}>
        <div className={styles.body}>
          <Routes>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            <Route element={<ProtectedRoute />}>

              <Route path="/" element={<Home />} />

              <Route path="/news" element={<News />} >
                <Route path=":id" element={<NewsDetail />}/>
              </Route>
              <Route path="/contact" element={<Contact />} />
              <Route path="/product" element={<Product />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />

              <Route path="/cookingrecipe" element={<CookingRecipe />} />
              <Route path="/cookingrecipe/:id" element={<CookingRecipeDetail />} />
              <Route path="*" element={<NotFound/>} />
            </Route>
            <Route path="*" element={<NotFound/>} />
          </Routes>

        </div>
      </main>

      {!isAuthPage && (
        <Footer style={{ background: "black", color: "white", padding: "20px" }} />
      )}
    </div>
  );
}

export default App;