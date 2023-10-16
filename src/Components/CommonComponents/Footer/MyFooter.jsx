import React from "react";
import style from "../Footer/MyFooter.module.css"
import brandLogo from "../../../assets/images/Brandlogo.png"
import zomatoImg from "../../../assets/images/FooterImg/zomato.png"
import guruImg from "../../../assets/images/FooterImg/grubhub.png"
import uberImg from "../../../assets/images/FooterImg/ubereats.png"
import postImg from "../../../assets/images/FooterImg/postmates.png"
import doorImg from "../../../assets/images/FooterImg/doordash.png"
import seamImg from "../../../assets/images/FooterImg/seamless.png"
import justImg from "../../../assets/images/FooterImg/justeat.png"
import delivImg from "../../../assets/images/FooterImg/deliveroo.png"
import ifoodImg from "../../../assets/images/FooterImg/ifood.png"
import gopuffImg from "../../../assets/images/FooterImg/gopuff.png"
import swiggyImg from "../../../assets/images/FooterImg/swiggy.png"
import desclaimerImg from "../../../assets/images/FooterImg/disclaimer.jpg"


function MyFooter() {
  return (
    <>
      <footer className={`${style.mainFooter} dark-footer  pt60 nshape dark-footer-1`}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6  ftr-brand-pp">
              <div className="mb20 mt10">
                <img src={brandLogo} alt={"Loading..."} className={` ${style.brandLogoImg} img-fluid`} />
              </div>

              <p className={` ${style.brandLogoImgpara}`} >
                World’s largest food and restaurant companies rely on Foodspark
                to transform millions of web pages into actionable data.
              </p>

              <div className={` ${style.socialIcon}`}>
                {/* <!-- <a href="https://www.facebook.com/Foodsparkio" target="blank"><i className="fab fa-facebook"></i></a> --> */}

                <a
                  href="https://www.pinterest.co.uk/foodspark/_saved/"
                  target="blank"
                >
                  <i className="fab fa-pinterest"></i>
                </a>

                <a
                  href="https://www.linkedin.com/company/foodspark"
                  target="blank"
                >
                  <i className="ti-linkedin"></i>
                </a>

                {/* <!--  <a href="https://www.instagram.com/foodsparkio/" target="blank"><i className="fab fa-instagram"></i></a> --> */}

                <a href="https://medium.com/@foodspark">
                  <i className="fab fa-medium"></i>
                </a>

                <a href="https://foodnspark.blogspot.com/">
                  <i className="fab fa-blogger"></i>
                </a>

                <a href="https://twitter.com/foodspark1">
                  <i className="fab fa-twitter-square"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-sm-6">
              <h5 className={`${style.headTitle}`}>Suitable For</h5>

              <ul className="footer-address-list link-hover"  style={{listStyle : "none" , textDecoration : "none" , color : "#23242a"}}>
                <li > 
                  <a href="food-aggregators-scraping" className="fromleft" style={{textDecoration : "none" , color : "#23242a"}}>
                    Food Aggregator
                  </a>
                </li>
                <li>
                  <a href="food-data-scraping" className="fromleft" style={{textDecoration : "none" , color : "#23242a"}}>
                    Food Data Scraping
                  </a>
                </li>
                <li>
                  <a href="food-scraping-api" className="fromleft" style={{textDecoration : "none" , color : "#23242a"}}>
                    Food Data API
                  </a>
                </li>
                <li>
                  <a
                    href="big-basket-grocery-extraction-service"
                    className="fromleft"
                    style={{textDecoration : "none" , color : "#23242a"}}
                  >
                    Grocery Data
                  </a>
                </li>
                <li>
                  <a
                    href="swiggy-restaurant-data-scraping-service"
                    className="fromleft"
                    style={{textDecoration : "none" , color : "#23242a"}}
                  >
                    Restaurant Data
                  </a>
                </li>
                <li>
                  <a
                    href="menupages-data-scraping-services"
                    className="fromleft"
                    style={{textDecoration : "none" , color : "#23242a"}}
                  >
                    Menu Data
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-sm-6 footer-blog-">
              <h5 className={`${style.headTitle}`}>Top Food App</h5>

              <div className="d-flex">
                <ul className="footer-address-list link-hover mr-4"  style={{listStyle : "none"}}>
                  <li>
                    <img src={zomatoImg}  className={`${style.foodShopImg}`} alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="zomato-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Zomato
                    </a>
                  </li>

                  <li>
                    <img src={guruImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="grubhub-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      GrubHub
                    </a>
                  </li>

                  <li>
                    <img src={uberImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="ubereats-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      UberEats
                    </a>
                  </li>

                  <li>
                    <img src={postImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="postmates-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Postmates
                    </a>
                  </li>

                  <li>
                    <img src={doorImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="doordash-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      DoorDash
                    </a>
                  </li>

                  <li>
                    <img src={seamImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="seamless-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Seamless
                    </a>
                  </li>
                </ul>

                <ul className="footer-address-list link-hover ml-3"  style={{listStyle : "none"}}>
                  <li>
                    <img src={justImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="justeat-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      JustEat{" "}
                    </a>
                  </li>

                  <li>
                    <img src={delivImg} className={`${style.foodShopImg}`}   alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="deliveroo-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Deliveroo
                    </a>
                  </li>

                  <li>
                    <img src={ifoodImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="ifood-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Ifood
                    </a>
                  </li>

                  <li>
                    <img src={gopuffImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="gopuff-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      gopuff
                    </a>
                  </li>

                  <li>
                    <img src={swiggyImg} className={`${style.foodShopImg}`}  alt={"Loading..."} />
                    &nbsp;
                    <a
                      href="swiggy-restaurant-data-scraping-service"
                      className="fromleft"
                      style={{textDecoration : "none" , color : "#23242a"}}
                    >
                      Swiggy
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-sm-6">
              <h5 className={`${style.headTitle} `}>Contact Us</h5>

              <ul className={`${style.contactusUl} footer-address-list ftr-details`}>
                <li className={`${style.contactusLi}`}>
                  <span className={`${style.contactusSpan1}`}>
                    <i className="fas fa-clock"></i>
                  </span>
                  <p className={`${style.contactuspara}`}>
                    Email
                    <span className={`${style.contactusSpan2}`}>
                      <a href="mailto:info@foodspark.io"   style={{textDecoration : "none" , color : "#23242a"}}>info@foodspark.io</a>
                    </span>
                  </p>
                </li>

                <li className={`${style.contactusLi}`}>
                  <span className={`${style.contactusSpan1}`}>
                    <i className="fas fa-phone-alt"></i>
                  </span>

                  <p className={`${style.contactuspara}`}> 
                    Phone
                    <span  className={`${style.contactusSpan2}`}>
                      {" "}
                      <a href="tel: +1(832) 251 7311"   style={{textDecoration : "none" , color : "#23242a"}}> +1(832) 251 7311</a>
                    </span>
                  </p>
                </li>

                <li className={`${style.contactusLi}`}>
                  <span className={`${style.contactusSpan1}`}>
                    <i className="fas fa-map-marker-alt"></i>
                  </span>

                  <p className={`${style.contactuspara}`}>
                    Address
                    <span className={`${style.contactusSpan2}`}>
                      10685-B Hazelhurst Dr.#23604 Houston,TX 77043 USA
                    </span>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className={`${style.endFooter} end-footer pb-1`}>
            <div className="row">
              <div className="col-lg-6">
                <div className="footer-copyrights-">
                  <p>Copyright © 2020-23 FoodSpark. All rights reserved.</p>
                </div>
              </div>

              <div className="col-lg-6">
                <ul className={`${style.endFooterUl}`} style={{listStyle : "none",}}>
                  <li className={`${style.endFooterLi}`}>
                    <a href="privacy-policy" className={`${style.endFooterA}`}>Privace &amp; Policy</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row desclaimer">
              <div className="col-md-12">
                <marquee behavior="" direction="">
                  <div className="d-flex">
                    <img src={desclaimerImg}  className={`${style.desclaimerImg}`} alt={"desclaimer..."} />
                    <p style={{fontSize:"11px"}} className="ms-1 mt-1">
                      <b>Disclaimer :</b> Foodspark.com only extracts or scrape
                      the information or the data that is publicly available as
                      well as does not scrape personal or identity-related
                      information.
                    </p>
                  </div>
                </marquee>
              </div>
            </div>
          </div>
        </div>

        <input type="hidden" value="index" id="page-name" />
        <input
          type="hidden"
          value="https://www.foodspark.io/chownow-restaurant-data-extraction-services"
          id="last_page"
        />
      </footer>
    </>
  );
}

export default MyFooter;
