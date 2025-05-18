import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = [
  { to: 'home', label: 'Home' },
  { to: 'about', label: 'About' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Projects' },
  { to: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setIsMenuOpen(false);
    if (location.pathname !== '/') {
      navigate(`/#${target}`);
    }
  };

  const handleConnectClick = () => {
    setIsMenuOpen(false);
    if (location.pathname === '/') {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        scroll.scrollTo(contactElement.offsetTop - 80);
      }
    } else {
      navigate('/#contact');
    }
  };

  return (
    <nav className="bg-black text-white fixed top-0 left-0 w-full z-50 shadow-md px-6 md:px-16 lg:px-24">
      <motion.div
        className="container py-4 flex justify-between items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Brand / Logo */}
        <motion.div
          className="text-2xl font-extrabold tracking-wide cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => {
            setIsMenuOpen(false);
            if (location.pathname !== '/') {
              navigate('/');
            } else {
              scroll.scrollToTop();
            }
          }}
        >
          Arielle
        </motion.div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 text-sm md:text-base items-center">
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {location.pathname === '/' ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  className="cursor-pointer hover:text-pink-400 transition duration-300"
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavClick(link.to)}
                  className="cursor-pointer hover:text-pink-400 transition duration-300"
                >
                  {link.label}
                </span>
              )}
            </motion.div>
          ))}

          {/* Connect Button visible on desktop */}
          <motion.button
            onClick={handleConnectClick}
            className="bg-gradient-to-r from-pink-400 to-blue-500 text-white px-4 py-2 rounded-full transform transition-transform hover:scale-105 shadow-lg ml-6"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Me
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </motion.div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden bg-black px-6 pb-6 space-y-4"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {navLinks.map((link, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {location.pathname === '/' ? (
                <ScrollLink
                  to={link.to}
                  smooth={true}
                  duration={500}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="block cursor-pointer hover:text-pink-400 transition duration-300 text-lg"
                >
                  {link.label}
                </ScrollLink>
              ) : (
                <span
                  onClick={() => handleNavClick(link.to)}
                  className="block cursor-pointer hover:text-pink-400 transition duration-300 text-lg"
                >
                  {link.label}
                </span>
              )}
            </motion.div>
          ))}

          {/* Connect Button visible on mobile menu */}
          <motion.button
            onClick={handleConnectClick}
            className="w-full bg-gradient-to-r from-pink-400 to-blue-500 text-white px-4 py-3 rounded-full transform transition-transform hover:scale-105 shadow-lg mt-4"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            Connect with Me
          </motion.button>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
