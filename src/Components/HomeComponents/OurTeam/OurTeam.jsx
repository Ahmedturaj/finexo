import React, { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";

const OurTeam = () => {
  const [teams, setTeams] = useState([]); // Initialize as an empty array

  useEffect(() => {
    const loader = async () => {
      const res = await fetch("/team.json"); // No need for "/public/" here
      const data = await res.json();
      setTeams(data);
    };
    loader();
  }, []);

  return (
    <div className="first_color mt-24 pt-20 pb-16">
      <h1 className="text-center text-white text-3xl font-bold mb-5">
        Our <span className="textColor">Team</span>
      </h1>

      {/* Team members */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-6 px-4">
        {teams.map((member) => (
          <div key={member.id} className="card bg-gradient-custom shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src={member.photo}
                alt={member.name}
                className="rounded-full w-full border-4 border-white h-56 object-cover"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title text-[#00bbf0]">{member.name}</h2>
              <p className=" text-white">{member.position}</p>
            </div>
            <div className=" flex gap-4 items-center justify-center pb-4 text-white text-2xl">
              <FaFacebookF className="hover:text-[#00bbf0] cursor-pointer" />
              <FaYoutube className="hover:text-[#00bbf0] cursor-pointer" />
              <FaTwitter className="hover:text-[#00bbf0] cursor-pointer" />
              <FaInstagram className="hover:text-[#00bbf0] cursor-pointer" />
              <FaLinkedinIn className="hover:text-[#00bbf0] cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
