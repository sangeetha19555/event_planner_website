import React from "react";
import HomePageContent from "./HomePageContent/HomePageContent";
import PhotoSilder from "./photoSilder/PhotoSilder";
import Slider from "./silder/Slider";

const HomePage = () => {
  return (
    <div>
      <Slider />
      <HomePageContent />
      <PhotoSilder />
    </div>
  );
};

export default HomePage;
