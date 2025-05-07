import React from "react";
import Navbar from "../components/Navbar";
import FilterBar from "../components/FilterBar";
import ExpertCard from "../components/ExpertCard";

const experts = [
  {
    name: "Daniel O'Neil",
    role: "Startup Advisor (Ex-CEO)",
    location: "San Francisco",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    bio: "Ex-CEO and startup mentor. Let’s refine your pitch, business model, or go-to-market strategy.",
    skills: [
      "Pitch Coaching",
      "Fundraising",
      "Business Strategy",
      "Product-Market Fit",
    ],
  },
  {
    name: "Dr. Clara Bennett",
    role: "Family Physician",
    location: "Remote",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    bio: "Board-certified physician providing general health advice and second opinions online.",
    skills: [
      "General Health",
      "Remote Diagnosis",
      "Medical Advice",
      "Wellness",
    ],
  },
  {
    name: "Leo Martin",
    role: "Tech Support Engineer",
    location: "Austin, TX",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
    bio: "Experienced in helping users with device setups, app crashes, and debugging issues remotely.",
    skills: ["Device Setup", "Troubleshooting", "Remote Support", "Debugging"],
  },
  {
    name: "Sophia Ray",
    role: "UI/UX Designer",
    location: "Remote",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    bio: "Designing intuitive interfaces that help your product shine. 6+ years in mobile and web design.",
    skills: ["Figma", "User Flows", "Web Design", "Mobile UX"],
  },
  {
    name: "Liam Cruz",
    role: "Career Coach",
    location: "New York",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    bio: "Helping students and professionals find their ideal career path and prepare for interviews.",
    skills: [
      "Career Guidance",
      "Resume Review",
      "Mock Interviews",
      "LinkedIn Tips",
    ],
  },
  {
    name: "Amelia West",
    role: "Therapist",
    location: "Chicago",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    bio: "Licensed therapist specializing in stress management, anxiety, and relationship counseling.",
    skills: ["Therapy", "Mental Health", "Stress Relief", "Relationships"],
  },
  {
    name: "Ethan Lee",
    role: "Math Tutor",
    location: "Online",
    image: "https://randomuser.me/api/portraits/men/38.jpg",
    bio: "Making math simple and fun. 8+ years tutoring high school and college students online.",
    skills: ["Algebra", "Calculus", "SAT Math", "Statistics"],
  },
  {
    name: "Fatima Khan",
    role: "Immigration Lawyer",
    location: "Toronto, Canada",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
    bio: "Helping immigrants navigate legal complexities with care. 10+ years of immigration law experience.",
    skills: ["Visa Guidance", "Green Card", "Legal Advice", "Immigration"],
  },
];

const ExpertDirectoryPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <FilterBar />

      {/* ✅ Top Categories */}
      <div className="px-6 pt-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Top Categories
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {["Lawyer", "Doctor", "CEO", "Tech Expert"].map((category, idx) => (
            <button
              key={idx}
              className="whitespace-nowrap px-4 py-2 rounded-full border border-gray-300 text-gray-700 hover:bg-blue-600 hover:text-white transition-all"
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* 🧠 Intro Text */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">
          Book Time With an Expert
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Cyberly connects you with professionals around the world to solve
          problems, get advice, and learn new skills — all virtually.
        </p>
      </div>

      {/* 🧑‍💼 Expert Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 py-10">
        {experts.map((expert, idx) => (
          <ExpertCard key={idx} {...expert} />
        ))}
      </div>
    </div>
  );
};

export default ExpertDirectoryPage;
