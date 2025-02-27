import React, { useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import CaptchaButton from '../components/CaptchaButton'

function AdSpendCalculator() {
  const [formData, setFormData] = useState({
    industry: "Select one",
    fullName: "",
    email: "",
    phoneNumber: "",
    website: "",
    visitors: "",
    conversionRate: "",
    saleValue: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [revenue, setRevenue] = useState(0);
const [captchaVerified, setCaptchaVerified] = useState(false); // State for CAPTCHA
  const options = ["Tutoring", "Vet", "Waste Collection", "Tree Surgeon"];

  // Handle input changes
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    // Trigger revenue calculation
    if (id === "visitors" || id === "conversionRate" || id === "saleValue") {
      calculateRevenue({ ...formData, [id]: value });
    }
  };

  // Handle dropdown selection
  const handleSelect = (option) => {
    setFormData({ ...formData, industry: option });
    setDropdownOpen(false);
  };

  // Calculate revenue
  const calculateRevenue = ({ visitors, conversionRate, saleValue }) => {
    const v = parseFloat(visitors) || 0;
    const cr = parseFloat(conversionRate) / 100 || 0;
    const sv = parseFloat(saleValue) || 0;
    const result = v * cr * sv;

    setRevenue(result.toFixed(2)); // Format to 2 decimal places
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (captchaVerified) {
      setIsModalOpen(true);
    }
  };
  return (
    <>
      <div className="py-20 font-neueMachina">
        <h1 className="md:text-6xl text-4xl mb-8 font-medium leading-normal">
          How much to <span className="italic font-normal">Spend</span> <br /> to{" "}
          <span className="italic font-normal bg-gradient-to-r from-[#0A0C13] to-[#8483837e] px-2">
            Scale
          </span>{" "}
          profitably
        </h1>

        <div className="py-10">
          <form className="mb-12">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Industry</label>
                <div className="relative w-full">
                  <div
                    className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl text-white cursor-pointer"
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {formData.industry}
                  </div>
                  {dropdownOpen && (
                    <ul className="absolute w-full bg-gray-800 text-white mt-2 rounded-2xl border-2 border-gray-500">
                      {options.map((option, index) => (
                        <li
                          key={index}
                          className="p-3 hover:bg-gray-600 cursor-pointer"
                          onClick={() => handleSelect(option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Full name</label>
                <input
                  type="text"
                  id="fullName"
                  placeholder="John Doe"
                  className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Email Address</label>
                <input
                  type="text"
                  id="email"
                  placeholder="help@amory.digital"
                  className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-lg font-medium">Phone Number</label>
                <input
                  type="text"
                  id="phoneNumber"
                  placeholder="+1 491784712"
                  className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 mt-5">
              <label className="text-lg font-medium">Website</label>
              <input
                type="text"
                id="website"
                placeholder="www.amory.digital"
                className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                onChange={handleChange}
              />
            </div>
          </form>

          {/* Button to open modal */}
          <div className="flex flex-col sm:flex-row gap-6 mt-6 items-start sm:items-center">
              <CaptchaButton setCaptchaVerified={setCaptchaVerified} />
              <button
                type="submit"
                className={`flex items-center py-4 px-6 sm:py-5 sm:px-8 space-x-2 rounded-xl ${
                  captchaVerified ? "bg-white text-gray-600 cursor-pointer" : "bg-gray-500 text-gray-300 cursor-not-allowed"
                }`}
                disabled={!captchaVerified}
                onClick={(e)=>{handleSubmit(e)}}
              >
                <AiOutlineThunderbolt className="-rotate-12 font-bold" />
                <p className="font-bold text-sm sm:text-base">Book a strategy call</p>
              </button>
            </div>
        </div>

        {/* Revenue Calculation Section */}
        <div className="text-center text-lg text-gray-400 py-20 leading-10">
          <p>
            If 5% of those visitors converted to a sale,{" "}
            <b className="text-white">how much revenue</b> would that generate for your business?
          </p>
          <p>
            Know your <b className="text-white">conversion rate (CR)</b> and{" "}
            <b className="text-white">average sale value (ASV)?</b>
          </p>
        </div>

        <div className="flex md:flex-row flex-col items-center w-full gap-5">
          <p>Visitors</p>
          <span>x</span>
          <input
            type="text"
            id="visitors"
            placeholder="e.g. 5000"
            className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl w-full"
            onChange={handleChange}
          />
          <span>x</span>
          <input
            type="text"
            id="conversionRate"
            placeholder="e.g. 5%"
            className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl w-full"
            onChange={handleChange}
          />
          <span>x</span>
          <input
            type="text"
            id="saleValue"
            placeholder="Avg. sale value"
            className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl w-full"
            onChange={handleChange}
          />
          <span>=</span>
          <p className="text-white font-bold">${revenue} revenue</p>
        </div>

        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-gray-900 text-white p-6 rounded-xl w-96">
              <h2 className="text-2xl font-bold mb-4">Form Details</h2>
              <p><strong>Full Name:</strong> {formData.fullName}</p>
              <p><strong>Email:</strong> {formData.email}</p>
              <p><strong>Phone Number:</strong> {formData.phoneNumber}</p>
              <p><strong>Website:</strong> {formData.website}</p>

              <button
                className="mt-4 bg-red-500 px-4 py-2 rounded-xl"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default AdSpendCalculator;
