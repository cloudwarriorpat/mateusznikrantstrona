'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-darkest">
      <div className="text-center max-w-md mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-red-primary mb-4">500</h1>
          <h2 className="text-2xl font-bold text-white mb-4">
            Coś poszło nie tak
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Przepraszamy, wystąpił nieoczekiwany błąd. Spróbuj odświeżyć stronę lub skontaktuj się z nami.
          </p>
        </div>

        <div className="space-y-4">
          <CustomButton
            onClick={reset}
            variant="primary"
            className="w-full"
          >
            Spróbuj ponownie
          </CustomButton>

          <CustomButton
            href="/"
            variant="secondary"
            className="w-full"
          >
            Wróć na stronę główną
          </CustomButton>
        </div>

        {process.env.NODE_ENV === 'development' && (
          <details className="mt-8 text-left">
            <summary className="text-red-primary cursor-pointer mb-2">
              Szczegóły błędu (tylko dla deweloperów)
            </summary>
            <pre className="bg-black/50 p-4 rounded-lg text-xs text-gray-300 overflow-auto">
              {error.message}
              {error.stack && (
                <>
                  {'\n\n'}
                  {error.stack}
                </>
              )}
            </pre>
          </details>
        )}
      </div>
    </div>
  );
}
