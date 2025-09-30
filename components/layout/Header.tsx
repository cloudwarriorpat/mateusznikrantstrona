'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const navigation = [
  { name: 'Start', href: '/' },
  { name: 'O Mnie', href: '/o-mnie' },
  { name: 'Oferta', href: '/oferta' },
  { name: 'Blog', href: '/blog' },
  { name: 'YouTube', href: '/youtube' },
  { name: 'Kontakt', href: '/kontakt' },
];

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-bg-dark/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="text-xl font-bold text-white hover:text-red-primary transition-colors">
            MATEUSZ NIKRANT
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'text-base font-medium transition-colors relative py-2',
                    isActive
                      ? 'text-red-primary after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-red-primary'
                      : 'text-text-secondary hover:text-white'
                  )}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <button
            className="md:hidden text-white hover:text-red-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          'md:hidden fixed top-20 left-0 right-0 bg-bg-dark/98 backdrop-blur-md transition-all duration-300 overflow-hidden',
          isMobileMenuOpen ? 'max-h-screen border-t border-border' : 'max-h-0'
        )}
      >
        <div className="container mx-auto px-4 py-6 space-y-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block text-lg font-medium transition-colors py-2',
                  isActive ? 'text-red-primary' : 'text-text-secondary hover:text-white'
                )}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}