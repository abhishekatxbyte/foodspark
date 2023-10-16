import React from "react";
import style from "../ClientFeedback/ClientFeedback.module.css";
import reviewIcon1 from "../../../assets/images/CliendFeedback/reviews-icon-1.png";
import reviewIcon2 from "../../../assets/images/CliendFeedback/reviews-icon-2.png";
import reviewIcon3 from "../../../assets/images/CliendFeedback/reviews-icon-3.png";
import shape from "../../../assets/images/CliendFeedback/bg.png";
import client1 from "../../../assets/images/CliendFeedback/kelly-brown.jpg";
import client2 from "../../../assets/images/CliendFeedback/james-williams.jpg";
import client3 from "../../../assets/images/CliendFeedback/daniel-james.jpg";
import client4 from "../../../assets/images/CliendFeedback/sarah.jpg";
import client5 from "../../../assets/images/CliendFeedback/brian.jpg";
import client6 from "../../../assets/images/CliendFeedback/jason.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

function ClientFeedback() {
  return (
    <>
      <section className={`${style.testinomialSection} bg-none`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className={`${style.commonHead}`}>
                <span className={`${style.commonHeadSpan}`}>
                  What Our Clients Say About Foodspark
                </span>
                <h2 className={`${style.commonHeadh2}`}>
                  Over 1000+ Satisfied Clients and Still Growing
                </h2>
              </div>
              <div className={`${style.reviewTitle}`}>
                <h4 className={`${style.reviewTitleh4}`}>Read More Reviews</h4>
              </div>
              <div className={`${style.rowdiv} row justify-content-center`}>
                <a
                  href="/"
                  className={`${style.rowdiva} col-lg-4 col-4`}
                  style={{}}
                >
                  <img src={reviewIcon1} alt="review" className="img-fluid" />
                </a>
                <a href="/" className="wow fadeIn col-lg-4 col-4" style={{}}>
                  <img src={reviewIcon2} alt="review" className="img-fluid" />
                </a>
                <a href="/" className="wow fadeIn col-lg-4 col-4" style={{}}>
                  <img src={reviewIcon3} alt="review" className="img-fluid" />
                </a>
              </div>
            </div>
            <div className="col-lg-7">
              <div className={`${style.col7div}`}>
                <div className={`${style.shape} ${style.shapea1}`}>
                  <img
                    src={shape}
                    alt="shape"
                    className={`${style.shapeImg}`}
                  />
                </div>
                <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true }}
                  modules={[Pagination, Autoplay]}
                  // autoplay={{
                  //   delay: 2000,
                  //   disableOnInteraction: false,
                  // }}
                  direction="horizontal"
                  loop={true}
                >
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “We were searching for a web scraping partner for our
                        restaurant data scraping requirements. We have chosen
                        Foodspark and it was an amazing experience to work with
                        them. They are complete professionals in their attitude
                        towards data scraping. We would certainly recommend them
                        to others for their food data scraping requirements.”
                      </p>
                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client1}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              Kelly Brown
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              Chicago, USA
                            </p>
                            {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “Working with Foodspark was a completely exceptional
                        experience for me. Foodspark team is professional, calm,
                        and works well with all my food data scraping
                        requirements. 5 Stars to them for their web data
                        scraping work.

                      </p>
                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client2}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              James Williams
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              Philadelphia, USA
                            </p>
                            {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “We had a great time working with Foodspark for our
                        restaurant food data scraping requirements that no other
                        service providers would able to cope with competently.
                        Foodspark is just amazing! They have done their work
                        wonderfully well! Thank You Foodspark!”
                      </p>

                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client3}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              Daniel James
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              Philadelphia, USA
                            </p>
                            {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “We were searching for a food data scraping service
                        provider and we have found Foodspark! It was a great
                        experience working with this professional company. They
                        are absolutely professionals in their method of doing
                        web scraping. You can surely hire them for all your food
                        data scraping service requirements.”
                      </p>
                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client4}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              Sarah Brown
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              St. Louis, USA
                            </p>
                            {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “We are a food aggregator app and we were searching for
                        a food data aggregator app data scraping service
                        provider that can satisfy our requirements of extracting
                        food data from our competitor’s app. Team Foodspark has
                        worked extremely hard as the task was very difficult.
                        They have provided great results and we have become
                        their permanent client!”
                      </p>

                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client5}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              Brian Matthews{" "}
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              Dallas, USA{" "}
                            </p>
                            {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className={`${style.testimonialCard}`}>
                      <p className="">
                        “We are very much impressed with Foodspark for their
                        Food Data Scraping Services. Our requirements were quite
                        unusual and hard to implement but they were equally good
                        to the job and they have worked very hard to offer us
                        the finest results. Thumps Up to Foodspark!”
                      </p>

                      <div className={`${style.clientThumb}`}>
                        <div className={`${style.media} ${style.upset}`}>
                          <div
                            className={`${style.userImg} ${style.bdrRadius}`}
                          >
                            <img
                              src={client6}
                              alt="loading.."
                              className={`${style.userThumbImg} img-fluid rounded-circle`}
                            />
                          </div>
                          <div
                            className={`${style.mediaBody} ${style.userInfo}`}
                          >
                            <h5 className={`${style.userInfoh5}`}>
                              Jason Scott{" "}
                            </h5>
                            <p className={`${style.userInfopara}`}>
                              Phoenix, USA{" "}
                            </p>
                          {/* <i
                              className={`${style.userInfoI} fa fa-quote-right`}
                              aria-hidden="true"
                            ></i> */} 
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ClientFeedback;
