'use client';

import { motion } from 'framer-motion';
import { Calendar, MapPin, Briefcase, CheckCircle, ExternalLink, Github } from 'lucide-react';
import { experiences } from '@/data/portfolio';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My journey in building innovative solutions and leading technical initiatives.
          </p>
        </motion.div>

        <motion.div 
          className="relative"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent hidden lg:block" />
          
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              variants={fadeInUp}
              className="relative mb-8 last:mb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-8 -translate-x-1/2 top-10 hidden lg:flex items-center justify-center">
                <div className="w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg shadow-primary/30" />
                <div className="absolute w-8 h-8 bg-primary/20 rounded-full animate-ping" />
              </div>
              
              <div className="lg:ml-16 glass rounded-xl p-8 hover:bg-white/5 transition-all duration-300 border border-white/10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                      <Briefcase className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {experience.title}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {experience.company}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {experience.startDate} - {experience.current ? 'Present' : experience.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{experience.location}</span>
                        </div>
                        <div className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
                          {experience.type}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {experience.description}
                  </p>

                  {experience.achievements && experience.achievements.length > 0 && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Key Achievements:</h5>
                      <ul className="space-y-2">
                        {experience.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {(experience.websiteUrl || experience.githubUrl) && (
                    <div className="mb-6">
                      <h5 className="font-semibold text-foreground mb-3">Links:</h5>
                      <div className="flex items-center gap-4">
                        {experience.websiteUrl && (
                          <a
                            href={experience.websiteUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                          >
                            <ExternalLink className="w-4 h-4" />
                            Visit Website
                          </a>
                        )}
                        {experience.githubUrl && (
                          <a
                            href={experience.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                          >
                            <Github className="w-4 h-4" />
                            View Code
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  {experience.technologies && experience.technologies.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-foreground mb-3">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium border border-secondary/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {experiences.length === 0 && (
          <motion.div 
            className="text-center py-12"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Briefcase className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Experience section is coming soon
            </h3>
            <p className="text-muted-foreground">
              Professional experience will be added here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
