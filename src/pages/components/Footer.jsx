import styles from "./Footer.module.css";

function Footer() {
    return (
        <footer className = {styles.footer}>
            <div className = {styles.container}>

                <div className = {styles.left}>
                    <h3> This is thé official website. </h3>
                    <p> © 2026 All rights Reserved. </p>
                </div>

                <div className = {styles.center}>
                    <p> <b>Contact</b> </p>
                    <p> Email: tdkhuee@gmail.com </p>
                </div>

                <div className = {styles.social}>
                    <p> <b>Follow us</b> </p>
                    <div>
                        <span> Facebook </span>
                        <span> Instagram </span>
                        <span> Tiktok </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}

export default Footer;