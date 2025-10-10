import React from 'react';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage.jsx';
import Skills from './pages/Skills.jsx';
import Experience from './pages/Experience.jsx';
import Projects from './pages/Projects.jsx';
import Contact from './pages/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar />
      <main>
        <HomePage />
        <Skills />
        {/* <Experience /> */}
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
