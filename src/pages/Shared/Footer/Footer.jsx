import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaTwitter,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <footer className="footer first_color text-white p-10">
        <nav>
          <h6 className="text-3xl font-bold text-white ">Address</h6>
          <a className="link link-hover flex items-center justify-center gap-3 text-xl">
            <FaLocationDot /> Location
          </a>
          <a className="link link-hover flex items-center justify-center gap-3 text-xl">
            <BsFillTelephoneFill /> Call +01 1234567890
          </a>
          <a className="link link-hover flex items-center justify-center gap-3 text-xl">
            <MdEmail /> demo@gmail.com
          </a>
          <a className="link link-hover flex items-center justify-center gap-3 text-2xl mt-5">
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
            <FaInstagram />
          </a>
        </nav>
        <nav>
          <h6
            className="text-3xl font-bold text-white ml-16
        "
          >
            Info
          </h6>
          <p className="w-9/12 mx-auto">
            necessary, making this the first true generator on the Internet. It
            uses a dictionary of over 200 Latin words, combined with a handful
          </p>
        </nav>
        <nav>
          <h6 className="text-3xl font-bold text-white">Links</h6>
          <a className="link link-hover text-xl">Home</a>
          <a className="link link-hover text-xl">About</a>
          <a className="link link-hover text-xl">Service</a>
          <a className="link link-hover text-xl">Why Us</a>
          <a className="link link-hover text-xl">Team</a>
        </nav>
        <form className="ml-12">
          <h6 className="text-3xl font-bold text-white">Newsletter</h6>
          <fieldset className="form-control w-80">
            <div className="join">
              <input
                type="email"
                placeholder="username@site.com"
                className="bg-transparent border-b text-white border-white text-2xl"
              />
            </div>
            <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
              Subscribe
            </button>
          </fieldset>
        </form>
      </footer>
      <div className="bg-white w-full text-center">
        <h2 className="text-xl text-black p-5">
          © 2024 All Rights Reserved By Free Html Templates
        </h2>
      </div>
    </>
  );
};

export default Footer;
