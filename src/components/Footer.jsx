import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import CaptchaButton from "./CaptchaButton";
import logo from "../assets/DarkI.png";

function Footer() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    website: "",
    contactYou: "",
    googleAds: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      setShowModal(true);
    }
  };

  return (
    <>
    <footer className="py-10 px-6 mt-4  bg-[url('/src/assets/hero-bg-3.png')] bg-cover bg-no-repeat bg-center text-white font-neueMachina">
     {/* Heading */}
     <h1 className="text-3xl sm:text-4xl md:text-5xl text-end mb-12 font-medium leading-normal px-4 sm:px-8">
          <span className="italic font-normal bg-gradient-to-r from-[#0A0C13] to-[#8483837e] px-4 py-1">
            Interested?
          </span>{" "}
          Let's <br /> get in touch now
        </h1>
      <form className="grid grid-cols-1 md:grid-cols-3 gap-6" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-gray-400">Full name</label>
          <input
            type="text"
            id="fullName"
            placeholder="John Doe"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.fullName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Email Address</label>
          <input
            type="email"
            id="email"
            placeholder="help@amory.digital"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Phone Number</label>
          <input
            type="text"
            id="phoneNumber"
            placeholder="+1 492 784712"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Website</label>
          <input
            type="text"
            id="website"
            placeholder="www.amory.digital"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.website}
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block mb-2 text-gray-400">When should we contact you?</label>
          <select
            id="contactYou"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.contactYou}
            onChange={handleChange}
          >
            <option value="">Select a timespan</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <div>
          <label className="block mb-2 text-gray-400">Are you currently running Google Ads?</label>
          <select
            id="googleAds"
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-md"
            value={formData.googleAds}
            onChange={handleChange}
          >
            <option value="">Select your choice</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </form>
      <div className="flex flex-col sm:flex-row gap-6 mt-6 items-center">
        <CaptchaButton setCaptchaVerified={setCaptchaVerified} />
        <button
          type="submit"
          onClick={handleSubmit}
          className={`py-4 px-6 rounded-lg text-lg flex items-center gap-2 font-bold transition-all duration-300 ${
            captchaVerified ? "bg-white text-black" : "bg-gray-700 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!captchaVerified}
        >
          <AiOutlineThunderbolt className="-rotate-12" /> Book a strategy call
        </button>
      </div>
      <div className="py-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-center sm:text-left">
          <h1 className="font-bold flex items-center gap-1 text-lg sm:text-xl">
            <img src={logo} alt="" className="h-8 w-8 rounded-full" />
            AmoryDigital
          </h1>
          <h3 className="font-medium text-gray-400 text-sm sm:text-base">Copyright 2024</h3>
          <h3 className="font-medium text-gray-400 text-sm sm:text-base">Privacy Policy</h3>
        </div>
    </footer>
    {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-0">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full sm:w-3/4 md:w-1/2 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-4">Form Preview</h2>
            <ul className="space-y-2 text-sm sm:text-lg">
              {Object.entries(formData).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}:</strong> {value || "N/A"}
                </li>
              ))}
            </ul>
            <button
              className="mt-6 px-4 py-2 bg-red-500 text-white rounded-lg"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
            </>
  );
}

export default Footer;
