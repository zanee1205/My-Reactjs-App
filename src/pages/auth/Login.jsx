// localStorage.getItem("token")
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login () {

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const resUsers = await fetch("https://dummyjson.com/users");
            const usersData = await resUsers.json();

            console.log("Users:", usersData);

            const foundUser = usersData.users.find(
                (user) => user.username === username && user.password === password
            );

            console.log("Found user:", foundUser);

            if (!foundUser) {
                alert("Sai tài khoản hoặc mật khẩu!");
                return;
            }

            const resLogin = await fetch("https://dummyjson.com/user/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: username,
                    password: password,
                    expiresInMins:2
                })
            });

            const loginData = await resLogin.json();

            console.log("Login data:", loginData);

            if (resLogin.ok) {
                localStorage.setItem("token", loginData.accessToken);
                localStorage.setItem("user", JSON.stringify(loginData));

                alert("Đăng nhập thành công!");
                navigate("/");
            } else {
                alert("Login API lỗi!");
            }

        } catch (err) {
            console.error("Error:", err);
            alert("Lỗi server!");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.card}>

                <h2> Đăng nhập </h2>

                <form className={styles.form}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Mật khẩu" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleLogin}> Đăng nhập </button>
                </form>

                <p> Chưa có tài khoản? <Link to = "/register"> Đăng ký </Link></p>
            </div>
        </div>
    );
}

export default Login