import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import styles from "./Header.module.css";

const navLinkStyle = ({ isActive }) => ({
  color: isActive ? "#aa3bff" : "inherit",
  textDecoration: isActive ? "none" : "underline",
  fontWeight: isActive ? "bold" : "normal",
  padding: "5px 10px"
});

function Header() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem("user"));
        setUser(storedUser);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("token");
        setUser(null);
        window.location.href = "/login";
    };

    const [isDark, setIsDark] = useState(() => {
        return localStorage.getItem("theme") === "dark";
    });

    useEffect(() => {
        const root = document.documentElement;
        root.classList.toggle("dark", isDark);
        localStorage.setItem("theme", isDark ? "dark" : "light");
    }, [isDark]);

    const {cart} = useCart();
    const totalItems = cart.reduce(
        (sum, item) => sum + item.quantity,
        0
    );

    return (
        <nav className = {styles.navbar}>
            <div className = {styles.navLeft}>
                <NavLink to="/" style = {navLinkStyle}>Home</NavLink>
                <NavLink to="/news" style = {navLinkStyle}>News</NavLink>
                <NavLink to="/contact" style = {navLinkStyle}>Contact</NavLink>
                <NavLink to="/product" style = {navLinkStyle}>Product</NavLink>
                <NavLink to="/cookingrecipe" style = {navLinkStyle}>Cooking Recipe</NavLink>

                <NavLink to="/cart" style = {navLinkStyle} className = {styles.cartLink}>
                    🛒 Giỏ hàng
                    {totalItems > 0 && (
                        <span className = {styles.cartBadge}> {totalItems} </span>
                    )}
                </NavLink>

            </div>

            <div className={styles.navRight}>
                {user ? (
                    <>
                        <span className={styles.userName}>
                            👋 Xin chào, {user.firstName}
                        </span>

                        <button 
                            className={styles.authButton}
                            onClick={handleLogout}
                        >
                            Đăng xuất
                        </button>
                    </>
                ) : (
                    <NavLink to="/login">
                        <button className={styles.authButton}>
                            Đăng nhập/Đăng ký
                        </button>
                    </NavLink>
                )}

                <button 
                    className={styles.DarkModeButton} 
                    onClick={() => setIsDark(!isDark)}
                >
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>

            </div>
        </nav>
    );
}

export default Header;