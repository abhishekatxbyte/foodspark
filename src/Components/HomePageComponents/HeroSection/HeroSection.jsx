import React from "react";
import HeroTextSection from "./components/HeroTextSection/HeroTextSection";
import HeroCarousel from "./components/HeroCarousel/HeroCarousel";
import style from "./Hero.module.css";
const HeroSection = () => {
  return (
    <>
      <div className={style.heroSection}>
        <div className={`row ${style.fullHeight}`}>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <HeroTextSection />
          </div>
          <div className="col-lg-7 col-md-12 col-sn-12">
            <HeroCarousel />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
