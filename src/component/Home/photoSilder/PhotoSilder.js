// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "./PhotoSilder.css";
// import required modules
import { Autoplay, EffectCoverflow } from "swiper";
const PhotoSilder = () => {
  return (
    <div>
      <div
        className="text-title_container"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
      >
        <h1 className="text_title">Gallery</h1>
      </div>
      <div className="sliderimage_conatiner">
        <Swiper
          grabCursor={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 40,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectCoverflow]}
          className="mySwiper"
        >
          <div className="image_containerbox ">
            <SwiperSlide>
              <img src="images/img1.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img2.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img3.jpeg" alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="images/img4.jpeg" alt="" />
            </SwiperSlide>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default PhotoSilder;
