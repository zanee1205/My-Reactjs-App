import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { set } from "react-hook-form";

function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async(e) => {
        e.preventDefault();
        //checking mail có tồn tại chưa, length data > 0 => đã xuất hiện mail//
        const res = await fetch(`http://localhost:3000/users?email=${email}`);
        const data = await res.json();

        if(data.length > 0) {
            alert("Email tồn tại rồi khỏi đăng ký đi.");
            return;
        } 
        if (password !== confirmPassword) {
            alert("Mật khẩu không khớp!");
            return;
        }
        //tạo user mới//
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({email,name,password})
        });
        alert("Đăng ký thành công!");
        navigate("/login");
    }

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <h2> Đăng ký </h2>

                <form className={styles.form}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type ="name"
                        placeholder="Tên tài khoản"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Mật khẩu"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Nhập lại mật khẩu" 
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}> Đăng ký </button>
                </form>

                <p> Đã có tài khoản? <Link to = "/login"> Đăng nhập </Link></p>
            </div>
        </div>
    );
}

export default Register;   