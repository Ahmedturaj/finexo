import React from "react";
import "./banner.css";
import heroBanner from "../../../assets/images/hero-bg.png";
import sliderImg from "../../../assets/images/slider-img.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="banner wave-header h-screen lg:h-[800px]">
      <div className="">
        <Swiper
          slidesPerView={"auto"}
          centeredSlides={true}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className=" flex flex-col md:flex-row gap-5 justify-start items-start md:items-center md:justify-center p-4">
              <div className="w-11/12 mx-auto">
                <h1 className="text-white md:text-5xl font-bold mb-5">
                  Crypto <br />
                  Currency
                </h1>
                <p className="text-xs md:text-base">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="px-5 md:px-10 py-2 mt-5 text-white  bg-[#00bbf0] cursor-pointer">
                  Read More
                </button>
              </div>
              {/* image */}
              <div className="">
                <img
                  src={sliderImg}
                  className="bounce-animation w-32 md:w-11/12 "
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          {/* slide -2 */}
          <SwiperSlide>
            <div className=" flex flex-col md:flex-row gap-5 justify-start items-start md:items-center md:justify-center p-4">
              <div className="w-11/12 mx-auto">
                <h1 className="text-white md:text-5xl font-bold mb-5">
                  Crypto <br />
                  Currency
                </h1>
                <p className="text-xs md:text-base">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="px-5 md:px-10 py-2 mt-5 text-white  bg-[#00bbf0] cursor-pointer">
                  Read More
                </button>
              </div>
              {/* image */}
              <div className="">
                <img
                  src={sliderImg}
                  className="bounce-animation w-32 md:w-11/12 "
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
          {/* slide-3 */}
          <SwiperSlide>
            <div className=" flex flex-col md:flex-row gap-5 justify-start items-start md:items-center md:justify-center p-4">
              <div className="w-11/12 mx-auto">
                <h1 className="text-white md:text-5xl font-bold mb-5">
                  Crypto <br />
                  Currency
                </h1>
                <p className="text-xs md:text-base">
                  Explicabo esse amet tempora quibusdam laudantium, laborum
                  eaque magnam fugiat hic? Esse dicta aliquid error repudiandae
                  earum suscipit fugiat molestias, veniam, vel architecto
                  veritatis delectus repellat modi impedit sequi.
                </p>
                <button className="px-5 md:px-10 py-2 mt-5 text-white  bg-[#00bbf0] cursor-pointer">
                  Read More
                </button>
              </div>
              {/* image */}
              <div className="">
                <img
                  src={sliderImg}
                  className="bounce-animation w-32 md:w-11/12 "
                  alt=""
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <svg
        className="svgPicture hidden lg:flex"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,32L80,74.7C160,117,320,203,480,202.7C640,203,800,117,960,85.3C1120,53,1280,75,1360,85.3L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Banner;
