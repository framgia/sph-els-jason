import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container">
      <nav class="navbar navbar-expand d-flex justify-content-between navbar-light bg-light ">
        <Link to="/" class="navbar-brand ms-2">
          Elearning
        </Link>
        <div className="">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to="profile" class="nav-link">
                Profile
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/dashboard" class="nav-link">
                Dashboard
              </Link>
            </li>
            <li class="nav-item">
              <Link to="/signup" class="nav-link">
                Sign Up
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
