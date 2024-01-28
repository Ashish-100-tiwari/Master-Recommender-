"use client"
import React, { useState } from 'react'
import Navbar from "@/Components/Navbar/Navbar";
import Footer from "@/Components/Footer/Footer";
import Header from "@/Components/Header/Header";

const Dark = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
      <div>
      <Navbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <Header />
      <Footer darkMode={darkMode} />
    </div>
  )
}

export default Dark