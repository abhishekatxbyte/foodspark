import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "./HeroCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import ZomatoImg from "./../../../../../assets/images/service/zomato.png";
import DoorDashImg from "./../../../../../assets/images/service/DoorDash.png";
import GrubHubImg from "./../../../../../assets/images/service/grubhub.png";
import UberEatsImg from "./../../../../../assets/images/service/ubereats.png";
import DeliverooImg from "./../../../../../assets/images/service/deliveroo.png";
import JustEatImg from "./../../../../../assets/images/service/justeats.png";
import SeamlessImg from "./../../../../../assets/images/service/seamless.png";
import IFoodImg from "./../../../../../assets/images/service/ifood.png";
import PostMatesImg from "./../../../../../assets/images/service/postmates.png";
import GoPuffImg from "./../../../../../assets/images/service/gopuff.png";
import SwiggyImg from "./../../../../../assets/images/service/swiggy.png";

const HeroCarousel = () => {
  const carouselContainerStyle = {
    background: "transparent",
    marginTop: "235px",
    marginRight: "10px",
    marginLeft: "80px",
  };


  return (
    <section>
      <div style={carouselContainerStyle} className="carousel-container">
        <Swiper
          //  updateOnImagesReady={true}
          slidesPerView={3}
          rewind={true}
          centeredSlides={true}
          spaceBetween={10}
          grabCursor={true}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          direction="horizontal"
          loop={true}
          className="mySwiper"
          // style={{height : "50%"  , width : "50%"}}
        >
          <SwiperSlide>
            <div className="card card1" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={ZomatoImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">Zomato</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card2" style={{ backgroundColor: "#6610f2" }}>
              <div>
                <img src={DoorDashImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">DoorDash</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card3" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={GrubHubImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">GrubHub</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card4" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={UberEatsImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">UberEats</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card5" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={DeliverooImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">Deliveroo</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card6" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={JustEatImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">JustEat</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card7" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={SeamlessImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">Seamless</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card8" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={IFoodImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">Ifood</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card9" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={PostMatesImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">PostMates</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card10" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={GoPuffImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">GoPuff</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card card11" style={{ backgroundColor: "#ff704d" }}>
              <div>
                <img src={SwiggyImg} className="zoom-in" alt="..." />
              </div>
              <div className="ImgTitle">
                <span className="">Swiggy</span> <br />
                Data Scraping
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default HeroCarousel;
