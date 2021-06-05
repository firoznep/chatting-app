import React from "react";
import { Link } from "react-router-dom";

export default function HomePage(props) {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/chatting-app">Chatt App</Link>
    </div>
  );
}
