'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';

export default function HomePage() {
  return (
    <main className="relative">
      <Navigation />
      
      <section id="home">
        <HeroSection />
      </section>
      
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let&apos;s <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:sadman30102001sakib@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get In Touch
            </a>
            <a
              href="https://github.com/SADMAN30102001SAKIB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 glass rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground">
            © 2025 Sadman Sakib. Built with Next.js & TypeScript.
          </div>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="https://github.com/SADMAN30102001SAKIB" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/sadmansakib30102001" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
