import React from "react";
import { Link } from "react-router-dom"; 
import { useTheme } from "../ThemeContext/ThemeContext";

const Header = () => {
    const { toggleTheme } = useTheme();

    return (
        <nav>
            <ul className="header">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button onClick={toggleTheme}>
                Change theme 
            </button>
        </nav>
    );
}

export default Header;
