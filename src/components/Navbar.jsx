import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu Icons
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import logo from "../assets/DarkI.png"

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu
  const navigate = useNavigate(); // useNavigate Hook

  const handleNavClick = (path) => {
    console.log(path)
    setIsOpen(false); // Close sidebar
    navigate(path);   // Navigate to the selected path
  };
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <>
    <div onClick={()=>{navigate("/adSpendCalculator")}} className=" cursor-pointer z-50 font-neueMachina px-8 py-5 text-white rounded-lg bg-gray-800 fixed bottom-2 right-[20%] md:bottom-2 md:right-4">
    <p className="font-bold  text-center text-lg">Book a <br className="hidden md:block"/>strategy call</p>
    </div>
    <header className=" z-40 sticky top-0 flex px-2 py-3 md:py-2 justify-center items-center rounded-lg w-full text-center bg-slate-900 font-neueMachina text-white">
      <p className=" text-normal md:text-base"><strong className="font-bold text-yellow-500">Introductory offer </strong>- 3 months of Google Ads management for the price of 1</p>
    </header>
      <nav className="py-5 px-6 flex items-center justify-between font-neueMachina text-white">
        {/* Logo */}
        <div className="flex gap-3 items-center justify-center cursor-pointer" onClick={()=>{navigate("/")}}>
            <img src={logo} alt="" className=" h-6 w-6 md:h-8 md:w-8 rounded-full" />
          <h1  className="font-bold text-base md:text-xl">
            {/* <BsLightningFill className="text-yellow-400" /> */}
            AmoryDigital
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/" className="text-gray-400 hover:text-white">How it works</NavLink>
          <button onClick={() => handleScroll("pricing")} className="text-gray-400 hover:text-white">
  Pricing
</button>
          <button onClick={() => handleScroll("about-us")} className="text-gray-400 hover:text-white">
  About Us
</button>
          {/* <NavLink to="/pricing" className="text-gray-400 hover:text-white">Pricing</NavLink> */}
          {/* <Link to="pricing" className="text-gray-400 hover:text-white">Pricing</Link> */}
          {/* <NavLink to="/aboutus" className="text-gray-400 hover:text-white">About us</NavLink> */}
          <NavLink to="/adSpendCalculator" className="text-gray-400 hover:text-white">Ad spend calculator</NavLink>
        </div>

        {/* CTA Button */}
        <NavLink to="/getstart" className="hidden md:flex items-center gap-2 border border-white rounded-xl py-2 px-6">
          Get started now <GoArrowRight className="text-xl" />
        </NavLink>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(true)}
        >
          <AiOutlineMenu />
        </button>
      </nav>

       {/* Mobile Sidebar */}
       <div className={`fixed top-0 right-0 z-50 w-64 h-full bg-[#0a0c13] shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-5`}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-2xl" onClick={() => setIsOpen(false)}>
          <AiOutlineClose />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 mt-12">
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/")}>How it works</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/pricing")}>Pricing</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/aboutus")}>About us</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/adSpendCalculator")}>Ad spend calculator</button>
        </div>

        {/* CTA Button */}
        <button className="mt-10 flex items-center gap-2 border border-white rounded-xl py-2 px-6" onClick={() => handleNavClick("/getstart")}>
          Get started now <GoArrowRight className="text-xl" />
        </button>
      </div>
      {/* Overlay when sidebar is open */}
    
    </>
  );
}

export default Navbar;
