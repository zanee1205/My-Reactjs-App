import Header from "./pages/components/Header";
import Footer from "./pages/components/Footer";
import styles from "./application/App.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

function Layout({ children }) {
  return (
    <div className={styles.appWrapper}>
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

      <Header />

      <main className={styles.content}>
        <div className={styles.body}>{children}</div>
      </main>

      <Footer />
    </div>
  );
}

export default Layout;