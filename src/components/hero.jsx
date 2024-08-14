import React from 'react';
import profilepic from "../assets/dp2.jpg";
import pdfCV from "../assets/aranya_jana_cv4.pdf"; // Path to your PDF file
import { motion } from "framer-motion";

const Hero = () => {
  const openPdfCV = () => {
    window.open(pdfCV, '_blank'); // Opens the PDF in a new tab
  };

  return (
    <div className="pb-10 lg:pb-16 lg:mb-20 mx-auto max-w-7xl">
      <div className="flex flex-wrap justify-center lg:justify-between">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="pb-6 lg:pb-16 text-4xl lg:text-7xl font-medium tracking-tight lg:mt-16"
            >
              Aranya Jana
            </motion.h1>
            <motion.span
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="bg-gradient-to-r from-green-500 via-slate-400 to-blue-500 bg-clip-text text-2xl lg:text-4xl tracking-tight text-transparent pb-4"
            >
              Student of AI & ML (B.Tech)
            </motion.span>

            <motion.p
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1.5 }}
              className="text-lg mb-4 lg:mb-3 pb-4"
            >
              I am a Computer Engineering (Specialization in Artificial Intelligence & Machine Learning) student with professional skills in Machine Learning and Full Stack Web Development. I possess strong creative and analytical abilities.
            </motion.p>

            <motion.button
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }} // Less tucked position
              transition={{ duration: 0.3 }} // Faster transition
              className="bg-green-600 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg animate-pulse"
              onClick={openPdfCV}
            >
              Resume
            </motion.button>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-1 flex justify-center lg:justify-end">
          <div className="flex justify-center lg:justify-end">
            <motion.img
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.2 }}
              src={profilepic}
              alt="Aranya Jana"
              className="object-cover rounded-lg"
              style={{ maxWidth: '300px', height: 'auto', marginLeft: '20px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
