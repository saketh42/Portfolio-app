import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg text-center font-semibold mb-4">Portfolio</h3>
            <p className="text-sm text-center text-muted-foreground">
              A showcase of my skills, projects, and professional journey in software development.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-sm text-center text-muted-foreground hover:text-violet-500 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm text-center text-muted-foreground hover:text-violet-500 transition-colors">
                About
              </Link>
              <Link href="/projects" className="text-sm text-center text-muted-foreground hover:text-violet-500 transition-colors">
                Projects
              </Link>
              <Link href="/contact" className="text-sm text-center text-muted-foreground hover:text-violet-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          
          <div>
            <h3 className="text-center text-lg font-semibold mb-4">Connect</h3>
            <div className="flex justify-center space-x-4">
              <Link href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5 text-muted-foreground hover:text-violet-500 transition-colors" />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 text-muted-foreground hover:text-violet-500 transition-colors" />
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter className="h-5 w-5 text-muted-foreground hover:text-violet-500 transition-colors" />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}