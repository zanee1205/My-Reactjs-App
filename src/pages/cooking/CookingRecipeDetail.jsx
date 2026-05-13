import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../index.css"

function CookingRecipeDetail () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => setRecipe(data)); 
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>
            <button onClick = {() => navigate(-1)} className = "detail-btn" style = {{marginBottom: "20px"}} >
                Quay lại
            </button>

            <div className = "recipe-card" style ={{maxWidth: "800px", margin: "auto"}}>
                <img src = {recipe.image} alt = {recipe.name}/>
                <h2 style={{ color: "black" }} > Dish name: {recipe.name}</h2>

                <div style = {{ textAlign: "left"}}>
                    <h3> Ingredient: </h3>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key = "index"> {item} </li>
                        ))}
                    </ul>

                    <h3> How to make: </h3>
                    <ol>
                        {recipe.instructions.map((step, index) => (
                            <li key = "index"> {step} </li>
                        ))}
                    </ol>
                    
                </div>
            </div>
        </div>
    );
}

export default CookingRecipeDetail