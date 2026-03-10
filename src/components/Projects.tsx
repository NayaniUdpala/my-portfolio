import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLinkIcon, GithubIcon } from 'lucide-react';
import { SiBehance } from 'react-icons/si';

// 🖼️ Import your local images from src/assets
import MindEaseImg from '../Assets/MindEase_Mockup.png';
import FoTHubImg from '../Assets/FoTHub.png';
import SweetCrustImg from '../Assets/SweetCrust_Mockup.png';
import LogoImg from '../Assets/Logo.png';
import TyreLogoImg from '../Assets/Tyrelogomockup.png';
import DriveEaseImg from '../Assets/DriveEase.png';
import HomePageImg from '../Assets/HomePageImg.png';
import VelouraImg from '../Assets/Veloura.png';
import FreshPressImg from '../Assets/Watermelon2.png';
import GoLankaImg from '../Assets/Vehicle_Rental.png';
import TeaCupLogoImg from '../Assets/Teacup.png';
import VarsityJacketPosterImg from '../Assets/jacket poster.png';
import FoodDeliveryPosterImg from '../Assets/FoodDeliveryPosterImg.png';
import ICTTuteCoverImg from '../Assets/ICTtute.png';
import  WeddingInvitationImg from '../Assets/En_invitation.png';
import  MarketingPosterImg from '../Assets/marketingposter.png'



export function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: 'Business Marketing Poster Design',
      description: 'A modern marketing poster with a dark luxury theme promoting creative design services.',
      tags: ['Marketing Poster', 'Business Promotion', 'Adobe Photoshop'],
      image:  MarketingPosterImg,
      behance: 'https://www.behance.net/gallery/245542205/Business-Marketing-Poster-Design',
    },

    {
      title: 'Elegant Floral Wedding Invitation Design',
      description: 'An elegant floral wedding invitation design featuring soft colors and classic typography for a timeless and romantic look.',
      tags: ['Wedding Invitation', 'Graphic Design', 'Adobe Photoshop'],
      image:  WeddingInvitationImg,
      behance: 'https://www.behance.net/gallery/245541537/Elegant-Floral-Wedding-Invitation-Design',
    },

    {
      title:  'ICT Tuition Class Cover Design',
      description:'A clean yellow and black cover design for an ICT Grade 6 tuition booklet with simple typography and educational elements.',
      tags: ['Book Cover Design', 'Graphic Design', 'Adobe Photoshop'],
      image: ICTTuteCoverImg,
      behance: 'https://www.behance.net/gallery/245540727/ICT-Tuition-Class-Cover-Design',
    },

    {
      title:  'Food Delivery Promotion Poster Design',
      description: 'A vibrant food delivery poster highlighting popular fast foods and a 20% discount to boost online orders.',
      tags: ['Poster Design', 'Graphic Design', 'Adobe Illustrator'],
      image: FoodDeliveryPosterImg,
      behance: 'https://www.behance.net/gallery/245539795/Food-Delivery-Promotion-Poster-Design',
    },

    {
      title: 'Varsity Jacket Sale Poster Design',
      description: 'A clean and modern promotional poster showcasing varsity jackets with bold typography and a 30% discount highlight.',
      tags: ['Poster Design', 'Graphic Design', 'Adobe Photoshop'],
      image: VarsityJacketPosterImg,
      behance: 'https://www.behance.net/gallery/239999507/Varsity-Jacket-Sale-Poster-Design',
    },

    {
      title: 'Tea Cup Logo Design',
      description:'A clean and modern tea cup logo designed to express warmth, simplicity, and brand identity.',
      tags: ['Logo Design', 'Brand Identity', 'Adobe Illustrator'],
      image: TeaCupLogoImg,
      behance: 'https://www.behance.net/gallery/239965055/Tea-Cup-Logo-Design',
    },
    {
      title: 'Go Lanka – Vehicle Renting Mobile App (UI/UX Design)',
      description:'A modern, accessible vehicle rental app UI focused on clarity, trust, and color-safe design',
      tags: ['Figma', 'Mobile App', 'Prototype'],
      image: GoLankaImg,
      link: 'https://www.figma.com/proto/FxEzl6ApJjuaH6loRgiDAf/GoLanka?node-id=13-21&p=f&t=80iTITHwSrfZBUdI-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=6%3A2',
      behance: 'https://www.behance.net/gallery/238974453/Go-Lanka-Vehicle-Renting-Mobile-App-%28UIUX-Design%29',
    },
    {
      title: 'FreshPress – 3D-Style Motion Prototype',
      description:'A modern Figma UI with smooth 3D-style depth animation and clean transitions.',
      tags: ['Figma', 'Motion Design', 'Prototype'],
      image: FreshPressImg,
      link: 'https://www.figma.com/proto/82q1QQKYfEBESJ37d0XCBG/FreshPress?node-id=1-41&p=f&t=oiR1qadgWjYy7RTZ-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      behance: 'https://www.behance.net/gallery/238573165/3D-Motion-UI-Prototype-Figma-Interactive-Design',
    },
    {
      title: 'Veloura - Luxury Hotel Website UI',
      description:'Elegant hotel booking UI with modern design and smooth animations.',
      tags: ['Figma', 'UI/UX Design', 'Web Design'],
      image: VelouraImg,
      link: 'https://www.figma.com/design/v8yp98L659IfRqNmeUrJfQ/Veloura?node-id=8-12&t=ZBTByQ0XIe4UYGmV-1',
      behance: 'https://www.behance.net/gallery/238416377/Veloura-Luxury-Hotel-Booking-Website-UI',
    },
    {
      title: 'Sweet Orbit - Home screen UI',
      description:'olorful ice cream UI concept in Figma with smooth motion and blob design.',
      tags: ['Figma', 'UI/UX Design', 'Prototype'],
      image: HomePageImg,
      link: 'https://www.figma.com/proto/OnPGwBklwIJgH2sSv7EVVq/ICE-CREAM?node-id=1-2&p=f&t=ES6dRtx2fjbKG0lS-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      behance: 'https://www.behance.net/gallery/238495661/Sweet-Orbit-Home-Screen-UI-%28Prototype%29',
    },
    {
      title: 'DriveEase - Website UI',
      description:'Designed a clean, user-friendly car rental UI in Figma with a custom logo in Illustrator.',
      tags: ['Figma', 'UI/UX Design', 'Illustrator'],
      image: DriveEaseImg,
      link: 'https://www.figma.com/proto/mls0TYQYO2kyzZK2Id6N3b/DriveEase?node-id=2-2&p=f&t=DdFyLVm2wQKWxv6t-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1',
      behance: 'https://www.behance.net/gallery/238174955/DriveEase-Car-Rental-Website-UI',
    },
    {
      title: 'MindEase — Wellbeing App',
      description:
        'Designing micro-interactions and accessible onboarding flows for mental wellbeing.',
      tags: ['UI Design', 'Prototype', 'Colour Theory'],
      image: MindEaseImg,
      link: 'https://www.figma.com/design/oo8KFf3F2Sdzt3MpkritI8/MindEase?node-id=0-1&t=0V5TEVCEZc769Oq3-1',
    },
    {
      title: 'Mobile App UI',
      description:
        'A news & community app UI designed in Figma using Material Design principle.',
      tags: ['Mobile Design', 'Prototype', 'Figma'],
      image: FoTHubImg,
      link: 'https://www.figma.com/design/bE9HRpKHgXEQY5QPrYESIr/assignmet1?t=0V5TEVCEZc769Oq3-1',
      github: 'https://github.com/NayaniUdpala/FOT_NEWS_APP.git',
    },
    {
      title: 'Sweet Crust - Website UI',
      description: 'A clean, responsive bakery website UI designed in Figma with soft pastel tones.',
      tags: ['Web Design', 'UI/UX', 'Figma'],
      image: SweetCrustImg,
      link: 'https://www.figma.com/design/IuNNDbITUHjrNeAZeybEzH/SWEETCRUST?t=Ey5U0nJmjrc2czyM-1',
    },
    {
      title: 'P&S Logo Redesign',
      description: 'Modern P&S logo redesigned in Illustrator and showcased with mockups.',
      tags: ['Logo Design', 'Adobe Illustrator', 'Adobe Photoshop'],
      image: LogoImg,
      behance: 'https://www.behance.net/gallery/238127379/Logo-Redesign',
    },
    {
      title: 'TredZ - Tyre Logo Design',
      description: 'Bold tyre brand logo designed in Illustrator and showcased with a banner mockup.',
      tags: ['Logo Design', 'Adobe Illustrator', 'Adobe Photoshop'],
      image: TyreLogoImg,
      behance:'https://www.behance.net/gallery/238144133/TredZ-Tyre-Logo-Design-and-Banner-Mockup-Design',
    },
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
                      {/* Figma / main link */}
                      {project.link && (
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
                      )}

                      {/* GitHub link */}
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

                      {/* Behance link */}
                      {project.behance && (
                        <motion.a
                          href={project.behance}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 bg-[#1769ff] text-white rounded-lg hover:shadow-[0_0_10px_#1769ff] transition-all"
                        >
                          <SiBehance size={20} />
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
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
