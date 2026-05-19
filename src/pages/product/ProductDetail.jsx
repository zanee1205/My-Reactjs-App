import { useEffect, useState} from "react";
import { Navigate, useParams, useNavigate } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./Product.module.css";
import { fetchWithAuth } from "../../utils/fetchWithAuth";

function ProductDetail () {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const {addToCart} = useCart();

    useEffect (() => {
        setLoading(true);
        setError(false);
        setProduct(null);
        
        fetchWithAuth(`https://dummyjson.com/products/${id}`)
        .then(res => res.json())
        .then(data => {
            if (data.message) {
                setError(true);
            } else {
                setProduct(data);
            }
        })
        .catch(err => setError(true))
        .finally(() => setLoading(false));
    }, [id]);

    if (error) return (
        <div>
            <h2> Sản phẩm không tồn tại </h2>
            <p> Vui lòng kiểm tra đường dẫn hoặc thử lại. </p>

            <button 
                onClick = {() => navigate("/product")}
                style={{ marginTop: "10px", padding: "10px" }}
            >
                Quay lại
            </button>
        </div>
    )

    if (!product) return <p>Loading...</p>

    return (
        <div >
            <h1>{product.title}</h1>
            <img src = {product.thumbnail} alt = {product.title}/>
            <p>{product.description}</p>
            <h3>Giá: {product.price}</h3>
            <button 
                onClick = {() => navigate("/product")} 
                style = {{marginTop: "10px", padding: "10px", marginRight: "10px"}}
            >
                Trở về
            </button>
            <button 
                onClick = {() => addToCart(product)}
                style = {{marginTop: "10px", padding: "10px", marginLeft: "10px", marginBottom: "30px"}}
            >
                Thêm vào giỏ
            </button>
        </div>
    );
}
export default ProductDetail;