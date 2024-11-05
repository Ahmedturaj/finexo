import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const loader = async () => {
      const res = await fetch("/public/reviews.json");
      const data = await res.json();
      setReviews(data);
    };
    loader();
  }, []);

  // Navigate to previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Get slides to show based on screen width (1 for mobile, 2 for desktop)
  const visibleSlides = window.innerWidth >= 768 ? 2 : 1;

  // Get current slides
  const getVisibleSlides = () => {
    return reviews.slice(currentIndex, currentIndex + visibleSlides);
  };

  return (
    <div className="my-24">
      <h1 className="text-center text-black text-3xl font-bold mb-14">
        What says our <span className="textColor">Customers</span>
      </h1>

      {/* Carousel container */}
      <div className="relative flex items-center justify-center">
        {/* Carousel content */}
        <div className="flex gap-6 overflow-hidden">
          {getVisibleSlides().map((review, index) => (
            <div key={index} className="w-full px-8 py-4 bg-white rounded-lg">
              <div className="w-full  px-8 py-4 mt-16 bg-white rounded-lg shadow-lg ">
                <div className="flex justify-center -mt-16 md:justify-start">
                  <img
                    className="object-cover w-20 h-20 border-2  rounded-full "
                    alt="Testimonial avatar"
                    src={review.customerPhoto}
                  />
                </div>
                <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
                  {review.customerName}
                </h2>
                <h2 className="mt-2 text-xl font-semibold text-gray-800  md:mt-0">
                  {review.service}
                </h2>
                <p className="mt-2 text-sm text-gray-600 ">{review.review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center  my-6">
        <button
          onClick={prevSlide}
          className="text-3xl text-gray-600 border-gray-600 p-2 border bg-white"
        >
          <FaAngleLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-3xl text-gray-600 border border-gray-600 p-2 bg-white"
        >
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
