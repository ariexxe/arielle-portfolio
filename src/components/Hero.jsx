import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';
import hero from '../assets/hero-img.jpg'

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-20 px-4 md:px-8 overflow-hidden" id="home">
      <motion.img
        src={hero}
        alt="Hero"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mx-auto mb-10 w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl hover:scale-105 transition-transform duration-300"
      />

      <motion.h1
        className="text-3xl md:text-5xl font-extrabold leading-tight"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
          Princess Arielle Perez
        </span>
        , Front End Developer
      </motion.h1>

      <motion.p
        className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
      >
        I am a Front End Developer with a passion for creating beautiful and functional web applications.
      </motion.p>

      <motion.div
        className="mt-10 flex flex-wrap justify-center gap-4"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.7 }}
      > 
      <Link to="/resume">
  <button className="bg-gradient-to-r from-pink-700 to-blue-500 text-white transform transition-transform hover:scale-105 px-8 py-3 rounded-full shadow-lg">
    Resume
  </button>
</Link>
      </motion.div>
    </div>
  )
}

export default Hero
