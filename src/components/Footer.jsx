import { facebook, instagram, linkedin, x } from "../assets";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1f3d47] text-white pt-8 rounded-t-2xl">
      <div className="container mx-auto max-w-[100%] overflow-hidden">
        <div className="px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8 text-center sm:text-left sm:px-20">
          {/* Name and Address */}
          <div className="flex flex-col items-center xl:col-span-1 sm:items-start">
            <h1 className="text-2xl font-bold mb-1 font-sans">
              CARE2 TRAINING LIMITED
            </h1>
            <p className="text-sm text-gray-300">
              Unit 301, 3rd Floor, 7 KirKdale Road, Bushwood, London E11 1HP, UK
              <br />
              <span className="flex items-center sm:items-start justify-center sm:justify-start">
                <FaPhoneAlt className="mr-2 text-blue-300" />
                Call Us :&nbsp;{" "}
                <a
                  href="tel:02035762072"
                  className="text-blue-300 hover:underline"
                >
                  0203 576 2072
                </a>
              </span>
              <span className="flex items-center sm:items-start justify-center sm:justify-start">
                <FaEnvelope className="mr-2 text-blue-300" />
                Email Us :&nbsp;{" "}
                <a
                  href="mailto:info@care2training.com"
                  className="text-blue-300 hover:underline"
                >
                  info@care2training.com
                </a>
              </span>
            </p>
          </div>

          {/* Navigation Links - Our Company */}
          <div className="flex flex-col items-center sm:items-start sm:px-14 md:px-20">
            <h2 className="font-semibold text-lg mb-1">Our Company</h2>
            <ul className="space-y-0.5 text-sm text-gray-300">
              <li>
                <a href="#" className="hover:text-blue-300 hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 hover:underline">
                  Privacy & Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-300 hover:underline">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex flex-col items-center sm:items-start xl:px-16">
            <h2 className="font-semibold text-lg mb-1">Subscribe</h2>
            <p className="text-sm mb-2 text-center sm:text-left text-gray-300">
              Subscribe to get the latest news from us.
            </p>
            <form className="flex flex-col sm:flex-row items-center sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 w-full">
              <input
                type="email"
                placeholder="Email address"
                className="p-2 rounded-md sm:text-sm text-gray-700 focus:outline-none w-full sm:w-auto"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-400 to-blue-500 text-white px-4 sm:px-2 py-2 rounded-md sm:text-sm hover:from-blue-500 hover:to-blue-600 transition duration-300 ease-in-out w-full sm:w-auto font-semibold"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4 mt-3 justify-center sm:justify-start">
              <a href="#" aria-label="Facebook">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-8 h-8 text-blue-300 hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="#" aria-label="Instagram">
                <img
                  src={instagram}
                  alt="Instagram"
                  className="w-8 h-8 text-blue-300 hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="#" aria-label="Linkedin">
                <img
                  src={linkedin}
                  alt="Linkedin"
                  className="w-8 h-8 text-blue-300 hover:text-blue-400 transition duration-300"
                />
              </a>
              <a href="#" aria-label="Twitter">
                <img
                  src={x}
                  alt="X"
                  className="w-8 h-8 text-blue-300 hover:text-blue-400 transition duration-300"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm mt-5 border-t border-gray-500 py-2 text-gray-300">
          <p>Copyright © Care2 2025. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
