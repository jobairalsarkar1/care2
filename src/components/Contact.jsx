import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Logic for email sending.
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Message sent successfully!");
    }, 2000);
  };

  return (
    <section className="pb-10 px-5 sm:px-24 bg-[#f9f9f9]">
      <h1 className="head-text text-center text-[#2d6a4f] mb-5 font-heading">
        Contact Us
      </h1>
      <p className="mb-6 text-2xl sm:text-2xl text-center text-[#333333] font-sans">
        Reach out to Care2 Training Consultancy for assistance with your student
        visa, work abroad, or study abroad needs.
      </p>
      <div className="flex flex-col lg:flex-row gap-5 lg:gap-8 items-stretch">
        <div className="flex-[2] rounded-lg shadow-lg overflow-hidden">
          <iframe
            title="Location of Care2 Training Consultancy"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19835.158023164622!2d-0.012345678!3d51.5555555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876011223344555%3A0xabcdef123456789!2sUnit%20301%2C%207%20Kirkdale%20Road%2C%20London!5e0!3m2!1sen!2suk!4v1234567890123"
            width="100%"
            height="100%"
            className="h-full"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <form
          className="flex-[1] bg-white p-8 rounded-lg shadow-lg"
          onSubmit={handleSubmit}
          aria-labelledby="contactFormTitle"
        >
          <h2
            id="contactFormTitle"
            className="text-3xl font-semibold text-[#2d6a4f] text-center"
          >
            Get in Touch
          </h2>
          <p className="text-gray-800 text-lg text-center mb-2 font-sans">
            Use this form to send us a message, and we will get back to you as
            soon as possible!
          </p>
          <div className="space-y-2">
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email address"
                className="w-full px-4 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-required="true"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700 mb-1"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => {
                  handleChange(e);
                  const textarea = e.target;
                  textarea.style.height = "auto";
                  textarea.style.height = `${textarea.scrollHeight}px`;
                }}
                placeholder="Write your message"
                required
                className="w-full min-h-[100px] max-h-[400px] border rounded-md shadow-sm px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                aria-required="true"
                style={{
                  height: "auto",
                }}
              ></textarea>
            </div>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2 py-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-md shadow-md hover:bg-gradient-to-l hover:from-blue-500 hover:to-blue-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
