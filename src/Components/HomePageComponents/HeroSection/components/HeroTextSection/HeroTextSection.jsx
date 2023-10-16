import React from "react";
import style from "./HeroTextSection.module.css";
import AwardLogo from "../../../../../assets/images/hero/awards-logo.png";

const HeroTextSection = () => {
  return (
    <>
      {/* <section className={`${style.HerobgImg} ${style.HeroCardWeb}`}> */}
      <section className={style.HeroCardWeb} >
        <div className="">
          <div className={`${style.Textsection}`}>
            <h1 className={style.Herohead} style={{}}>
              BEST ONLINE FOOD DELIVERY & RESTAURANT DATA SCRAPING SERVICES
            </h1>
            <p className={style.Heroheadpara} style={{}}>
              Get well-organized food & restaurant data without any technical
              problems. Just provide us the website to scrape and we will offer
              you scrapped data. With the best-quality food & restaurant data
              feeds, you can easily scrape data like menus, locations, mentions,
              reviews, and more.
            </p>
            <div className="">
              <button
                className={`${style.Letgetstarted} btn `}
                href="/"
                onClick={() =>setIsModalOpen(true)}
                >
                Let's Get Started &gt;
              </button>
            </div>
            <div style={{ marginTop: 50 }}>
              <img  className={`${style.AwardLogoImg}`} src={AwardLogo} alt="Awards Logo" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroTextSection;
