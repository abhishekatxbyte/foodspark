import React from "react";
import style from "./Core.module.css";
import FoodAggImg from "../../../assets/images/servicesicons/food-aggregators.png";
import FooDSImg from "../../../assets/images/servicesicons/f-ood-data-scraping.png";
import FoodDAImg from "../../../assets/images/servicesicons/food-data-api.png";

const Coreservice = () => {
  return (
    <section>
      <div className={`${style.mainCoreserv}`}>
        <div className="container">
          <h1 className={style.OuerCoreService}>
            <center>OUR CORE SERVICES</center>
          </h1>
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                <h5 className={style.Sevice}>
                  <center>SERVICES</center>
                </h5>
                <h2 className={`${style.h2}`}>
                  <center>Our Services</center>
                </h2>
                <p className={`${style.OurServPara}`}>
                  <center>
                    Our core services include Food Aggregator, Food Data
                    Scraping, and Food Data API to get the best food &
                    restaurants data scraping services.
                  </center>
                </p>
              </div>
            </div>
            <div className={`${style.row} row`}>
              <div
                className="col-lg-4 col-md-6 col-sm-12 mt-2"
                style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}
              >
                <div className={`${style.serviceCard}`}>
                  <h4 className={`${style.h4}`}>Food Aggregator</h4>
                  <div className="tec-icon">
                    <ul className={`${style.ServIconSlidr} ${style.ul}`}>
                      <li>
                        <a href="/"></a>
                        <div className="img-icon">
                          <a href="/"></a>
                          <a href="/">
                            <img src={FoodAggImg} alt="Food Aggregator" />
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className={`${style.p}`}>
                    Food Aggregator created on the conventional food delivery
                    models give access to many restaurants using one online
                    portal.
                  </p>
                  <a href="/" className={`${style.linkPrbs} ${style.a}`}>
                    Read More <i></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-2"   style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}>
                <div className={`${style.serviceCard}`}>
                  <h4 className={`${style.h4}`}>Food Data Scraping</h4>
                  <div className="tec-icon">
                    <ul className={`${style.ServIconSlidr} ${style.ul}`}>
                      <li>
                        <a href="/"></a>
                        <div className="img-icon">
                          <a href="/"></a>
                          <a href="/">
                            <img src={FooDSImg}  alt="Food Data Scraping"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className={`${style.p}`}>
                    With our best-quality food data scraping services, you can
                    easily get access of structured restaurant and food data
                    from one or several websites online so you may scale up your
                    project.
                  </p>
                  <a href="/" className={`${style.linkPrbs} ${style.a}`}>
                    Read More <i></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12 mt-2"   style={{
                  visibility: "visible",
                  animationDelay: "0.2s",
                  animationName: "fadeIn",
                }}>
                <div className={`${style.serviceCard}`}>
                  <h4 className={`${style.h4}`}>Food Data API</h4>
                  <div className="tec-icon">
                    <ul className={`${style.ServIconSlidr} ${style.ul}`}>
                      <li>
                        <a href="/"></a>
                        <div className="img-icon">
                          <a href="/"></a>
                          <a href="/">
                            <img src={FoodDAImg} alt="Food Data API"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <p className={`${style.p}`}>
                    Our developers have created applications for nutritionists,
                    chefs, foodies, and farmers, with many APIs (Application
                    Programming Interfaces) to select from.
                  </p>
                  <a href="/" className={`${style.linkPrbs} ${style.a}`}>
                    Read More <i></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coreservice;
