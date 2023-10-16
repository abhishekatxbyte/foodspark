import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import style from "./ClientServices.module.css";
import "swiper/css";
import "swiper/css/pagination";
import Client1 from "../../../assets/images/Client/client1.png";
import Client2 from "../../../assets/images/Client/client2.png";
import Client3 from "../../../assets/images/Client/client3.png";
import Client4 from "../../../assets/images/Client/client4.png";
import YearExpImg from "../../../assets/images/ComponyProfile/years-experience.png";
import TeamMemberImg from "../../../assets/images/ComponyProfile/team-members.png";
import HappyClientImg from "../../../assets/images/ComponyProfile/happy-clients.png";
import SucProImg from "../../../assets/images/ComponyProfile/successful-projects.png";
import MmPageImg from "../../../assets/images/ComponyProfile/mm-pages-crawled-every-month.png";
import SupportImg from "../../../assets/images/ComponyProfile/support-available.png";


const ClientServices = () => {
  const [counter1, setCounter1] = useState(0);
  const [fastestCounter1, setFastestCounter1] = useState(0);

  const [counter2, setCounter2] = useState(0);
  const [fastestCounter2, setFastestCounter2] = useState(0);

  const [counter3, setCounter3] = useState(0);
  const [fastestCounter3, setFastestCounter3] = useState(0);

  const [counter4, setCounter4] = useState(0);
  const [fastestCounter4, setFastestCounter4] = useState(0);

  const [counter5, setCounter5] = useState(0);
  const [fastestCounter5, setFastestCounter5] = useState(0);

  useEffect(() => {
    const updateCounter = (
      counter,
      setCounter,
      fastestCounter,
      setFastestCounter,
      targetValue,
      incrementValue
    ) => {
      if (counter < targetValue) {
        setCounter((prevCounter) => prevCounter + incrementValue);
      } else {
        if (counter > fastestCounter) {
          setFastestCounter(counter);
        }
      }
    };

    const interval1 = setInterval(() => {
      updateCounter(
        counter1,
        setCounter1,
        fastestCounter1,
        setFastestCounter1,
        10,
        1
      );
    }, 0.0);

    const interval2 = setInterval(() => {
      updateCounter(
        counter2,
        setCounter2,
        fastestCounter2,
        setFastestCounter2,
        200,
        1
      );
    }, 0.0);

    const interval3 = setInterval(() => {
      updateCounter(
        counter3,
        setCounter3,
        fastestCounter3,
        setFastestCounter3,
        1000,
        10
      );
    }, 0.0);

    const interval4 = setInterval(() => {
      updateCounter(
        counter4,
        setCounter4,
        fastestCounter4,
        setFastestCounter4,
        9000,
        10
      );
    }, 0.0);

    const interval5 = setInterval(() => {
      updateCounter(
        counter5,
        setCounter5,
        fastestCounter5,
        setFastestCounter5,
        1000,
        10
      );
    }, 0.0);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
      clearInterval(interval4);
      clearInterval(interval5);
    };
  }, [
    counter1,
    counter2,
    counter3,
    counter4,
    counter5,
    fastestCounter1,
    fastestCounter2,
    fastestCounter3,
    fastestCounter4,
    fastestCounter5,
  ]);

  return (
    <>
      <section>
        <div className={`${style.mainClintserv} swiper-container`}>
          <div className="row">
            <div className="col-lg-12 col-sm-12" style={{}}>
              <Swiper
                slidesPerView={5}
                rewind={true}
                centeredSlides={true}
                spaceBetween={0}
                grabCursor={true}
                modules={[Pagination, Autoplay]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                direction="horizontal"
                loop={true}
                className="mySwiper"
                
              >
                <SwiperSlide>
                  <div>
                    <img src={Client1} className={`${style.clientImg}`} alt="..." />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={Client2} className={`${style.clientImg}`} alt="..."  />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={Client3} className={`${style.clientImg}`} alt="..." />
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div>
                    <img src={Client4} className={`${style.clientImg}`} alt="..." />
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
            <div className="row mt-5">
              <div className={`${style.restoDetails} col-lg-6 col-md-12 col-sm-12`}>
                <h2 className={`${style.h2}`}>
                  <span style={{ color: "Blue" }}>Transform</span> Restaurants
                  Websites into Well-Structured Data
                </h2>
                <div className={`${style.restroDetailspara} mt-4`}>
                  <p>
                    Scraping restaurant websites data could be a hard job to do,
                    if you don’t know how to do it. Use our restaurants data
                    scraping services for all your business requirements. Scrape
                    data like food name, menus, and food prices with various
                    item modifiers or variants, which are extremely important
                    for various food businesses
                  </p>
                </div>

                <h3 className={`${style.h3} mt-4`}>
                  Let's Start a New Project Together
                </h3>
                <div className="">
                  <button className={`${style.Requestaquote}`} href="/">
                    Request A Quate &gt;
                  </button>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 col-md-12">
                <div>
                  <div className={`${style.rows} row`}>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img1}`}>
                        <img
                          src={YearExpImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>
                          {counter1}+
                        </span>
                        <p className={`${style.profilepara}`}>
                          Years Experience
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img2}`}>
                        <img
                          src={TeamMemberImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>
                          {counter2}+
                        </span>
                        <p className={`${style.profilepara}`}>Team Members</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img3}`}>
                        <img
                          src={HappyClientImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>
                          {counter3}+
                        </span>
                        <p className={`${style.profilepara}`}>Happy Clients</p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img4}`}>
                        <img
                          src={SucProImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>
                          {counter4}k+
                        </span>
                        <p className={`${style.profilepara}`}>
                          Successful Projects
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img5}`}>
                        <img
                          src={MmPageImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>
                          {counter5}k+
                        </span>
                        <p className={`${style.profilepara}`}>
                          MM Pages Crawled Every Month
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
                      <div className={`${style.card} ${style.img6}`}>
                        <img
                          src={SupportImg}
                          className={`${style.profileimg}`}
                          alt="..."
                        />
                        <span className={`${style.serviceCounter}`}>24/7</span>
                        <p className={`${style.profilepara}`}>
                          Support Available
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientServices;
