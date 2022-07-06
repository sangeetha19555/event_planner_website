import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <section className="contact_layout">
      <div
        className="text-title_container"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
      >
        <h2 className="text_title">Contact Details</h2>
      </div>
      <div className="contact_container_box">
        <div className="contact_container_box-image">
          {/* image */}
          <img
            src="images/contact_image.png"
            alt="contact_image"
            data-aos="fade-left"
            data-aos-anchor="#example-anchor"
            // data-aos-offset="500"
            data-aos-duration="800"
            data-aos-easing="ease-in-back"
          />
        </div>
        <div className="contact_container_box-content">
          {/* content */}

          <h4
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1300"
            data-aos-delay="700"
          >
            <span className="logo_title1">Mr</span>{" "}
            <span className="logo_title2">&amp;</span>{" "}
            <span className="logo_title1">Mrs</span> Event Planner
          </h4>
          <hr />
          <div>
            <p className="contact_text">
              Contact us to make your event more colourful.
            </p>
          </div>
          <p>
            <img
              src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png"
              alt="phone_icon"
              className="footer_phone_icon"
            />

            <a href="tel:6381008873">+91 6381008873</a>
          </p>
          <p>
            <img
              src="https://i.pinimg.com/originals/c1/00/d4/c100d4c70bc17365a2a42ac22ef782da.png"
              alt="phone_icon"
              className="footer_phone_icon"
            />

            <a href="tel:9443535850">+91 9443535850</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
