import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./Product.module.css";
import { fetchWithAuth } from "../../utils/fetchWithAuth";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Product () {
    const [products, setProducts] = useState([]);   
    const [searchTerm, setSearchTerm] = useState("");
    const [keyword, setKeyword] = useState("");
    const {addToCart} = useCart();

    useEffect(() => {
        const loadData = async () => {
            try{
                //API fetch 194 sản phẩm
                const res1 = await fetchWithAuth("https://dummyjson.com/products?limit=194");
                const data1 = await res1.json();

                //JSON server fetch sản phẩm tự tạo
                const res2 = await fetch("http://localhost:3000/products");
                const data2 = await res2.json();

                const apiProducts = data1.products.map(p => ({
                    ...p,
                    source: "api"
                }));

                const localProducts = data2.map(p => ({
                    ...p,
                    title: p.title || p.name,
                    source: "local"
                }));

                setProducts([...localProducts, ...apiProducts]);
            } catch (err) {
                console.log(err);
            }
        };
        
        loadData();
        
    }, []);

    const filteredProducts = products.filter ( product =>
        (product.title || "").toLowerCase().includes(keyword.toLowerCase())
    );

    const productArray = (arr, size) => {
        const result = [];
        for (let i = 0; i < arr.length; i += size) {
            result.push(arr.slice(i, i + size));
        }
        return result;
    };

    const slides = productArray(filteredProducts, 25);

    const handleDelete = async (id) => {
        try {
            await await fetch(`http://localhost:3000/products/${id}`, {
                method: "DELETE",
            });
            setProducts(prev => prev.filter(p => p.id !== id));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <div className = {styles.searchArea}>
                <h1 className = {styles.pageTitle}> Product Page</h1>

                <input 
                    className = {styles.inputBox}
                    type = "text"
                    placeholder = "Tìm sản phẩm..."
                    value = {searchTerm}
                    onChange = {(e) => setSearchTerm(e.target.value)}
                />
                <button className = {styles.searchBtn} onClick = {() => setKeyword(searchTerm)}> Tìm kiếm </button>
            </div>

            <div className = {styles.productGrid}>
                {filteredProducts.length === 0 && <p> Không tìm thấy kết quả</p>}
                <Swiper
                    modules={[Navigation, Pagination]}
                    navigation
                    pagination={{ clickable: true }}
                    spaceBetween={20}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                        <div className={styles.slideGrid}>
                            {slide.map(product => (
                            <div className={styles.productCard} key={product.id}>
                                <img src={product.thumbnail} alt={product.title} />

                                <h3>{product.title}</h3>

                                <NavLink
                                to={`/product/${product.id}`}
                                style={{ display: "block", marginBottom: "10px", color: "black" }}
                                >
                                Xem chi tiết
                                </NavLink>

                                <button onClick={() => addToCart(product)}>
                                    Thêm vào giỏ
                                </button>

                                {product.source === "local" && (
                                    <div>
                                        <button onClick = {() => handleEdit(product)}> Sửa </button>
                                        <button onClick = {() => handleDelete(product.id)}> Xóa </button>
                                    </div>
                                )}
                            </div>
                            ))}
                        </div>
                        </SwiperSlide>
                    ))}
                    </Swiper>
            </div>
        </div>  
    );
}

export default Product;