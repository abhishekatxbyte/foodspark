import React from "react";
import style from "./Core.module.css";

const Coreservice = () => {
  return (
    <section>
      <div>
        <h1 className={style.OuerCoreService}>
          <center>OUR CORE SERVICES</center>
        </h1>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h5 className={style.Sevice}>
                <center>SERVICES</center>
              </h5>
              <h1 className="mb-3">
                <center>Our Services</center>
              </h1>
              <p className={""} style={{ fontSize: 16 }}>
                <center>
                  Our core services include Food Aggregator, Food Data Scraping,
                  and Food Data API to get the best food & restaurants data
                  scraping services.
                </center>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4">ddd</div>
            <div className="col-lg-4">ddd</div>
            <div className="col-lg-4">ddd</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coreservice;
