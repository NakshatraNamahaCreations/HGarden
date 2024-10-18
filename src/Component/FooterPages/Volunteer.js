
import { IoIosCall } from "react-icons/io";
import { TfiEmail } from "react-icons/tfi";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Helmet } from "react-helmet";

export default function Volunteer() {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/919620520200", "_blank");
  };
  return (
    <>
<Helmet>
  <title>Full-time & Part-Time Volunteering Opening | Healing Garden India</title>
  <meta name="description" content="Join one of our volunteering opportunities and join us as a part-time or full-time volunteer, either online or offline. Remote volunteering options also available." />
  <meta name="keywords" content="volunteering opportunities, part-time volunteering, full-time volunteering, remote volunteering" />
  <meta property="og:title" content="Full-time & Part-Time Volunteering Opening | Healing Garden India" />
  <meta property="og:description" content="Join one of our volunteering opportunities and join us as a part-time or full-time volunteer, either online or offline. Remote volunteering options also available." />
  <meta property="og:image" content="URL-to-your-image" />
  <link rel="canonical" href="http://www.healinggarden.co.in/volunteer" />
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
            <li className="headertext"><a className="headertext" href="/volunteer">
              {" "}
              Volunteer
            </a></li>

          </div>
        </div>
      </div>

      <div className="row m-auto p-2 ">
        <p className="about-us sourc">Volunteer</p>
      </div>
      <div className="col-md-12 ">

        <img
          className="d-block w-100 PositionR"
          height="100%"
          src="../clients/team/volunteer.png"
          alt="banner"
        />

      </div>

      <div className="container">
        <div className="row m-auto mt-3">
          <div className="col-md-6">
            <div className="row">
              <img src="../gallary/career.jpg" className="col-md-6 m-auto" />
            </div>
          </div>
          <div className="col-md-6">
            <p className="sub_heading">
              Join us in making a meaningful
              difference by volunteering with
              our social impact projects! As a
              volunteer, you'll have the
              opportunity to contribute to
              transformative initiatives that
              address critical community needs
              like mental, social & physical
              wellbeing. Gain valuable skills,
              connect with like-minded
              individuals, and experience the joy
              of participating in therapeutic
              initiatives. Together, we can create
              lasting positive change and build a
              better future for all.
            </p>
          </div>
        </div>
        <div className="row">
          <p className="main_heading">Volunteering Opportunities</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Graphic Designing</h3>
          <p className="sub_heading">Creating Instagram posts, catalogs, banners for website, and more.
            Knowledge of Canva or a similar tool is required. Freshers with a
            good sense of design are welcome. The commitment is at least 4
            hours per month.</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Social Media Management</h3>
          <p className="sub_heading">Planning content strategy & calendar for Instagram and YouTube
            channel. Helping in content creation for social media. Minimum
            commitment: 4 hrs a month.</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Content Writing</h3>
          <p className="sub_heading">Helping in content creation for blog, website and social media.</p>
        </div>
        <div className="row">
          <h3 className="main_heading">Photography</h3>
          <p className="sub_heading">Manage photoshoots for our projects in Bangalore & Delhi.
            Candidates with an iPhone or a mobile device with a high-quality
            camera are preferred. We are looking for individuals with
            experience in capturing high-quality images and video clips, along
            with a keen eye for detail. Minimum commitment is 1 project.</p>
        </div>

        <div className="row">
          <h3 className="main_heading">Workshop Co-ordinator</h3>
          <p className="sub_heading">Assist before, during, and after the workshop at the venue.
            Responsibilities include overseeing and helping with material setup,
            engaging with corporate clients or end users, and aiding in the
            wrap-up. A minimum commitment of joining one workshop is
            required.</p>
        </div>
        <div className="row">
          <h3 className="main_heading">Contact Us</h3>
          <p className="sub_heading">Feel free to WhatsApp or email us if you're interested in any of the
            volunteering opportunities listed above or if you'd like to
            contribute in another specific area.</p>
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
      </div>
      <Footer/>
    </>
  );
}
