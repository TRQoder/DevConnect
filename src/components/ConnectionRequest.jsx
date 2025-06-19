import React from "react";

const ConnectionRequest = ({ image, name, title, onAccept, onReject }) => {
  return (
    <div className="flex items-center justify-between bg-white p-4 rounded-2xl shadow-md border w-full max-w-md hover:shadow-lg transition duration-300">
      {/* Left: Profile Info */}
      <div className="flex items-center gap-4">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 rounded-full object-cover border-2 border-green-500"
        />
        <div>
          <h2 className="font-bold text-gray-800 text-lg">{name}</h2>
          <p className="text-sm text-gray-500">{title}</p>
        </div>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onAccept}
          className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-green-600 transition"
        >
          Accept
        </button>
        <button
          onClick={onReject}
          className="bg-red-500 text-white px-3 py-1 rounded-lg text-sm hover:bg-red-600 transition"
        >
          Reject
        </button>
      </div>
    </div>
  );
};

export default ConnectionRequest;
