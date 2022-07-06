import React from "react";
import "./Slider.css";
const Slider = () => {
  return (
    <div>
      {/* <div
        id="carouselExampleIndicators"
        classNameName="carousel slide  slider_conatiner"
        data-bs-ride="carousel"
      >
        <div classNameName="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            classNameName="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div classNameName="carousel-inner">
          <div classNameName="carousel-item active">
            <img
              src="images/banner_image11.jpeg"
              classNameName="d-block w-100"
              alt="bday_image1"
            />
          </div>
          <div classNameName="carousel-item">
            <img
              src="images/banner_image14.jpeg"
              classNameName="d-block w-100"
              alt="..."
            />
          </div>
          <div classNameName="carousel-item">
            <img
              src="images/banner_image14.jpeg"
              classNameName="d-block w-100"
              alt="..."
            />
          </div>
          <div classNameName="carousel-item">
            <img
              src="images/banner_image13.png"
              classNameName="d-block w-100"
              alt="..."
            />
          </div>
        </div>

        <button
          classNameName="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            classNameName="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Previous</span>
        </button>
        <button
          classNameName="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            classNameName="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span classNameName="visually-hidden">Next</span>
        </button>
      </div> */}

      {/* <!-- slider starts --> */}
      <div
        id="carouselExampleIndicators"
        className="carousel slide slider_conatiner"
        data-ride="carousel"
      >
        {/* <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
        </ol> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/banner_image11.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/banner_image14.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/banner_image13.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="images/banner_image4.jpeg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-target="#carouselExampleIndicators"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
