"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const Navbar = ({darkMode,setDarkMode}) => {
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav
      className={`flex justify-between items-center p-5 ${
        darkMode ? "bg-gray-900 text-white" : "bg-slate-100 text-gray-800"
      }`}
    >
      <div className="flex items-center">
        <Image src="/mlogo.png" width={20} height={20} alt="Logo" className="w-12 h-15 mr-2" />
        <h1 className="text-xl font-semibold">Recommender App</h1>
      </div>

      <ul className="flex space-x-4">
        <li className="cursor-pointer">Home</li>
        <li className="cursor-pointer">Genres</li>
        <li className="cursor-pointer">Top Picks</li>
        <li className="cursor-pointer">Categories</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      <div
        className={`w-6 h-6 cursor-pointer ${
          darkMode ? "text-white" : "text-gray-800"
        }`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "🌙" : "☀️"}
      </div>
    </nav>
  );
};

export default Navbar;
