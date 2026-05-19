import { useEffect, useState } from "react";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import styles from "./CookingRecipe.module.css";
import { fetchWithAuth } from "../../utils/fetchWithAuth";

function CookingRecipeDetail () {
    const { id } = useParams();
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        setError(false);
        setRecipe(null);

        fetchWithAuth(`https://dummyjson.com/recipes/${id}`)
            .then(res => res.json())
            .then(data => {
                if (data.message) {
                    setError(true);
                } else {
                    setRecipe(data);
                }
            })
            .catch(err => setError(true))
            .finally(() => setLoading(false));
    }, [id]);

    if (error) return (
        <div>
            <h2> Recipe not found </h2>
            <p> Vui lòng kiểm tra đường dẫn hoặc thử lại. </p>

            <button
                onClick = {() => navigate("/cookingrecipe")}
                style = {{marginTop: "20px", padding: "10px"}}
            > Quay lại
            </button>
        </div>
    )

    if (!recipe) return <p>Loading...</p>;

    return (
        <div>

            <div className = {styles.recipeCard} style ={{maxWidth: "800px", margin: "auto", marginBottom: "20px", marginTop: "50px"}}>
                <img className ={styles.recipeCardImage} src = {recipe.image} alt = {recipe.name}/>
                <h2 style={{ color: "black" }} > Dish name: {recipe.name}</h2>

                <div style = {{ textAlign: "left"}}>
                    <h3> Ingredient: </h3>
                    <ul>
                        {recipe.ingredients.map((item, index) => (
                            <li key = {index}> {item} </li>
                        ))}
                    </ul>

                    <h3> How to make: </h3>
                    <ol>
                        {recipe.instructions.map((step, index) => (
                            <li key = {index}> {step} </li>
                        ))}
                    </ol>
                    
                </div>
            </div>

            <button onClick = {() => navigate(-1)} className = {styles.detailBtn} style = {{marginBottom: "20px"}} >
                Quay lại
            </button>
        </div>
    );
}

export default CookingRecipeDetail