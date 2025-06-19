import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const DeveloperCard = ({ image, name, role, bio, github, linkedin, email }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-lg border overflow-hidden text-center p-6 hover:shadow-xl transition duration-300">
      <img
        src={image}
        alt={name}
        className="w-24 h-24 mx-auto rounded-full object-cover border-4 border-green-500"
      />

      <h2 className="text-xl font-bold mt-4 text-gray-800">{name}</h2>
      <p className="text-green-600 font-medium">{role}</p>

      <p className="text-gray-600 text-sm mt-2">{bio}</p>

      <div className="flex justify-center mt-4 space-x-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-xl text-gray-800 hover:text-gray-600" />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-xl text-blue-600 hover:text-blue-800" />
        </a>
        <a href={`mailto:${email}`}>
          <FaEnvelope className="text-xl text-red-600 hover:text-red-800" />
        </a>
      </div>
    </div>
  );
};

export default DeveloperCard;
