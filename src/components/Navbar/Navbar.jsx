import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom"; // Note: Changed to 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("isLoggedIn");
    const storedUsername = localStorage.getItem("username");
    if (user && storedUsername) {
      setIsLoggedIn(true);
      setUsername(storedUsername);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    window.location.href = "/"; 
  };

  return (
    <nav className="navbar">
     
      <Link to="/">
        <div className="logo">
          Hello<span>World</span>
        </div>
      </Link>

    
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      
      <ul className={isOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/quiz">Get Certified</Link></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>

        {isLoggedIn ? (
          <li>
            <span>Welcome, {username}</span>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </li>
        ) : (
          <li><Link to="/user" className="login-btn">Login/Signup</Link></li>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
