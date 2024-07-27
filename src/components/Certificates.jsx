import React from 'react';
import { CERTIFICATES } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa'; // Import the FaExternalLinkAlt icon
import { motion } from 'framer-motion';



const Certificates = () => {
  return (
    <div className=" pb-4">
      <motion.h2 
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Certificates</motion.h2>
      <div>
        {CERTIFICATES.map((certificate, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{ duration: 1 }}
            className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{certificate.year}</p>
            </motion.div>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: 100}}
            transition={{ duration: 1 }}
            className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 hover:text-blue-500 hover:underline cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                >
                  {certificate.role}
                  <span className="text-sm text-blue-50 ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm align-middle text-neutral-400" />
                  </span>
                </a>
                {" - "}
                <span className="text-sm text-blue-50">{certificate.company}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{certificate.description}</p>
              <div className="flex flex-wrap">
                {certificate.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="mr-2 mt-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-600">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
