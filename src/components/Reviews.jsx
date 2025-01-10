import { useState, useEffect } from "react";
import { reviews } from "../utils";
import { FaArrowLeft, FaArrowRight, FaStar, FaRegStar } from "react-icons/fa";

const Reviews = () => {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0);
  const [reviewsToShow, setReviewsToShow] = useState(1); // Default to 1 review for small screens

  const totalReviews = reviews.length;

  // Update the number of reviews to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setReviewsToShow(3); // Large screens show 3 reviews
      } else if (window.innerWidth >= 768) {
        setReviewsToShow(2); // Medium screens show 2 reviews
      } else {
        setReviewsToShow(1); // Small screens show 1 review
      }
    };

    handleResize(); // Set initial value based on current screen size

    window.addEventListener("resize", handleResize); // Update value on window resize
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle the previous review action
  const handlePrevReview = () => {
    // Ensure we move backwards only if we're not at the start
    if (currentReviewIndex > 0) {
      setCurrentReviewIndex(currentReviewIndex - 1);
    }
  };

  // Handle the next review action
  const handleNextReview = () => {
    // Ensure we move forward only if we're not at the end
    if (currentReviewIndex < totalReviews - reviewsToShow) {
      setCurrentReviewIndex(currentReviewIndex + 1);
    }
  };

  return (
    <section className="bg-[#f9f9f9] pt-8 px-6">
      <h1 className="head-text text-[#2d6a4f] text-center mb-8">
        Our Happy Customers
      </h1>
      <div className="relative">
        {/* Left Arrow */}
        <button
          onClick={handlePrevReview}
          className={`absolute z-10 left-0 text-[#333333] bg-white p-3 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 ${
            currentReviewIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          aria-label="Previous Review"
          disabled={currentReviewIndex === 0}
        >
          <FaArrowLeft className="w-6 h-6" />
        </button>

        {/* Reviews Slider */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                (currentReviewIndex / reviewsToShow) * 100
              }%)`, // Adjusts for responsive number of reviews
            }}
          >
            {reviews.map((review, index) => (
              <div
                key={index}
                className="min-w-full sm:min-w-[calc(100%/1)] md:min-w-[calc(100%/2)] lg:min-w-[calc(100%/3)] p-6 rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center"
              >
                <img
                  src={review.image}
                  alt={`${review.name}'s picture`}
                  className="w-24 h-24 rounded-full mb-4 shadow-md"
                  loading="lazy"
                />
                <h2 className="text-xl font-semibold text-[#333333] text-center">
                  {review.name}
                </h2>

                {/* Star Rating */}
                <div className="flex justify-center my-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i}>
                      {i < review.rating ? (
                        <FaStar className="text-yellow-500" />
                      ) : (
                        <FaRegStar className="text-yellow-500" />
                      )}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 italic mt-2 text-center">{`"${review.review}"`}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          onClick={handleNextReview}
          className={`absolute right-0 text-[#333333] bg-white p-3 rounded-full shadow-lg top-1/2 transform -translate-y-1/2 ${
            currentReviewIndex >= totalReviews - reviewsToShow
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
          aria-label="Next Review"
          disabled={currentReviewIndex >= totalReviews - reviewsToShow}
        >
          <FaArrowRight className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default Reviews;
