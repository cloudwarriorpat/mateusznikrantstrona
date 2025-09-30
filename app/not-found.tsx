import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-darkest">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-primary mb-4">404</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Strona nie została znaleziona
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
          </p>
        </div>

        <div className="space-y-4">
          <CustomButton
            href="/"
            variant="primary"
            className="w-full"
          >
            Wróć na stronę główną
          </CustomButton>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/oferta"
              className="text-red-primary hover:text-red-300 font-medium transition-colors"
            >
              Zobacz ofertę →
            </Link>
            <Link
              href="/kontakt"
              className="text-red-primary hover:text-red-300 font-medium transition-colors"
            >
              Skontaktuj się →
            </Link>
            <Link
              href="/blog"
              className="text-red-primary hover:text-red-300 font-medium transition-colors"
            >
              Przeczytaj blog →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
