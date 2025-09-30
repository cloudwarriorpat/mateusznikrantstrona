'use client';

import React from 'react';
import Link from 'next/link';
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
            Moja Oferta
          </h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto">
            Wybierz formę treningu, która najlepiej odpowiada Twoim potrzebom i stylowi życia
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link href={service.href}>
                <CustomCard>
                  <service.icon className="text-red-primary mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-red-primary font-medium hover:underline inline-block">
                    Dowiedz Się Więcej →
                  </span>
                </CustomCard>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}