import React from "react";
import { Link } from "react-router-dom";

const Resume = () => {
  const resumeUrl = "/resume.pdf"; // Resume file in the public folder

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-green-400 font-mono">
      {/* Retro Glowing Text */}
      <h1 className="text-5xl font-bold mb-6 neon-text">▶ My Resume 📄</h1>

      <p className="text-lg text-green-300 mb-4">Insert coin to download 👾</p>

      <div className="flex space-x-4 mb-6">
        {/* View Resume Button */}
        <a
          href={resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gray-800 border-2 border-green-400 text-green-300 font-bold rounded-lg shadow-md hover:bg-green-500 hover:text-black transition-all duration-300 neon-button"
        >
          🔍 View Resume
        </a>

        {/* Download Resume Button */}
        <a
          href={resumeUrl}
          download="Sowmya_Resume.pdf"
          className="px-6 py-3 bg-gray-800 border-2 border-green-400 text-green-300 font-bold rounded-lg shadow-md hover:bg-green-500 hover:text-black transition-all duration-300 neon-button"
        >
          ⬇️ Download Resume
        </a>
      </div>

            <Link to="/">
              <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                🔙 Back to Home
              </button>
            </Link>

      {/* Retro Terminal Glow Effect */}
      <style>{`
        @keyframes flicker {
          0% { opacity: 1; }
          50% { opacity: 0.8; }
          100% { opacity: 1; }
        }

        .neon-text {
          text-shadow: 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0;
          animation: flicker 1.5s infinite alternate;
        }

        .neon-button {
          box-shadow: 0 0 8px #0f0;
        }

        .neon-button:hover {
          box-shadow: 0 0 12px #0f0;
        }
      `}</style>
    </div>
  );
};

export default Resume;
