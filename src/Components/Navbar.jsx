import React, { useState } from "react";
import style from "./style.module.css";
import BrandImg from "./../images/logo-white.png";
import PopupImg from "./../images/popup-bg.png";
import { Modal, Button, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Navbar(props) {
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary "
        style={{ height: 70 }}
      >
        <div className="container-fluid custom-navbar">
          <nav className="navbar">
            <div className="container-fluid">
              <a className="navbar-brand" href="/">
                <img className={style.logo} src={BrandImg} />
                {/* <img className={style.logo} src={BrandImg}/> */}
              </a>
            </div>
          </nav>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  HOME
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  API
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  SUITABLE FOR
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  TOP FOOD APP{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  COMPANY{" "}
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  BLOG{" "}
                </a>
              </li>
              <li className="nav-item">
                <button
                  className={`${style.requestaquote} nav-link active`}
                  href="/"
                  onClick={openModal}
                >
                  Request A Quate{" "}
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>{" "}
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="xl"
        style={{ display: "block", paddingRight: 6 }}
      >
       
        <Modal.Body>
          <button className={style['close-button']} onClick={closeModal}>
            &times; 
          </button>
          <Row>
            <div className="col-lg-4">
              <img src={PopupImg} className={`PopupImg img-fluid`} />
            </div>
            <div className="col-lg-8">
              <div style={{ fontWeight: 700, fontSize: 50 }} className="ms-1">
                Let's talk!
              </div>
              <p className="mt-2">
                We'de love to hear what you are working on. Drop us a note here
                and we'll get back to you within 24 hours.
              </p>
              <form onSubmit={formik.handleSubmit}>
                <div className="row">
                  <div className="col-sm-6 mt-5">
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
                  <div className="col-sm-6 mt-5">
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
                  <div className="col-sm-6 mt-5">
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
                  <div className="col-sm-6 mt-5">
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
                      <div className={style["dropdown-arrow"]}>&#9660;</div>{" "}
                      {/* Down arrow character */}
                    </div>
                    {formik.touched.requirements &&
                    formik.errors.requirements ? (
                      <div className="error" style={{ color: "red" }}>
                        {formik.errors.requirements}
                      </div>
                    ) : null}
                  </div>
                </div>
                <div className="col-lg-12 mt-5">
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

                <div className="col-lg-6 mt-5">
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
                <div className="col-lg-6 mt-5">
                  <button
                    className={`${style.PopupGetafreeCodeButton} btn btn-primary`}
                    type="submit"
                  >
                    Get a Free Quote &gt;
                  </button>
                </div>
              </form>
            </div>
          </Row>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}
