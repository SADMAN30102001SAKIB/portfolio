'use client';

import { useEmailCopy } from './EmailCopyProvider';

export default function ContactSection() {
  const { copyEmail } = useEmailCopy();

  return (
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
            onClick={copyEmail}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-secondary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
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
  );
}
