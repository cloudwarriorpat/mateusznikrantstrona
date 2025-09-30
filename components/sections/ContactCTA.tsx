'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { motion } from 'framer-motion';

export function ContactCTA() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-dark to-red-primary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Gotowy Na Zmianę?
          </h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Skontaktuj się ze mną i zacznij swoją transformację już dziś
          </p>
          <CustomButton
            href="/kontakt"
            variant="secondary"
            className="bg-white text-red-primary hover:bg-gray-100 border-0"
          >
            Umów Konsultację
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}