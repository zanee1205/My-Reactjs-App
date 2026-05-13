import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./Product.module.css";


function Product () {
    const [products, setProducts] = useState([]);
    const {addToCart} = useCart();

    useEffect(() => {
        fetch("https://dummyjson.com/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.products);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1 className = {styles.pageTitle}> Product Page</h1>

            <div className = {styles.productGrid}>
                {products. map(product => (
                    <div className = {styles.productCard} key = {product.id}>
                        <img src ={product.thumbnail} alt = {product.title} />

                        <h3> {product.title} </h3>

                        <NavLink 
                            to = {`/product/${product.id}`}
                            style={{ display: "block", marginBottom: "10px", color: "black" }}
                        >
                            Xem chi tiết
                        </NavLink>
                        <button 
                            onClick = {() => addToCart(product)}
                            style = {{marginTop: "10px"}}
                        >
                            Thêm vào giỏ
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Product;