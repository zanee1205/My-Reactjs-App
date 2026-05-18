import styles from "./Register.module.css";
import { Link, useNavigate } from "react-router-dom";

function Register () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async() => {
        //checking mail có tồn tại chưa, length data > 0 => đã xuất hiện mail//
        const res = await fetch(`http://localhost:3000/users?email=${email}`);
        const data = await res.json();

        if(data.length > 0) {
            alert("Email tồn tại rồi khỏi đăng ký đi.");
            return;
        }

        //tạo user mới//
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            }, 
            body: JSON.stringify({email,password})
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
                        type="password" 
                        placeholder="Mật khẩu" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type="password" 
                        placeholder="Nhập lại mật khẩu" 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}> Đăng ký </button>
                </form>

                <p> Đã có tài khoản? <Link to = "/login"> Đăng nhập </Link></p>
            </div>
        </div>
    );
}

export default Register;   