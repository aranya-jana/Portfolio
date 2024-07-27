import React from 'react';
import aboutImg from '../assets/about2.png';
import { motion } from "framer-motion";


const About = () => {
  return (
    <div className="pb-4">
      <motion.h2
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity: 0, y: -100}}
      transition={{ duration: 1.5 }}
      className="pt-20 my-20 text-center text-4xl"> {/* Added pt-20 for padding above */}
        About <span className="text-neutral-500">Me</span>
      </motion.h2>
      <div className="flex flex-wrap">
        <motion.div
        
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:py-1 lg:px-6">
          <div className="flex items-center justify-center">
            <div className="w-full lg:w-2/4 pt-14"> {/* Added pt-4 for padding above the image */}
              <img src={aboutImg} alt="about" className="w-full h-auto rounded-2xl" />
            </div>
          </div>
        </motion.div>
        <motion.div
          whileInView={{opacity: 1, x: 0}}
          initial={{opacity: 0, x: 100}}
          transition={{ duration: 0.5 }}
        className="w-full lg:w-1/2 lg:py-30 lg:px-4">
          <div className="flex justify-center lg:justify-start">
            <div>
              <p className="text-lg mb-4 lg:mb-3">
                I'm a student studying Computer Science with a focus on Artificial Intelligence and Machine Learning. I know a lot about coding, databases, networking, and solving problems with machine learning. I can also build full-stack applications. I'm passionate about using technology to solve real-world problems.
              </p>
              <p className="text-lg mb-4"><strong>Education:</strong></p>
              <p className="mb-4">
                <strong>CSE (AI & ML)</strong> <span className="text-neutral-500">2021 - Present</span><br />
                Narula Institute of Technology - B.Tech
              </p>
              <p className="mb-4">
                <strong>WBCHSE (Science)</strong> <span className="text-neutral-500">2019 - 2021</span><br />
                Egra Jhatulal High School - 10th + 2<br />
                <span className="ml-8"><strong>• Percentage: <span className="text-blue-500">94.6%</span></strong></span><br />
                <span className="ml-8"><strong>• 96 in Mathematics</strong></span>
              </p>
              <p className="mb-4">
                <strong>WBBSE</strong> <span className="text-neutral-500">2013 - 2019</span><br />
                Gyandeep Vidyapith - 10th<br />
                <span className="ml-8"><strong>• Percentage: <span className="text-blue-500">88.27%</span></strong></span><br />
                <span className="ml-8"><strong>• 100 in Mathematics</strong></span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
