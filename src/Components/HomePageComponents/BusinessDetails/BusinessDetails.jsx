import React from "react";
import style from "../BusinessDetails/BusinessDetails.module.css";
import CustomerFocusImg from "../../../assets/images/BusinessDetailsImg/Customer-Focus.png";
import DataQualityImg from "../../../assets/images/BusinessDetailsImg/Data-Quality.png";
import BetterOutcomesImg from "../../../assets/images/BusinessDetailsImg/Better-Outcomes.png";
import aboutImg from "../../../assets/images/BusinessDetailsImg/about.jpg";
import restroDataImg1 from "../../../assets/images/BusinessDetailsImg/scrape-region-wise-restaurant-data.jpg";
import restroDataImg2 from "../../../assets/images/BusinessDetailsImg/extract-restaurant-data-from-food-delivery-restaurants.jpg";
import restroDataImg3 from "../../../assets/images/BusinessDetailsImg/extract-restaurant-menu-and-competitive-prices-using-item-modifiers.jpg";
import restroDataImg4 from "../../../assets/images/BusinessDetailsImg/packaging-delivery-charges-item-wise-service-and-discounts.jpg";
import restroDataImg5 from "../../../assets/images/BusinessDetailsImg/competitive-prices-for-food-restaurant-data.jpg";
import restroDataImg6 from "../../../assets/images/BusinessDetailsImg/scrape-region-wise-restaurant-data.jpg";

function BusinessDetails() {
  return (
    <>
      <section className={`${style.mainSec}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className={`${style.commonHead}`}>
                <span className={`${style.commonHeadspan}`}>WHY CHOOSE US</span>
                <h2 className={`${style.commonHeadh2}`}>
                  <span style={{ color: "#2948ff" }}>
                    Foodspark is Ranked as The
                  </span>{" "}
                  – Best in Food Scraping
                </h2>
                <p className={`${style.commonHeadpara}`}>
                  We offer Food Delivery App & Web Scraping services to all our
                  consumers with complete accuracy and delivery on-time. We
                  scrape accurate data and provide all the required business
                  details.
                </p>
                <div className={`${style.itemMediaObj}`}>
                  <div className={`${style.media}`}>
                    <div className={`${style.mediaImg}`}>
                      <img src={CustomerFocusImg} alt="icon" />
                    </div>
                    <div className="mediaBody">
                      <h4 className={`${style.mediah4}`}>Customer Focus</h4>
                      <p className={`${style.mediapara}`}>
                        "Happy Customers" always produce great results and
                        that’s the reason why we have a customer retention rate
                        of 90%!
                      </p>
                    </div>
                  </div>
                  <div className={`${style.media}`}>
                    <div className={`${style.mediaImg}`}>
                      <img src={DataQualityImg} alt="icon" />
                    </div>
                    <div className="mediaBody">
                      <h4 className={`${style.mediah4}`}>Data Quality</h4>
                      <p className={`${style.mediapara}`}>
                        Our experienced resources always use quality techniques
                        to pass on the advantages to our customers with no
                        additional cost!
                      </p>
                    </div>
                  </div>
                  <div className={`${style.media}`}>
                    <div className={`${style.mediaImg}`}>
                      <img src={BetterOutcomesImg} alt="icon" />
                    </div>
                    <div className="mediaBody">
                      <h4 className={`${style.mediah4}`}>Better Outcomes</h4>
                      <p className={`${style.mediapara}`}>
                        We help our customers with the best results by providing
                        professional food data scraping services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className={`${style.bgShape}`}>
                <img
                  src={aboutImg}
                  alt="lodaing..."
                  className={`${style.aboutImg} img-fluid`}
                />
              </div>
              <p className={`${style.aboutImgpara} mt-4 `}>
                We offer well-organized food data scraping services with
                different customization options. Our food delivery app & web
                data scraping services can fulfill all your requirements.
              </p>
              <div className={`${style.lnspCard}`}>
                <h3 className={`${style.lnspCardh3}`}>
                  Let's Start a{" "}
                  <span className={`${style.lnspCardSpan}`}>New Project</span>
                </h3>
                <p className={`${style.lnspCardpara}`}>
                  Want to try our food data scraping services? Let’s start a new
                  project together!
                </p>
                <div className="">
                  <button className={`${style.Requestaquote}`} href="/">
                    Request A Quate &gt;
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.serviceBlocksec}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`${style.commonHead2}`}>
                <span className={`${style.commonHead2span}`}>FEATURES</span>
                <h2 className={`${style.commonHead2h2}`}>
                  We Always Offer the Best!
                </h2>
                <p className={`${style.commonHead2para}`}>
                  At Foodspark, we use restaurant food data scraping to extract
                  data from restaurant websites to do experimental analysis that
                  offers complete insights.
                </p>
              </div>
            </div>
          </div>
          <div className={`${style.upset} row justify-content-center`}>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg1}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>1</span>
                <h3 className={`${style.psBlockh3}`}>
                  Scraping Region-Wise Restaurants Data
                </h3>
                <p className={`${style.psBlockpara}`}>
                  By scraping food & restaurants data, you can easily get
                  maximum data, applicable for you because they have a huge
                  database as well as it is very easy-to-use also. Foodspark
                  provides the Best Restaurant Data Extraction Services to
                  scrape region-wise restaurants location & menu data.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Find details about how to make different menus
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Help you in finding data, images, files, etc. used in
                    restaurant foods
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Use region-wise food and restaurants data scraping for
                    getting fast data
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>2</span>
                <h3 className={`${style.psBlockh3}`}>
                  Scraping Restaurants Data from Food Delivery Restaurants{" "}
                </h3>
                <p className={`${style.psBlockpara}`}>
                  You can utilize our restaurants food data scraping services
                  for different data analytics, experts, and app requirements.
                  They are dependable and provide accessible results.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Get the most appropriate data for you
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Get data, images, files, etc. using restaurant data scraping
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Use restaurants data scraping and avoid tedious work
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg2}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg3}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>3</span>
                <h3 className={`${style.psBlockh3}`}>
                  Scrape Restaurants Menu and Aggressive Prices with Item
                  Modifiers
                </h3>
                <p className={`${style.psBlockpara}`}>
                  Food and restaurant data scraping assists you in scraping
                  restaurant data including food name, menus, prices, etc.
                  having item modifiers including add-ons, which are extremely
                  important for various food businesses.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Frequently remove duplicate data
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Protect your web IPs from getting blocked
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Secure pricing menu evaluation procedures
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>4</span>
                <h3 className={`${style.psBlockh3}`}>
                  Item-Wise Services, Discounts, Delivery Charges, and Packaging{" "}
                </h3>
                <p className={`${style.psBlockpara}`}>
                  Foodspark copes with various formats. You can extract data
                  from numerous resources convenient in different formats. In
                  case, you need data points including prices, reviews, text,
                  online sources, or descriptions.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Get item-wise, delivery charges, packaging, and cut-price
                    data{" "}
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Get intuitive data, which don’t do settlements with accuracy
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Organize different varieties, which scrape diverse data
                    volumes
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg4}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg5}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>5</span>
                <h3 className={`${style.psBlockh3}`}>
                  Competitive Pricing to Get Food Restaurants Data
                </h3>
                <p className={`${style.psBlockpara}`}>
                  Competitive Price Intelligence helps businesses to leverage
                  various data insights. An easily used software selects to deal
                  with identifying requisite data, extracting that online, data
                  cleansing, merging datasets, getting quality controls, as well
                  as providing ready-to-use reports as well as improved data
                  visualizations for all business requirements.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Lowest cost for client acquisition having fast-tracking
                    regarding market growth{" "}
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Increase customer’s lifetime values as well as market reach
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Decreased risks and taking knowledgeable decisions
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.vCenter} col-lg-7`}>
              <div className={`${style.psBlock}`}>
                <span className={`${style.psBlockSpan}`}>6</span>
                <h3 className={`${style.psBlockh3}`}>
                  Mobile Apps Scraping to Scrape Restaurant Data
                </h3>
                <p className={`${style.psBlockpara}`}>
                  With mobile apps scraping for food restaurant data, you will
                  get results with precision and well-timed deliveries. Mobile
                  app scraping assists in getting product data as well as we
                  assist you in scraping precise data as well as provide vital
                  business data.
                </p>
                <ul className={`${style.psBlockul} mt-2 mb-4`}>
                  <li className={`${style.psBlockli}`}>
                    Quick turnaround because we understand you depend on us
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Find quick support to have fast actions
                  </li>
                  <li className={`${style.psBlockli}`}>
                    Resources to find big-scale supplies extremely easily
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${style.order1} col-lg-5`}>
              <div className={`${style.imgBlock1}`}>
                <img
                  src={restroDataImg6}
                  className={`${style.restroDataImg} img-fluid`}
                  alt="loading.."
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusinessDetails;
