import React from 'react';
import { PERSONALS } from '../constants';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Personals = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Personal <span className="text-neutral-500">Projects</span>
      </motion.h2>
      <div>
        {PERSONALS.map((personals, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <a href={personals.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={personals.image}
                  width={150}
                  height={150}
                  alt={personals.title}
                  className="mb-6 rounded"
                />
              </a>
            </motion.div>
            <motion.div 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold flex items-center">
                <a
                  href={personals.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-50 hover:text-blue-500 hover:underline cursor-pointer transition duration-300 ease-in-out transform hover:scale-105 flex items-center"
                >
                  {personals.title}
                  <span className="text-sm text-blue-50 ml-2">
                    <FaExternalLinkAlt className="inline-block text-sm align-middle text-neutral-400" />
                  </span>
                </a>
              </h6>
              <p className="mb-4 text-neutral-400">{personals.description}</p>
              <div className="flex flex-wrap">
                {personals.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="mr-2 mb-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-green-600"
                  >
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

export default Personals;
