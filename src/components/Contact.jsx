import React, { useState } from 'react';
import { CONTACT } from '../constants';
import { MdOutlinePhoneEnabled, MdCopyAll, MdDoneAll } from 'react-icons/md'; // Phone and Copy icons
import { FaFacebook, FaTwitter, FaLinkedin, FaDiscord, FaInstagram } from 'react-icons/fa'; // Social media icons
import { motion, AnimatePresence } from 'framer-motion';

const iconVariants = (duration) => ({
  initial: { opacity: 0, x: 100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration },
  },
});

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT.email);
    setCopied(true);

    // Reset copied state after 2 seconds
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-10 text-center text-4xl"
      >
        Contact With Me
      </motion.h1>
      <div className="text-center tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="my-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="my-4 flex items-center justify-center"
        >
          <a
            href={`tel:${CONTACT.phoneNo}`}
            className="border-b border-transparent mr-2 text-white-500 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-10 hover:shadow-lg"
            style={{ textDecoration: 'none' }} // Remove underline
          >
            {CONTACT.phoneNo}
          </a>
          <a href={`tel:${CONTACT.phoneNo}`} className="ml-2 text-green-500">
            <MdOutlinePhoneEnabled className="text-lg animate-pulse" /> {/* Phone icon with breathing effect */}
          </a>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center my-4"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="border-b border-transparent mr-2 text-white-500 hover:text-green-600 transition duration-300 ease-in-out transform hover:scale-10 hover:shadow-lg"
            style={{ textDecoration: 'none' }} // Remove underline
          >
            {CONTACT.email}
          </a>
          <button
            className={`text-blue-500 p-1 rounded-full flex items-center transition-all duration-300 hover:scale-110 ${
              copied ? 'text-blue-600' : ''
            }`}
            onClick={handleCopyEmail}
          >
            {copied ? (
              <MdDoneAll size={20} className="animate-pulse" /> // Double check icon when copied
            ) : (
              <MdCopyAll size={20} className="animate-pulse" /> // Copy icon initially
            )}
          </button>
        </motion.div>

        <AnimatePresence>
          {copied && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="fixed top-10 left-1/2 transform -translate-x-1/2 bg-green-700 text-white px-4 py-2 rounded shadow-lg"
            >
              Copied!
            </motion.div>
          )}
        </AnimatePresence>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-5">
          <motion.a
            href="https://www.linkedin.com/in/aranya-jana-4b8017236/"
            className="text-blue-700 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            variants={iconVariants(1)}
            initial="initial"
            animate="animate"
          >
            <FaLinkedin size={24} />
          </motion.a>
          <motion.a
            href="https://www.facebook.com/aranya.jana.1276"
            className="text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg "
            variants={iconVariants(1.2)}
            initial="initial"
            animate="animate"
          >
            <FaFacebook size={24} />
          </motion.a>
          <motion.a
            href="https://www.instagram.com/aranyajana_aj"
            className="text-pink-700 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            variants={iconVariants(1.4)}
            initial="initial"
            animate="animate"
          >
            <FaInstagram size={24} />
          </motion.a>
          <motion.a
            href="https://x.com/A_J_0109"
            className="text-blue-400 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            variants={iconVariants(1.6)}
            initial="initial"
            animate="animate"
          >
            <FaTwitter size={24} />
          </motion.a>
          <motion.a
            href="https://discord.com/yourusername"
            className="text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
            variants={iconVariants(1.8)}
            initial="initial"
            animate="animate"
          >
            <FaDiscord size={24} />
          </motion.a>
        </div>
      </div>

      <div className="text-center mt-8 text-neutral-500">
        <p>© Aranya Jana | All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Contact;
