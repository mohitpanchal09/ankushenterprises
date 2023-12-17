import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid justify-content-around">
        <Link to="/" style={{ textDecoration: "none" }}>
          <a class="navbar-brand" href="#">
            <img
              src="https://media.discordapp.net/attachments/1134172030699323465/1184535992577835018/image.png?ex=658c541c&is=6579df1c&hm=10f7f42e0cfa8f35e2b71ee1dbeaaa3f0962222c5370e4778330f184a2fbc568&=&format=webp&quality=lossless&width=1332&height=288"
              alt="Logo"
              width="280"
              height="50"
              class="d-inline-block align-text-top"
              className="ankush-logo"
            />
          </a>
        </Link>
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
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  All Categories
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">
                      UNSATURATED POLYSTER RESIN
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      FIBER GLASS
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      COBALT OCTATE
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      M.E.K.P
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">
                      STYRENE MONOMER
                    </a>
                  </li>
                </ul>
              </li>
              <Link to="/" style={{ textDecoration: "none" }}>
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </Link>
              <Link to="/products" style={{ textDecoration: "none" }}>
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Products
                  </a>
                </li>
              </Link>
              <Link to="/industries" style={{ textDecoration: "none" }}>
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Industries
                  </a>
                </li>
              </Link>
              <Link to="/about-us" style={{ textDecoration: "none" }}>
                <li
                  className="nav-item"
                  style={{ marginLeft: "16px", textDecoration: "none" }}
                >
                  <a className="nav-link" href="">
                    About Us
                  </a>
                </li>
              </Link>
              <Link to="/contact-us" style={{ textDecoration: "none" }}>
                <li className="nav-item" style={{ marginLeft: "16px" }}>
                  <a className="nav-link" href="#">
                    Contact Us
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
