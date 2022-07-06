import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import "./galleryStyle.css";
import { babyShower_data } from "./PhotoDatas";
const BabyShowerPage = () => {
  const [model, setModel] = useState(false);
  const [tempImgsrc, setTempImgsrc] = useState("");
  const getImage = (imgSrc) => {
    console.log(imgSrc);
    setTempImgsrc(imgSrc);
    setModel(true);
  };
  return (
    <div className="gallery_layout">
      <div
        className="text-title_container"
        data-aos="zoom-in"
        data-aos-offset="0"
        data-aos-easing="ease-in-sine"
      >
        <h3 className="text_title">BabyShower Decoration</h3>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempImgsrc} alt="gallery_photo" className="tempImgsrc" />
        <CloseIcon onClick={() => setModel(false)} className="close_icon" />
      </div>
      <section className="gallery_section">
        <div className="gallery_container_box">
          {babyShower_data.map((el, id) => (
            <div
              className="gallery_container-imagecard"
              key={id}
              onClick={() => getImage(el.img_url)}
              data-aos="zoom-in"
              data-aos-offset="0"
              data-aos-easing="ease-in-sine"
            >
              <img src={el.img_url} alt="babyShower_image" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BabyShowerPage;
