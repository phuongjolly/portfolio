import { Link } from "react-router-dom";
import Welcome from "./Welcome";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="main-header">
        <div className="header-logo">
          <img
            src="https://c2.staticflickr.com/2/1789/41965143275_b762350741_o.png"
            alt="icon"
          />
        </div>
        <Welcome />
      </div>
      <div className="portfolio-container">
        <div className="portfolio-title">Portfolio</div>
        <div className="portfolio-content">
          <p>My all projects will be presented here</p>
          <div className="portfolio-menu">
            <div className="item">
              <Link to="/">Home</Link>
            </div>
            <div className="item">
              <Link to="/projects">Showcase</Link>
            </div>
            <div className="item">
              <Link to="/about-me">About Me</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
