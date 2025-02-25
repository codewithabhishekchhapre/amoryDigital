import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu Icons
import { NavLink } from "react-router-dom";
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

  return (
    <>
    <div onClick={()=>{navigate("/adSpendCalculator")}} className=" cursor-pointer z-50 font-neueMachina px-5 py-5 text-white rounded-lg bg-gray-800 fixed bottom-10 right-[20%] md:bottom-10 md:right-4">
    <p className="font-bold  text-center text-lg">Book a <br className="hidden md:block"/>strategy call</p>
    </div>
    <header className="h-12 z-40 sticky top-0 flex justify-center items-center rounded-lg w-full text-center bg-slate-900 font-neueMachina text-white">
      <p><strong className="font-bold text-yellow-500">Introductory offer </strong>- 3 months of Google Ads management for the price of 1</p>
    </header>
      <nav className="py-5 px-6 flex items-center justify-between font-neueMachina text-white">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={()=>{navigate("/")}}>
          <h1  className="font-bold flex items-center gap-1 text-xl">
            <img src={logo} alt="" className="h-8 w-8 rounded-full" />
            {/* <BsLightningFill className="text-yellow-400" /> */}
            AmoryDigital
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-10">
          <NavLink to="/" className="text-gray-400 hover:text-white">How it works</NavLink>
          <NavLink to="/" className="text-gray-400 hover:text-white">Pricing</NavLink>
          <NavLink to="/" className="text-gray-400 hover:text-white">About us</NavLink>
          <NavLink to="/adSpendCalculator" className="text-gray-400 hover:text-white">Ad spend calculator</NavLink>
        </div>

        {/* CTA Button */}
        <NavLink to="/" className="hidden md:flex items-center gap-2 border border-white rounded-xl py-2 px-6">
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
       <div className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-5`}>
        {/* Close Button */}
        <button className="absolute top-4 right-4 text-2xl" onClick={() => setIsOpen(false)}>
          <AiOutlineClose />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 mt-12">
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/")}>How it works</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/")}>Pricing</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/")}>About us</button>
          <button className="text-gray-400 hover:text-white" onClick={() => handleNavClick("/adSpendCalculator")}>Ad spend calculator</button>
        </div>

        {/* CTA Button */}
        <button className="mt-10 flex items-center gap-2 border border-white rounded-xl py-2 px-6" onClick={() => handleNavClick("/")}>
          Get started now <GoArrowRight className="text-xl" />
        </button>
      </div>
      {/* Overlay when sidebar is open */}
    
    </>
  );
}

export default Navbar;
