import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { MailIcon, LinkedinIcon, GithubIcon, GlobeIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    emailjs.send(
      'service_i323vjs',  // Replace with your EmailJS service ID
      'template_4td5mk4', // Replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'stUsRk5_KqKq0pHJW'   // Replace with your EmailJS public key
    ).then(
      (result) => {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      },
      (error) => {
        alert('Failed to send message. Please try again.');
        console.error(error);
      }
    );
  };

  const socialLinks = [
    {
      icon: MailIcon,
      label: 'Email',
      href: 'mailto:nayaniwickramaarachchi74@gmail.com',
      display: 'nayaniwickramaarachchi74@gmail.com'
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/nayani-wickramaarachchi-156711316/',
      display: 'linkedin.com/in/nayani-udpala'
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      href: 'https://github.com/NayaniUdpala',
      display: 'github.com/NayaniUdpala'
    },
    {
      icon: GlobeIcon,
      label: 'Behance',
      href: 'https://www.behance.net/nayaniudpala',
      display: 'behance.net/nayaniudpala'
    }
  ];

  return (
    <section id="contact" ref={ref} className="relative py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-yellow-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's create something magical together!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="from_name"
                  value={formData.name}
                  onChange={e => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border-2 border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  name="from_email"
                  value={formData.email}
                  onChange={e => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border-2 border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/5 border-2 border-yellow-500/20 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col justify-center space-y-6"
          >
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-4 p-4 bg-gradient-to-br from-yellow-500/10 to-transparent rounded-lg border-2 border-yellow-500/20 hover:border-yellow-500/50 transition-all duration-300"
              >
                <link.icon className="w-6 h-6 text-yellow-500" />
                <div>
                  <h3 className="text-white font-semibold">{link.label}</h3>
                  <p className="text-gray-400 text-sm">{link.display}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} All Rights Reserved
          </p>
        </motion.div>
      </div>
    </section>
  );
}