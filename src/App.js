import React from "react";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Resume from "./Resume";


const sections = [
  { name: "Projects", color: "bg-red-500", emoji: "🕹️", path: "/projects" },
  { name: "Resume", color: "bg-blue-500", emoji: "📄", path: "/resume" },
  { name: "About Me", color: "bg-green-500", emoji: "👾", path: "/about" },
  { name: "Contact", color: "bg-yellow-500", emoji: "📞", path: "/contact" },
];

function Home() {
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
      <h1 className="text-4xl mb-6">Hello! My name is Sowmya A</h1>
      <p className="text-lg mb-6">I am student at Chennai Institue Of Technology currently persuing B.Tech, Artificial Intelligence And Data Science</p>

      <div className="flex gap-4 flex-wrap justify-center">
        {sections.map((section, index) => (
          <Link to={section.path} key={index}>
            <motion.div
  className={`w-40 h-56 ${section.color} text-center flex flex-col items-center justify-center rounded-lg border-4 border-gray-900 shadow-lg cursor-pointer`}
  whileHover={{ scale: 1.1, rotate: [0, -3, 3, -3, 3, 0] }}
  transition={{ duration: 0.3, ease: "easeInOut" }}
>

              <span className="text-6xl">{section.emoji}</span>
              <h2 className="text-xl mt-2">{section.name}</h2>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function SectionPage({ name }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono">
      <h1 className="text-4xl">{name}</h1>
      <p className="mt-4 text-lg">Details about {name} go here.</p>
      <Link to="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          🔙 Back to Home
        </button>
      </Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        {sections.map((section, index) => (
          <Route
            key={index}
            path={section.path}
            element={<SectionPage name={section.name} />}
          />
        ))}
      </Routes>
    </Router>
  );
}
