import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Helmet } from "react-helmet";

import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function Blog() {
  const [blog, setblog] = useState([]);
  const [View, setView] = useState(false);
  const [ViewData, setViewData] = useState(null);
  useEffect(() => {
    getBlog();
  }, []);
  const getBlog = async () => {
    try {
      const response = await axios.get(
        "https://api.healinggarden.co.in/api/blog/getallblog"
      );

      setblog(response.data.data);
    } catch (error) {
      console.error("Error fetching order data:", error);
    }
  };

  console.log("blog", blog);

  const handleView = (data) => {
    setView(true);
    setViewData(data);
  };
  return (
    <>
      <Helmet>
        <title>
          Blogs on mental & social wellness, Workshops | Healing Garden India
        </title>
        <meta
          name="description"
          content="Explore our blog covering topics such as mental wellness, social wellness, corporate workshops, employee engagement, workshops, and more."
        />
        <meta
          name="keywords"
          content="blogs, mental wellness, social wellness, workshops, corporate engagement, healing garden blog"
        />
        <meta
          property="og:title"
          content="Blogs on mental & social wellness, Workshops | Healing Garden India"
        />
        <meta
          property="og:description"
          content="Explore our blog covering topics such as mental wellness, social wellness, corporate workshops, employee engagement, workshops, and more."
        />
        <meta property="og:image" content="URL-to-your-image" />
        <link rel="canonical" href="http://www.healinggarden.co.in/blog" />
      </Helmet>
      <Header />
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
              <a className="headertext" href="/blog">
                {" "}
                Blog
              </a>
            </li>
          </div>
        </div>
      </div>
      <div className="row m-auto p-2 ">
        <p className="about-us sourc">Blog</p>
      </div>
      {!View ? (
        <div className="row m-auto">
          {blog.map((ele) => {
            return (
              <div className="col-md-3 ">
                <div
                  className="row m-auto shadow blog"
                  onClick={() => handleView(ele)}
                >
                  <img
                    height={200}
                    className="p-0"
                    src={`https://api.healinggarden.co.in/BlogImage/${ele?.blogimage}`}
                  />
                  <p className="main_heading m-auto p-2">{ele.title}</p>
                  <p className="sub_heading m-auto p-2">
                    {ele.subtitle?.length > 40
                      ? ele.subtitle?.substring(0, 40)
                      : ele.subtitle}
                    ...
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <>
          <div className="row m-auto">
            <FaArrowAltCircleLeft
              className="col-md-1 fs-3 categorycolor"
              onClick={() => setView(false)}
            />
          </div>
          <div className="row m-auto mt-3">
            <div className="col-md-5 ">
              <div className="row">
                <img
                  className=" "
                  src={`https://api.healinggarden.co.in/BlogImage/${ViewData?.blogimage}`}
                />
              </div>
            </div>
            <div className="col-md-6 ">
              <p className="main_heading">{ViewData?.title}</p>
              <p className="sub_heading">{ViewData?.subtitle}</p>
              <div
                className="sub_heading"
                dangerouslySetInnerHTML={{ __html: ViewData?.desc }}
              />
            </div>
          </div>
        </>
      )}
      <Footer />
    </>
  );
}
