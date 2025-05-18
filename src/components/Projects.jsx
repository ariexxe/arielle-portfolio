import React from 'react';
import { motion } from 'framer-motion';

import coresite from '../assets/mockups/coresite_MU.svg';
import coresitedesign from '../assets/mockups/coresite_design_MU.svg';
import bionova from '../assets/mockups/bionova_MU.svg';
import p_a from '../assets/mockups/P.A E-commerce.svg';
import street from '../assets/mockups/Street Style.svg';
import bionovadesign from '../assets/mockups/BioNova Design.svg';
import flow from '../assets/mockups/FlowSync.svg';

const projects = [
  {
    id: 1,
    name: 'CoreSite Service Website',
    tecnologies: 'CoreSite empowers businesses and individuals with impactful, streamlined digital solutions by eliminating complexity and focusing on what truly matters.',
    image: coresite,
    github: 'https://ariexxe.github.io/coresite-website-react/',
  },
  {
    id: 2,
    name: 'BioNova Solution Website',
    tecnologies: 'Leveraging cutting-edge biotechnology to revolutionize healthcare, agriculture, and sustainability, driving scientific innovation for a better tomorrow.',
    image: bionova,
    github: 'https://githubnexon.github.io/BioNova/',
  },
  {
    id: 3,
    name: 'P.A E-commerce Design',
    tecnologies: 'A premium eCommerce experience offering high-quality, sleek black-themed products designed for style, durability, and modern living.',
    image: p_a,
    github: 'https://arielleperez146.wixstudio.com/p--a',
  },
  {
    id: 4,
    name: 'Street Style App Design',
    tecnologies: 'A clean, intuitive eCommerce app design focused on seamless shopping, showcasing products with elegance and optimizing every step for user convenience and conversion.',
    image: street,
    github: 'https://www.figma.com/proto/fRUNgfLNY992fGCEI2tdgT/street-style-app?node-id=94-100&starting-point-node-id=94%3A100&t=iXfZK3OfvXFpF8B8-1',
  },
  {
    id: 5,
    name: 'Coresite Website Design',
    tecnologies: 'A minimalist and impactful service website design for CoreSite, emphasizing clarity, essential digital solutions, and a user-focused experience.',
    image: coresitedesign,
    github: 'https://www.figma.com/proto/cMhMfDekgUgjv4VUAivIfI/CoreSite?node-id=3-5&starting-point-node-id=3%3A5&t=PhURzcIxMxVPEHMa-1',
  },
  {
    id: 6,
    name: 'BioNova Solution Design',
    tecnologies: 'A cutting-edge website design for BioNova Solutions, blending modern aesthetics with scientific precision to showcase innovations in biotechnology.',
    image: bionovadesign,
    github: 'https://www.figma.com/proto/sjUgn8AM37qaOBxs4RyGue/BioNova-Solution?node-id=1-5&p=f&t=EASZoiDEdkainBYx-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A5',
  },
  {
    id: 7,
    name: 'FlowSync Automation Design',
    tecnologies: 'A sleek and efficient website design centered on automation, highlighting smart solutions that streamline workflows and power the future of intelligent systems.',
    image: flow,
    github: 'https://www.figma.com/proto/WRofm4YCqwNju8wIP0M5sG/FlowSync-Automation?page-id=0%3A1&node-id=3-2&p=f&viewport=122%2C-864%2C0.77&t=h9xSGw411Frb2wRQ-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=3%3A2',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const Projects = () => {
  return (
    <div className="bg-black text-white text-center py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-[1.03]"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-60 object-cover transition-transform duration-300 hover:scale-105"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.tecnologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-pink-600 to-blue-500 text-white px-6 py-2 rounded-full hover:brightness-110 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
