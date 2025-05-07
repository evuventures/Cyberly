import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const ExpertCard = ({
  name = "Alex Morgan",
  role = "Remote Tech Support (Web & Apps)",
  location = "New York, USA",
  image = "https://randomuser.me/api/portraits/men/32.jpg",
  bio = "Having trouble with your website or app? I solve issues remotely with 5+ years of experience in React, Node.js, and UI/UX.",
  skills = ["Web Debugging", "React", "UI Fixes", "Remote Support"],
}) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-60 object-cover" />
      <div className="p-5">
        <h3 className="font-bold text-xl text-gray-800">{name}</h3>
        <p className="text-gray-600">{role}</p>
        <div className="flex items-center text-gray-500 text-sm mt-2">
          <FaMapMarkerAlt className="mr-1" />
          <span>{location}</span>
        </div>
        <p className="mt-3 text-sm text-gray-700 leading-relaxed">{bio}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-6 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200">
            Book Session
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
