import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "../../index.css";
import styles from "./Header.module.css";


const navLinkStyle = ({isActive}) => ({
    color: isActive ? '#007bff' : 'inherit',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});

function Header() {
    const [isDark, setIsDark] = useState(false);
    useEffect(() => {
        if (isDark) {
            document.body.classList.add("dark");
        } else {
            document.body.classList.remove("dark");
        }
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
                <NavLink to="/car" style = {navLinkStyle}>Cars list</NavLink>
            </div>

            <div className = {styles.navRight}>
                <button className = {styles.DarkModeButton} onClick={() => setIsDark(!isDark)}>
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>

                <NavLink to="/cart" style = {navLinkStyle} className = {styles.cartLink}>
                    🛒 Giỏ hàng
                    {totalItems > 0 && (
                        <span className = {styles.cartBadge}> {totalItems} </span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
}

export default Header;