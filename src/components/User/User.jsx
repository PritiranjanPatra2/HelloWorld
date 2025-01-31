import React, { useState } from "react";
import './User.css'

function User() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (isLogin) {
      
      const storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.username === username && storedUser.password === password) {
        alert("Login successful!");
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("username", username);
        window.location.href = "/";
      } else {
        alert("Invalid credentials. Please try again.");
      }
    } else {
      // SignUp Logic
      const newUser = { username, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Sign up successful! Please login.");
      setIsLogin(true);
    }
  };

  return (
    <div className="user-form">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>
      </form>
      <p>
        {isLogin ? "Don't have an account?" : "Already have an account?"} 
        <span onClick={() => setIsLogin(!isLogin)} style={{ color: "blue", cursor: "pointer" }}>
          {isLogin ? "Sign Up" : "Login"}
        </span>
      </p>
    </div>
  );
}

export default User;
