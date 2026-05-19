import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CookingRecipe.module.css";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
    
function CookingRecipe () {
    const [recipes, setRecipes] = useState([]);

    useEffect (() =>{
        fetchWithAuth("https://dummyjson.com/recipes?limit=50")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((err) => console.log(err));
    }, []);

    const cookingRecipeArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    }

    const slides = cookingRecipeArray(recipes, 24);

    return (
        <div className={styles.recipeContainer}>
        <h1 className={styles.pageTitle}>Cooking Recipes</h1>

        <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            spaceBetween={30}
        >
            {slides.map((group, index) => (
                <SwiperSlide key={index}>
                    <div className={styles.recipeGrid}>
                        {group.map((recipe) => (
                            <div key={recipe.id} className={styles.recipeCard}>
                                <img
                                    className={styles.recipeCardImage}
                                    src={recipe.image}
                                    alt={recipe.name}
                                />

                                <h3>{recipe.name}</h3>

                                <Link
                                    to={`/cookingrecipe/${recipe.id}`}
                                    className={styles.detailBtn}
                                >
                                    Xem chi tiết
                                </Link>
                            </div>
                        ))}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
}

export default CookingRecipe