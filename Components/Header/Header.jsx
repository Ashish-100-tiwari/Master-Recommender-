// components/Header.js
import React from "react";

const Header = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto h-screen">
      <div className="absolute inset-0 flex items-center justify-center text-white bg-blue-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Welcome to Your Recommender App
          </h1>
          <p className="text-lg">
            Discover personalized recommendations just for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
