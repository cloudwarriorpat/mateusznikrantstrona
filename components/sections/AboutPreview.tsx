'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutPreview() {
  const credentials = [
    'Certyfikowany Trener Personalny',
    'Specjalista High Performance',
    'Ponad 8 lat doświadczenia',
    'Ponad 200 zadowolonych klientów',
  ];

  return (
    <section id="about" className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image
              src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Mateusz Nikrant - Trener Personalny"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Kim Jestem?
            </h2>

            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              Cześć! Jestem Mateusz Nikrant - trenerem personalnym i coachem high performance.
              Z pasją pomagam ludziom osiągać ich cele fitness i przekraczać swoje granice.
            </p>

            <p className="text-text-secondary text-lg mb-6 leading-relaxed">
              Moim zadaniem jest nie tylko trenować Twoje ciało, ale również umysł.
              Wierzę, że prawdziwa transformacja zaczyna się w głowie, a następnie przenosi się na ciało.
            </p>

            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
              Pracuję z ludźmi na różnych poziomach zaawansowania - od początkujących,
              przez zaawansowanych sportowców, po osoby przygotowujące się do zawodów.
            </p>

            <div className="space-y-3 mb-8">
              {credentials.map((credential, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Check className="text-red-primary flex-shrink-0" size={24} />
                  <span className="text-text-primary font-medium">{credential}</span>
                </div>
              ))}
            </div>

            <CustomButton href="/o-mnie" variant="primary">
              Poznaj Mnie Lepiej
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}