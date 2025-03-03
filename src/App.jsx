import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";

function App() {

  return (
    <>
      <div className="bg-[#0A0C13]  text-white scroll-smooth">
        <Navbar />
          <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default App;
