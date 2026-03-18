import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "1rem", backgroundColor: "#282c34", color: "white" }}>
      <h1>RevisionFlow</h1>
      <nav>
        <Link to="/" style={{ margin: "0 1rem", color: "white" }}>Dashboard</Link>
        <Link to="/privacy" style={{ margin: "0 1rem", color: "white" }}>Privacy</Link>
      </nav>
    </header>
  );
}
