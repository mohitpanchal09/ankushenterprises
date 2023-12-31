import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo1.webp";
export default function Navbar({ onSelectCategory }) {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid justify-content-around">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt="Logo"
              width="280"
              height="50"
              class="d-inline-block align-text-top"
              className="ankush-logo"
            />
          </a>
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="nav-container">
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle bg-danger text-white toggle-button"
                  // href="#"
                  role="button"
                  // data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </a>
                <ul class="dropdown-menu">
                  <NavLink
                    to="/unsaturated-polyster-resin"
                    style={{ textDecoration: "none" }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        UNSATURATED POLYSTER RESIN
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/fibre-glass" style={{ textDecoration: "none" }}>
                    <li>
                      <a class="dropdown-item" href="#">
                        FIBER GLASS
                      </a>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/cobalt-octoate"
                    style={{ textDecoration: "none" }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        COBALT OCTOATE
                      </a>
                    </li>
                  </NavLink>
                  <NavLink to="/mekp" style={{ textDecoration: "none" }}>
                    <li>
                      <a class="dropdown-item" href="#">
                        M.E.K.P
                      </a>
                    </li>
                  </NavLink>
                  <NavLink
                    to="/styrene-monomer"
                    style={{ textDecoration: "none" }}
                  >
                    <li>
                      <a class="dropdown-item" href="#">
                        STYRENE MONOMER
                      </a>
                    </li>
                  </NavLink>
                </ul>
              </li>
              <NavLink
                to="/"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="/products"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="/industries"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Industries
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="/about-us"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li
                  className="nav-item"
                  style={{ marginLeft: "16px", textDecoration: "none" }}
                >
                  <a className="nav-link" href="">
                    About Us
                  </a>
                </li>
              </NavLink>
              <NavLink
                to="/contact-us"
                style={{ textDecoration: "none" }}
                className={({ isActive }) => (isActive ? "active" : "inactive")}
              >
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
