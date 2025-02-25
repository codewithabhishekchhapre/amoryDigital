import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { BsLightningFill } from "react-icons/bs";

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <footer className="py-10 bg-[url('/src/assets/hero-bg-3.png')] font-neueMachina bg-cover bg-no-repeat bg-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-end mb-8 font-medium leading-normal px-4 sm:px-8">
          <span className="italic font-normal bg-gradient-to-r from-[#0A0C13] to-[#ffffff7e] px-2">
            Interested?
          </span>{" "}
          Let's <br /> get in touch now
        </h1>

        {/* Form Section */}
        <div className="border-b border-zinc-700 py-10 px-4 sm:px-8">
          <form className="mb-12" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.keys(formData).map((key) => (
                <div key={key} className="flex flex-col gap-2">
                  <label htmlFor={key} className="text-base sm:text-lg font-medium capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </label>
                  <input
                    type="text"
                    id={key}
                    placeholder={`Enter ${key}`}
                    className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl text-sm sm:text-base"
                    value={formData[key]}
                    onChange={handleChange}
                  />
                </div>
              ))}
            </div>

            {/* Checkbox & Button Section */}
            <div className="flex flex-col sm:flex-row gap-6 mt-6 items-start sm:items-center">
              <div className="bg-white text-gray-600 py-4 px-6 sm:py-5 sm:px-8 flex items-center gap-2 rounded-xl">
                <input type="checkbox" className="size-4" disabled />
                <label className="text-sm sm:text-base">I'm not a robot</label>
              </div>

              <button
                type="submit"
                className="flex items-center bg-white text-gray-600 py-4 px-6 sm:py-5 sm:px-8 space-x-2 rounded-xl cursor-pointer"
              >
                <AiOutlineThunderbolt className="-rotate-12 font-bold" />
                <p className="font-bold text-sm sm:text-base">Book a strategy call</p>
              </button>
            </div>
          </form>
        </div>

        {/* Footer Section */}
        <div className="py-10 sm:py-14 flex flex-col sm:flex-row items-center gap-4 sm:gap-10 px-4 sm:px-8 text-center sm:text-left">
          <h1 className="font-bold flex items-center gap-1 text-lg sm:text-xl">
            <BsLightningFill className="text-yellow-400" />
            AmoryDigital
          </h1>
          <h3 className="font-medium text-gray-500 text-sm sm:text-base">Copyright 2024</h3>
          <h3 className="font-medium text-gray-500 text-sm sm:text-base">Privacy Policy</h3>
        </div>
      </footer>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 px-4 sm:px-0">
          <div className="bg-gray-900 p-6 rounded-xl shadow-xl w-full sm:w-3/4 md:w-1/2">
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
