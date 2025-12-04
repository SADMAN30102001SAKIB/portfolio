'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, BookOpen, ChevronDown } from 'lucide-react';
import { education } from '@/data/portfolio';

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

function CoursesDropdown({ courses }: { courses: string[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-foreground font-semibold hover:text-primary transition-colors group"
      >
        <BookOpen className="w-4 h-4" />
        <span>Relevant Courses ({courses.length})</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
        </motion.div>
      </button>
      
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden" }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-3 pt-3 border-t border-border/50">
          {courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
              <span className="text-sm">{course}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default function EducationSection() {
  // Separate main education (with courses) from secondary education
  const mainEducation = education.filter(edu => edu.relevant_courses && edu.relevant_courses.length > 0);
  const secondaryEducation = education.filter(edu => !edu.relevant_courses || edu.relevant_courses.length === 0);

  return (
    <section id="education" className="py-20 px-4 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My academic journey in computer science and engineering.
          </p>
        </motion.div>

        <motion.div 
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.5
              }
            }
          }}
        >
          {/* Main Education (B.Sc) */}
          {mainEducation.map((edu) => (
            <motion.div
              key={edu.id}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="glass rounded-xl p-8 hover:bg-white/5 transition-all duration-300 border border-white/10"
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {edu.degree}
                      </h3>
                      <h4 className="text-xl font-semibold text-primary mb-2">
                        {edu.institution}
                      </h4>
                      <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{edu.location}</span>
                        </div>
                        {edu.current && (
                          <div className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm font-medium border border-green-500/30">
                            Currently Pursuing
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {edu.description && (
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {edu.description}
                    </p>
                  )}

                  {edu.gpa && (
                    <div className="mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-lg">
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                    </div>
                  )}

                  {edu.relevant_courses && edu.relevant_courses.length > 0 && (
                    <CoursesDropdown courses={edu.relevant_courses} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}

          {/* Secondary Education (HSC & SSC) - Side by Side */}
          {secondaryEducation.length > 0 && (
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {secondaryEducation.map((edu) => (
                <div
                  key={edu.id}
                  className="glass rounded-xl p-6 hover:bg-white/5 transition-all duration-300 border border-white/10 h-full"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <GraduationCap className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      <h4 className="text-base font-semibold text-primary mb-3">
                        {edu.institution}
                      </h4>
                      
                      <div className="space-y-2 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>
                            {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                          </span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{edu.location}</span>
                        </div>
                      </div>

                      {edu.description && (
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </motion.div>

        {education.length === 0 && (
          <motion.div 
            className="text-center py-12"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Education section is coming soon
            </h3>
            <p className="text-muted-foreground">
              Educational background will be added here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
