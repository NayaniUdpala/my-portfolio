import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCapIcon, DownloadIcon } from 'lucide-react';
export function Resume() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  const education = [{
    degree: 'Bachelor of Information and Communication Technology',
    school: 'University of Colombo, Faculty of Technology',
    period: '2023 - Present',
    description: 'Currently pursuing a degree in ICT with a focus on UI/UX design, software development, and digital innovation'
  }, {
    degree: 'Advanced Level Education',
    school: 'Kirindiwela Central College',
    period: '2019 - 2021',
    description: 'Completed secondary education with a strong foundation in technology and design'
  }];
  return <section id="resume" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-yellow-500/5 to-black">
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
            <span className="text-yellow-500">Education</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <motion.a
            href="/Nayani_Resume.pdf"
            download="Nayani_Resume.pdf"
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
          }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transition-all duration-300"
          role="button"
          aria-label="Download resume"
        >
          <DownloadIcon size={20} />
          Download Resume
        </motion.a>

        </motion.div>
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={inView ? {
          opacity: 1,
          x: 0
        } : {}} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-yellow-500/20 rounded-lg border-2 border-yellow-500/50">
                <GraduationCapIcon className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-3xl font-bold text-white">
                Education Background
              </h3>
            </div>
            <div className="space-y-8">
              {education.map((edu, index) => <motion.div key={edu.degree} initial={{
              opacity: 0,
              y: 30
            }} animate={inView ? {
              opacity: 1,
              y: 0
            } : {}} transition={{
              duration: 0.6,
              delay: 0.3 + index * 0.1
            }} className="relative pl-8 border-l-2 border-yellow-500/30 hover:border-yellow-500/70 transition-colors">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-yellow-500 rounded-full transform -translate-x-[9px]"></div>
                  <h4 className="text-xl font-bold text-white mb-1">
                    {edu.degree}
                  </h4>
                  <p className="text-yellow-500 font-medium mb-2">
                    {edu.school}
                  </p>
                  <p className="text-gray-400 text-sm mb-3">{edu.period}</p>
                  <p className="text-gray-300 leading-relaxed">
                    {edu.description}
                  </p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
        <motion.div initial={{
        opacity: 0,
        y: 50
      }} animate={inView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.8,
        delay: 0.5
      }} className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-2xl border-2 border-yellow-500/30">
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Currently building my portfolio and gaining experience in UI/UX
              design through academic projects and personal initiatives.
            </p>
            <p className="text-yellow-500 font-bold">
              Always learning, always growing ✨
            </p>
          </div>
        </motion.div>
      </div>
    </section>;
}