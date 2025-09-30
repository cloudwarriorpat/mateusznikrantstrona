'use client';

import React from 'react';
import Link from 'next/link';
import { CustomButton } from '@/components/ui/custom-button';
import { CustomCard } from '@/components/ui/custom-card';
import { Clock, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mockPosts = [
  {
    slug: '5-najczestszych-bledow-treningowych',
    title: '5 Najczęstszych Błędów Treningowych',
    excerpt: 'Poznaj najczęstsze błędy, które popełniają osoby trenujące i dowiedz się, jak ich unikać.',
    category: 'Treningi',
    publishedDate: '2024-03-15',
    readTime: 5,
    image: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'jak-zbudowac-nawyk-regularnego-treningu',
    title: 'Jak Zbudować Nawyk Regularnego Treningu',
    excerpt: 'Praktyczne wskazówki, które pomogą Ci utrzymać regularność i osiągnąć swoje cele fitness.',
    category: 'Motywacja',
    publishedDate: '2024-03-10',
    readTime: 7,
    image: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    slug: 'dieta-a-wydajnosc-co-jesc-przed-treningiem',
    title: 'Dieta a Wydajność - Co Jeść Przed Treningiem',
    excerpt: 'Dowiedz się, jak prawidłowo dobrać posiłki przed treningiem, aby maksymalizować swoje wyniki.',
    category: 'Odżywianie',
    publishedDate: '2024-03-05',
    readTime: 6,
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export function BlogPreview() {
  return (
    <section className="py-20 bg-bg-darkest">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Najnowsze Artykuły
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Porady treningowe, motywacja i wiedza o high performance
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {mockPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={`/blog/${post.slug}`}>
                <CustomCard className="p-0 overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 group">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-white mb-3 hover:text-red-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-text-secondary mb-4 line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-text-muted space-x-4">
                      <span className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{new Date(post.publishedDate).toLocaleDateString('pl-PL')}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock size={16} />
                        <span>{post.readTime} min</span>
                      </span>
                    </div>

                    <span className="text-red-primary font-medium mt-4 hover:underline inline-block">
                      Czytaj Więcej →
                    </span>
                  </div>
                </CustomCard>
              </Link>
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
          <CustomButton href="/blog" variant="primary">
            Zobacz Wszystkie Artykuły
          </CustomButton>
        </motion.div>
      </div>
    </section>
  );
}