import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../DataManagement/Cartaction';
import { v4 as uuidv4 } from 'uuid';


import axios from "axios";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
export default function View() {
  const [loading, setLoading] = useState(true);
  const queryParams = new URLSearchParams(useLocation().search);
  const id = queryParams.get('id');
  const Workshodate = queryParams.get('Workshodate');
  const startTime = queryParams.get('startTime');
  const dispatch = useDispatch();
  const [DataById, setDataById] = useState(null);

  useEffect(() => {
    getAllCategory();
    getorderdata();
  }, []);
  useEffect(() => {
    if (id) {
      fetchWorkshopById(id);
    }
  }, [id]);
  const navigate = useNavigate();
  const fetchWorkshopById = async (id) => {
    try {
      const response = await axios.get(`https://api.healinggarden.co.in/api/workshop/getworkshopbyid/${id}`);
      setDataById(response.data.data);
    } catch (error) {
      console.error("Error fetching workshop by id:", error);
    } finally {
      setLoading(false);
    }
  };

  const safeJsonParse = (jsonString) => {
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return {};
    }
  };
  const [showFullDescription, setShowFullDescription] = useState(false);

  const [ShowFullReasonToJoin, setShowFullReasonToJoin] = useState(false);
  const [categoryData, setcategoryData] = useState();
  const [OrderData, setOrderData] = useState([]);
  const getAllCategory = async () => {
    let response = await axios.get(
      "https://api.healinggarden.co.in/api/category/getcategory"
    );
    let FilterData = response.data.data.find(
      (ele) => ele._id === DataById?.category
    );
    setcategoryData(FilterData);
  };
  const getorderdata = async () => {
    let response = await axios.get(
      "https://api.healinggarden.co.in/api/order/getallorder"
    );
    setOrderData(response.data.data);
  };




  function sortSlots(slots) {
    return slots.sort((a, b) => {
      const dateTimeA = new Date(`${a.Workshodate}T${a.startTime}Z`).getTime();
      const dateTimeB = new Date(`${b.Workshodate}T${b.startTime}Z`).getTime();

      return dateTimeA - dateTimeB;
    });
  }


  function formatAll(dateString, startTime, endTime) {

    let date = new Date(dateString);
    let suffixes = ["th", "st", "nd", "rd"];

    function getSuffix(day) {
      if (day >= 11 && day <= 13) {
        return "th";
      }
      return suffixes[day % 10] || "th";
    }

    function formatDate(date) {
      let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let dayOfWeek = daysOfWeek[date.getDay()];
      let dayOfMonth = date.getDate();
      let daySuffix = getSuffix(dayOfMonth);
      let formattedDay = `${dayOfWeek}, ${dayOfMonth}${daySuffix}`;

      let months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ];
      let month = months[date.getMonth()];

      return `${formattedDay} ${month}`;
    }

    function formatTime(timeString) {
      let time = new Date(`1970-01-01T${timeString}Z`);
      let hours = time.getUTCHours();
      let minutes = time.getUTCMinutes();
      let ampm = hours >= 12 ? "PM" : "AM";
      hours = hours % 12;
      hours = hours ? hours : 12;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      return `${hours}:${minutes} ${ampm}`;
    }

    let formattedDate = formatDate(date);
    let formattedStartTime = formatTime(startTime);
    let formattedEndTime = formatTime(endTime);
    return `${formattedDate} at ${formattedStartTime} - ${formattedEndTime}`;
  }
  const workshopSlots = DataById?.languages ? safeJsonParse(DataById?.languages) : [];
  const sortedSlots = workshopSlots?.slots ? sortSlots(workshopSlots.slots) : [];

  const defaultSlot = sortedSlots?.find(slot =>
    slot?.Workshodate === Workshodate && slot?.startTime === startTime
  ) || sortedSlots[0];


  const [viewSlots, setviewSlots] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(defaultSlot);


  const handleSelectDate = (slot) => {
    setSelectedSlot(slot);
  };





  const handleBookWorkShop = () => {
    try {
      const userDataStr = localStorage.getItem("HGuserdata");
      if (!userDataStr) {
        alert("Please Login");
        window.location.assign("/login");
        return;
      }
      if (!selectedSlot) {
        alert("Please Select Date");
        return;
      }
      const userData = JSON.parse(userDataStr);
      const userid = userData?._id;


      const uniqueId = uuidv4();

      const orderData = {
        SelectedDate: selectedSlot,
        item: DataById,
        userid: userid,
        uniqueId: uniqueId
      };

      dispatch(addItemToCart(orderData));

      alert("Your Order is added to the cart");
      navigate("/cart");
    } catch (error) {
      console.error("Error adding order:", error);
    }
  };



  const videoLinks = DataById?.YouTubeLink ? safeJsonParse(DataById?.YouTubeLink) : [];
  const languages = DataById?.languages ? safeJsonParse(DataById?.languages) : [];



  return (
    <>
    <Header/>
      <div className="categoryview m-auto row ">
        <hr className="row hr-line" style={{ borderColor: "white" }}></hr>
        <p className="p-1">
          {" "}
          <a className="footertext" href="/">Home</a>
          {">"}  <a href="/individual" className="footertext">For Individuals</a> {">"} {categoryData?.category} {">"}{" "}
          {DataById?.workshopTitle}
        </p>
      </div>
      <div className="row m-auto mt-5 ">
        <div className="col-md-6 PositionR">
          <div className="viewimg p-1">
            <div className="video-wrapper ">
              <iframe
                className="video"
                src={videoLinks?.[0]}
                title={`YouTube video player`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div></div>
          <div className="row m-auto textbold inter">
            <p className="sub_heading m-auto textbold ">Schedule</p>
            {workshopSlots?.sessionType === "One Session" && (
              <div
                key={workshopSlots?.slots?.[0]?.startTime}
                className={`slot-item ${selectedSlot?.startTime === workshopSlots?.slots[0].startTime ? 'selected' : ''}`}
                onClick={() => handleSelectDate(workshopSlots?.slots?.[0])}
              >
                {formatAll(workshopSlots?.slots[0]?.Workshodate, workshopSlots?.slots[0]?.startTime, workshopSlots?.slots[0]?.endTime)}
              </div>
            )}
            {workshopSlots?.sessionType === "Multiple Sessions" && (
              <div className="col-md-8 m-auto">
                {!viewSlots
                  ? sortedSlots.slice(0, 3).map((ele) => (
                    <div
                      key={`${ele.Workshodate}-${ele.startTime}`}
                      className={`row m-auto slot-item text-center ${selectedSlot?.startTime === ele.startTime && selectedSlot?.Workshodate === ele.Workshodate ? 'selected' : ''}`}
                      onClick={() => handleSelectDate(ele)}
                    >
                      {formatAll(ele.Workshodate, ele.startTime, ele.endTime)}
                    </div>
                  ))
                  :
                  sortedSlots.map((ele) => (
                    <div
                      key={`${ele.Workshodate}-${ele.startTime}`}
                      className={`row m-auto slot-item text-center ${selectedSlot?.startTime === ele.startTime && selectedSlot?.Workshodate === ele.Workshodate ? 'selected' : ''}`}
                      onClick={() => handleSelectDate(ele)}
                    >
                      {formatAll(ele.Workshodate, ele.startTime, ele.endTime)}
                    </div>
                  ))
                }

              </div>
            )}
          </div>

          {workshopSlots.slots?.length > 3 && (
            <a
              className="readmore cursor"
              onClick={() => setviewSlots(!viewSlots)}
            >
              {!viewSlots ? "More" : "Less"}
            </a>
          )}
          <img
            className="viewsvg1"
            width={250}
            height={250}
            src="../workshop/img4.svg"
          />
        </div>

        <div className="col-md-6 ">
          <p className="main_heading categorycolor sourc">
            {DataById?.workshopTitle}
          </p>
          <p className="sub_sub_heading  m-auto">
            <span>
              {languages.map((ele, index) => (
                <span key={index} className="me-1">
                  {ele.name}
                  {index < languages?.length - 1 && ","}
                </span>
              ))}

            </span> | {DataById?.minAge}yrs | Location:{" "}
            <a href={DataById?.gMapDirection}>Go</a>
          </p>
          <p className="sub_sub_heading  ">
            {DataById?.sessionAddress}

          </p>
          <p className="sub_heading textbold inter">About</p>
          <ul>
            <div
              className="sub_heading"
              dangerouslySetInnerHTML={{
                __html: showFullDescription
                  ? DataById?.discription?.[0]
                  : `${DataById?.discription?.[0]?.substring(0, 400)}...`,
              }}
            />

            <a
              className="readmore cursor"
              style={{ position: "relative", zIndex: "10" }}
              onClick={() => setShowFullDescription(!showFullDescription)}
            >
              {!showFullDescription ? " Read More..." : " Read Less"}
            </a>
          </ul>
          <div className="row">
            <button
              className="col-md-4 book-now p-1"
              onClick={handleBookWorkShop}
            >
              <p className="m-auto inter textbold">
                Rs.{DataById?.OfferPrice}/-
              </p>
              <p className="m-auto inter textbold">Book Now</p>
            </button>
          </div>
          <img
            className="viewsvg2"
            width={300}
            height={300}
            src="../workshop/img6.svg"
          />
        </div>
      </div>
      <div className="row m-auto view-reason p-5 mt-3">
        <div className="row PositionR">
          <img
            className="viewsvg3"
            width={250}
            height={250}
            src="../workshop/img6.svg"
          />

          <p className="main_heading subtext text_light">Reasons to join</p>

          <ul>
            <div
              className="reason"
              dangerouslySetInnerHTML={{
                __html: ShowFullReasonToJoin
                  ? DataById?.reasonToJoin?.[0]
                  : `${DataById?.reasonToJoin?.[0].substring(0, 100)}...`,
              }}
            />
          </ul>
          <a
            className="col-md-2 readmore cursor"
            style={{ position: "relative", zIndex: "1" }}
            onClick={() => setShowFullReasonToJoin(!ShowFullReasonToJoin)}
          >
            {!ShowFullReasonToJoin ? " Read More..." : " Read Less"}
          </a>
        </div>
        <div className="row mt-5">
          <p className="main_heading subtext text_light">Terms & Condition</p>
          <ul>

            {
              DataById?.terms?.map((term, index) => (
                <p
                  key={index}
                  className="reason text_light"
                  dangerouslySetInnerHTML={{ __html: term }}
                />
              ))
            }
          </ul>
        </div>

      </div>
      <Footer/>
    </>
  );
}
