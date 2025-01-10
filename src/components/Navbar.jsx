import { useState } from "react";
import { Link } from "react-scroll";
import { care2 } from "../assets";
import { FaBars } from "react-icons/fa"; // Importing FaBars from react-icons
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:px-24 px-5 py-4 border border-b-gray-300 absolute top-0 bg-transparent right-0 left-0 z-30">
      {/* Care2 Logo */}
      <Link to="hero">
        <img
          src={care2}
          alt="Care2 Logo"
          className="w-15 h-10 md:w-20 md:h-12 object-contain"
        />
      </Link>
      {/* Desktop Menu */}
      <ul className="lg:text-lg hidden md:flex items-center gap-3 lg:gap-5 md:font-semibold text-blue-800">
        {/* <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer hover:underline hover:decoration-[3px] hover:decoration-transparent hover:bg-clip-text hover:bg-gradient-to-r from-blue-400 to-blue-700 transition"
          >
            Home
          </Link>
        </li> */}
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group"
          >
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group"
          >
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="choose-us"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group"
          >
            Why Choose Us?
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer relative group"
          >
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transition-all duration-700 group-hover:w-full"></span>
          </Link>
        </li>
      </ul>

      {/* Mobile Menu Toggle (Open) */}
      {!isOpen && (
        <button
          type="button"
          onClick={toggleMenu}
          className="md:hidden absolute right-7"
        >
          <FaBars className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
        </button>
      )}

      {/* Mobile Menu */}
      <div
        className={`pt-28 pl-9 fixed lg:hidden top-0 right-0 w-[45%] h-screen bg-[#2d6a4f] text-white flex flex-col items-start justify-start gap-5 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        {/* Mobile Menu Toggle (Close) */}
        {isOpen && (
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden absolute right-7 top-5 z-20"
          >
            <FaXmark className="w-7 h-7 sm:w-8 sm:h-8 text-white hover:text-gray-300 transition" />
          </button>
        )}
        <ul className="text-lg font-semibold">
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300"
              onClick={toggleMenu} // Close menu on link click
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300"
              onClick={toggleMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="choose-us"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300"
              onClick={toggleMenu}
            >
              Why Choose Us?
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-gray-300"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </li>
        </ul>
        <Link
          to="#"
          className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition duration-300"
          onClick={toggleMenu} // Close menu on button click
        >
          Book a Meeting
        </Link>
      </div>

      {/* Button in Desktop view */}
      <Link
        to="#"
        className="hidden md:block px-3 py-1.5 text-white rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg transition-transform duration-300 transform hover:-translate-y-0.5"
      >
        Book a Meeting
      </Link>

      {/* 
      <button type="button" className="button md:hidden absolute right-7">
        <FaBars className="w-7 h-7 sm:w-8 sm:h-8 text-gray-700" />
      </button> */}
    </nav>
  );
};

export default Navbar;
