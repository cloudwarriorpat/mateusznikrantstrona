'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CustomCard } from '@/components/ui/custom-card';
import { Clock, Calendar, Loader as Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import type { BlogPost } from '@/lib/notion';

const categories = ['Wszystkie', 'Treningi', 'Odżywianie', 'Motywacja', 'High Performance', 'Regeneracja'];

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState('Wszystkie');

  useEffect(() => {
    fetchPosts();
  }, [activeCategory]);

  const fetchPosts = async () => {
    setLoading(true);
    try {
      const category = activeCategory === 'Wszystkie' ? '' : activeCategory;
      const url = category ? `/api/blog?category=${category}` : '/api/blog';
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data.posts || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Artykuły
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary"
          >
            Porady treningowe, motywacja i wiedza o high performance
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-bg-dark border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-red-primary text-white'
                    : 'bg-bg-medium text-text-secondary hover:bg-bg-light hover:text-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-darkest">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="animate-spin text-red-primary" size={48} />
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-text-secondary">
                Brak artykułów w tej kategorii
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                >
                  <Link href={`/blog/${post.slug}`}>
                    <CustomCard className="p-0 overflow-hidden h-full flex flex-col">
                      <div className="relative h-56 group">
                        <Image
                          src={post.featuredImage || 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'}
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

                        <div className="flex items-center text-sm text-text-muted space-x-4 mb-4">
                          <span className="flex items-center space-x-1">
                            <Calendar size={16} />
                            <span>{new Date(post.publishedDate).toLocaleDateString('pl-PL')}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <Clock size={16} />
                            <span>{post.readTime} min</span>
                          </span>
                        </div>

                        <span className="text-red-primary font-medium hover:underline inline-block">
                          Czytaj Więcej →
                        </span>
                      </div>
                    </CustomCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}