import React from "react";

const FilterBar = () => {
  return (
    <div className="bg-[#0f0f0f] text-white py-8 px-4 text-center">
      <h2 className="text-2xl font-bold text-cyan-400">
        Search for services or time slots available online or near you
      </h2>

      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {/* 🌍 Location */}
        <select className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200">
          <option value="">Location</option>
          <option>New York</option>
          <option>Los Angeles</option>
          <option>Chicago</option>
          <option>San Francisco</option>
          <option>Austin</option>
          <option>Toronto</option>
          <option>Vancouver</option>
          <option>London</option>
          <option>Berlin</option>
          <option>Dubai</option>
          <option>Remote</option>
        </select>

        {/* 🔌 Online/In-Person Mode */}
        <select className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200">
          <option value="">Mode</option>
          <option>Online</option>
          <option>In-Person</option>
          <option>Hybrid</option>
        </select>

        {/* 📂 Category */}
        <select className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200">
          <option value="">Category</option>
          <option>Lawyer</option>
          <option>Doctor</option>
          <option>CEO</option>
          <option>Tech Expert</option>
          <option>Therapist</option>
          <option>Career Coach</option>
          <option>Startup Advisor</option>
          <option>Math Tutor</option>
          <option>Web Developer</option>
          <option>UI/UX Designer</option>
          <option>Marketing Expert</option>
          <option>Fitness Coach</option>
          <option>Language Tutor</option>
          <option>Financial Advisor</option>
        </select>

        {/* 🎓 Experience */}
        <select className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200">
          <option value="">Experience</option>
          <option>0–1 years</option>
          <option>1–3 years</option>
          <option>3–5 years</option>
          <option>5–10 years</option>
          <option>10–15 years</option>
          <option>15+ years</option>
        </select>

        {/* 💰 Rate */}
        <select className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200">
          <option value="">Rate</option>
          <option>Free</option>
          <option>$0–$25/hr</option>
          <option>$25–$50/hr</option>
          <option>$50–$100/hr</option>
          <option>$100–$200/hr</option>
          <option>$200+/hr</option>
        </select>

        {/* 📅 Date Picker */}
        <input
          type="date"
          className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
        />

        {/* ⏰ Time Picker */}
        <input
          type="time"
          className="bg-[#1a1a1a] border border-cyan-400 text-white px-4 py-2 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-cyan-500 transition duration-200"
        />
      </div>
    </div>
  );
};

export default FilterBar;
