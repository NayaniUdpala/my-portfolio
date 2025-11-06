import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const skillCategories = [{
    category: 'Design Tools',
    skills: [{
      name: 'Figma',
      level: 90
    }, {
      name: 'Material Design',
      level: 85
    }, {
      name: 'Adobe Illustrator',
      level: 88
    }, {
      name: 'Photoshop',
      level: 85
    }]
  }, {
    category: 'Web Development',
    skills: [{
      name: 'HTML',
      level: 85
    }, {
      name: 'CSS',
      level: 82
    }, {
      name: 'JavaScript',
      level: 70
    }]
  }, {
    category: 'Programming',
    skills: [{
      name: 'Python',
      level: 75
    }, {
      name: 'C',
      level: 72
    }]
  }];
  return <section id="skills" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8
      }} className="text-center mb-16">
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="text-yellow-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto"></div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-12">
          {skillCategories.map((category, categoryIndex) => <motion.div key={category.category} initial={{
          opacity: 0,
          y: 50
        }} animate={inView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.8,
          delay: categoryIndex * 0.2
        }}>
              <h3 className="text-2xl font-bold text-yellow-500 mb-8">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-yellow-500 font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-white/10 rounded-full overflow-hidden border border-yellow-500/20">
                      <motion.div initial={{
                  width: 0
                }} animate={inView ? {
                  width: `${skill.level}%`
                } : {}} transition={{
                  duration: 1,
                  delay: categoryIndex * 0.2 + skillIndex * 0.1
                }} className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full relative">
                        <motion.div animate={{
                    opacity: [0.5, 1, 0.5]
                  }} transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: 'easeInOut'
                  }} className="absolute inset-0 bg-white/30 rounded-full" />
                      </motion.div>
                    </div>
                  </div>)}
              </div>
            </motion.div>)}
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl border-2 border-yellow-500/30">
            <p className="text-xl text-gray-300 mb-6 max-w-2xl">
              "Design is not just what it looks like and feels like. Design is
              how it works."
            </p>
            <p className="text-yellow-500 font-bold">- Steve Jobs</p>
          </div>
        </motion.div>
      </div>
    </section>;
}