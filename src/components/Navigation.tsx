import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MenuIcon, XIcon } from 'lucide-react';
interface NavigationProps {
  scrolled: boolean;
}
export function Navigation({
  scrolled
}: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = ['About', 'Projects', 'Skills', 'Resume', 'Contact'];
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.toLowerCase());
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
      setMobileMenuOpen(false);
    }
  };
  return <motion.nav initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg border-b border-yellow-500/20' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <motion.div whileHover={{
          scale: 1.05
        }} className="text-2xl font-bold">
            <span className="text-yellow-500">Portfolio</span>
          </motion.div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => <motion.button key={item} onClick={() => scrollToSection(item)} initial={{
            opacity: 0,
            y: -20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: index * 0.1
          }} whileHover={{
            scale: 1.1
          }} className="relative text-white hover:text-yellow-500 transition-colors duration-300 group">
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 group-hover:w-full transition-all duration-300"></span>
              </motion.button>)}
          </div>
          {/* Mobile Menu Button */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-yellow-500 transition-colors">
            {mobileMenuOpen ? <XIcon size={28} /> : <MenuIcon size={28} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {mobileMenuOpen && <motion.div initial={{
      opacity: 0,
      height: 0
    }} animate={{
      opacity: 1,
      height: 'auto'
    }} exit={{
      opacity: 0,
      height: 0
    }} className="md:hidden bg-black/95 backdrop-blur-lg border-t border-yellow-500/20">
          <div className="px-4 py-6 space-y-4">
            {navItems.map(item => <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left text-white hover:text-yellow-500 transition-colors py-2">
                {item}
              </button>)}
          </div>
        </motion.div>}
    </motion.nav>;
}