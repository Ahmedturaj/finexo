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
    <div className="">
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
            <div className="">
              <img src={heroBanner} className="w-full h-full" alt="" />
              <div className="absolute top-40 left-16 flex gap-5 items-center justify-center ">
                <div className="w-11/12 mx-auto">
                  <h1 className="text-white text-5xl font-bold mb-5">
                    Crypto <br />
                    Currency
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <button className="px-10 py-2 mt-5 text-white  bg-[#00bbf0] cursor-pointer">
                    Read More
                  </button>
                </div>
                {/* image */}
                <div className="">
                  <img src={sliderImg} className="bounce-animation" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide -2 */}
          <SwiperSlide>
            <div className="">
              <img src={heroBanner} className="w-full h-full" alt="" />
              <div className="absolute top-40 left-16 flex gap-5 items-center justify-center ">
                <div className="w-11/12 mx-auto">
                  <h1 className="text-white text-5xl font-bold mb-5">
                    Crypto <br />
                    Currency
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
                    Read More
                  </button>
                </div>
                {/* image */}
                <div className="">
                  <img src={sliderImg} className="bounce-animation" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
          {/* slide-3 */}
          <SwiperSlide>
            <div className="">
              <img src={heroBanner} className="w-full h-full" alt="" />
              <div className="absolute top-64 left-16 flex gap-5 items-center justify-center ">
                <div className="w-11/12 mx-auto">
                  <h1 className="text-white text-5xl font-bold mb-5">
                    Crypto <br />
                    Currency
                  </h1>
                  <p>
                    Explicabo esse amet tempora quibusdam laudantium, laborum
                    eaque magnam fugiat hic? Esse dicta aliquid error
                    repudiandae earum suscipit fugiat molestias, veniam, vel
                    architecto veritatis delectus repellat modi impedit sequi.
                  </p>
                  <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
                    Read More
                  </button>
                </div>
                {/* image */}
                <div className="">
                  <img src={sliderImg} className="bounce-animation" alt="" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Banner;
