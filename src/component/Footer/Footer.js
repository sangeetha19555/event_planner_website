import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer_box">
      <footer>
        <div className="footer_container">
          <div className="first footer-box1">
            <h3>About</h3>
            <p>
              We the “Mr &amp; Mrs Event planner” Team will organize all types
              of decorations for wedding, reception, birthday party, Baby shower
              decoration and get together etc.,
            </p>
          </div>
          <div className="first footer-box2">
            <h3>Contact</h3>
            <ul className="footer_content">
              <li>
                <img
                  src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png"
                  alt="phone_icon"
                  className="footer_phone_icon"
                />

                <a href="tel:6381008873">+91 6381008873</a>
              </li>
              <li>
                <img
                  src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png"
                  alt="phone_icon"
                  className="footer_phone_icon"
                />

                <a href="tel:9443535850">+91 9443535850</a>
              </li>
            </ul>
          </div>

          <div className="first footer-box3">
            <h3> Our Services</h3>
            <ul className="footer_content">
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/194/194366.png"
                  alt=""
                  className="our_services_icon"
                />
                <Link to="/birthday">Birthday Decoration</Link>
              </li>
              <li>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/Gifts/512/rings.png"
                  alt=""
                  className="our_services_icon"
                />

                <Link to="/wedding">Wedding Decoration</Link>
              </li>
              <li>
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4799/4799482.png"
                  alt=""
                  className="our_services_icon"
                />
                <Link to="/reception">Reception Decoration</Link>
              </li>
              <li>
                <img
                  src="https://clipartix.com/wp-content/uploads/2016/05/Baby-boy-free-baby-clipart-clip-art-boy-printable-and-baby.png"
                  alt=""
                  className="our_services_icon"
                />
                <Link to="/babyshower">Baby shower decoration</Link>
              </li>
              <li>
                <img
                  src="https://openclipart.org/image/2000px/93931"
                  alt=""
                  className="our_services_icon"
                />
                <Link to="/">surprise Party Decoration</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="copyrightText">
        <div className="copyrightText_companyName">
          <p>
            © 2022. {"   "}
            <span>
              <Link to="/">Mr &amp; Mrs Event Planner</Link>
            </span>
            . All rights reserved.
          </p>
        </div>
        <div className="copyrightText_DesignerName">
          <p>
            Designed by <span> Sangeetha.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
