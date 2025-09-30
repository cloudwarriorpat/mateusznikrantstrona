'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { CustomCard } from '@/components/ui/custom-card';
import { Youtube as YoutubeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Trening Całego Ciała - 30 Minut HIIT',
    description: 'Intensywny trening całego ciała, który możesz wykonać w domu bez żadnego sprzętu.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Budowanie Siły - Najlepsze Ćwiczenia',
    description: 'Poznaj najefektywniejsze ćwiczenia na budowanie siły funkcjonalnej.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Porady Żywieniowe dla Aktywnych',
    description: 'Wszystko co musisz wiedzieć o diecie, jeśli regularnie trenujesz.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Trening Cardio - Spalanie Tłuszczu',
    description: 'Efektywny trening cardio, który przyspieszy Twoją przemianę materii.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Rozciąganie i Mobilność',
    description: 'Kompletny przewodnik po rozciąganiu i poprawie mobilności stawów.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Trening Brzucha - 10 Minut',
    description: 'Krótki ale intensywny trening mięśni brzucha na każdy dzień.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'High Performance - Mindset',
    description: 'Jak rozwinąć mentalność zwycięzcy i osiągać więcej w życiu i sporcie.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Trening Nóg - Budowanie Masy',
    description: 'Najlepsze ćwiczenia na nogi do budowania masy mięśniowej.',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Regeneracja Po Treningu',
    description: 'Skuteczne metody regeneracji, które przyspieszą Twoje postępy.',
  },
];

export default function YouTubePage() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <YoutubeIcon className="text-red-primary" size={80} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Treningi Wideo
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary mb-8"
          >
            Trenuj razem ze mną dzięki darmowym treningom na YouTube
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <CustomButton
              href="https://youtube.com/@mateusznikrant"
              variant="primary"
              className="inline-flex items-center space-x-2"
            >
              <YoutubeIcon size={24} />
              <span>Subskrybuj Mój Kanał</span>
            </CustomButton>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <CustomCard className="p-0 overflow-hidden">
                  <div className="aspect-video bg-bg-darkest relative group">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/${video.id}`}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                    <div className="absolute inset-0 bg-red-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2 hover:text-red-primary transition-colors">
                      {video.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {video.description}
                    </p>
                  </div>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-darkest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Nie Przegap Nowych Treningów
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Subskrybuj mój kanał YouTube, aby otrzymywać powiadomienia o nowych treningach,
              poradach żywieniowych i motywacyjnych filmach. Nowe materiały co tydzień!
            </p>
            <CustomButton
              href="https://youtube.com/@mateusznikrant"
              variant="primary"
              className="inline-flex items-center space-x-2"
            >
              <YoutubeIcon size={24} />
              <span>Subskrybuj Teraz</span>
            </CustomButton>
          </motion.div>
        </div>
      </section>

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
              Potrzebujesz Spersonalizowanego Planu?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Jeśli szukasz indywidualnego podejścia i planu dopasowanego do Twoich celów,
              skontaktuj się ze mną
            </p>
            <CustomButton
              href="/kontakt"
              variant="secondary"
              className="bg-white text-red-primary hover:bg-gray-100 border-0"
            >
              Skontaktuj Się
            </CustomButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}