import React, { useState } from "react";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import style from "../../HomePageComponents/GetInTouch/GetInTouch.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import contactImg from "../../../assets/images/GetinTouchImg/contact.jpg";
import Newyork from "../../../assets/images/GetinTouchImg/OurofficeImg/newyork.png";
import Sydney from "../../../assets/images/GetinTouchImg/OurofficeImg/sydeny.png";


function GetInTouch() {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile is required"),
    requirements: Yup.string().required("Requirements is required"),
    message: Yup.string().required("Message is required"),
    file: Yup.mixed().required("File is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      requirements: "",
      message: "",
      file: null,
    },
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className={`${style.mainFormsec}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <img src={contactImg} className={`PopupImg img-fluid`} />
            </div>
            <div className="col-lg-8">
              <h1 className="ms-1">Get in touch</h1>
              <p className={`${style.mainFormsecpara} mt-3`}>
                We will catch you as early as we receive the message
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row mt-5">
                  <div className="col-sm-6 mt-3">
                    <input
                      className={`${style.infoPlaceholder} form-control`}
                      name="name"
                      placeholder="Enter Name"
                      type="text"
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.name && formik.errors.name ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.name}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-sm-6 mt-3">
                    <input
                      className={`${style.infoPlaceholder} form-control`}
                      name="email"
                      placeholder="Enter Email"
                      type="text"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.email}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 mt-3">
                    <input
                      className={`${style.infoPlaceholder} form-control`}
                      name="mobile"
                      placeholder="Enter Mobile"
                      type="text"
                      value={formik.values.mobile}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.touched.mobile && formik.errors.mobile ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.mobile}
                      </div>
                    ) : null}
                  </div>
                  <div className="col-sm-6 mt-3">
                    <div className={style["custom-select-wrapper"]}>
                      <select
                        className={`form-control ${style["custom-select"]}`}
                        name="requirements"
                        value={formik.values.requirements}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      >
                        <option value="">Select Requirements</option>
                        <option value="API">API</option>
                        <option value="Service">Service</option>
                      </select>
                      <div className={style["dropdown-arrow"]}>&#9660;</div>
                    </div>
                    {formik.touched.requirements &&
                    formik.errors.requirements ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.requirements}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-12 mt-3">
                  <textarea
                    className={`${style.infoPlaceholder} form-control`}
                    name="message"
                    placeholder="Enter Your Message"
                    type="text"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  {formik.touched.message && formik.errors.message ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.message}
                    </div>
                  ) : null}
                </div>

                <div className="col-lg-6 mt-3">
                  <input
                    type="file"
                    name="file"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "file",
                        event.currentTarget.files[0]
                      );
                    }}
                  />
                  {formik.touched.file && formik.errors.file ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.file}
                    </div>
                  ) : null}
                </div>
                <div className="col-lg-6 mt-3">
                  <ReCAPTCHA sitekey={"http://localhost:3000/"} />

                  {/* {formik.touched.file && formik.errors.file ? (
                    <div className="error" style={{ color: "red" }}>
                      {formik.errors.file}
                    </div>
                  ) : null} */}
                </div>
                <div className="col-lg-6 mt-3">
                  <button
                    className={`${style.SubmitButton} btn btn-primary`}
                    type="submit"
                  >
                    Submit{" "}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className={`${style.ourOffice}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className={`${style.commonHead}`}>
                <span className={`${style.commonHeadSpan}`}>Our Locations</span>
                <h2 className={`${style.commonHeadh2}`}>Our Office</h2>
              </div>
            </div>
          </div>
          <div className={`${style.rowUpset} ${style.shapenum} row justify-content-center `}>
            <div
              className="col-lg-4 col-sm-6"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className={`${style.officeCard}`}>
                <div
                  className={`${style.skylineImg} skyline-img`}
                  style={{
                    willChange: 'transform',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}                >
                  <img
                    src={Newyork}
                    alt="New York"
                    className="img-fluid"
                  />
                </div>
                <div className={`${style.officeText}`}>
                  <h4 className={`${style.officeTexth4}`}>USA</h4>
                  <p className={`${style.officeTextpara}`}>10685-B Hazelhurst Dr.#23604 Houston,TX 77043 USA</p>
                  <a href="#" className="btn-outline rount-btn">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                  <a
                    href="tel:+1(832)2517311"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-phone-alt"></i>
                  </a>
                  <a
                    href="mailto:info@foodspark.io"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-sm-6 shape-loc wow fadeInUp"
              style={{
                visibility: "visible",
                animationDelay: "0.2s",
                animationName: "fadeIn",
              }}
            >
              <div className="office-card">
                <div
                  className="skyline-img"
                  style={{
                    willChange: 'transform',
                    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
                  }}                >
                  <img
                    src={Sydney}
                    alt="sydney"
                    className="img-fluid"
                  />
                </div>
                <div className={`${style.officeText}`}>
                  <h4 className={`${style.officeTexth4}`}>Germany</h4>
                  <p className={`${style.officeTextpara}`}>Kopenhagener Str.71034 Böblingen, Germany</p>
                  <a href="#" className="btn-outline rount-btn">
                    <i className="fas fa-map-marker-alt"></i>
                  </a>
                  <a
                    href="tel:+1(832)2517311"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-phone-alt"></i>
                  </a>
                  <a
                    href="mailto:info@foodspark.io"
                    target="blank"
                    className="btn-outline rount-btn"
                  >
                    <i className="fas fa-envelope"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default GetInTouch;
