'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(10, 10, 10, 0.7), rgba(20, 20, 20, 0.8)), url(https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80)',
        }}
      />

      {/* Modern gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-primary/20 via-transparent to-transparent"></div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mb-6"
              >
                <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-primary/20 border border-red-primary/30 text-red-primary font-medium text-sm uppercase tracking-wider">
                  Professionalny Trener Personalny
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight"
              >
                Osiągnij
                <span className="block bg-gradient-to-r from-red-primary to-red-300 bg-clip-text text-transparent">
                  Szczytową Formę
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                Profesjonalny trening personalny i coaching high performance dla osób, które chcą osiągnąć więcej niż myślą, że to możliwe.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              >
                <CustomButton
                  href="/kontakt"
                  variant="primary"
                  className="bg-gradient-to-r from-red-primary to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-primary/25"
                  aria-label="Rozpocznij trening personalny z Mateuszem Nikrantem"
                >
                  Rozpocznij Trening
                </CustomButton>
                <CustomButton
                  href="/oferta"
                  variant="secondary"
                  className="border-2 border-white/20 hover:border-red-primary hover:bg-red-primary/10 backdrop-blur-sm"
                  aria-label="Zobacz pełną ofertę treningów i coaching"
                >
                  Zobacz Ofertę
                </CustomButton>
              </motion.div>
            </motion.div>

            {/* Right side - Stats/Features */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-primary mb-2">8+</div>
                <div className="text-gray-300 text-sm">Lat Doświadczenia</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-primary mb-2">200+</div>
                <div className="text-gray-300 text-sm">Zadowolonych Klientów</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-primary mb-2">100%</div>
                <div className="text-gray-300 text-sm">Indywidualne Podejście</div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-red-primary mb-2">24/7</div>
                <div className="text-gray-300 text-sm">Wsparcie Online</div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}