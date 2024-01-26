import React from 'react';

const Footer = ({darkMode}) => {
  
  return (
    <footer className={`bg-gray-800 text-white p-3 ${darkMode ? 'bg-gray-900 text-white' : 'bg-slate-100 text-gray-800'}`}>
      <div className={`max-w-screen-xl mx-auto flex justify-between items-center ${darkMode ? 'text-white' : 'text-gray-800'}`}>
        <div>
          <h2 className="text-lg font-semibold mb-1">Recommender App</h2>
        </div>

        <div className="flex space-x-2">
          <ul className="list-none">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">Genres</li>
            <li className="cursor-pointer">Top Picks</li>
          </ul>

          <ul className="list-none">
            <li className="cursor-pointer">Privacy</li>
            <li className="cursor-pointer">Terms</li>
          </ul>
        </div>
      </div>

      <div className="mt-3 text-center">
        <p className="text-xs">&copy; {new Date().getFullYear()} Recommender App. All rights reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
