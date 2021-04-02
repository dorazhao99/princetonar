import React from 'react'
import { Link } from "gatsby";
import css from './Header.css';

const Header = () => {
    return (
      <div className = "container">
        <div className = "textWrapper">
          <Link to="/" className = "home">
            Princeton AR Project
          </Link>
          <Link to="/" className = "link">
            Map
          </Link>
          <Link to="/resources/" className = "link">
            Resources
          </Link>
          <Link to="/about/" className = "link">
            About
          </Link>
          <Link to="/tellus/" className = "link">
            Tell Us
          </Link>
        </div>
      </div>

    )
  };

export default Header;
