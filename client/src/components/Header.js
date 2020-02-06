import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={style}>
      <nav>React-Redux-App</nav>
      <span>
        <Link to='/'>Home</Link>
      </span>
      |
      <span>
        <Link to='About'>About</Link>
      </span>
    </div>
  );
}

const style = {
  background: "#333",
  color: "#fff",
  textAlign: "center",
  padding: "40px"
};
