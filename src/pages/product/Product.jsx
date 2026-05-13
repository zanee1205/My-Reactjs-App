import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "../../index.css";


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
            <h1 className = "page-title"> Product Page</h1>

            <div className = "product-grid">
                {products. map(product => (
                    <div className = "product-card" key = {product.id}>
                        <img src ={product.thumbnail} alt = {product.title} />

                        <h3> {product.title} </h3>

                        <NavLink 
                            to = {`/product/${product.id}`}
                            style={{ display: "block", marginBottom: "10px" }}
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