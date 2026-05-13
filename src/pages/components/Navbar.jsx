import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "../cart/CartContext";
import "../../index.css";


const navLinkStyle = ({isActive}) => ({
    color: isActive ? '#007bff' : 'inherit',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
});

function Navbar() {
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
        <nav className = "navbar">
            <div className = "nav-left">
                <NavLink to="/" style = {navLinkStyle}>Home</NavLink>
                <NavLink to="/news" style = {navLinkStyle}>News</NavLink>
                <NavLink to="/contact" style = {navLinkStyle}>Contact</NavLink>
                <NavLink to="/product" style = {navLinkStyle}>Product</NavLink>
                <NavLink to="/cookingrecipe" style = {navLinkStyle}>Cooking Recipe</NavLink>
            </div>

            <div className = "nav-right">
                <button className = "DarkModeButton" onClick={() => setIsDark(!isDark)}>
                    {isDark ? "☀️ Light" : "🌙 Dark"}
                </button>

                <NavLink to="/cart" style = {navLinkStyle} className = "cart-link">
                    🛒 Giỏ hàng
                    {totalItems > 0 && (
                        <span className = "cart-badge"> {totalItems} </span>
                    )}
                </NavLink>
            </div>

        </nav>
    );
}

export default Navbar;