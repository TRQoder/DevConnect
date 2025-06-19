import React from "react";

const ProjectCard = ({ image, title, description, liveLink, codeLink }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-2xl duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />

      <div className="p-4 space-y-3">
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
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
      </div>
    </div>
  );
};

export default ProjectCard;
