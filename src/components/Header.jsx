import React, { useContext} from "react";
// import { useSelector } from "react-redux";
import { Link } from "react-router";
import LangContext from "../context/language";
import CountOfCartContext from "../context/countCart";
export default function Header() {

  const {_, setLang} = useContext(LangContext);
  const {count, __} = useContext(CountOfCartContext)

  return (
    <>
      <nav className="navbar navbar-expand-lg justify-content-between jus bg-body-tertiary fixed-top opacity-75">
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
                <Link className="nav-link custom-nav-animation" to="/register">
                  Register
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-animation" to="#">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link custom-nav-animation" to="/cart">
                  <i className="bi bi-cart-fill"></i>
                  {(count > 0)&& <sup>{count}</sup>}
                </Link>
              </li>

              {/* drop down */}
              <li className="nav-item">
                <div className="dropdown">
                  <div
                    className="btn dropdown-toggle"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Languages
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <div className="dropdown-item custom-dropDown" onClick={() => setLang('ltr')} role="button">
                        English
                      </div>
                    </li>
                    <li>
                      <div className="dropdown-item custom-dropDown" onClick={() => setLang('rtl')} role="button">
                        Arabic
                      </div>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
