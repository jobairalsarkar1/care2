import { useState } from "react";
import { Link } from "react-scroll";
import { care2 } from "../assets";
import { FaBars } from "react-icons/fa"; // Importing FaBars from react-icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center lg:px-24 px-5 py-4 absolute top-0 bg-transparent right-0 left-0">
      <Link to="hero">
        <img
          src={care2}
          alt="Care2 Logo"
          className="w-15 h-10 md:w-20 md:h-12 object-contain"
        />
      </Link>
      {/* Desktop Menu */}
      <ul className="lg:text-lg hidden md:flex items-center gap-3 lg:gap-5 md:font-semibold text-gray-700">
        {/* <li>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
        </li> */}
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="services"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            to="choose-us"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Why Choose Us?
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>

      <Link
        to="#"
        className="hidden md:block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Book a Meeting
      </Link>

      <button type="button" className="button md:hidden">
        <FaBars className="w-6 h-6 sm:w-8 sm:h-8 text-gray-700" />
      </button>
    </nav>
  );
};

export default Navbar;
