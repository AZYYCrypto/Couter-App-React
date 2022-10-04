import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
      <Link to="/">Home</Link>
      <Link to="/basic-counter-app">Basic-Counter-App</Link>
    </div>
  );
};

export default NavBar;
