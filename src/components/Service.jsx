import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    id: 1,
    title: 'Front-End Development',
    description: 'Crafting responsive, fast, and accessible interfaces using React, JavaScript, HTML, and CSS.',
    icon: '💻'
  },
  {
    id: 2,
    title: 'UI/UX Design',
    description: 'Designing intuitive and aesthetically pleasing user experiences with tools like Figma and Adobe XD.',
    icon: '🎨'
  },
  {
    id: 3,
    title: 'Web Design',
    description: 'Creating visually engaging and brand-consistent website layouts and mockups.',
    icon: '🖌️'
  },
  {
    id: 4,
    title: 'Interaction Design',
    description: 'Focusing on meaningful interactions and transitions to enhance user engagement.',
    icon: '🔄'
  },
  {
    id: 5,
    title: 'Accessibility Optimization',
    description: 'Ensuring websites are inclusive and usable for all audiences, following WCAG guidelines.',
    icon: '♿'
  },
  {
    id: 6,
    title: 'Responsive Design',
    description: 'Building layouts that adapt beautifully across all screen sizes and devices.',
    icon: '📱'
  }
];

const Service = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="bg-black text-white py-24" id="skills">
      <div className="container mx-auto px-6 md:px-16 lg:px-24">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={cardVariants}>
            <motion.h2 
              className="text-4xl font-bold relative inline-block"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              My Services
              <motion.div 
                className=""
                initial={{ width: 0 }}
                whileInView={{ width: '100%' }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              />
            </motion.h2>
            <motion.p 
              className="mt-4 text-lg text-gray-400 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              I offer a wide range of services to help you build your digital presence
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden"
                variants={cardVariants}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 10px 25px -5px rgba(0, 0, 0, 0.3)",
                  transition: { duration: 0.2 }
                }}
              >
                <div className="p-8">
                  <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-gradient-to-r from-pink-500/20 to-blue-500/20 mx-auto">
                    <span className="text-3xl">{service.icon}</span>
                  </div>

                  <h3 className="text-xl font-bold mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-blue-500">
                    {service.title}
                  </h3>

                  <p className="text-gray-400 text-center mb-6 leading-relaxed">
                    {service.description}
                  </p>

              
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;