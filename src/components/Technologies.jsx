// import React from 'react';
// import { FaPython, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
// import { SiMongodb, SiPandas, SiNumpy, SiMysql, SiC, SiDjango } from 'react-icons/si';
// import { motion } from "framer-motion";

// const iconVariants = (duration) => ({
//   initial: { y: -10 },
//   animate: {
//     y: [10, -10],
//     transition: {
//       duration: duration,
//       ease: "linear",
//       repeat: Infinity,
//       repeatType: "reverse",
//     },
//   },
// });

// const Technologies = () => {
//   return (
//     <div className="pb-24">
//       <motion.h2 
//         whileInView={{opacity: 1, y: 0}}
//         initial={{opacity: 0, y: -100}}
//         transition={{ duration: 1.5 }}
//         className="my-20 text-center text-4xl"
//       >
//         Skills <span className="text-neutral-500">&</span> Technologies
//       </motion.h2>
//       <motion.div 
//         whileInView={{opacity: 1, x: 0}}
//         initial={{opacity: 0, x: -100}}
//         transition={{ duration: 1.5 }}
//         className="flex flex-wrap items-center justify-center gap-4"
//       >
//         <motion.a
//           href="#python"
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <FaPython className="text-7xl text-yellow-400" />
//         </motion.a>
//         <motion.a
//           href="#javascript"
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <FaJs className="text-7xl text-yellow-500" />
//         </motion.a>
//         <motion.a
//           href="#c"
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiC className="text-7xl text-blue-500" />
//         </motion.a>
//         <motion.a
//           href="#django"
//           variants={iconVariants(4)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiDjango className="text-7xl text-green-800" />
//         </motion.a>
//         <motion.a
//           href="#numpy"
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiNumpy className="text-7xl text-blue-600" />
//         </motion.a>
//         <motion.a
//           href="#pandas"
//           variants={iconVariants(5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiPandas className="text-7xl text-blue-700" />
//         </motion.a>
//         <motion.a
//           href="#react"
//           variants={iconVariants(3.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <FaReact className="text-7xl text-blue-500" />
//         </motion.a>
//         <motion.a
//           href="#nodejs"
//           variants={iconVariants(6)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <FaNodeJs className="text-7xl text-green-500" />
//         </motion.a>
//         <motion.a
//           href="#mongodb"
//           variants={iconVariants(2.5)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiMongodb className="text-7xl text-green-500" />
//         </motion.a>
//         <motion.a
//           href="#mysql"
//           variants={iconVariants(3)}
//           initial="initial"
//           animate="animate"
//           className="rounded-2xl border-4 border-neutral-800 p-4 cursor-pointer"
//         >
//           <SiMysql className="text-7xl text-blue-600" />
//         </motion.a>
//       </motion.div>
//     </div>
//   );
// };

// export default Technologies;



// #### Updated

import React from 'react';
import styled from 'styled-components';
import { FaPython, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiPandas, SiNumpy, SiMysql, SiC, SiDjango } from 'react-icons/si';
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: { y: -10 },
  animate: {
    y: [10, -10],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

const Tooltip = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  .tooltiptext {
    visibility: hidden;
    background-color: black;
    text-align: left;
    border-radius: 6px;
    padding: 10px;
    position: absolute;
    z-index: 1;
    bottom: 125%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: opacity 0.3s;
    white-space: nowrap;
    color: inherit; /* Set text color based on the icon color */
  }

  &:hover .tooltiptext {
    visibility: visible;
    opacity: 1;
  }

  .tooltiptext ul {
    list-style-type: disc;
    padding-left: 20px;
    margin: 0;
  }
`;

const Technologies = () => {
  return (
    <div className="pb-24">
      <motion.h2 
        whileInView={{opacity: 1, y: 0}}
        initial={{opacity: 0, y: -100}}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Skills <span className="text-neutral-500">&</span> Technologies
      </motion.h2>
      <motion.div 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 1.5 }}
        className="flex flex-wrap items-center justify-center gap-4"
      >
        <Tooltip
          as={motion.div}
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-yellow-300" // Python tooltip text color
        >
          <FaPython className="text-7xl text-yellow-400" />
          <div className="tooltiptext">
            <ul>
              <li>Credit Card Default Prediction</li>
              <li>Heart Disease Prediction</li>
              <li>Stock Market Prediction</li>
              <li>Weather Prediction</li>
              <li>WhatsApp Chat Sentiment Analysis</li>
              <li>Image Organization using Facial Recognition</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-yellow-500" // JavaScript tooltip text color
        >
          <FaJs className="text-7xl text-yellow-500" />
          <div className="tooltiptext">
            <ul>
              <li>Personal Portfolio</li>
              <li>Movie Ticket Booking System</li>
              <li>Advanced Calculator</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-blue-500" // C tooltip text color
        >
          <SiC className="text-7xl text-blue-500" />
          <div className="tooltiptext">
            <ul>
              <li>No Project</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-green-600" // Django tooltip text color
        >
          <SiDjango className="text-7xl text-green-800" />
          <div className="tooltiptext">
            <ul>
              <li>Weather Prediction</li>
              <li>Advanced Scientific Calculator</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-blue-600" // NumPy tooltip text color
        >
          <SiNumpy className="text-7xl text-blue-600" />
          <div className="tooltiptext">
            <ul>
              <li>Credit Card Default Prediction</li>
              <li>Heart Disease Prediction</li>
              <li>Stock Market Prediction</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-blue-700" // Pandas tooltip text color
        >
          <SiPandas className="text-7xl text-blue-700" />
          <div className="tooltiptext">
            <ul>
              <li>Credit Card Default Prediction</li>
              <li>Heart Disease Prediction</li>
              <li>Stock Market Prediction</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-blue-500" // React tooltip text color
        >
          <FaReact className="text-7xl text-blue-500" />
          <div className="tooltiptext">
            <ul>
              <li>Personal Portfolio</li>
              <li>Movie Ticket Booking System</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-green-500" // Node.js tooltip text color
        >
          <FaNodeJs className="text-7xl text-green-500" />
          <div className="tooltiptext">
            <ul>
              <li>Personal Portfolio</li>
              <li>Movie Ticket Booking System</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-green-500" // MongoDB tooltip text color
        >
          <SiMongodb className="text-7xl text-green-500" />
          <div className="tooltiptext">
            <ul>
              <li>Movie Ticket Booking System</li>
            </ul>
          </div>
        </Tooltip>
        <Tooltip
          as={motion.div}
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4 text-blue-600" // MySQL tooltip text color
        >
          <SiMysql className="text-7xl text-blue-600" />
          <div className="tooltiptext">
            <ul>
              <li>No Project</li>
            </ul>
          </div>
        </Tooltip>
      </motion.div>
    </div>
  );
};

export default Technologies;
