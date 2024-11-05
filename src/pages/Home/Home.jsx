import React from "react";
import PageTitle from "../../Components/PageTitle/PageTitle";
import Banner from "../../Components/HomeComponents/Banner/Banner";
import OurServices from "../../Components/HomeComponents/OurServices/OurServices";
import AboutUs from "../../Components/HomeComponents/AboutUs/AboutUs";
import ChosenTopic from "../../Components/HomeComponents/ChosenTopic/ChosenTopic";
import OurTeam from "../../Components/HomeComponents/OurTeam/OurTeam";
import Reviews from "../../Components/HomeComponents/Reviews/Reviews";

const Home = () => {
  return (
    <section>
      <PageTitle title={"Home"}></PageTitle>
      <div className="">
        <Banner />
      </div>
      <div className="">
        <OurServices />
      </div>
      <div className="first_color">
        <AboutUs />
      </div>
      <div className="">
        <ChosenTopic />
      </div>
      <div className="">
        <OurTeam />
      </div>
      <div className="">
        <Reviews />
      </div>
    </section>
  );
};

export default Home;
