

import { TfiEmail } from "react-icons/tfi";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Helmet } from "react-helmet"; export default function Careers() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919620520200", "_blank");
  };
  return (
    <>
      <Helmet>
        <title>Full-time & Part-Time Job & Internship openings | Healing Garden India</title>
        <meta name="description" content="Explore full-time, part-time, and internship opportunities at Healing Garden India. Work remotely/online or from our office. Openings in Bangalore. Discover your career with us." />
        <meta name="keywords" content="career opportunities, job openings, internships, part-time jobs, full-time jobs, healing garden" />
        <meta property="og:title" content="Full-time & Part-Time Job & Internship openings | Healing Garden India" />
        <meta property="og:description" content="Explore full-time, part-time, and internship opportunities at Healing Garden India. Work remotely/online or from our office. Openings in Bangalore. Discover your career with us." />
        <meta property="og:image" content="URL-to-your-image" />
        <link rel="canonical" href="http://www.healinggarden.co.in/career" />
      </Helmet>
      <Header />

      <div className="categoryview m-auto row">
        <hr className="row hr-line" style={{ borderColor: "white" }}></hr>
        <div className="row m-auto ">
          <div className="d-flex p-3 ">

            <li className="headertext"><a className="headertext me-1" href="/">
              Home
            </a></li>
            <li className="headertext me-1">  {">"} </li>
            <li className="headertext"><a className="headertext" href="/careers">
              {" "}
              Careers
            </a></li>

          </div>
        </div>
      </div>
      <div className="row m-auto p-2 ">
        <p className="about-us sourc">Careers</p>
      </div>
      <img
        className="d-block w-100 PositionR"
        height="100%"
        src="../clients/team/career.png"
        alt="banner"
      />
      <div className="container">

        <div className="row">
          <p className="Main_heading">Career Opportunities</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Social Media Intern</h3>
          <p className="sub_heading">Duration: 3 Months</p>
          <p className="sub_heading">Location: Whitefield, Bangalore</p>
          <p className="sub_heading">Mode: In-Person; 5 days work from office</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Job Description</h3>
          <li className="sub_heading">Create posts & reels for social media channels like
            Instagram, YouTube, Pinterest etc</li>
          <li className="sub_heading">Handle customer enquiries </li>
          <li className="sub_heading">Take photos & videos during workshop / events</li>
          <li className="sub_heading">Assist in workshop management</li>
        </div>

        <div className="row">
          <h3 className="main_heading">Requirement </h3>
          <li className="sub_heading">Must have good design skills and competency on tool like
            canva.</li>
          <li className="sub_heading">Understanding of the strategies and best practices needed
            to effectively manage and expand social media presence. </li>
        </div>

        <div className="row">
          <p className="main_heading">Contact Us</p>
          <p className="sub_heading">WhatsApp or email us your resume if you find yourself relevant for
            the above listed opportunity. </p>
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-1">
                <TfiEmail className="fs_15 m-auto" />
              </div>
              <div className="col-md-8">
                <p className="sub_heading m-auto">HealingGarden4All@gmaill.com</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-1">
                <img width={30} className="m-auto" onClick={handleWhatsAppClick} src="../photos/icons8-whatsapp-48.png" alt="WhatsApp" />
              </div>
              <div className="col-md-8">
                <p className="sub_heading m-auto">+91 96205 20200</p>
              </div>
            </div>
          </div>
          <div className="col-md-8"></div>
        </div>
      </div><Footer />
    </>
  );
}
