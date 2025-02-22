import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="bg-[#0A0C13] md:px-32 sm:px-20 px-5 text-white">
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
