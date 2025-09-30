'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function AboutPreview() {
  const credentials = [
    'Certyfikowany Trener Personalny (ACE, NASM)',
    'Specjalista High Performance Coaching',
    'Psycholog Sportu - Studia Podyplomowe',
    'Ponad 8 lat doświadczenia praktycznego',
  ];

  const achievements = [
    { number: '200+', label: 'Zadowolonych Klientów' },
    { number: '95%', label: 'Skuteczność Programów' },
    { number: '50+', label: 'Przemian Życiowych' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-bg-dark via-bg-darkest to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(239,68,68,0.1),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-primary/20 border border-red-primary/30 text-red-primary font-medium text-sm uppercase tracking-wider mb-4">
            Poznaj Moją Historię
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Dlaczego Wybrać
            <span className="block bg-gradient-to-r from-red-primary to-red-300 bg-clip-text text-transparent">
              Właśnie Mnie?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Jestem nie tylko trenerem, ale przede wszystkim partnerem w Twojej drodze do najlepszej wersji siebie.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mateusz Nikrant - Trener Personalny"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Floating stats */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-black/60 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    {achievements.map((achievement, index) => (
                      <div key={index}>
                        <div className="text-2xl font-bold text-red-primary mb-1">{achievement.number}</div>
                        <div className="text-xs text-gray-300 uppercase tracking-wider">{achievement.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-bg-medium/50 to-black/50 backdrop-blur-sm border border-red-primary/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <span className="w-2 h-8 bg-red-primary rounded-full mr-4"></span>
                Moja Filozofia
              </h3>

              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                Wierzę, że <strong className="text-red-primary">prawdziwa transformacja</strong> zaczyna się w głowie.
                Nie skupiam się tylko na ćwiczeniach, ale na budowaniu silnej mentalności, dyscypliny i pewności siebie.
              </p>

              <p className="text-gray-300 text-lg leading-relaxed">
                Każda osoba jest inna, dlatego moje podejście jest w 100% <strong className="text-red-primary">indywidualne</strong>.
                Nie ma uniwersalnych rozwiązań - każdy program jest dostosowany do Twoich celów, możliwości i stylu życia.
              </p>
            </div>

            <div className="bg-gradient-to-br from-bg-medium/50 to-black/50 backdrop-blur-sm border border-red-primary/20 rounded-2xl p-8 shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Check className="text-red-primary mr-3" size={28} />
                Moje Kwalifikacje
              </h3>

              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-primary/20 p-2 rounded-full flex-shrink-0 mt-1">
                      <Check className="text-red-primary" size={16} />
                    </div>
                    <span className="text-gray-300 leading-relaxed">{credential}</span>
                  </div>
                ))}
              </div>
            </div>

            <CustomButton
              href="/o-mnie"
              variant="primary"
              className="w-full bg-gradient-to-r from-red-primary to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-primary/25"
            >
              Poznaj Moją Pełną Historię
            </CustomButton>
          </motion.div>
        </div>
      </div>
    </section>
  );
}