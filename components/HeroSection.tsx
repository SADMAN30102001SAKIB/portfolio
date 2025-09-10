'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { personalInfo, contact } from '@/data/portfolio';
import { useEffect, useState } from 'react';

const TypewriterEffect = () => {
  const [mounted, setMounted] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('Software Engineer');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Start typing animation after a delay
    const startDelay = setTimeout(() => {
      setIsTyping(true);
      setCurrentText('');
    }, 1000);
    
    return () => clearTimeout(startDelay);
  }, []);
  
  useEffect(() => {
    if (!mounted || !isTyping) return;
    
    const roles = [
      "Software Engineer", 
      "Co-Founder & Tech Lead",
      "Mobile App Developer",
      "System Architect",
      "Web App Developer"
    ];
    
    const currentRole = roles[currentRoleIndex];
    
    if (currentText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentRole.slice(0, currentText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentText, mounted, isTyping, currentRoleIndex]);

  return (
    <span className="gradient-text font-semibold">
      {currentText || ''}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default function HeroSection() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.2 }
  };

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, delay: 0.4 }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl float" style={{ animationDelay: '-2s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl float" style={{ animationDelay: '-4s' }}></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div {...fadeInUp}>
          {personalInfo.openToWork && (
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Open to Work
            </div>
          )}
        </motion.div>

        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
          {...fadeInUp}
        >
          <span className="gradient-text">Sadman Sakib</span>
        </motion.h1>

        <motion.div 
          className="text-xl md:text-2xl lg:text-3xl mb-4 min-h-[2.5rem] flex items-center justify-center"
          {...fadeInLeft}
        >
          <TypewriterEffect />
        </motion.div>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed"
          {...fadeInRight}
        >
          {personalInfo.tagline}
        </motion.p>

        <motion.div 
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin size={20} />
            <span>{personalInfo.location}</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <Github size={20} />
            <span>{personalInfo.githubStats.followers} followers</span>
          </div>
        </motion.div>

        <motion.div 
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href={contact.email}
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            <Mail size={20} />
            Get In Touch
          </a>
          
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Github size={20} />
            GitHub
          </a>
          
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-lg font-medium hover:bg-white/10 transition-colors"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </motion.div>

        {/* Tech stack showcase */}
        <motion.div 
          className="pt-12 border-t border-border/30"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-sm text-muted-foreground mb-6 text-center font-medium">Primary Tech Stack</p>
          <div className="flex flex-wrap items-center justify-center gap-3 max-w-5xl mx-auto">
            {['TypeScript', 'Next.js', 'React Native', 'Node.js', 'PostgreSQL', 'Docker'].map((tech, index) => (
              <motion.div
                key={tech}
                className="px-5 py-3 glass rounded-xl text-sm font-medium border border-white/20 hover:border-primary/50 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.0 }}
      >
        <div className="w-5 h-8 border-2 border-primary/40 rounded-full flex justify-center bg-background/10 backdrop-blur-sm">
          <motion.div 
            className="w-1 h-2 bg-primary rounded-full mt-1.5"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
}
