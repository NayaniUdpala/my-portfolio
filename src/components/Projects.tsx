import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';

export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'MindEase — Wellbeing App',
      description: 'Designing micro-interactions and accessible onboarding flows for mental wellbeing.',
      tags: ['UI Design', 'UX Research', 'Colour Theory'],
      image: '/MindEase_Mockup.png',
      link:'https://www.figma.com/design/oo8KFf3F2Sdzt3MpkritI8/MindEase?node-id=0-1&t=0V5TEVCEZc769Oq3-1'
    },
    {
      title: 'Mobile App UI',
      description: 'A news & community app UI designed in Figma using Material Design principle.',
      tags: ['Mobile Design', 'Prototype', 'Figma'],
      image: '/FoTHub.png' ,// ✅ This loads your local FoTHub image from the public folder
      link:'https://www.figma.com/design/bE9HRpKHgXEQY5QPrYESIr/assignmet1?t=0V5TEVCEZc769Oq3-1',
      github: 'https://github.com/NayaniUdpala/FOT_NEWS_APP.git'
    },
    {
      title: 'Sweet Crust - Website UI ',
      description: 'A clean, responsive bakery website UI designed in Figma with soft pastel tones.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: '/SweetCrust_Mockup.png',
      link:'https://www.figma.com/design/IuNNDbITUHjrNeAZeybEzH/SWEETCRUST?t=Ey5U0nJmjrc2czyM-1'
    },
    {
      title: 'Social Media Platform',
      description: 'Next-generation social platform emphasizing meaningful connections and content discovery',
      tags: ['Social', 'Community', 'Engagement'],
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80'
    },
    {
      title: 'Travel Booking Experience',
      description: 'Streamlined travel booking with AI-powered recommendations and real-time updates',
      tags: ['Travel', 'AI/ML', 'Mobile'],
      image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80'
    },
    {
      title: 'Educational Platform',
      description: 'Interactive learning platform with gamification and progress tracking',
      tags: ['Education', 'Gamification', 'Web'],
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80'
    }
  ];

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-yellow-500/5"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-yellow-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300 bg-black">
                {/* Project image */}
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 w-full">
                    <div className="flex gap-3 mb-4">
                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="p-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400 transition-colors"
                    >
                        <ExternalLinkIcon size={20} />
                      </motion.a>

                      {project.github && (
                        <motion.a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <GithubIcon size={20} />
                        </motion.a>
                      )}

                     
                    </div>
                  </div>
                </div>

                {/* Project details */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-yellow-500 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-medium bg-yellow-500/20 text-yellow-500 rounded-full border border-yellow-500/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
