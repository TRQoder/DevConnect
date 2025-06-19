import React, { useState } from "react";

const MyProject = ({ image, title, description, liveLink, codeLink }) => {
  const [isVisible, setIsVisible] = useState(true); // default: project is visible

  const handleToggle = () => {
    setIsVisible(!isVisible);
    // You can call an API here to update status in DB
    console.log(`${title} is now ${!isVisible ? "Visible" : "Hidden"}`);
  };

  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-3">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          {/* Toggle Switch */}
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={isVisible}
                onChange={handleToggle}
                className="sr-only"
              />
              <div className="w-10 h-5 bg-gray-300 rounded-full shadow-inner transition"></div>
              <div
                className={`dot absolute left-1 top-1 bg-white w-3.5 h-3.5 rounded-full shadow transform transition ${
                  isVisible ? "translate-x-5 bg-green-500" : "translate-x-0 bg-red-500"
                }`}
              ></div>
            </div>
          </label>
        </div>

        {/* Only show below content if isVisible is true */}
        {isVisible ? (
          <>
            <p className="text-gray-600 text-sm">{description}</p>
            <div className="flex justify-between mt-4">
              <a
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-lg hover:bg-green-700 transition"
              >
                Live Demo
              </a>
              <a
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-lg hover:bg-gray-900 transition"
              >
                Source Code
              </a>
            </div>
          </>
        ) : (
          <p className="text-red-500 text-sm font-semibold">🔒 This project is hidden</p>
        )}
      </div>
    </div>
  );
};

export default MyProject;
