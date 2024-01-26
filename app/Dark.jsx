"use client"

import React, { useState } from 'react'
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Image from "next/image";
import Header from "@/Components/Header/Header";

const Dark = () => {

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
        <div className="flex flex-col min-h-screen">
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      
      <div className="flex-grow">
        < Header />
      </div>

      <Footer darkMode={darkMode} />
    </div>
    </div>
  )
}

export default Dark