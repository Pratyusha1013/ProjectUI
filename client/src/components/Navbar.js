import {Outlet, Link} from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <div>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <div className="container">
      <Link className="navbar-brand" to="/">UI Application</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/Register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Login">Login</Link>
          </li> 
        </ul>
      </div>
    </div>
  </nav>

  <Outlet />
</div>

  );
};

export default Navbar;
