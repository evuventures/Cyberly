import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaComments,
  FaStar,
  FaCheckCircle,
  FaCircle,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCertificate,
} from "react-icons/fa";

const ExpertProfile = ({
  name = "Adv. Michelle Obama",
  category = "Immigration & Civil Lawyer",
  languages = ["English", "Spanish"],
  experience = "7 Years",
  rate = "$50/min",
  totalChatMinutes = "10K mins",
  totalCallMinutes = "3K mins",
  image = "https://randomuser.me/api/portraits/women/68.jpg",
  rating = 4.9,
  totalRatings = 3802,
  about = `Adv. Michelle Obama has over 7 years of legal experience specializing in immigration, civil, and employment law. She provides expert consultation on legal rights, documentation, and case preparation for individuals navigating the legal system. Get quick, professional advice in a confidential setting.`,
  isOnline = true,
  email = "michelleobama@law.com",
  phone = "+1 98765 43210",
  office = "B-101, International Law Tower, New York, USA",
  specializations = ["Consultation", "Case Review", "Document Preparation"],
  certifications = [
    "LLB from Harvard Law School",
    "Certified Immigration Consultant",
  ],
  availability = {
    Monday: "9:00 AM - 5:00 PM (EST)",
    Tuesday: "9:00 AM - 5:00 PM (EST)",
    Wednesday: "9:00 AM - 5:00 PM (EST)",
    Thursday: "9:00 AM - 5:00 PM (EST)",
    Friday: "9:00 AM - 3:00 PM (EST)",
  },
}) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  return (
    <div className="max-w-6xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 grid md:grid-cols-3 gap-6">
      {/* Left: Profile Info */}
      <div className="md:col-span-2">
        <div className="flex flex-col md:flex-row gap-6">
          <img
            src={image}
            alt={name}
            className="w-48 h-48 rounded-full object-cover border-4 border-cyan-500"
          />
          <div className="flex-1">
            <div className="flex items-center gap-2 text-2xl font-bold text-gray-800">
              {name}
              <FaCheckCircle className="text-blue-500" />
              <span
                className={`text-sm ml-2 flex items-center ${
                  isOnline ? "text-green-500" : "text-gray-400"
                }`}
              >
                <FaCircle className="text-xs mr-1" />
                {isOnline ? "Online" : "Offline"}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{category}</p>
            <p className="text-gray-600 text-sm mt-1">
              Languages: {languages.join(", ")}
            </p>
            <p className="mt-2 text-sm">
              <strong>Experience:</strong> {experience}
            </p>
            <p className="text-sm">
              <strong>Rate:</strong> {rate}
            </p>
            <div className="flex gap-4 text-sm mt-2 text-gray-600">
              <span>💬 {totalChatMinutes}</span>
              <span>📞 {totalCallMinutes}</span>
            </div>
            <div className="flex gap-4 mt-4">
              <button className="flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-gray-100">
                <FaComments className="text-blue-500" /> Start Chat
              </button>
              <button className="flex items-center gap-2 border px-4 py-2 rounded-full hover:bg-gray-100">
                <FaPhoneAlt className="text-blue-500" /> Start Call
              </button>
            </div>
          </div>
        </div>
        {/* About */}
        <div className="mt-6">
          <h3 className="text-lg font-bold mb-2">About Me</h3>
          <p className="text-gray-700 text-sm">{about}</p>
        </div>
        {/* Ratings */}
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">Rating & Reviews</h4>
          <div className="flex items-center gap-4">
            <div className="text-3xl font-bold text-blue-500 flex items-center gap-1">
              {rating.toFixed(2)} <FaStar />
            </div>
            <div className="text-sm text-gray-500">{totalRatings} total</div>
          </div>
        </div>
        {/* Contact Details */}
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">Contact Details</h4>
          <div className="flex gap-2 items-center text-sm text-gray-600">
            <FaEnvelope className="text-blue-500" />
            <a
              href={`mailto:${email}`}
              className="text-blue-600 hover:underline"
            >
              {email}
            </a>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-600 mt-2">
            <FaPhoneAlt className="text-blue-500" />
            <a href={`tel:${phone}`} className="text-blue-600 hover:underline">
              {phone}
            </a>
          </div>
          <div className="flex gap-2 items-center text-sm text-gray-600 mt-2">
            <FaMapMarkerAlt className="text-blue-500" />
            <span>{office}</span>
          </div>
        </div>
        {/* Specializations */}
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">Specializations</h4>
          <ul className="list-disc pl-6 text-sm text-gray-600">
            {specializations.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        {/* Certifications */}
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">Certifications</h4>
          <ul className="list-disc pl-6 text-sm text-gray-600">
            {certifications.map((item, index) => (
              <li key={index} className="flex items-center">
                <FaCertificate className="text-blue-500 mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        {/* Availability */}
        <div className="mt-6 border-t pt-4">
          <h4 className="font-semibold mb-2">Availability</h4>
          <ul className="text-sm text-gray-600">
            {Object.entries(availability).map(([day, time], index) => (
              <li key={index}>
                <strong>{day}:</strong> {time}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right: Booking Section */}
      <div className="bg-gray-50 p-4 rounded-lg border">
        <h3 className="font-semibold text-lg mb-4">Book a Session</h3>
        <label className="block text-sm text-gray-700 mb-1">Select Date:</label>
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <label className="block text-sm text-gray-700 mb-1">Select Time:</label>
        <input
          type="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400"
        />

        <button
          disabled={!selectedDate || !selectedTime}
          className={`w-full px-4 py-2 rounded-full text-white font-semibold ${
            selectedDate && selectedTime
              ? "bg-blue-600 hover:bg-blue-700"
              : "bg-gray-400 cursor-not-allowed"
          }`}
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default ExpertProfile;
