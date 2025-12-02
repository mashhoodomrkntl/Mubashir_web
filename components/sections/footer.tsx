'use client';

import { Mail, Phone, MapPin, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent/5 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="w-full mx-auto">
          <div className="flex flex-col md:flex-row justify-center items-center gap-12 mb-8 text-center">
            <div className="flex flex-col items-center max-w-md">
              <h3 className="text-2xl font-bold font-space-grotesk mb-4 bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                Mubashir
              </h3>
              <p className="text-muted-foreground mb-4">
                Professional finance and accounting services with a focus on internal auditing,
                bookkeeping, and strategic business consulting.
              </p>
              <div className="flex gap-4 justify-center">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="mailto:mubashirkntl@gmail.com"
                  className="w-10 h-10 rounded-full bg-secondary hover:bg-blue-500 hover:text-white flex items-center justify-center transition-all duration-300"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {['Home', 'About', 'Skills', 'Experience', 'Services', 'Portfolio', 'Contact'].map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="text-muted-foreground hover:text-blue-500 transition-colors text-sm"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div> */}

            <div className="flex flex-col items-center">
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <a href="mailto:mubashirkntl@gmail.com" className="hover:text-blue-500 transition-colors">
                    mubashirkntl@gmail.com
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 text-muted-foreground">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <a href="tel:+919876543210" className="hover:text-blue-500 transition-colors">
                    +97466437523
                  </a>
                </li>
                <li className="flex items-center justify-center gap-2 text-muted-foreground">
                  <MapPin className="w-4 h-4 flex-shrink-0" />
                  <span>Kerala, India</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-center items-center gap-4">
            <p className="text-sm text-muted-foreground">
            © {currentYear}  Crafted with excellence.
            </p>
           
          </div>
        </div>
      </div>
    </footer>
  );
}
