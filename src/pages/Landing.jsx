import React from 'react'
import { FaRegCircleDot } from "react-icons/fa6";
import { IoIosCheckboxOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

function Landing() {

  const steps = [
    {
      id: 1,
      title: "Strategy Call",
      description:
        "Let's discuss your goals, challenges, and opportunities. We’ll assess where you are and map out where you want to be.",
    },
    {
      id: 2,
      title: "Custom Growth Plan",
      description:
        "We create a tailored roadmap with actionable steps to scale your brand efficiently—covering marketing, conversions, and operations.",
    },
    {
      id: 3,
      title: "Execution & Optimization",
      description:
        "Our team implements high-impact strategies, continuously optimizing for maximum growth and profitability.",
    },
    {
      id:4,
      title: "Scale & Repeat",
      description:
        "As your business expands, we refine and scale your strategy to ensure sustained success.",
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center h-[calc(100vh-100px)] bg-[url('/src/assets/hero-bg.png')] bg-cover bg-[0%_30%] bg-no-repeat text-foreground px-6 sm:px-4">
        <div className="w-full max-w-4xl text-center gap-6 flex flex-col justify-center items-center">
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-neueMachina font-semibold leading-tight">
            We <span className="text-primary">Grow Brands</span> and{" "}
            <span className="font-extrabold">
              <span className="italic font-neueMachina font-normal bg-gradient-to-r from-[#0a0c1356] to-[#9b9a9a7e] px-2">
                maximize
              </span>{" "}
              Gains
            </span>
          </h1>

          {/* Description */}
          <p className="mt-4 text-sm md:text-base lg:text-lg w-11/12 sm:w-3/4 text-center text-gray-400 font-neueMachina font-light">
            Struggling to hit your next revenue milestone? We build and execute
            proven growth strategies to help brands scale faster—without the
            guesswork.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <button className="bg-white text-black hover:bg-gray-200 py-2 px-6 rounded-lg font-neueMachina font-medium">
              ⚡ Book a strategy call
            </button>
            <button className="text-muted-foreground font-neueMachina font-medium">
              <FaRegCircleDot className="text-green-600 inline-block mr-1" /> 2/6
              Spots left
            </button>
          </div>
        </div>
      </div>

      <section className="text-white py-16 px-6 md:px-10 font-neueMachina">
  {/* Responsive Header Section */}
  <div className="flex flex-col md:flex-row justify-center items-center text-center md:text-left mx-auto max-w-5xl">
    <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold w-full  leading-tight">
      <span className="italic text-gray-300 font-neueMachina">Scaling</span> your brand 
      doesn't have to be <span className="italic text-gray-400">complicated</span>.
    </h2>
    <button className="mt-6 md:mt-0 px-6 py-3 bg-white text-black font-neueMachina font-medium rounded-xl shadow-lg transition hover:scale-105">
      ⚡ Book a strategy call
    </button>
  </div>

  {/* Responsive Grid Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-12 max-w-6xl ">
    {steps.map((step) => (
      <div key={step.id} className="p-6  shadow-lg flex items-start space-x-4 rounded-lg ">
        {/* Step Number */}
        <div className="flex items-center justify-center px-3 py-2 rounded-lg border border-gray-500 text-white ">
          <h4>{step.id}</h4>
        </div>
        {/* Step Content */}
        <div>
          <h3 className="text-lg font-semibold">{step.title}</h3>
          <p className="text-gray-400 mt-2 text-sm sm:text-md">{step.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


      <div className=" text-white py-12 px-6 md:px-10 lg:px-20">
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-neueMachina font-bold">
            Growth-focused plans <br />
            <span className="italic py-2 bg-gradient-to-r from-[#0A0C13] to-[#6161617e] px-3">designed</span> to <span className="italic text-gray-300">scale</span> with you.
          </h2>
        </div>

        {/* Pricing Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-4xl mx-auto">
          {/* Starter Plan */}
          <div className="bg-gradient-to-tr from-[#403124] to-60% to-[#0a0c12] rounded-lg p-6 shadow-lg ">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-neueMachina font-semibold text-white">Starter</h3>
              <span className="bg-[#452125] text-sm text-red-600 border border-red-600 font-neueMachina font-normal px-3 py-1  rounded-full">Start Package</span>
            </div>
            <p className='font-neueMachina text-sm mt-4 text-gray-500'>Ideal for upcoming founders and startups.</p>
            <p className="text-3xl font-bold my-4 font-neueMachina text-white">
              £879 <span className="text-lg font-normal font-neueMachina text-gray-300">/ per month</span>
            </p>
          <hr  className='border-gray-800'/>
            <div className="mt-6">
              <p className="text-gray-400 mb-4 font-neueMachina">Entrepreneur includes</p>
              <ul className="space-y-2 text-left">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="flex items-center gap-2 font-neueMachina text-gray-100">
                    <IoIosCheckboxOutline className='text-[#5ec5f5]' />  Dedicated 1:1 live strategy calls
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-6 py-3 bg-gray-700 text-gray-400 font-neueMachina rounded-lg cursor-not-allowed">
              Book a strategy call ⚡
            </button>
          </div>

          {/* Entrepreneur Plan */}
          <div className="bg-gradient-to-tl from-[#204224] to-60% to-[#0a0c12] rounded-lg p-6 shadow-lg ">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold font-neueMachina">Entrepreneur</h3>
              <span className="bg-[#214826] text-sm font-neueMachina font-normal text-[#4db249] border border-[#4db249] px-3 py-1 rounded-full">Recommended</span>
            </div>
            <p className='font-neueMachina text-sm mt-4 text-gray-500'>Perfect for established brands and businesses.</p>
            <p className="text-3xl font-bold my-4 font-neueMachina">10% <span className="text-lg font-normal text-gray-300">/ commission fee</span></p>
            <hr  className='border-gray-800'/>
            <div className="mt-6">
              <p className="text-gray-400 mb-4 font-neueMachina">Entrepreneur includes</p>
              <ul className="space-y-2 text-left">
                {[...Array(6)].map((_, i) => (
                  <li key={i} className="flex items-center gap-2 font-neueMachina text-gray-100">
                  <IoIosCheckboxOutline className='text-[#5ec5f5]' />  Dedicated 1:1 live strategy calls
                </li>
                ))}
              </ul>
            </div>

            <button className="w-full mt-6 py-3 bg-white text-black font-neueMachina font-semibold rounded-lg">
              Book a strategy call ⚡
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 font-neueMachina text-sm mt-10">
          Exclusive of media fees. Learn more via <span className="text-white ">Ad spend calculator</span>.
        </div>
      </div>


      <div className="relative h-fit bg-[url('/src/assets/hero-bg-2.png')] font-neueMachina bg-cover bg-no-repeat bg-center text-white px-6 md:px-12 lg:px-24 py-16 md:py-24 flex flex-col justify-between lg:flex-row items-center">
      
      {/* Left Section (Text) */}
      <div className="relative w-full lg:w-1/2 z-10 text-center lg:text-left">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
          <em className="italic text-gray-300">Learn</em> about <span className="text-white">us</span> <br />
          <span className="text-gray-400">and our story</span>
        </h2>

        <div className="mt-6">
          <p className="text-gray-400 text-sm md:text-[14px] leading-relaxed">
            We’ve been in your shoes. Before launching AmoryDigital, we spent years in the trenches – 
            building, scaling, and optimizing brands across industries. We saw firsthand what works 
            (and what doesn’t), and we’ve refined that knowledge into a proven system that drives real, 
            sustainable growth.
          </p>

          <p className="mt-4 font-semibold text-white">Our Mission</p>
          <p className="text-gray-400 text-sm md:text-[14px] leading-relaxed">
            To help brands like yours scale with clarity and confidence. We cut through the noise, 
            eliminate the guesswork, and implement high-impact strategies that move the needle. 
            No fluff, no vanity metrics—just results.
          </p>
        </div>
      </div>

      {/* Right Section (Cards) */}
      <div className="relative flex flex-col sm:flex-row lg:flex-col justify-center items-center gap-6 mt-10 lg:mt-0">
        
        {/* Card 1 */}
        <div className="w-72  backdrop-blur-lg border border-white/20 p-4 rounded-xl transform rotate-6 shadow-lg flex flex-col items-center">
          <FaRegUserCircle className="text-3xl text-gray-300" />
          <p className="text-lg font-semibold mt-2">Joe K.</p>
          <p className="text-gray-300 text-sm mt-1 text-center">
            16-years of experience running digital agencies.
          </p>
        </div>

        {/* Card 2 */}
        <div className="w-72  backdrop-blur-lg border border-white/20 p-4 rounded-xl transform -rotate-6 shadow-lg flex flex-col items-center">
          <FaRegUserCircle className="text-3xl text-gray-300" />
          <p className="text-lg font-semibold mt-2">Kieran F.</p>
          <p className="text-gray-300 text-sm mt-1 text-center">
            8-years of experience running digital agencies.
          </p>
        </div>
      </div>

    </div>
    </>
  )
}

export default Landing