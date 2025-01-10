import { Link } from "react-scroll";
import { plane, abroad_study, abroad_live, abroad_work } from "../assets";
import { useEffect, useState, useRef } from "react";
import { useMemo } from "react";

const Hero = () => {
  const [isSpinningComplete, setIsSpinningComplete] = useState(false);
  const [currentImage, setCurrentImage] = useState(0); // Track current image
  const animationRef = useRef(null);
  // const images = [abroad_study, abroad_live, abroad_work]; // Array of images
  const images = useMemo(() => [abroad_study, abroad_live, abroad_work], []);

  useEffect(() => {
    const handleAnimationEnd = () => {
      setIsSpinningComplete(true); // To Ensure sping is done.
    };

    const element = animationRef.current;
    if (element) {
      element.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (element) {
        element.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  useEffect(() => {
    // After spin complition cycle images.
    if (isSpinningComplete) {
      const interval = setInterval(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length); // Cycle through images
      }, 5000); // Image will change every 5s.

      return () => clearInterval(interval); // Clear interval when component unmounts
    }
  }, [isSpinningComplete]);

  return (
    <section className="relative bg-cover bg-center h-screen flex items-center justify-center">
      <div className="px-5 sm:px-24 z-10 h-full text-center grid grid-cols-1 lg:grid-cols-2">
        {/* Text and Button Holder */}
        <div className="px-4 flex flex-col items-center justify-center">
          <img
            src={plane}
            alt="Care2 Consultancy Plane Placeholder"
            className="lg:hidden h-40 w-56"
          />
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 bg-gradient-to-r from-blue-500 to-teal-500 bg-clip-text text-transparent font-heading"
            style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)" }}
          >
            Start Your Global Journey with Expert Guidance
          </h1>
          <p className="text-lg md:text-xl mb-8 font-sans">
            Care2 Training Consultancy offers personalized support to help you
            study, work, or live abroad with confidence and ease.
          </p>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="bg-gradient-to-r from-blue-500 to-teal-500 text-white hover:from-teal-500 hover:to-blue-500 font-semibold py-3 px-8 rounded-2xl text-lg transition-all cursor-pointer"
            aria-label="Get in touch with Care2 Training Consultancy"
          >
            Get in Touch Today
          </Link>
        </div>

        {/* Animated Design Holder */}
        <div className="hidden lg:flex items-center justify-center h-full">
          <div
            ref={animationRef}
            className={`relative w-[380px] h-[350px] bg-white rounded-[40px] ${
              isSpinningComplete
                ? "scale-105 shadow-[0_10px_25px_rgba(0,0,0,0.2)]"
                : ""
            } transition-all duration-500 ease-out`}
          >
            {/* Once spining is complete start showing images */}
            {isSpinningComplete && (
              <div className="relative w-full h-full overflow-hidden rounded-[40px]">
                {/* All images are rendered but only the current image is visible */}
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`abroad-${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      transition: "opacity 1s ease-in-out",
                    }}
                    loading="lazy"
                  />
                ))}
              </div>
            )}

            {/* Spinning Border is removed after animation completes */}
            {!isSpinningComplete && <div className="gradient-border"></div>}

            {/* Glow Effect removed after animation completes */}
            {isSpinningComplete && <div className="gradient-glow hidden"></div>}
          </div>
        </div>
      </div>

      {/* Beautiful Wave Shape with Gradient as background */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <defs>
            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#00BFFF", stopOpacity: 1 }}
              />
              <stop
                offset="50%"
                style={{ stopColor: "#1E90FF", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#4B0082", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            fill="url(#grad1)"
            fillOpacity="1"
            d="M0,256L30,250.7C60,245,120,235,180,213.3C240,192,300,160,360,154.7C420,149,480,171,540,186.7C600,203,660,213,720,192C780,171,840,117,900,106.7C960,96,1020,128,1080,133.3C1140,139,1200,117,1260,106.7C1320,96,1380,96,1410,96L1440,96L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
