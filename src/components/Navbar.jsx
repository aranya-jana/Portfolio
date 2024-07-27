import React from 'react';
import logo from '../assets/AJLogo2.png'; // Adjust the path as per your project structure
import { FaLinkedin, FaGithub, FaKaggle, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-2 lg:px-10"> {/* Adjusted padding */}
      <div className="flex items-center">
        <img className="w-16 lg:w-20" src={logo} alt="logo" /> {/* Adjusted logo size for responsiveness */}
      </div>
      <div className="flex items-center justify-center gap-6 text-xl lg:text-2xl"> {/* Adjusted text size for responsiveness */}
        <a
          href="https://www.linkedin.com/in/aranya-jana-4b8017236/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-500 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaLinkedin className="cursor-pointer" />
        </a>
        <a
          href="https://github.com/aranya-jana"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-gray-100 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaGithub className="cursor-pointer" />
        </a>
        <a
          href="https://www.kaggle.com/aranyajana01"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-sky-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaKaggle className="cursor-pointer" />
        </a>
        <a
          href="https://www.facebook.com/aranya.jana.1276"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaFacebook className="cursor-pointer" />
        </a>
        <a
          href="https://www.instagram.com/aranyajana_aj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-pink-600 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaInstagram className="cursor-pointer" />
        </a>
        <a
          href="https://x.com/A_J_0109"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-blue-400 transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-lg"
        >
          <FaTwitter className="cursor-pointer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
