import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { BsLightningFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Menu Icons
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <>
      <nav className="py-5 px-6 flex items-center justify-between font-neueMachina text-white">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="font-bold flex items-center gap-1 text-xl">
            <BsLightningFill className="text-yellow-400" />
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

      {/* Mobile Sidebar (Drawer) */}
      <div className={`fixed top-0 right-0 w-64 h-full bg-black shadow-lg transform ${isOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 p-5`}>
        {/* Close Button */}
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={() => setIsOpen(false)}
        >
          <AiOutlineClose />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col gap-6 mt-12">
          <NavLink to="/" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>How it works</NavLink>
          <NavLink to="/" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Pricing</NavLink>
          <NavLink to="/" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>About us</NavLink>
          <NavLink to="/adSpendCalculator" className="text-gray-400 hover:text-white" onClick={() => setIsOpen(false)}>Ad spend calculator</NavLink>
        </div>

        {/* CTA Button */}
        <NavLink
          to="/"
          className="mt-10 flex items-center gap-2 border border-white rounded-xl py-2 px-6"
          onClick={() => setIsOpen(false)}
        >
          Get started now <GoArrowRight className="text-xl" />
        </NavLink>
      </div>

      {/* Overlay when sidebar is open */}
      {isOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black opacity-50"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
