'use client';

import React from 'react';
import Link from 'next/link';
import { CustomButton } from '@/components/ui/custom-button';
import { CustomCard } from '@/components/ui/custom-card';
import { User, Users, Video, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: User,
    title: 'Trening Personalny',
    description: 'Indywidualne sesje treningowe dopasowane do Twoich celów i możliwości. Pełna koncentracja na Twoich potrzebach.',
    href: '/oferta#personalny',
  },
  {
    icon: Users,
    title: 'Treningi Grupowe',
    description: 'Motywacja w grupie, efekty na medal. Trenuj razem z innymi i osiągaj więcej dzięki wspólnej energii.',
    href: '/oferta#grupowe',
  },
  {
    icon: Video,
    title: 'Trening Online',
    description: 'Trenuj gdzie chcesz, kiedy chcesz. Pełen plan treningowy i dietetyczny oraz stały kontakt ze mną.',
    href: '/oferta#online',
  },
  {
    icon: TrendingUp,
    title: 'High Performance Coaching',
    description: 'Przekrocz swoje granice fizyczne i mentalne. Coaching dla ambitnych osób, które chcą osiągnąć szczyt.',
    href: '/oferta#coaching',
  },
];

export function ServicesPreview() {
  return (
    <section className="py-20 bg-gradient-to-br from-bg-darkest via-black to-bg-dark relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(239,68,68,0.05),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(239,68,68,0.05),transparent_50%)]"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-red-primary/20 border border-red-primary/30 text-red-primary font-medium text-sm uppercase tracking-wider mb-6">
            Kompleksowa Oferta
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Wybierz Swój
            <span className="block bg-gradient-to-r from-red-primary to-red-300 bg-clip-text text-transparent">
              Styl Treningu
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Każda forma współpracy jest dostosowana do Twoich indywidualnych potrzeb, celów i możliwości czasowych
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={service.href}>
                <div className="bg-gradient-to-br from-bg-medium/30 to-black/30 backdrop-blur-sm border border-red-primary/20 rounded-2xl p-8 h-full hover:border-red-primary/40 hover:shadow-xl hover:shadow-red-primary/10 transition-all duration-300 group-hover:scale-105">
                  <div className="bg-red-primary/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-red-primary/30 transition-colors">
                    <service.icon className="text-red-primary" size={32} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-primary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex items-center text-red-primary font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Dowiedz się więcej</span>
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
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
          <div className="bg-gradient-to-r from-red-primary/10 to-transparent border border-red-primary/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Nie wiesz, którą opcję wybrać?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Umów się na bezpłatną konsultację, podczas której pomogę Ci wybrać najlepszą formę współpracy dostosowaną do Twoich celów.
            </p>
            <CustomButton
              href="/kontakt"
              variant="primary"
              className="bg-gradient-to-r from-red-primary to-red-600 hover:from-red-600 hover:to-red-700 shadow-lg shadow-red-primary/25"
            >
              Umów Konsultację
            </CustomButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}