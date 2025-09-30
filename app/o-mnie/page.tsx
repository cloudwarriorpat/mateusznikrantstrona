'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { Check, Award, Target, Heart } from 'lucide-react';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutPage() {
  const credentials = [
    'Certyfikowany Trener Personalny (ACE, NASM)',
    'Specjalista High Performance Coaching',
    'Certyfikat z żywienia sportowego',
    'Psycholog sportu - studia podyplomowe',
    'Ponad 8 lat praktycznego doświadczenia',
    'Ponad 200 zadowolonych klientów',
  ];

  const values = [
    {
      icon: Target,
      title: 'Celowość',
      description: 'Każdy trening, każde ćwiczenie ma swój cel. Nie robię nic bez powodu.',
    },
    {
      icon: Heart,
      title: 'Pasja',
      description: 'Trening to moja pasja i styl życia. Kocham to, co robię i chcę dzielić się tym z innymi.',
    },
    {
      icon: Award,
      title: 'Profesjonalizm',
      description: 'Ciągle się uczę i rozwijam, aby oferować najwyższą jakość usług.',
    },
  ];

  return (
    <div>
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Mateusz Nikrant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary"
          >
            Trener Personalny | High Performance Coach
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Moja Historia</h2>

              <p className="text-text-secondary text-lg mb-4 leading-relaxed">
                Witaj! Nazywam się Mateusz Nikrant i od ponad 8 lat pomagam ludziom osiągać ich cele fitness
                i przekraczać granice, które sami sobie wyznaczyli.
              </p>

              <p className="text-text-secondary text-lg mb-4 leading-relaxed">
                Moja przygoda z treningiem rozpoczęła się, gdy sam postanowiłem zmienić swoje życie.
                Z osoby z nadwagą, która unikała aktywności fizycznej, przekształciłem się w pasjonata zdrowego
                stylu życia i high performance. Ta transformacja zmieniła nie tylko moje ciało, ale przede wszystkim
                mój umysł.
              </p>

              <p className="text-text-secondary text-lg mb-4 leading-relaxed">
                Zdałem sobie sprawę, że prawdziwa siła tkwi w mentalności. Dlatego oprócz certyfikatów z treningu
                personalnego, zdobyłem również wykształcenie z psychologii sportu. Łączę te dwie dziedziny,
                aby pomóc moim klientom osiągnąć nie tylko lepszą sylwetkę, ale także silniejszy umysł.
              </p>

              <p className="text-text-secondary text-lg leading-relaxed">
                Pracowałem z różnorodnymi klientami - od osób rozpoczynających swoją przygodę z treningiem,
                przez zaawansowanych sportowców amatorów, po zawodników przygotowujących się do zawodów.
                Każda historia jest inna, ale cel zawsze ten sam - osiągnięcie szczytowej formy.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Mateusz Nikrant - Trener Personalny"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-bg-medium border border-red-primary p-8 rounded-lg mb-20"
          >
            <blockquote className="text-2xl text-text-primary italic leading-relaxed">
              &quot;Moją filozofią jest, że trening to nie tylko praca nad ciałem. To przede wszystkim
              budowanie silnej mentalności, dyscypliny i charakteru. Prawdziwa transformacja zaczyna się
              w głowie, a następnie przenosi się na ciało.&quot;
            </blockquote>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Kwalifikacje</h2>
              <div className="space-y-4">
                {credentials.map((credential, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="text-red-primary flex-shrink-0 mt-1" size={24} />
                    <span className="text-text-primary text-lg">{credential}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Moje Podejście</h2>
              <p className="text-text-secondary text-lg mb-6 leading-relaxed">
                W mojej pracy kieruję się trzema podstawowymi wartościami:
              </p>
              <div className="space-y-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-red-primary/10 p-3 rounded-lg">
                      <value.icon className="text-red-primary" size={32} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                      <p className="text-text-secondary leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Zacznij Swoją Transformację
            </h2>
            <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
              Jeśli szukasz trenera, który pomoże Ci nie tylko zmienić ciało, ale także mentalność -
              jesteś we właściwym miejscu.
            </p>
            <CustomButton href="/kontakt" variant="primary">
              Skontaktuj Się Ze Mną
            </CustomButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}