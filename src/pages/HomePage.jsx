import React from "react";
import { motion } from "framer-motion";

// --- SVG ICONS ---
const StarIcon = () => (
  <svg className="w-4 h-4 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
  </svg>
);
const LocationIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
  </svg>
);
const CalendarIcon = () => (
  <svg className="w-4 h-4 mr-1.5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path>
  </svg>
);
const RocketIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
  </svg>
);
const DownloadIcon = () => (
  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
  </svg>
);
const MailIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
  </svg>
);
const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.477 0 10c0 4.418 2.865 8.165 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.943.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0020 10c0-5.523-4.477-10-10-10z"
      clipRule="evenodd"
    ></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
    <path
      fillRule="evenodd"
      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014V8h2.583v1.178h.037c.356-.675 1.227-1.387 2.52-1.387 2.699 0 3.201 1.776 3.201 4.092v4.654zM5.015 6.838a1.826 1.826 0 100-3.653 1.826 1.826 0 000 3.653zM6.299 8H3.73V16.338h2.57V8z"
      clipRule="evenodd"
    ></path>
  </svg>
);

const HomePage = () => {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center bg-gray-900 text-gray-200 overflow-hidden font-sans px-4"
    >

      {/* --- Main Content --- */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
            Pawan Kumar Gupta
          </span>
        </h1>

        <motion.div
          className="inline-flex items-center justify-center px-4 py-2 mb-6 text-xs sm:text-sm font-medium text-gray-300 bg-white/10 border border-white/20 rounded-full backdrop-blur-sm"
          whileHover={{ scale: 1.05 }}
        >
          <StarIcon />
          B.Tech in ECE (Minor: Computer Science)
        </motion.div>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
          A passionate Full Stack Developer focused on crafting scalable,
          performant, and visually polished web applications using Java,
          Spring Boot, and React.js.
        </p>

        {/* Info Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-gray-400 mb-8">
          <div className="flex items-center"><LocationIcon /> New Delhi, India</div>
          <div className="flex items-center"><CalendarIcon /> Available for opportunities</div>
        </div>

        {/* --- Buttons --- */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
          <motion.button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="flex items-center justify-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg shadow-md hover:shadow-purple-500/30 hover:scale-105 transition-transform duration-300"
            whileTap={{ scale: 0.95 }}
          >
            <RocketIcon /> Explore My Work
          </motion.button>

          <a
            href="https://drive.google.com/drive/folders/1zYHuVwetYRM9pHF9nKrbORjRwxNgIbA0?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 font-semibold text-cyan-200 bg-cyan-500/10 border border-cyan-400/40 rounded-lg hover:bg-cyan-500/20 hover:text-cyan-100 transition-all duration-300"
          >
            <DownloadIcon /> Download Resume
          </a>
        </div>

        {/* --- Social Links --- */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-6 gap-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <a href="mailto:pawang1710@gmail.com" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm">
            <MailIcon /> <span className="ml-2 hidden sm:inline">pawang1710@gmail.com</span>
          </a>
          <a href="https://github.com/pawang001" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm">
            <GithubIcon /> <span className="ml-2 hidden sm:inline">GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/pawan-gupta-72a1a622a" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-purple-400 transition-colors text-sm">
            <LinkedinIcon /> <span className="ml-2 hidden sm:inline">LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HomePage;
