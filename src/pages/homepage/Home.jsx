import {  useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import styles from "./Home.module.css";

function Home () {
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        fetch("https://api.slingacademy.com/v1/sample-data/photos")
            .then(res => res.json())
            .then(data => {
                setPhotos(data.photos);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className = {styles.homeContainer}>
            <h1> Welcome to the Homepage!</h1>

            <Swiper
                styles = {styles.swiperWrapper}
                modules = {[Navigation, Autoplay]}
                navigation
                spaceBetween = {20}
                slidesPerView = {1}
                autoplay = {{delay: 2800}}
            >
                {photos.map(photo => (
                    <SwiperSlide key = {photo.id}>
                        <div className = {styles.slideCard}>
                            <img className = {styles.image} src = {photo.url} width = "350" />
                            <h3 className = {styles.title}> {photo.title} </h3>
                            <p className = {styles.description} > {photo.description} </p>
                            {/* <p> ID: {photo.id} </p> */}
                        </div>
                    </SwiperSlide>
                ))}


            </Swiper>
        </div>
        
    );
}

export default Home