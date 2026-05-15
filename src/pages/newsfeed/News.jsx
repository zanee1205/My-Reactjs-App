import { NavLink, Outlet } from "react-router-dom";
import styles from "./News.module.css";

const navLinkStyleForNew = ({ isActive }) => ({
  color: isActive ? '#fff' : '#333',
  background: isActive ? '#ff0048' : '#f0f0f0',
  textDecoration: 'none',
  fontWeight: '500',
  padding: '8px 16px',
  borderRadius: '6px',
  marginRight: '10px'
});

function News() {
  return (
    <div className= {styles.newsContainer}>
      <h1 className={styles.newsTitle}> Newsfeed </h1>
      <p className={styles.newsSubtitle}>Latest updates and articles</p>

      <nav className={styles.newsNav}>
        <NavLink to="1" style={navLinkStyleForNew}>
          News 1
        </NavLink>
        <NavLink to="2" style={navLinkStyleForNew}>
          News 2
        </NavLink>
        <NavLink to="3" style={navLinkStyleForNew}>
          News 3
        </NavLink>
        <NavLink to="4" style={navLinkStyleForNew}>
          News 4
        </NavLink>
        <NavLink to="5" style={navLinkStyleForNew}>
          News 5
        </NavLink>
        <NavLink to="6" style={navLinkStyleForNew}>
          News 6
        </NavLink>
        <NavLink to="7" style={navLinkStyleForNew}>
          News 7
        </NavLink>
          
      </nav>

      <div className={styles.newsContent}>
        <Outlet />
      </div>
    </div>
  );
}

export default News;