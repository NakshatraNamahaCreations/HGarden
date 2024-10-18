import React, { useEffect, useState } from "react";

import {
  Banners,
  Team,
  Clients,
  testimonialsvid,
  testimonialsReview,
  PopularEvents,
} from "../data";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import RequestProposal from "../Request";
import Header from "./Header";
import Footer from "./Footer";
export default function Home() {
  const [categoryData, setcategoryData] = useState([]);

  useEffect(() => {
    getAllCategory();
  }, []);
  const [Proposal, setProposal] = useState(false);
  const getAllCategory = async () => {
    let response = await axios.get(
      "https://api.healinggarden.co.in/api/category/getcategory"
    );
    let data = response.data.data.sort((a, b) => a.order - b.order);
    setcategoryData(data);
  };

  const generatePathname = (category) => {
    return `/category/${category.toLowerCase().replace(/ /g, "-")}`;
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Corporate Workshops For Employee Engagement & Mental Wellness
        </title>
        <meta
          name="description"
          content="Workshops & healing sessions to improve employee engagement, morale, team bonding & mental wellness. Suitable for corporates & private parties."
        />
        <meta
          name="keywords"
          content="corporate workshops, employee engagement, mental wellness, team bonding, healing sessions"
        />
        <meta name="author" content="Your Name" />
        <meta
          property="og:title"
          content="Corporate Workshops For Employee Engagement & Mental Wellness"
        />
        <meta
          property="og:description"
          content="Workshops & healing sessions to improve employee engagement, morale, team bonding & mental wellness. Suitable for corporates & private parties."
        />
        <meta property="og:url" content="http://www.healinggarden.co.in" />
        <meta property="og:image" content="URL_TO_IMAGE" />
      </Helmet>
      <Header />
      <div className="col-12">
        <Carousel data-bs-theme="dark">
          {Banners.map((Ele, index) => (
            <Carousel.Item key={index}>
              {index === 0 && Ele.video ? (
                <video
                  className="vid-img d-block w-100 "
                  autoPlay
                  loop={true}
                  src={Ele.video}
                  muted
                />
              ) : (
                <img
                  className="d-block w-100 carosel-img"
                  src={`${Ele.img}`}
                  alt="banner"
                />
              )}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="row m-auto">
        <div className="row  text-center mt-5">
          <p className="main_heaidng ">Our Workshops Objectives</p>
          <p className="sub_heading">
            We Collaborate With You To Achieve Desired Objectives & Outcomes!
          </p>
        </div>
      </div>
      <div
        className="col-md-11 m-auto"
        style={{ color: "green", border: "1px solid #d2bca0" }}
      ></div>
      <div className="row m-auto objective-main p-5  mt-5 text-center">
        {Team.map((Ele) => {
          return (
            <div className="col-lg-3 col-md-4 col-sm-6 m-5 object-contianer p-0 ">
              <img className="p-0 m-0 object_img" height={200} src={Ele.img} />
              <p className="categorytext p-3">{Ele.title}</p>
            </div>
          );
        })}
      </div>

      <div className="row m-auto text-center mt-5">
        <button
          className="col-md-2 col-sm-7 col-7 mx-auto sub_heading request-pr p-md-2  shadow"
          onClick={() => setProposal(true)}
        >
          Request A Proposal
        </button>
      </div>
      <div className="row m-auto text-center mt-5">
        <p className="main_heaidng  sourc">
          Let's Create A Personalized Program For Your Team Members!
        </p>
      </div>

      <div className="row m-auto text-center mt-5">
        <p className="main_heaidng">Our Workshops Categories</p>
      </div>
      <div
        className="col-md-11 m-auto "
        style={{ color: "green", border: "1px solid #d2bca0" }}
      ></div>
      <div className="row m-auto  mt-2 text-center ">
        <div className="col-md-10 m-auto ">
          <div className="row  category-main">
            {categoryData?.slice(0, 6).map((Ele) => {
              return (
                <div className="col-md-4 mt-4 text-center cursor" key={Ele._id}>
                  <Link
                    to={{
                      pathname: generatePathname(Ele.category),
                    }}
                    className="text-decoration-none text-black"
                    style={{ cursor: "pointer" }}
                  >
                    <img
                      height={200}
                      width={200}
                      className="p-0 m-auto"
                      src={`https://api.healinggarden.co.in/Category/${Ele?.categoryImage}`}
                      alt={Ele.category}
                    />
                    <p className="categorytext col-md-7 m-auto">
                      {Ele.category}
                    </p>
                  </Link>
                </div>
              );
            })}
          </div>

          <div className="row ">
            <div className="col-md-1"></div>
            <p className="col-8 col-md-9  main_heaidng textindex "></p>
            <div className="col-4 col-md-2">
              <a href="/categorylist">
                <button className="col-12 col-md-7 p-1 text-white viewall">
                  View All {">>>"}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* clients */}

      <div className="row m-auto clients-main mt-5 ">
        <div className="row mt-3">
          <div className="col-md-1"></div>
          <p className="col-7 col-md-9 p-1 client_heaidng textindex ">
            Clients Served
          </p>
          <div className="col-5 col-md-2">
            <a href="/client-served">
              <button className="col-12 col-md-7 p-1 text-white viewallclient">
                View All {">>>"}
              </button>
            </a>
          </div>
        </div>
        <div
          className="col-md-10 m-auto textindex"
          style={{ color: "green", border: "1px solid black" }}
        ></div>

        <div className="col-md-10 m-auto">
          <div className="row  mb-4">
            {Clients.slice(0, 6).map((Ele) => {
              return (
                <div className="col-md-4 ">
                  <img
                    className="m-auto mt-5 row"
                    width={`${Ele.type === "ge2" ? "80" : "200"}`}
                    src={Ele.logo}
                  />
                </div>
              );
            })}{" "}
          </div>
        </div>
      </div>
      {/* Testimonials */}

      <div className="row m-auto padd-main  mt-5">
        <div className="row ">
          <div className="col-md-1"></div>
          <p className="col-7 col-md-9  client_heaidng textindex ">
            Testimonials
          </p>
          <div className="col-5 col-md-2">
            <a href="/testimonials">
              <button className="col-12 col-md-7 p-1 text-white viewallclient">
                View All {">>>"}
              </button>
            </a>
          </div>
        </div>
        <div
          className="col-md-11 m-auto"
          style={{ color: "green", border: "1px solid black" }}
        ></div>

        <div className="row m-auto  mt-5 text-center">
          {testimonialsvid.slice(0, 3).map((Ele, index) => {
            return (
              <div
                key={index}
                className="col-12 col-sm-6 col-md-3 mb-5 m-auto 
                object-contianer testi_contianer "
              >
                <iframe
                  className="row m-auto mt-4 video rounded"
                  src={Ele.video}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
                <div className="row m-auto text-center p-2">
                  {/* <p className="categorytext m-auto">{Ele.name}</p> */}
                  <p className=" testimontext m-auto text-center">
                    {" "}
                    {Ele.companyname}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div class="row m-auto  text-center">
          {testimonialsReview.slice(0, 3).map((Ele) => {
            return (
              <div class="col-lg-4 col-md-6 mt-5">
                <div className="review review2 PositionR ">
                  <img
                    className="m-auto testimonal-image shadow-sm"
                    height={140}
                    src={Ele.Image}
                  />
                  <div className="row mt-5 m-2 text-center">
                    <p className=" categorytext text-white m-auto mt-5">
                      {Ele.name}
                    </p>
                    <p className=" testimontext text-white m-auto">
                      {Ele.companyname}
                    </p>
                    <p className="reviws m-auto m-1 p-1">
                      {Ele.Reviews.length > 350
                        ? Ele.Reviews.substring(0, 350)
                        : Ele.Reviews}
                      {Ele.Reviews.length > 350 && (
                        <a href="/testimonials">View More</a>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {Proposal && <RequestProposal open={Proposal} setOpen={setProposal} />}

      <div className="row m-auto padd-main mt-1">
        <div
          className="col-md-11 m-auto"
          style={{ color: "green", border: "1px solid black" }}
        ></div>

        <div className="container-fluid">
          <div className="row justify-content-center mt-2">
            <p className="main_heading text-center">Popular Events</p>
          </div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 g-4 mt-2">
            {PopularEvents.map((Ele, index) => {
              return (
                <div className="col" key={index}>
                  <div className="card h-100">
                    <img
                      src={Ele.img}
                      alt={Ele.eventname}
                      className="img-fluid"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="row m-auto seo mt-3">
        <p className="sub_sub_heading p-3 m-auto text-white">
          Enhance your team's engagement and morale with our transformative
          corporate workshops and healing sessions. We manage small to large
          scale corporate events with the network of our 75+ serivce providers.
          Our services are available in Bangalore, Mumbai, Hyderabad, Pune, and
          Delhi-NCR.
        </p>
      </div>

      <Footer />
    </>
  );
}
