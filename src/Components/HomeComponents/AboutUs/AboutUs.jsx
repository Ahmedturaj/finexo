import React from "react";
import aboutImg from "../../../assets/images/about-img.png";
const AboutUs = () => {
  return (
    <div className="w-11/12 mx-auto pt-16 text-white">
      <div className=" w-10/12 mx-auto text-center">
        <h1 className="text-center text-3xl font-bold mb-5">
          About <span className="textColor">Us</span>
        </h1>
        <p>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration
        </p>
      </div>
      {/* content */}
      <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
        {/* img */}
        <div className="">
          <img src={aboutImg} className="w-full" alt="" />
        </div>
        {/* blog */}
        <div className="w-10/12 mx-auto">
          <h1 className="text-2xl font-bold">We Are Finexo</h1>
          <p className="my-5 ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text. All Molestiae odio earum non qui cumque provident
            voluptates, repellendus exercitationem, possimus at iste corrupti
            officiis unde alias eius ducimus reiciendis soluta eveniet. Nobis
            ullam ab omnis quasi expedita.
          </p>
          <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
