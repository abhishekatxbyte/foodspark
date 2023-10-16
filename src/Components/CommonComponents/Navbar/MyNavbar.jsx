import React, { useState } from "react";
import style from "./style.module.css";
import BrandWhiteImg from "./../../../assets/images/BrandWhiteImg.png";
import PopupImg from "./../../../assets/images/PopupImg.png";
import { useNavigate } from "react-router-dom";
import {
  Modal,
  Button,
  Row,
  Col,
  NavDropdown,
  Nav,
  Navbar,
} from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector } from 'react-redux'

export default function MyNavbar() {
  const navigate = useNavigate();
  const apiDataArray = useSelector(state => state.data.apiDataArray)
  console.log(apiDataArray)
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
 
  const handleClick = (data) => {
    function formatString(inputString) {
      // Remove spaces and make the string lowercase
      return inputString.replace(/\s/g, '').toLowerCase();
    }
    
    // Example usage: 
    const inputString =data.title;
    const formattedString = formatString(inputString);
    navigate(`/api/${formattedString}/${data.id}`, {replace: true});
  };

  return (
    <div>
      <Navbar expand="lg" bg="primary" variant="dark" className="p-0">
        <Navbar.Brand to="#homepage">
          <img className={style.logo} src={BrandWhiteImg} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mr-auto">
            <Nav.Link className={`${style.links}`}>HOME</Nav.Link>
            <NavDropdown title="API" id="basic-nav-dropdown" className={`${style.links}`}>
              <NavDropdown.Item >
             <div style={{display:'flex',flexDirection:'column',gap:'1em'}}>
             {apiDataArray.map((data)=>{
                  return <Button key={data.id} onClick={()=>handleClick(data)}>
                  {data.title}
                </Button>
                })}
             </div>
               
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className={`${style.links}`} to="#suitablefor">
              SUITABLE FOR
            </Nav.Link>
            <Nav.Link className={`${style.links}`} to="#topfoodapp">
              TOP FOOD APP
            </Nav.Link>
            <Nav.Link className={`${style.links}`} to="#company">
              COMPANY
            </Nav.Link>
            <Nav.Link className={`${style.links}`} to="#blog">
              BLOG
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item to="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item to="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item to="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item to="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
          </Nav>
          <button className={`${style.requestaquote} me-2`} onClick={openModal}>
            <span>Request A Quote</span>
          </button>
        </Navbar.Collapse>
      </Navbar>
      <Modal
        show={isModalOpen}
        onHide={closeModal}
        size="xl"
        style={{ display: "block", paddingRight: 6 }}
      >
        <Modal.Body>
          <button className={style["close-button"]} onClick={closeModal}>
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
