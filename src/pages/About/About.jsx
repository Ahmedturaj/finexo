import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import AboutUs from "../../Components/HomeComponents/AboutUs/AboutUs";

const About = () => {
  return (
    <div>
      <PageTitle title={"About"} />
      <div className="first_color">
        <AboutUs />
      </div>
    </div>
  );
};

export default About;
