'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
  const skillCategories = [
    { name: 'Frontend', icon: '🎨', color: 'from-blue-500/20 to-purple-500/20', border: 'border-blue-500/30', text: 'text-blue-400' },
    { name: 'Backend', icon: '⚙️', color: 'from-green-500/20 to-teal-500/20', border: 'border-green-500/30', text: 'text-green-400' },
    { name: 'Database', icon: '🗄️', color: 'from-orange-500/20 to-red-500/20', border: 'border-orange-500/30', text: 'text-orange-400' },
    { name: 'Mobile', icon: '📱', color: 'from-pink-500/20 to-rose-500/20', border: 'border-pink-500/30', text: 'text-pink-400' },
    { name: 'DevOps', icon: '🚀', color: 'from-yellow-500/20 to-orange-500/20', border: 'border-yellow-500/30', text: 'text-yellow-400' },
    { name: 'Language', icon: '💻', color: 'from-indigo-500/20 to-blue-500/20', border: 'border-indigo-500/30', text: 'text-indigo-400' },
    { name: 'Tools', icon: '🔧', color: 'from-violet-500/20 to-purple-500/20', border: 'border-violet-500/30', text: 'text-violet-400' },
    { name: 'Other', icon: '✨', color: 'from-cyan-500/20 to-blue-500/20', border: 'border-cyan-500/30', text: 'text-cyan-400' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }
    }
  };

  // Get all unique skills grouped
  const groupedSkills = skillCategories.map(category => ({
    ...category,
    skills: skills.filter(skill => skill.category === category.name)
  })).filter(category => category.skills.length > 0);

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to bring ideas to life
          </p>
        </motion.div>

        <div className="space-y-6">
          {groupedSkills.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-wrap items-center gap-3"
            >
              {/* Category Label */}
              <div className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${category.color} border ${category.border}`}>
                <span>{category.icon}</span>
                <span className={`font-semibold ${category.text}`}>{category.name}</span>
              </div>

              {/* Skills */}
              <motion.div
                className="flex flex-wrap gap-2"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="group relative"
                  >
                    <div className="px-4 py-2 rounded-full bg-secondary/50 border border-border/50 text-foreground font-medium text-sm hover:bg-secondary hover:border-primary/50 hover:scale-105 transition-all duration-200 cursor-default">
                      {skill.name}
                    </div>
                    
                    {/* Tooltip on hover */}
                    {skill.projects.length > 0 && (
                      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-card border border-border rounded-lg text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                        Used in {skill.projects.length} project{skill.projects.length > 1 ? 's' : ''}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-wrap justify-center gap-8 text-center"
        >
          <div className="px-6 py-3 rounded-xl glass">
            <div className="text-3xl font-bold gradient-text">{skills.length}</div>
            <div className="text-sm text-muted-foreground">Technologies</div>
          </div>
          <div className="px-6 py-3 rounded-xl glass">
            <div className="text-3xl font-bold gradient-text">{groupedSkills.length}</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="px-6 py-3 rounded-xl glass">
            <div className="text-3xl font-bold gradient-text">
              {Math.max(...skills.map(s => s.yearsOfExperience))}+
            </div>
            <div className="text-sm text-muted-foreground">Years Coding</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
