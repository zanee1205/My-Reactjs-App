import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";

function Login () {

    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async () => {
        const res = await fetch(`http://localhost:3000/users?email=${email}`);
        const data = await res.json();

        if (data.length >0) {
            localStorage.setItem("user", JSON.stringify(data[0]));
            alert("Đăng nhập thanh công!");
            navigate("/");
        } else {
            alert("Sai tài khoản hoặc mật khẩu. Hãy thử lại!")
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
                        onChange={(e) => setEmail(e.target.value)}
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