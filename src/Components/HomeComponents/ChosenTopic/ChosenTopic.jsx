import React, { useEffect, useState } from "react";

const ChosenTopic = () => {
  const [chosenTopic, setChosenTopic] = useState([]);
  useEffect(() => {
    const loader = async () => {
      const res = await fetch("/public/chosenTopic.json");
      const data = await res.json();
      setChosenTopic(data);
    };
    loader();
  }, []);
  return (
    <div className="my-24">
      <h1 className="text-center text-black text-3xl mb-24 font-bold ">
        Why Choose <span className="textColor">Us</span>
      </h1>
      {/* content */}
      <div className="grid grid-cols-1 gap-10 items-center justify-items-center w-11/12 mx-auto">
        {chosenTopic.map((topic) => (
          <div key={topic.id} className="card">
            <div className=" w-3/12/12 mx-auto">
              <figure className=" p-8 border-4 w-32 flex items-center justify-center border-[#00204a] rounded-full">
                <img
                  src={topic.topicPhoto}
                  alt=""
                  className="rounded-xl w-16"
                />
              </figure>
            </div>
            <div className="card-body items-center text-center text-black">
              <h2 className="card-title text-2xl">{topic.topicName}</h2>
              <p>{topic.topicDescription}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="px-10 py-2 mt-5 text-white bg-[#00bbf0] cursor-pointer">
          Read More
        </button>
      </div>
    </div>
  );
};

export default ChosenTopic;
