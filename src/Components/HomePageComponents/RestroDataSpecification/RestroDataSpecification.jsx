import React from "react";
import style from "../RestroDataSpecification/RestroDataSpecification.module.css";
import restaurantName from "../../../assets/images/DataSpecification/restaurant-name.png";
import location from "../../../assets/images/DataSpecification/location.png";
import restaurantType from "../../../assets/images/DataSpecification/restaurant-type.png";
import listings from "../../../assets/images/DataSpecification/listings.png";
import reviews from "../../../assets/images/DataSpecification/reviews.png";
import workingHours from "../../../assets/images/DataSpecification/working-hours.png";
import foodMenu from "../../../assets/images/DataSpecification/food-menu.png";
import rating from "../../../assets/images/DataSpecification/ratings.png";
import onlineFoodDelivery from "../../../assets/images/DataSpecification/online-food-delivery.png";
import url from "../../../assets/images/DataSpecification/url.png";
import contactEmail from "../../../assets/images/DataSpecification/contact-email.png";
import phone from "../../../assets/images/DataSpecification/phone.png";

function RestroDataSpecification() {
  return (
    <section className={`${style.MainSec} ${style.PadTb}`}>
      <div className={`${style.Container} container`}>
        <div className={` ${style.HeadRow} row justify-content-center`}>
          <div className="col-lg-8">
            <div className={`${style.CommonHead}`}>
              <h2 className={`${style.CommonHeadh2}`}>Restaurant Data Specifications</h2>
              <p className={`${style.CommonHeadpara}`}>
                We can offer all the accessible data fields you need from the
                restaurants.
              </p>
            </div>
          </div>
        </div>
        <div className={`${style.Row} ${style.Mt30}`}>
          <div className="col-lg-3 col-sm-6 col-6 mb-3">
            <div className={`${style.IndustryWorkFor}`} >
              <img
                src={restaurantName}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Restaurant’s Name</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Restaurant’s name that shows its identity</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={location}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Location</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Restaurant’s location as it’s visible on the website</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={restaurantType}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Restaurant’s Type</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Ethnic, Fast Food, Family, Casual, Premium, etc</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={listings}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Listings</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Data of different restaurants from listed websites</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={reviews}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Reviews</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Know what people to see what people say</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={workingHours}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Working Hours</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Opening and closing time</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={foodMenu}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Food Menu</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>What a restaurant offers in food</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={rating}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Ratings</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Ratings from various restaurant rating sites</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={onlineFoodDelivery}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>
                  Online-Food-Delivery
                </h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Know who takes and delivers online food orders</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={url}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Restaurant’s URL</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Restaurant’s website URL</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={contactEmail}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Contact Email</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Email Id where you can send your thoughts</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-sm-6 col-6 mb-3 ">
            <div className={`${style.IndustryWorkFor}`}>
              <img
                src={phone}
                className={`${style.IndustryWorkForImg} img-fluid`}
              />
              <div>
                <h6 className={`${style.IndustryWorkh6}`}>Phone Numbers</h6>
                <p className={`${style.IndustryWorkpara} ms-3`}>Phone numbers to directly call them</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RestroDataSpecification;
