'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { motion } from 'framer-motion';

const videos = [
  {
    id: 'dQw4w9WgXcQ',
    title: 'Trening Całego Ciała - 30 Minut',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Budowanie Siły - Najlepsze Ćwiczenia',
  },
  {
    id: 'dQw4w9WgXcQ',
    title: 'Porady Żywieniowe dla Aktywnych',
  },
];

export function YouTubePreview() {
  return (
    <section className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Najnowsze Treningi
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Trenuj razem ze mną dzięki darmowym treningom na YouTube
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="aspect-video bg-bg-medium rounded-lg overflow-hidden mb-4 relative">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-red-primary transition-colors">
                {video.title}
              </h3>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <CustomButton href="/youtube" variant="primary">
            Zobacz Więcej
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}