import React, { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const OurServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const loader = async () => {
      const response = await fetch("/public/service.json");
      const data = await response.json();
      setServices(data);
    };
    loader();
  }, []);

  return (
    <div className="my-24 px-5">
      <div className=" w-10/12 mx-auto text-center text-black">
        <h1 className="text-center text-3xl font-bold mb-5">
          Our <span className="textColor">Services</span>
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </p>
      </div>
      {/* service card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 items-center justify-items-center gap-6">
        {services.map((service) => (
          <div
            key={service._id}
            className="card bg-[#f8f8f9] text-black rounded shadow-md"
          >
            <div className="card-body items-center text-center">
              <img src={service.servicesImage} className="w-24" alt="" />
              <h2 className="card-title text-xl font-bold">
                {service.ServiceTitle}
              </h2>
              <p>{service.ServiceDescription}</p>
              <div className="card-actions justify-end">
                <button className="hover:text-[#00bbf0] flex gap-2 items-center justify-center  font-bold">
                  Read more <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
          View All
        </button>
      </div>
    </div>
  );
};

export default OurServices;
