'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';

export default function SkillsSection() {
  const skillCategories = [
    { name: 'Frontend', color: 'from-blue-500 to-purple-500' },
    { name: 'Backend', color: 'from-green-500 to-teal-500' },
    { name: 'Database', color: 'from-orange-500 to-red-500' },
    { name: 'Mobile', color: 'from-pink-500 to-rose-500' },
    { name: 'DevOps', color: 'from-yellow-500 to-orange-500' },
    { name: 'Language', color: 'from-indigo-500 to-blue-500' },
    { name: 'Tools', color: 'from-gray-500 to-slate-500' },
    { name: 'Other', color: 'from-cyan-500 to-blue-500' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const getProficiencyWidth = (proficiency: number) => {
    return `${proficiency * 20}%`;
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 4) return 'bg-green-500';
    if (proficiency >= 3) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technical <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My expertise across various technologies and frameworks
            </p>
          </motion.div>

          <div className="grid gap-8">
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(skill => skill.category === category.name);
              
              if (categorySkills.length === 0) return null;

              return (
                <motion.div
                  key={category.name}
                  variants={itemVariants}
                  className="glow-border rounded-xl p-8"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${category.color}`}></div>
                    <h3 className="text-2xl font-bold">{category.name}</h3>
                    <span className="text-muted-foreground">({categorySkills.length})</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categorySkills.map((skill) => (
                      <motion.div
                        key={skill.name}
                        className="space-y-3"
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-muted-foreground">
                            {skill.yearsOfExperience}y
                          </span>
                        </div>
                        
                        <div className="w-full bg-secondary rounded-full h-2">
                          <motion.div
                            className={`h-2 rounded-full ${getProficiencyColor(skill.proficiency)}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: getProficiencyWidth(skill.proficiency) }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                          />
                        </div>
                        
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">
                            Proficiency: {skill.proficiency}/5
                          </span>
                          <span className="text-muted-foreground">
                            {skill.projects.length} projects
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
