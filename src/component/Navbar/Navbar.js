import React from "react";
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
                <a className="nav-link" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/service"
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
                    <a className="dropdown-item" href="/reception">
                      Reception Decoration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/birthday">
                      Birthday Decoration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/wedding">
                      Wedding Decoration
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/engagement">
                      Engagement Decoration
                    </a>
                  </li>
                  {/* <div className="dropdown-divider"></div> */}
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              {/* <li className="nav-item">
                  <a className="nav-link" href="/service">
                    Service
                  </a>
                </li> */}
            </ul>
          </div>
        </div>
      </nav>

      {/* <div></div> */}

      {/* <nav class="navbar  navbar-expand-lg navbar-light bg-dark ">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="/">
            Navbar
          </a>
          <div
            class="collapse navbar-collapse ml-auto"
            id="navbarTogglerDemo03"
          >
            <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/contact">
                  Contact
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/service">
                  Service
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}
      {/* ========================================= */}
      {/* <div className="loader-conatiner">
        <img src="images/newloader3.gif" alt="loader" />
      </div> */}

      {/* <header>
        <img src="images/try1.png" alt="" height="40px" width="" />
        <nav ref={navRef}>
          <a href="/"> Home</a>
          <a href="/#"> About</a>
          <a href="/#"> Home</a>
          <a href="/#"> Home</a>
          <a href="/#"> Home</a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header> */}
    </>
  );
};

export default Navbar;
