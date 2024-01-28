import React from 'react'
import Image from "next/image";


const Header = () => {
    return (
        <div className="relative h-[500px] overflow-hidden">
            <Image
                src="/22.jpg"
                alt="Hero Image"
                layout="fill"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="absolute inset-0 flex items-center justify-center text-white">
                <div className="text-center">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Your Recommender App</h1>
                    <p className="text-lg">Discover personalized recommendations just for you.</p>
                </div>
            </div>
        </div>
    );
};

export default Header