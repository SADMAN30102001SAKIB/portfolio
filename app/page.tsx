import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import EducationSection from '@/components/EducationSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import CertificationsSection from '@/components/CertificationsSection';
import ContactSection from '@/components/ContactSection';
import { getGitHubStats } from '@/lib/github';

export default async function HomePage() {
  const githubStats = await getGitHubStats();

  return (
    <main className="relative">
      <Navigation />
      
      <section id="home">
        <HeroSection initialGitHubStats={githubStats} />
      </section>
      
      <AboutSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <SkillsSection />
      <CertificationsSection />
      
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="text-muted-foreground">
            © 2026 Sadman Sakib. Built with Next.js, TypeScript & ISR.
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
