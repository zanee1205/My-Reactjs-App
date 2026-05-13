import { NavLink, Outlet } from "react-router-dom";
import "../../News.css";

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
    <div className="news-container">
      <h1 className="news-title">📰 Newsfeed</h1>
      <p className="news-subtitle">Latest updates and articles</p>

      <nav className="news-nav">
        <NavLink to="News1" style={navLinkStyleForNew}>
          News 1
        </NavLink>
        <NavLink to="News2" style={navLinkStyleForNew}>
          News 2
        </NavLink>
      </nav>

      <div className="news-content">
        <Outlet />
      </div>
    </div>
  );
}

export default News;