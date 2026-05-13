import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../index.css"

    
function CookingRecipe () {
    const [recipes, setRecipes] = useState([]);

    useEffect (() =>{
        fetch("https://dummyjson.com/recipes")
            .then((res) => res.json())
            .then((data) => setRecipes(data.recipes))
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className = "recipe-container">
            <h1> Cooking Recipes List </h1>
            <div className = "recipe-grid">
                {recipes.map (recipe => (
                    <div key = {recipe.id} className = "recipe-card">
                        <img src = {recipe.image} alt = {recipe.name} />

                        <h3> {recipe.name} </h3>
                        <Link to = {`/cookingrecipe/${recipe.id}`} className = "detail-btn">
                            Xem chi tiết
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CookingRecipe