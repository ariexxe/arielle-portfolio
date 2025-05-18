import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import ResumeImg from '../assets/Resume of mine for portfolio.png';  

const Resume = () => {
  return (
    <>
      <Navbar />
      <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 pt-32 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resume
        </motion.h2>

        <motion.p
          className="text-lg mb-6 text-gray-400 max-w-xl text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          View or download my resume to explore my skills and background.
        </motion.p>

        {/* Resume Image Preview */}
        <motion.div
          className="w-full max-w-5xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <img
            src={ResumeImg}  // use new variable name here
            alt="Resume Preview"
            className="w-full h-auto rounded-lg shadow-lg object-contain"
            style={{ maxHeight: '80vh' }}
          />
        </motion.div>

        {/* Download Button */}
        <motion.a
          href={ResumeImg}  // and here
          download
          className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 rounded-full font-semibold transition-transform transform hover:scale-105 shadow-lg"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaDownload />
          Download Resume
        </motion.a>
      </div>
    </>
  );
};

export default Resume;
