'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { CustomButton } from '@/components/ui/custom-button';
import { CustomCard } from '@/components/ui/custom-card';
import { Clock, Calendar, ArrowLeft, Loader as Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import type { BlogPost } from '@/lib/notion';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/api/blog/${slug}`);
      const data = await response.json();

      if (data.post) {
        setPost(data.post);
        fetchRelatedPosts(data.post.category);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedPosts = async (category: string) => {
    try {
      const response = await fetch(`/api/blog?category=${category}`);
      const data = await response.json();
      const filtered = (data.posts || []).filter((p: BlogPost) => p.slug !== slug).slice(0, 3);
      setRelatedPosts(filtered);
    } catch (error) {
      console.error('Error fetching related posts:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="animate-spin text-red-primary" size={48} />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white mb-4">Post nie znaleziony</h1>
        <CustomButton href="/blog" variant="primary">
          Wróć do Bloga
        </CustomButton>
      </div>
    );
  }

  return (
    <div>
      <section className="relative h-[60vh] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${post.featuredImage || 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920'})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-darkest via-bg-darkest/60 to-transparent" />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <Link
            href="/blog"
            className="inline-flex items-center text-text-secondary hover:text-red-primary transition-colors mb-6"
          >
            <ArrowLeft size={20} className="mr-2" />
            Wróć do Bloga
          </Link>

          <span className="inline-block bg-red-primary/90 text-white px-4 py-1 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6 max-w-4xl"
          >
            {post.title}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center text-text-secondary space-x-6"
          >
            <span className="font-medium">{post.author}</span>
            <span className="flex items-center space-x-2">
              <Calendar size={18} />
              <span>{new Date(post.publishedDate).toLocaleDateString('pl-PL')}</span>
            </span>
            <span className="flex items-center space-x-2">
              <Clock size={18} />
              <span>{post.readTime} min czytania</span>
            </span>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="prose prose-invert prose-lg max-w-none
                prose-headings:text-white prose-headings:font-bold
                prose-h2:text-3xl prose-h2:mb-6 prose-h2:mt-12 prose-h2:border-l-4 prose-h2:border-red-primary prose-h2:pl-6
                prose-h3:text-2xl prose-h3:mb-4 prose-h3:mt-8 prose-h3:text-red-primary
                prose-p:text-text-secondary prose-p:leading-relaxed prose-p:mb-6
                prose-a:text-red-primary prose-a:no-underline hover:prose-a:underline
                prose-strong:text-white prose-strong:font-bold
                prose-blockquote:border-l-4 prose-blockquote:border-red-primary prose-blockquote:bg-bg-medium prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:italic prose-blockquote:text-text-primary
                prose-ul:text-text-secondary prose-ul:space-y-2 prose-ul:mb-6
                prose-ol:text-text-secondary prose-ol:space-y-2 prose-ol:mb-6
                prose-li:marker:text-red-primary
                prose-img:rounded-lg prose-img:w-full"
            >
              <ReactMarkdown>{post.content || ''}</ReactMarkdown>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-16 p-8 bg-bg-medium border-2 border-red-primary rounded-lg"
            >
              <div className="flex items-start space-x-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.pexels.com/photos/1431283/pexels-photo-1431283.jpeg?auto=compress&cs=tinysrgb&w=200"
                    alt={post.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{post.author}</h3>
                  <p className="text-lg text-red-primary mb-3">Trener Personalny | High Performance Coach</p>
                  <p className="text-text-secondary leading-relaxed mb-4">
                    Z pasją pomagam ludziom osiągać ich cele fitness i przekraczać granice.
                    Łączę wiedzę z treningu personalnego z psychologią sportu, aby pomóc Ci osiągnąć
                    nie tylko lepsze ciało, ale także silniejszy umysł.
                  </p>
                  <CustomButton href="/kontakt" variant="secondary">
                    Skontaktuj Się
                  </CustomButton>
                </div>
              </div>
            </motion.div>
          </article>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-20 bg-bg-darkest">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 text-center">
              Może Cię Również Zainteresować
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <CustomCard className="p-0 overflow-hidden h-full flex flex-col">
                      <div className="relative h-48 group">
                        <Image
                          src={relatedPost.featuredImage || 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800'}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-red-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {relatedPost.category}
                          </span>
                        </div>
                      </div>

                      <div className="p-6 flex-1 flex flex-col">
                        <h3 className="text-lg font-bold text-white mb-3 hover:text-red-primary transition-colors line-clamp-2">
                          {relatedPost.title}
                        </h3>

                        <p className="text-text-secondary mb-4 line-clamp-2 flex-1 text-sm">
                          {relatedPost.excerpt}
                        </p>

                        <div className="flex items-center text-sm text-text-muted space-x-3">
                          <span className="flex items-center space-x-1">
                            <Clock size={14} />
                            <span>{relatedPost.readTime} min</span>
                          </span>
                        </div>
                      </div>
                    </CustomCard>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}