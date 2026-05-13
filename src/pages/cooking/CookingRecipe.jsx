import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./CookingRecipe.module.css";

    
function CookingRecipe () {
    const [recipes, setRecipes] = useState([]);

    useEffect (() =>{
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className = {styles.recipeContainer}>
            <h1> Cooking Recipes List </h1>
            <div className = {styles.recipeGrid}>
                {recipes.map (recipe => (
                    <div key = {recipe.id} className = {styles.recipeCard}>
                        <img className ={styles.recipeCardImage} src = {recipe.image} alt = {recipe.name} />

                        <h3> {recipe.name} </h3>
                        <Link to = {`/cookingrecipe/${recipe.id}`} className = {styles.detailBtn}>
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CookingRecipe