import React from "react";
import { motion } from "framer-motion";
import { projects } from "../constants/Constants.js";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 bg-gray-900 text-white overflow-hidden"
    >
      {/* Background blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-purple-500/30 rounded-full mix-blend-multiply blur-3xl animate-blob" />
        <div className="absolute top-40 right-0 w-72 h-72 bg-indigo-500/30 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            My Creative <span className="text-purple-400">Portfolio</span>
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
            A showcase of projects that combine strong backend engineering with
            intuitive and modern UI design.
          </p>
        </motion.div>

        {/* Project Layout */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image */}
                <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-contain bg-gray-800 p-2 rounded-xl opacity-90 hover:opacity-100 transition duration-300"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/20 to-transparent" />
                </div>

                {/* Content */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-purple-400 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm md:text-base mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-gray-700/50 text-gray-300 hover:bg-purple-500/30 hover:text-white transition"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex justify-center md:justify-start gap-5">
                    {project.liveUrl && project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-400 text-purple-300 text-sm hover:bg-purple-500/40 transition"
                      >
                        <ExternalLink className="w-4 h-4" /> Live
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-800 border border-gray-600 text-gray-300 text-sm hover:bg-gray-700 hover:text-white transition"
                      >
                        <Github className="w-4 h-4" /> Code
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
