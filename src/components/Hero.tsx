import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownIcon, SparklesIcon } from 'lucide-react';
export function Hero() {
  return <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
      {/* Geometric Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div animate={{
        rotate: 360,
        scale: [1, 1.2, 1]
      }} transition={{
        duration: 20,
        repeat: Infinity,
        ease: 'linear'
      }} className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-yellow-500/20 rounded-full" />
        <motion.div animate={{
        rotate: -360,
        scale: [1, 1.1, 1]
      }} transition={{
        duration: 15,
        repeat: Infinity,
        ease: 'linear'
      }} className="absolute bottom-1/4 right-1/4 w-96 h-96 border-2 border-yellow-500/10" style={{
        clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)'
      }} />
      </div>
      <div className="relative z-10 text-center max-w-5xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }} className="mb-6">
          <motion.div animate={{
          rotate: [0, 5, -5, 0]
        }} transition={{
          duration: 2,
          repeat: Infinity
        }} className="inline-block">
            <SparklesIcon className="w-12 h-12 text-yellow-500 mb-4 mx-auto" />
          </motion.div>
        </motion.div>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.1
      }} className="mb-4">
          <h2 className="text-2xl sm:text-3xl text-yellow-500 font-semibold">
            Hello, I'm
          </h2>
        </motion.div>
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }} className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6">
          <span className="block text-white">Nayani</span>
          <span className="block text-yellow-500 mt-2">Wickramaarachchi</span>
        </motion.h1>
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4
      }} className="text-xl sm:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
          UI/UX & Multimedia Designer crafting captivating digital experiences through innovative 
          design and seamless user interactions.
        </motion.p>
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.6
      }} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.button whileHover={{
          scale: 1.05,
          boxShadow: '0 0 30px rgba(251, 191, 36, 0.5)'
        }} whileTap={{
          scale: 0.95
        }} onClick={() => document.getElementById('projects')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg shadow-lg hover:bg-yellow-400 transition-all duration-300 border-2 border-yellow-500">
            View My Work
          </motion.button>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.95
        }} onClick={() => document.getElementById('contact')?.scrollIntoView({
          behavior: 'smooth'
        })} className="px-8 py-4 bg-transparent text-white font-bold rounded-lg border-2 border-white hover:bg-white hover:text-black transition-all duration-300">
            Get In Touch
          </motion.button>
        </motion.div>
        <motion.div initial={{
        opacity: 0
      }} animate={{
        opacity: 1
      }} transition={{
        duration: 0.8,
        delay: 1
      }} className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <motion.div animate={{
          y: [0, 10, 0]
        }} transition={{
          duration: 1.5,
          repeat: Infinity
        }}>
            <ArrowDownIcon className="w-8 h-8 text-yellow-500" />
          </motion.div>
        </motion.div>
      </div>
    </section>;
}