import React from "react";
import { Link } from "react-router";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-between jus bg-body-tertiary ">
        <div className="container-fluid justify-content-end">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarTogglerDemo01">
            <Link className="navbar-brand me-auto" to="/">
              Products App
            </Link>
            <ul className="navbar-nav  mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="#">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <i className="bi bi-cart-fill"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
