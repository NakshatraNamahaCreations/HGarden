import { React, useEffect, useState } from "react";
import { Card, Form } from "react-bootstrap";
import "./contact.css";
import { IoIosCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Helmet } from "react-helmet";

import axios from "axios";
import { FaCheckCircle } from "react-icons/fa";

export default function ContactUs() {
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [mobileno, setmobileno] = useState("");
  let initialData = {
    companyname: "",
    email: "",
    fullname: "",
    message: "",
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [requestData, setRequestData] = useState(initialData);

  const validateForm = () => {
    let formErrors = {};
    if (!requestData.fullname) formErrors.fullname = "Full Name is required";
    // if (!requestData.companyname) formErrors.companyname = "Company Name is required";

    if (!mobileno) formErrors.mobileno = "Phone Number is required";
    else if (!/^\d{10}$/.test(mobileno))
      formErrors.mobileno = "Phone Number must be exactly 10 digits";
    // if (!requestData.email) formErrors.email = "Email is required";
    // if (!/\S+@\S+\.\S+/.test(requestData.email)) formErrors.email = "Email is invalid";
    if (!requestData.message) formErrors.message = "Message is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    try {
      let config = {
        url: "https://api.healinggarden.co.in/api/cont/contact",
        method: "post",
        headers: { "Content-Type": "application/json" },
        data: {
          companyname: requestData.companyname,
          mobileno: mobileno,
          email: requestData.email,
          fullname: requestData.fullname,
          message: requestData.message,
        },
      };
      let res = await axios(config);

      if (res.status === 200) {
        setIsSubmitted(true);
        setSuccessMessage(
          "Thank you for the enquiry. We will get back to you within 1 working day."
        );
        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
        setRequestData(initialData);
        setErrors({});
      }
    } catch (error) {
      alert("An error occurred during submission. Please try again.");
    }
  };

  const handleChange = (e) => {
    let { value, name } = e.target;
    setRequestData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919620520200", "_blank");
  };
  return (
    <>
      <Helmet>
        <title>
          Contact Us for Any Private Group or Corporate Workshop | Healing
          Garden India
        </title>
        <meta
          name="description"
          content="Get in touch with Healing Garden for inquiries regarding employee engagement workshops, healing workshops for private parties, or special occasions."
        />
        <meta
          name="keywords"
          content="contact, corporate workshops, private events, healing garden"
        />
        <meta
          property="og:title"
          content="Contact Us for Any Private Group or Corporate Workshop | Healing Garden India"
        />
        <meta
          property="og:description"
          content="Get in touch with Healing Garden for inquiries regarding employee engagement workshops, healing workshops for private parties, or special occasions."
        />
        <meta property="og:image" content="URL-to-your-image" />
        <link
          rel="canonical"
          href="http://www.healinggarden.co.in/contact-us"
        />
      </Helmet>
      <Header />
      {isSubmitted ? (
        <Card className="success-card container m-auto mt-5 text-center p-3 shadow">
          <Card.Body className="d-flex align-items-center justify-content-center">
            <FaCheckCircle className="success-icon me-2" />
            <Card.Text className="m-auto sub_heading">
              {successMessage}
            </Card.Text>
          </Card.Body>
        </Card>
      ) : (
        <>
          <div className="categoryview m-auto row">
            <hr className="row hr-line" style={{ borderColor: "white" }}></hr>
            <div className="row m-auto ">
              <div className="d-flex p-3 ">
                <li className="headertext">
                  <a className="headertext me-1" href="/">
                    Home
                  </a>
                </li>
                <li className="headertext me-1"> {">"} </li>
                <li className="headertext">
                  <a className="headertext" href="/contact-us">
                    {" "}
                    Contact us
                  </a>
                </li>
              </div>
            </div>
          </div>
          <div className="row m-auto p-2">
            <p className="about-us sourc">CONTACT US</p>
          </div>
          <div className="row contact m-auto text-center p-5">
            <h1 className="Main_heading">CONTACT US</h1>
            <p className="fs_20">Our team is eager to hear from you!</p>
          </div>
          <div className="container p-3">
            <div className="row m-auto">
              <div className="col-md-4 me-auto">
                <p className="main_heading">Reach Out To Us</p>
                <div className="row mb-3">
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    className="mb-2 p-3"
                    name="fullname"
                    placeholder="Full Name"
                    isInvalid={!!errors.fullname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.fullname}
                  </Form.Control.Feedback>
                </div>

                <div className="row mb-3">
                  <Form.Control
                    onChange={handleChange}
                    type="text"
                    className="mb-2 p-3"
                    name="companyname"
                    placeholder="Company Name"
                    isInvalid={!!errors.companyname}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.companyname}
                  </Form.Control.Feedback>
                </div>

                <div className="row mb-3">
                  <Form.Control
                    type="text"
                    className="mb-2 p-3"
                    placeholder="Phone Number"
                    value={mobileno}
                    onChange={(e) => setmobileno(e.target.value)}
                    isInvalid={!!errors.mobileno}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.mobileno}
                  </Form.Control.Feedback>
                </div>

                <div className="row mb-3">
                  <Form.Control
                    onChange={handleChange}
                    type="email"
                    className="mb-2 p-3"
                    name="email"
                    placeholder="Email Id"
                    isInvalid={!!errors.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>
                </div>

                <div className="row mb-3">
                  <Form.Control
                    onChange={handleChange}
                    as="textarea"
                    className="mb-2 p-3"
                    name="message"
                    placeholder="Message"
                    isInvalid={!!errors.message}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.message}
                  </Form.Control.Feedback>
                </div>

                <div className="row m-auto">
                  <button
                    className="col-md-6 m-auto filter text-white p-2"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </div>
              <div className="col-md-6 contact-form p-4">
                <p className="row m-auto main_heading text-center">
                  Get In Touch
                </p>

                <div className="row mt-2">
                  <div className="col-md-1">
                    <div className="bg-icon">
                      <a href="tel:+9620520200" className="cursor iconss">
                        <IoIosCall className="" />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <a href="tel:+9620520200" className="cursor iconsss">
                      <p className="m-auto iconsss sub_sub_heading">
                        +91 96205 20200
                      </p>
                    </a>
                  </div>
                </div>

                <div className="row mt-2">
                  <div className="col-md-1">
                    <div className="bg-icon ">
                      <FaWhatsapp onClick={handleWhatsAppClick} className="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="m-auto sub_sub_heading">+91 96205 20200</p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-1">
                    <div className="bg-icon ">
                      <TfiEmail className="" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="m-auto sub_sub_heading">
                      HealingGarden4All@gmaill.com
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-1">
                    <div className="bg-icon ">
                      <a
                        className="footertext"
                        href="https://www.instagram.com/healinggardenindia/"
                      >
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <p className="m-auto sub_sub_heading">
                      <a
                        href="https://www.instagram.com/healinggardenindia/"
                        className="curosr linktyp"
                      >
                        {" "}
                        HealingGardenIndia
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <div className="col-md-1">
                    <div className="bg-icon ">
                      <FaLocationDot className="" />
                    </div>
                  </div>
                  <div className="col-md-11">
                    <p className="m-auto sub_sub_heading">Address:</p>
                    <p className="row m-auto sub_sub_heading">
                      PRESTIGE SHANTINIKETAN, ITPL Main Rd, Thigalarapalya,
                      Whitefield, Bengaluru, Karnataka 560048
                    </p>
                  </div>
                </div>
                {/* <p className="row mt-3 m-auto sub_sub_heading m-auto">Monday - Sunday: From 10:00 AM - 8:00 PM</p> */}
              </div>
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
