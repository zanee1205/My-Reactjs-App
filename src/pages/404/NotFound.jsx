import styles from "./NotFound.module.css";
import { fetchWithAuth } from "../../utils/fetchWithAuth";

function NotFound () {
    return (
        <div className = {styles.NotFoundcontainer}>
            <h1> 404 </h1>
            <p> Page not found or non-existing. Please try again.</p>
        </div>
    );
}

export default NotFound