import { about_cover } from "../assets";

const About = () => {
  return (
    <section className="max-container bg-[#e6f7e6] font-sans">
      <h2 className="head-text text-center text-[#2d6a4f] mb-5">About Us</h2>

      <div className="flex flex-col xl:flex-row gap-8">
        {/* About us Image */}
        <div className="flex w-full xl:w-[40%] h-[390px] xl:h-auto bg-green-400 z-10 overflow-hidden">
          <img
            src={about_cover}
            alt="Illustration of customer service"
            className="rounded-lg shadow-lg w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* About Us content container */}
        <div className="flex flex-col w-full xl:w-[60%] h-auto xl:h-auto px-6 py-4">
          <p className="text-gray-800 mb-2 leading-relaxed text-justify subhead-text">
            At Care2 Training Consultancy, we are dedicated to helping
            individuals achieve their dreams of studying, working, and living
            abroad. With years of experience in the global education and
            immigration sectors, we offer expert guidance in navigating the
            complexities of visa applications, study abroad programs, and
            international career opportunities.
          </p>
          <p className="text-gray-800 mb-2 leading-relaxed text-justify subhead-text">
            Our team of professionals provides personalized support tailored to
            each client's unique goals. Whether you're a student seeking
            educational opportunities overseas, a professional looking to expand
            your career abroad, or someone interested in relocating, we are here
            to assist you every step of the way.
          </p>
          <p className="text-gray-800 mb-2 leading-relaxed text-justify subhead-text">
            We take pride in our in-depth knowledge of visa processes,
            educational pathways, and international job markets, offering you
            trusted advice and solutions. With Care2 Training Consultancy, your
            global ambitions are within reach, and we’re committed to making
            your journey abroad as smooth and successful as possible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
