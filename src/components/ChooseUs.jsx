import { useEffect, useState } from "react";
import { MdCheckCircle } from "react-icons/md";
import { benefits } from "../utils";
import { useInView } from "react-intersection-observer";
import { FaPlus, FaPercent } from "react-icons/fa";
import { Reviews } from "../components";

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const end = value;
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / end));

      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) {
          clearInterval(timer);
        }
      }, stepTime);
    }
  }, [inView, value]);

  return (
    <h2 ref={ref} className="text-2xl sm:text-4xl font-bold text-black">
      {count}
    </h2>
  );
};

const ChooseUs = () => {
  return (
    <section className="max-container bg-[#f7f9f9] py-12 px-6">
      <h1 className="head-text text-[#2d6a4f] mb-6 text-center">
        Why Choose Us?
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 justify-between">
        {/* Benefits List */}
        <ul className="space-y-6">
          {benefits.map((benefit, index) => (
            <li
              key={index}
              className="flex items-start space-x-4 text-lg text-gray-700"
            >
              <MdCheckCircle
                className="h-6 w-6 text-green-500"
                aria-label="check icon"
              />
              <span className="text-xl sm:text-2xl font-sans">{benefit}</span>
            </li>
          ))}
        </ul>

        {/* Achievements/Statistics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="sm:row-span-2 bg-gradient-to-r from-blue-400 to-blue-700 p-8 rounded-xl shadow-lg text-center flex flex-col items-center justify-center">
            {/* <h2 className="text-2xl sm:text-4xl font-bold text-black">
              10,000+
            </h2> */}
            <span className="flex items-center justify-center">
              {/* This component is responsible for showing dynamic number */}
              <AnimatedNumber value={10000} />
              <FaPlus className="w-6 h-6" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">
              Total Clients
            </p>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-green-600 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
            {/* <h2 className="text-2xl sm:text-4xl font-bold text-black">98%</h2> */}
            <span className="flex items-center justify-center">
              <AnimatedNumber value={98} />
              <FaPercent className="w-6 h-6" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">
              Success Rate
            </p>
          </div>
          <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-yellow-300 to-yellow-500 p-6 rounded-lg shadow-md text-center flex flex-col items-center justify-center">
            {/* <h2 className="text-2xl sm:text-4xl font-bold text-black">10+</h2> */}
            {/* <AnimatedNumber value={10} /> */}
            <span className="flex items-center justify-center">
              <AnimatedNumber value={10} />
              <FaPlus className="w-6 h-6" />
            </span>
            <p className="text-xl sm:text-2xl font-semibold text-gray-800">
              Experience
            </p>
          </div>
        </div>
      </div>
      <Reviews />
    </section>
  );
};

export default ChooseUs;
