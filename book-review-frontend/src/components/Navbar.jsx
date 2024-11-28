import React from "react";
import "./css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar-main-container">
      <div className="navbar-app-name">
        <Link to="/" className="link-review">
          <span>Book Review</span>
        </Link>
      </div>
      <div className="navbar-button-add-review">
        <Link to="/addreview">
          <button>Add Review</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
