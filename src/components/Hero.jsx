import React from "react";
import { Link } from "react-scroll";
import { care2 } from "../assets"; // Your logo

const Hero = () => {
  return (
    <section
      className="relative bg-cover bg-center h-screen flex items-center justify-center"
      style={{ backgroundImage: "url('path-to-your-hero-image.jpg')" }}
    >
      {/* Overlay for dimming the background */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Hero Content */}
      <div className="z-10 text-center text-white px-5 md:px-16">
        <h1 className="text-4xl md:text-5xl font-semibold mb-6 text-shadow-md">
          Your Journey to Study, Work, and Live Abroad Starts Here
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Care2 Training Consultancy offers expert advice on student visas, work
          abroad opportunities, and study placements across the globe.
        </p>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all"
        >
          Get in Touch
        </Link>
      </div>
      {/* Geometric Shapes Overlay */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full transform rotate-45 z-0"></div>{" "}
      {/* Circle */}
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-green-500 rounded-full transform rotate-45 z-0"></div>{" "}
      {/* Larger circle */}
    </section>
  );
};

export default Hero;
