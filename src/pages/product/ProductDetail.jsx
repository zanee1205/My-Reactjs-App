import { useEffect, useState} from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./Product.module.css";

function ProductDetail () {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const {addToCart} = useCart();

    useEffect (() => {
        fetch(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data));
    }, [id]);

    if (!product) return <p>Loading...</p>

    return (
        <div >
            <h1>{product.title}</h1>
            <img src = {product.thumbnail} alt = {product.title}/>
            <p>{product.description}</p>
            <h3>Giá: {product.price}</h3>
            <button onClick = {() => navigate("/product")} >
                Trở về
            </button>
            <button 
                onClick = {() => addToCart(product)}
                style = {{marginTop: "10px"}}
            >
                Thêm vào giỏ
            </button>
        </div>
    );
}
export default ProductDetail;