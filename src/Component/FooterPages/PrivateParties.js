
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Helmet } from "react-helmet";

import { TfiEmail } from "react-icons/tfi";
export default function PrivateParties() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919620520200", "_blank");
  };
  return (
    <>
      <Helmet>
        <title>Workshops in Private Parties & Gatherings | Healing Garden India</title>
        <meta 
          name="description" 
          content="We organize creative workshops for private events such as children's birthday parties, special occasions like festivals, baby showers, weddings, & anniversaries." 
        />
        <meta 
          name="keywords" 
          content="private parties, creative workshops, children's birthday parties, festivals, baby showers, weddings, anniversaries" 
        />
        <meta 
          property="og:title" 
          content="Workshops in Private Parties & Gatherings | Healing Garden India" 
        />
        <meta 
          property="og:description" 
          content="We organize creative workshops for private events such as children's birthday parties, special occasions like festivals, baby showers, weddings, & anniversaries." 
        />
        {/* <meta 
          property="og:image" 
          content="URL-to-your-image" // Update this to an appropriate image URL related to your private parties
        /> */}
        <link 
          rel="canonical" 
          href="http://www.healinggarden.co.in/private-parties" 
        />
      </Helmet>
  <Header/>

      <div className="categoryview m-auto row">
        <hr className="row hr-line" style={{ borderColor: "white" }}></hr>
        <div className="row m-auto ">
          <div className="d-flex p-3 ">

            <li className="headertext"><a className="headertext me-1" href="/">
              Home
            </a></li>
            <li className="headertext me-1">  {">"} </li>
            <li className="headertext"><a className="headertext" href="/private-parties">
              {" "}
              Private Parties
            </a></li>

          </div>
        </div>
      </div>

      <div className="row m-auto p-2 ">
        <p className="about-us sourc">Private Parties</p>
      </div>
      <div className="col-md-12 ">

        <img
          className="d-block w-100 PositionR"
          height="100%"
          src="../clients/team/party.png"
          alt="banner"
        />

      </div>
      <div className="container">
        <div className="row m-auto">
          <p className="main_heading m-auto fs_25">Transform Your Private Party with Our Unique
            Workshops & Bulk Gifting!</p>
        </div>

        <div className="row m-auto">
          <div className="col-md-6 m-auto">
            <div className="row mt-3">
              <img className="col-md-4 m-auto" src="./Party/party (6).png" />
              <img className="col-md-4 m-auto" src="./Party/party (10).png" />
            </div>
            <div className="row mt-3">
              <img className="col-md-4 m-auto" src="./Party/party (7).png" />
              <img className="col-md-4 m-auto" src="./Party/party (4).png" />
            </div>

          </div>
          <div className="col-md-6 m-auto">
            <p className="sub_heading">
              Looking to add a special touch to
              your next private party? Our
              exclusive workshops are the
              perfect way to engage and
              entertain your guests while
              creating unforgettable memories.
              Whether it's a birthday
              celebration, bridal shower, or any
              special occasion, we offer a
              variety of hands-on experiences
              tailored to your event. From art
              and crafts, terrarium & fairy
              garden making to magic shows and
              wellness sessions, our expert
              instructors will guide your guests
              through fun and interactive
              activities. Book our workshops
              today and turn your private party
              into an extraordinary experience
              filled with creativity, learning, and
              laughter!
            </p>
          </div>
        </div>
        <div className="row m-auto mt-3">
          <img className="col-md-2 m-auto" src="./Party/party (1).png" />
          <img className="col-md-2 m-auto" src="./Party/party (3).png" />
          <img className="col-md-2 m-auto" src="./Party/party (5).png" />
        </div>
        <div className="row m-auto mt-3">
          <img className="col-md-2 m-auto" src="./Party/party (2).png" />
          <img className="col-md-2 m-auto" src="./Party/party (8).png" />
          <img className="col-md-2 m-auto" src="./Party/party (9).png" />
        </div>

        <div className="row m-auto text-center mt-5">
          <a href="https://www.healinggarden.co.in/categorylist" className="m-auto" >
            <button className="col-md-4 p-1 m-auto request-corporat">Check Out Workshop Categories</button></a>
        </div>
        <div className="row">
          <p className="main_heading">Contact Us</p>
          <p className="sub_heading">Contact us to create customized workshops & bulk gifting for your
            private parties. We are happy to curate the program based on your
            requirements.

          </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1">
                <TfiEmail className="fs_15 " />
              </div>
              <div className="col-md-8">
                <p className="sub_sub_heading m-auto">HealingGarden4All@gmaill.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <img width={30} className="" onClick={handleWhatsAppClick} src="../photos/icons8-whatsapp-48.png" alt="WhatsApp" />
              </div>
              <div className="col-md-8">
                <p className="sub_sub_heading m-auto">+91 96205 20200</p>
              </div>
            </div>



          </div>
          <div className="col-md-8"></div>
        </div>
      </div><Footer/>
    </>
  );
}
