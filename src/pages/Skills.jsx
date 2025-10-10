import React from "react";
import { FaJava } from "react-icons/fa";
import {
  SiJavascript, SiCplusplus, SiHtml5, SiCss3, SiSpringboot,
  SiNodedotjs, SiExpress, SiReact, SiTailwindcss, SiPostgresql,
  SiMysql, SiMongodb, SiRedis, SiDocker, SiApachekafka, SiGit,
  SiPostman, SiHibernate,
} from "react-icons/si";
import { VscTools } from "react-icons/vsc";

// Skill categories
const skillCategories = {
  "Programming Languages": ["Java", "JavaScript", "C++", "HTML5", "CSS3"],
  "Frameworks & Libraries": [
    "Spring Boot", "Spring Security", "Node.js", "Express.js", "React.js", "Tailwind CSS", "Hibernate",
  ],
  "Databases & Cloud": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Kafka"],
  "DevOps & Tools": ["Docker", "Git & GitHub", "Postman", "Maven"],
};

// Icons
const iconMap = {
  Java: FaJava,
  JavaScript: SiJavascript,
  "C++": SiCplusplus,
  HTML5: SiHtml5,
  CSS3: SiCss3,
  "Spring Boot": SiSpringboot,
  "Spring Security": SiSpringboot,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "React.js": SiReact,
  "Tailwind CSS": SiTailwindcss,
  Hibernate: SiHibernate,
  PostgreSQL: SiPostgresql,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  Redis: SiRedis,
  Kafka: SiApachekafka,
  Docker: SiDocker,
  "Git & GitHub": SiGit,
  Postman: SiPostman,
  Maven: VscTools,
};

// Brand colors
const colorMap = {
  Java: "#007396",
  JavaScript: "#F7DF1E",
  "C++": "#00599C",
  HTML5: "#E34F26",
  CSS3: "#1572B6",
  "Spring Boot": "#6DB33F",
  "Spring Security": "#6DB33F",
  "Node.js": "#339933",
  "Express.js": "#000000",
  "React.js": "#61DAFB",
  "Tailwind CSS": "#38BDF8",
  Hibernate: "#59666C",
  PostgreSQL: "#336791",
  MySQL: "#4479A1",
  MongoDB: "#47A248",
  Redis: "#DC382D",
  Kafka: "#231F20",
  Docker: "#2496ED",
  "Git & GitHub": "#F05032",
  Postman: "#FF6C37",
  Maven: "#C71A36",
};

// Skill badge component
const SkillBadge = ({ name }) => {
  const Icon = iconMap[name] || VscTools;
  const color = colorMap[name] || "#A0AEC0";
  return (
    <div
      className="
        flex items-center justify-center gap-2 px-4 py-2 rounded-full
        bg-white/10 backdrop-blur-md border border-gray-700 text-gray-200 text-sm font-medium
        hover:border-purple-400 hover:scale-105 hover:shadow-md hover:shadow-purple-400/20
        transition-all duration-300 ease-in-out cursor-default
      "
    >
      <Icon color={color} className="w-5 h-5" />
      <span>{name}</span>
    </div>
  );
};

// Skill category card
const SkillRow = ({ category, skills }) => (
  <div
    className="
      mb-10 p-6 rounded-2xl bg-gradient-to-b from-gray-800/70 to-gray-900/60
      border border-gray-700 shadow-lg hover:shadow-purple-500/10 transition-all
    "
  >
    <h3 className="text-xl font-semibold text-purple-400 mb-4 text-center">
      {category}
    </h3>
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((name) => (
        <SkillBadge key={name} name={name} />
      ))}
    </div>
  </div>
);

// Main Skills section
const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Technical <span className="text-purple-400">Expertise</span>
        </h2>
        <p className="text-gray-400 text-base max-w-2xl mx-auto mb-12">
          A showcase of the languages, frameworks, and tools I use to build
          modern, scalable, and elegant web applications.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {Object.entries(skillCategories).map(([category, skills]) => (
            <SkillRow key={category} category={category} skills={skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
