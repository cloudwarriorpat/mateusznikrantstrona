import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-bg-darkest">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Animated spinner */}
          <div className="w-16 h-16 border-4 border-red-primary/20 border-t-red-primary rounded-full animate-spin mx-auto"></div>

          {/* Pulsing dots */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-red-primary rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-red-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
              <div className="w-2 h-2 bg-red-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
            </div>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-white mb-2">
          Ładowanie...
        </h2>
        <p className="text-gray-400">
          Proszę czekać, przygotowuję dla Ciebie najlepsze treści
        </p>
      </div>
    </div>
  );
}
