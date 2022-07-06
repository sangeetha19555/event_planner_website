import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="contact_info fixed-top">
          <p>
            <img
              src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png"
              alt="phone"
              className="d-inline-block align-text-top"
            />
            6381008873
          </p>
          <p>
            <img
              src="https://d1h1wqtygap0e8.cloudfront.net/uploads/2019/09/vector-clock-01.gif"
              alt="phone"
              className="d-inline-block align-text-top"
            />
            MONDAY – SATURDAY 8 AM – 8 PM
          </p>
        </div>
      </header>
      {/* navbar */}
      <nav className="navbar  navbar-expand-lg  navbar-light navbar_conatiner ">
        <div className="container">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="/">
            <img src="images/logotry.png" alt="logo" className="logo_image" />
          </a>
          <div
            className="collapse navbar-collapse ml-auto"
            id="navbarTogglerDemo03"
          >
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link to="/" className="nav-link" aria-current="page">
                  {" "}
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  href="/"
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>

                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <li>
                    <Link to="/reception" className="dropdown-item">
                      {" "}
                      Reception Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to="/birthday" className="dropdown-item">
                      {" "}
                      Birthday Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to="/wedding" className="dropdown-item">
                      {" "}
                      Wedding Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to="/engagement" className="dropdown-item">
                      {" "}
                      Engagement Decoration
                    </Link>
                  </li>
                  <li>
                    <Link to="/babyshower" className="dropdown-item">
                      {" "}
                      Baby Shower
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">
                  {" "}
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
