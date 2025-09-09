'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Building } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate about creating scalable solutions and learning new technologies
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glow-border rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-4">My Journey</h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  {personalInfo.bio}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Building size={20} className="text-primary" />
                    <span>Currently studying at RUET</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar size={20} className="text-primary" />
                    <span>2+ years of development experience</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin size={20} className="text-primary" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-6">
              <div className="glow-border rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Full-Stack Development</h4>
                      <p className="text-muted-foreground">Building end-to-end web applications with modern technologies like Next.js, TypeScript, and PostgreSQL.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">Mobile Development</h4>
                      <p className="text-muted-foreground">Creating cross-platform mobile apps with React Native and computer vision integration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">System Architecture</h4>
                      <p className="text-muted-foreground">Designing scalable systems with proper DevOps practices, containerization, and cloud deployment.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* GitHub Stats */}
              <div className="glow-border rounded-xl p-8">
                <h3 className="text-2xl font-bold mb-6">GitHub Stats</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{personalInfo.githubStats.followers}</div>
                    <div className="text-sm text-muted-foreground">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{personalInfo.githubStats.repositories}</div>
                    <div className="text-sm text-muted-foreground">Repositories</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary">{personalInfo.githubStats.contributions}+</div>
                    <div className="text-sm text-muted-foreground">Contributions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
