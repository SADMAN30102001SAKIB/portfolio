'use client';

import { motion } from 'framer-motion';
import { Award, Calendar, ExternalLink, CheckCircle } from 'lucide-react';
import { certificates } from '@/data/portfolio';

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

export default function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div className="text-center mb-16" {...fadeInUp}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Professional certifications and continuous learning milestones.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          variants={staggerChildren}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
        >
          {certificates.map((cert) => (
            <motion.div
              key={cert.id}
              variants={fadeInUp}
              className="glow-border rounded-xl p-8 hover:bg-white/5 transition-all duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary/20 rounded-xl flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                </div>
                
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {cert.name}
                  </h3>
                  <h4 className="text-lg font-semibold text-primary mb-3">
                    {cert.issuer}
                  </h4>
                  
                  <div className="flex items-center gap-4 text-muted-foreground mb-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{cert.date}</span>
                    </div>
                    {cert.credentialId && (
                      <div className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-mono">
                        ID: {cert.credentialId}
                      </div>
                    )}
                  </div>

                  {cert.credentialUrl && (
                    <div className="mb-6">
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Certificate
                      </a>
                    </div>
                  )}

                  {cert.skills && cert.skills.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        Skills Covered:
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 bg-secondary/50 text-secondary-foreground rounded-lg text-sm font-medium border border-secondary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {certificates.length === 0 && (
          <motion.div 
            className="text-center py-12"
            {...fadeInUp}
          >
            <div className="w-16 h-16 bg-muted/20 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold text-muted-foreground mb-2">
              Certifications section is coming soon
            </h3>
            <p className="text-muted-foreground">
              Professional certifications will be added here.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
