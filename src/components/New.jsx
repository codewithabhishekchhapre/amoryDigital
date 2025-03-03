import React from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { useState } from "react";
function AdSpendCalculator() {
  const [selected, setSelected] = useState("Select one");
  const [open, setOpen] = useState(false);

  const options = ["Tutoring", "Vet", "Waste Collection", "Tree Surgeon"];
  return (
    <>
      <div className="py-20 font-neueMachina ">
        <div className=" py-10 mb-10">
          <h1 className="md:text-6xl text-4xl mb-8 font-medium leading-normal">
            How much to <span className="italic font-normal">Spend</span> <br /> to <span className="italic font-normal bg-gradient-to-r px-2 from-[#0A0C13] to-[#ffffff7e]">Scale</span> profitably
          </h1>
          <div className=" py-10">
            <form className="mb-12">
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="contactYou" className="text-lg font-medium">
                    When should we contact you?
                  </label>
                  <div className="relative w-full">
                    {/* Selected Option */}
                    <div
                      className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl text-white cursor-pointer"
                      onClick={() => setOpen(!open)}
                    >
                      {selected}
                    </div>

                    {/* Dropdown Options */}
                    {open && (
                      <ul className="absolute w-full bg-gray-800 text-white mt-2 rounded-2xl border-2 border-gray-500">
                        {options.map((option, index) => (
                          <li
                            key={index}
                            className="p-3 hover:bg-gray-600 cursor-pointer"
                            onClick={() => {
                              setSelected(option);
                              setOpen(false);
                            }}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="fullName" className="text-lg font-medium">
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="John Doe"
                    className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-lg font-medium">
                    Email Address
                  </label>
                  <input
                    type="text"
                    id="email"
                    placeholder="help@amory.digital"
                    className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="phoneNumber" className="text-lg font-medium">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    placeholder="+1 491784712"
                    className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                  />
                </div>


              </div>
              <div className="flex flex-col gap-2 mt-5">
                <label htmlFor="website" className="text-lg font-medium">
                  Website
                </label>
                <input
                  type="text"
                  id="website"
                  placeholder="www.amory.digital"
                  className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl"
                />
              </div>
            </form>
            <div className="justify-self-end flex sm:flex-row flex-col gap-10">
              <div className="bg-white text-gray-600 py-5 px-8 space-x-2 rounded-xl">
                <input type="checkbox" className="size-4" disabled />
                <label htmlFor="">I'm not a robot</label>
              </div>
              <div className="flex items-center bg-white text-gray-600 py-5 px-8 space-x-2 rounded-xl">
                <AiOutlineThunderbolt className="-rotate-12 font-bold" />
                <p className="font-bold">Book a strategy call</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-lg text-gray-400 py-20 border-b border-gray-500">
          <p>If you invested <b className="text-white">$2,000 in Google Ads</b>, we estimate you could get</p>
          <span><b className="text-white">-</b></span>
          <p>site visitors</p>
        </div>
        <div className="text-center text-lg text-gray-400 py-20 leading-10">
          <p>If 5% of those visitors converted to a sale, <b className="text-white">how much revenue</b>would that generate for your business?</p>
          <p>Know your <b className="text-white">conversion rate (CR) </b> and <b className="text-white">average sale value (ASV)?</b></p>
        </div>
        <div className="flex md:flex-row flex-col items-center w-full gap-5">
          <p>visitors</p>
          <span>x</span>
          <input
            type="text"
            placeholder="20%"
            className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl w-full"
          />
          <span>x</span>
          <input
            type="text"
            placeholder="Avg. sale value"
            className="p-3 bg-transparent border-2 border-gray-500 rounded-2xl w-full"
          />
          <span>=</span>
          <p>$0 revenue</p>
        </div>
      </div>
    </>
  );
}

export default AdSpendCalculator;
