import React from 'react';
import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-bg-dark border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">MATEUSZ NIKRANT</h3>
            <p className="text-text-secondary mb-6">
              Twój przewodnik do szczytowej formy
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-red-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-red-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-red-primary transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Szybkie Linki</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/o-mnie" className="text-text-secondary hover:text-red-primary transition-colors">
                  O Mnie
                </Link>
              </li>
              <li>
                <Link href="/oferta" className="text-text-secondary hover:text-red-primary transition-colors">
                  Oferta
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-text-secondary hover:text-red-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-text-secondary hover:text-red-primary transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-4">Kontakt</h4>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={20} className="text-red-primary" />
                <a
                  href="mailto:kontakt@mateusznikrant.pl"
                  className="text-text-secondary hover:text-red-primary transition-colors"
                >
                  kontakt@mateusznikrant.pl
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={20} className="text-red-primary" />
                <a
                  href="tel:+48123456789"
                  className="text-text-secondary hover:text-red-primary transition-colors"
                >
                  +48 123 456 789
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-text-muted text-sm">
            © 2024 Mateusz Nikrant. Wszelkie prawa zastrzeżone.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link href="/polityka-prywatnosci" className="text-text-muted hover:text-red-primary transition-colors">
              Polityka Prywatności
            </Link>
            <Link href="/regulamin" className="text-text-muted hover:text-red-primary transition-colors">
              Regulamin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}