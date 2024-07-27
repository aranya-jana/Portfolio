import React, { useEffect } from 'react';
import Navbar from './components/Navbar'; // Adjust the path as per your project structure
import Hero from './components/hero'; // Ensure the case matches the file name
import About from './components/About';
import Technologies from './components/Technologies';
import Platforms from './components/Platforms';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import Personals from './components/Personals';
import Contact from './components/Contact';

const App = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100); // Adjust the timeout duration if needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-blue-300 selection:text-cyan-900">
      <div className="fixed top-0 -z-10 h-full w-full">
        {/* Background Code */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      </div>

      <div className="container mx-auto px-20">
        <Navbar />
        <Hero />
        <About />
        <Technologies />
        <Platforms />
        <Certificates />
        <Projects />
        <Personals />
        <Contact />
      </div>

      {/* Inline CSS for the stylish scrollbar */}
      <style jsx global>{`
        /* For modern browsers */
        ::-webkit-scrollbar {
          width: 12px; /* Width of the scrollbar */
        }

        ::-webkit-scrollbar-track {
          background: #2d2d2d; /* Background of the track */
          border-radius: 0; /* Remove roundness */
        }

        ::-webkit-scrollbar-thumb {
          background-color: #4b4b4b; /* Color of the thumb */
          border-radius: 10px; /* Remove roundness */
        }

        ::-webkit-scrollbar-thumb:hover {
          background-color: #6b6b6b; /* Color of the thumb when hovered */
        }

        ::-webkit-scrollbar-thumb:active {
          background-color: #8b8b8b; /* Color of the thumb when active */
        }

        /* Ensure no white spots on scrollbar */
        ::-webkit-scrollbar-corner {
          background: #2d2d2d; /* Match the track color */
        }
      `}</style>
    </div>
  );
};

export default App;
