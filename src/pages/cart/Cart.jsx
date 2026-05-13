import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import { useCart } from "./CartContext";
import styles from "./Cart.module.css";

function Cart () {
    const {cart, removeFromCart, increaseQuantity, decreaseQuantity} = useCart();
    console.log(useCart());

    let totalPrice = 0;
    cart.forEach((item) => {
        totalPrice += item.quantity * item.price;
    });

    return (
        <div>
            <h1>Giỏ hàng của tôi</h1>

            {cart.length === 0 ? (
                <p>Chưa có sản phẩm nào trong giỏ hàng</p>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className={styles.cartItem}>
                            <h3>Tên sản phẩm: {item.title}</h3>
                            
                            <div className = {styles.quantityControl}>
                                <button onClick = {() => decreaseQuantity(item.id)}> - </button>
                                <span> Số lượng: {item.quantity} </span>
                                <button onClick = {() => increaseQuantity(item.id)}> + </button>
                            </div>

                            <p>Giá tiền: {item.price}</p>

                            <button onClick={() => removeFromCart(item.id)}>
                                Xóa sản phẩm
                            </button>
                        </div>
                    ))}

                    <div>
                        <p className="cart-total">
                            Tổng tiền đơn hàng: {totalPrice}$
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
export default Cart;