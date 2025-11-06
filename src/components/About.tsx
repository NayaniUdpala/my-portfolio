import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MonitorSmartphoneIcon, PaletteIcon, LightbulbIcon } from 'lucide-react';

// ✅ Import your image from src/Assets
import NayaniImg from '../Assets/Nayani.png';

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: PaletteIcon,
      title: 'UI/UX Design',
      description:
        'Designing clean, intuitive, and visually engaging user interfaces using Figma and design systems.',
    },
    {
      icon: MonitorSmartphoneIcon,
      title: 'Web Design',
      description:
        'Creating adaptive layouts that look great on all devices — mobile, tablet, and desktop.',
    },
    {
      icon: LightbulbIcon,
      title: 'Creative Thinking',
      description:
        'Combining aesthetics and problem-solving to deliver meaningful user experiences.',
    },
  ];

  return (
    <section id="about" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-yellow-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        {/* About Me section with image + text */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left side: Your Photo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center"
          >
            <div className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-yellow-500/40 shadow-xl hover:scale-105 transition-transform duration-300">
              <img
                src={NayaniImg}
                alt="Nayani Wickramaarachchi"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Right side: Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-bold mb-6 text-white">
              Designing Meaningful Digital Experiences
            </h3>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I'm Nayani Wickramaarachchi, a passionate UI/UX designer currently
              studying at the University of Colombo, Faculty of Technology
              (2023–present). I love creating beautiful, functional, and
              user-centered digital experiences that make a difference.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I've been dedicated to mastering the art of creating intuitive
              interfaces. I specialize in transforming complex problems into
              elegant solutions through innovative design thinking and user
              research.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              I believe in the power of design to make technology more human and
              accessible, combining creativity with technical expertise to
              deliver exceptional user experiences.
            </p>
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative group"
            >
              <div className="bg-gradient-to-br from-yellow-500/10 to-transparent p-8 rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mb-6 border-2 border-yellow-500/50"
                >
                  <feature.icon className="w-8 h-8 text-yellow-500" />
                </motion.div>
                <h4 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
