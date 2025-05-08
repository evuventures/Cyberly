import React, { useState, useEffect } from "react";
import {
  FaMicrophone,
  FaMicrophoneSlash,
  FaVideo,
  FaVideoSlash,
  FaPhoneSlash,
  FaStar,
} from "react-icons/fa";

const LiveSession = () => {
  const ratePerMinute = 2.0;
  const [seconds, setSeconds] = useState(0);
  const [isSessionActive, setIsSessionActive] = useState(true);
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [showSummary, setShowSummary] = useState(false);
  const [notes, setNotes] = useState("");
  const [rating, setRating] = useState(0);
  const [imageURL, setImageURL] = useState("");
  const [activeTab, setActiveTab] = useState("notes"); // 'notes' or 'typescript'
  const [typescriptCode, setTypescriptCode] = useState(
    "// Write TypeScript here"
  );

  useEffect(() => {
    let interval;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  const cost = ((seconds / 60) * ratePerMinute).toFixed(2);

  const handleEndSession = () => {
    setIsSessionActive(false);
    setShowSummary(true);
  };

  const handleRating = (val) => setRating(val);

  return (
    <div className="min-h-screen bg-white flex items-start gap-6 px-4 py-12">
      {/* Sidebar Tabs */}
      <div className="w-1/4 bg-gray-100 p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold mb-4">Session Tools</h2>
        <div className="flex flex-col gap-3">
          <button
            onClick={() => setActiveTab("notes")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "notes"
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            Notes
          </button>
          <button
            onClick={() => setActiveTab("typescript")}
            className={`px-4 py-2 rounded-lg font-medium ${
              activeTab === "typescript"
                ? "bg-indigo-600 text-white"
                : "bg-white border border-gray-300 text-gray-700"
            }`}
          >
            TypeScript
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-2/4 bg-white shadow-xl rounded-3xl p-8 text-center border border-gray-200">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          ⚖️ Live Lawyer Consultation
        </h1>

        <p className="text-xl font-semibold text-gray-700 mb-1">
          ⏱ {String(minutes).padStart(2, "0")}:
          {String(remainingSeconds).padStart(2, "0")}
        </p>
        <p className="text-md font-medium text-gray-700 mb-3">
          💲 Rate: ${ratePerMinute.toFixed(2)}/min | Total: ${cost}
        </p>

        <p
          className={`mb-4 text-sm font-semibold ${
            isSessionActive ? "text-green-600" : "text-red-600"
          }`}
        >
          {isSessionActive ? "🟢 Session Active" : "🔴 Session Ended"}
        </p>

        <div className="relative bg-gray-100 rounded-2xl overflow-hidden aspect-video shadow-lg border border-gray-300 mb-6">
          <img
            src="https://images.unsplash.com/photo-1589571894960-20bbe2828a29"
            alt="Lawyer"
            className={`object-cover w-full h-full ${
              videoOn ? "opacity-100" : "opacity-20"
            } transition-opacity`}
          />
          {!videoOn && (
            <div className="absolute inset-0 flex items-center justify-center text-black text-lg font-bold">
              Video is Off
            </div>
          )}

          <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-4">
            <button
              onClick={() => setMicOn((prev) => !prev)}
              className="bg-white text-indigo-700 p-3 rounded-full shadow-md hover:scale-105 transition"
            >
              {micOn ? (
                <FaMicrophone size={20} />
              ) : (
                <FaMicrophoneSlash size={20} />
              )}
            </button>

            <button
              onClick={() => setVideoOn((prev) => !prev)}
              className="bg-white text-indigo-700 p-3 rounded-full shadow-md hover:scale-105 transition"
            >
              {videoOn ? <FaVideo size={20} /> : <FaVideoSlash size={20} />}
            </button>

            <button
              onClick={handleEndSession}
              disabled={!isSessionActive}
              className={`p-3 rounded-full shadow-md transition ${
                isSessionActive
                  ? "bg-red-600 text-white hover:bg-red-700"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
            >
              <FaPhoneSlash size={20} />
            </button>
          </div>

          <div className="absolute bottom-5 right-5 w-24 h-24 border-4 border-white rounded-xl overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1614281412420-23f507f0fc03"
              alt="Client"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        <button
          onClick={handleEndSession}
          disabled={!isSessionActive}
          className={`mt-4 px-6 py-3 rounded-xl font-bold shadow-md transition ${
            isSessionActive
              ? "bg-indigo-600 text-white hover:bg-indigo-700"
              : "bg-gray-400 text-white cursor-not-allowed"
          }`}
        >
          End Session & Pay ${cost}
        </button>

        {/* Summary Section */}
        {showSummary && (
          <div className="mt-8 text-left bg-gray-50 p-6 rounded-xl border border-gray-200 shadow-inner">
            {activeTab === "notes" && (
              <>
                <h2 className="text-lg font-bold text-gray-700 mb-2">
                  📄 Session Notes
                </h2>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="Write your key discussion points..."
                  rows={4}
                  className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 mb-4"
                />

                <h3 className="text-md font-semibold text-gray-600 mb-2">
                  📷 Paste Image URL (Optional)
                </h3>
                <input
                  type="text"
                  value={imageURL}
                  onChange={(e) => setImageURL(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                  className="w-full p-2 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />

                {imageURL && (
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 mb-2">Image Preview:</p>
                    <img
                      src={imageURL}
                      alt="Uploaded"
                      className="max-w-xs rounded-lg border border-gray-300 shadow"
                    />
                  </div>
                )}

                <h3 className="text-md font-semibold text-gray-600 mb-2">
                  ⭐ Rate Your Session
                </h3>
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      size={24}
                      className={`cursor-pointer ${
                        rating >= star ? "text-yellow-500" : "text-gray-300"
                      }`}
                      onClick={() => handleRating(star)}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Thank you for using our service! You were charged{" "}
                  <strong>${cost}</strong>.
                </p>
              </>
            )}

            {activeTab === "typescript" && (
              <>
                <h2 className="text-lg font-bold text-gray-700 mb-2">
                  📝 TypeScript Editor
                </h2>
                <textarea
                  value={typescriptCode}
                  onChange={(e) => setTypescriptCode(e.target.value)}
                  rows={10}
                  className="w-full font-mono p-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default LiveSession;
