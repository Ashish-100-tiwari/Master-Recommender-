// components/Header.js
import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="relative max-w-screen-xl mx-auto h-screen">
      <div className="relative h-full">
        <Image src="/22.jpg" alt="Hero Image" layout="fill" objectFit="cover" />
      </div>
      <div className="absolute inset-0 flex items-center justify-center text-white">
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
