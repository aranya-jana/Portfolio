import React from 'react';
import { VscVscode, VscTerminalCmd } from 'react-icons/vsc';
import { SiJupyter, SiGooglecolab, SiAnaconda, SiSublimetext } from 'react-icons/si';
import { FaKaggle } from 'react-icons/fa';
import { motion } from 'framer-motion';

const getRandomDuration = (min, max) => Math.random() * (max - min) + min;

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

const Platforms = () => {
  return (
    <div className="pb-24">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: 100}}
      transition={{ duration: 1.5 }}
      className="my-20 text-center text-4xl">Platforms</motion.h2>
      <motion.div 
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity: 0, x: 100}}
      transition={{ duration: 1.5 }}
      className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscVscode className="text-7xl text-blue-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiJupyter className="text-7xl text-orange-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiGooglecolab className="text-7xl text-red-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <FaKaggle className="text-7xl text-blue-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiAnaconda className="text-7xl text-green-500" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <SiSublimetext className="text-7xl text-orange-600" />
        </motion.div>
        <motion.div
          variants={iconVariants(getRandomDuration(2, 6))}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4"
        >
          <VscTerminalCmd className="text-7xl text-gray-100" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Platforms;
