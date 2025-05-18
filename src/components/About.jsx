import React from 'react';
import { motion } from 'framer-motion';
import about from '../assets/about-img.jpg';

// Import logos
import htmlLogo from '../assets/logos/html.svg';
import cssLogo from '../assets/logos/css.svg';
import jsLogo from '../assets/logos/js.svg';
import figmaLogo from '../assets/logos/figma.svg';
import vscodeLogo from '../assets/logos/vscode.svg';
import nodejsLogo from '../assets/logos/nodejs.svg';
import wordpressLogo from '../assets/logos/wordpress.svg';
import viteLogo from '../assets/logos/vite.svg';
import reactLogo from '../assets/logos/react.svg';
import tailwindLogo from '../assets/logos/tailwindcss.svg';

const About = () => {
  const techLogos = [
    htmlLogo, cssLogo, jsLogo, figmaLogo, vscodeLogo,
    nodejsLogo, wordpressLogo, viteLogo, reactLogo, tailwindLogo,
  ];

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12 "
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
          
        </motion.h2>

        {/* About Section */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image with Hover Effect */}
          <motion.div
            className="relative w-72 h-80 rounded overflow-hidden shadow-lg group mb-8 md:mb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
          >
            <img
              src={about}
              alt="About Me"
              className="w-full h-full object-cover rounded-lg transition-transform duration-700 ease-in-out group-hover:scale-105 group-hover:rotate-1"
            />
            <motion.div
              className="absolute inset-0 bg-gradient-to-trgroup-hover:opacity-100 transition-opacity duration-700 rounded"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <p className="text-lg mb-8 leading-relaxed">
              I am a Front End Developer with a passion for creating beautiful and functional web applications.
              I have experience in HTML, CSS, JavaScript, React, and Tailwind CSS. I am always eager to learn new
              technologies and improve my skills. I enjoy working on challenging projects and finding creative solutions.
            </p>

            {/* Skill Bars */}
            <div className="space-y-4">
              {[
                { label: 'HTML & CSS', width: 'w-10/12' },
                { label: 'JavaScript', width: 'w-9/12' },
                { label: 'Figma', width: 'w-11/12' },
              ].map((skill, i) => (
                <motion.div key={i} className="flex items-center gap-3" whileHover={{ scale: 1.01 }}>
                  <label className="w-2/12 font-semibold">{skill.label}</label>
                  <div className="grow bg-gray-800 rounded-full h-2.5 relative">
                    <motion.div
                      className={`bg-gradient-to-r from-pink-700 to-blue-500 h-2.5 rounded-full absolute top-0 left-0 ${skill.width}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.7, delay: 0.2 * i }}
                      style={{ transformOrigin: 'left' }}
                    />
                    <span className="absolute -top-6 right-0 text-sm text-green-400">{skill.percent}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tech Logos Carousel */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold text-center mb-8">Technologies I Use</h3>
          <motion.div
            className="overflow-hidden w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.div
              className="flex space-x-12 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: 'linear',
              }}
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-20 h-20 rounded-full p-2"
                  whileHover={{ scale: 1.2, rotate: 6 }}
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    delay: index * 0.1,
                  }}
                >
                  <img src={logo} alt={`Tech ${index}`} className="w-full h-full object-contain" />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
