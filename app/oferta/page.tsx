'use client';

import React from 'react';
import { CustomButton } from '@/components/ui/custom-button';
import { CustomCard } from '@/components/ui/custom-card';
import { User, Users, Video, TrendingUp, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const services = [
  {
    id: 'personalny',
    icon: User,
    title: 'Trening Personalny',
    description: 'Najbardziej efektywna forma treningu - indywidualne sesje dopasowane w 100% do Twoich celów, możliwości i ograniczeń.',
    benefits: [
      'Pełna koncentracja trenera na Tobie',
      'Plan treningowy idealnie dopasowany',
      'Maksymalizacja efektów w najkrótszym czasie',
      'Korekta techniki i zapobieganie kontuzjom',
      'Motywacja i wsparcie na każdym kroku',
      'Elastyczne godziny treningów',
    ],
    price: 'Od 150 zł/sesja',
  },
  {
    id: 'grupowe',
    icon: Users,
    title: 'Treningi Grupowe',
    description: 'Trenuj w grupie, czerpie z energii innych i osiągaj swoje cele razem z motywującym zespołem.',
    benefits: [
      'Motywacja płynąca z grupy',
      'Korzystna cena w porównaniu do treningu personalnego',
      'Rozwijanie relacji z osobami o podobnych celach',
      'Profesjonalny trening pod okiem doświadczonego trenera',
      'Stały harmonogram treningów',
      'Maks. 6 osób w grupie',
    ],
    price: 'Od 60 zł/sesja',
  },
  {
    id: 'online',
    icon: Video,
    title: 'Trening Online',
    description: 'Trenuj gdzie chcesz i kiedy chcesz. Pełen plan treningowy i dietetyczny oraz stały kontakt ze mną przez aplikację.',
    benefits: [
      'Pełen plan treningowy na 4 tygodnie',
      'Spersonalizowany plan żywieniowy',
      'Stały kontakt przez aplikację (7 dni w tygodniu)',
      'Video instrukcje do każdego ćwiczenia',
      'Miesięczna analiza postępów',
      'Modyfikacje planu w razie potrzeby',
    ],
    price: 'Od 299 zł/miesiąc',
  },
  {
    id: 'coaching',
    icon: TrendingUp,
    title: 'High Performance Coaching',
    description: 'Kompleksowy coaching dla ambitnych osób, które chcą osiągnąć szczyt w sporcie i życiu. Połączenie treningu fizycznego z rozwojem mentalnym.',
    benefits: [
      'Kompleksowy plan treningowy i żywieniowy',
      'Coaching mentalny i psychologia sportu',
      'Analiza biomechaniki i optymalizacja techniki',
      'Strategia suplementacji',
      'Plan regeneracji i profilaktyki kontuzji',
      '24/7 dostęp do trenera',
    ],
    price: 'Od 1500 zł/miesiąc',
  },
];

const pricingTiers = [
  {
    name: 'Bronze',
    price: '399 zł',
    period: 'miesięcznie',
    features: [
      'Plan treningowy online',
      'Plan żywieniowy',
      'Cotygodniowy kontakt',
      'Miesięczna analiza postępów',
    ],
  },
  {
    name: 'Silver',
    price: '799 zł',
    period: 'miesięcznie',
    popular: true,
    features: [
      'Wszystko z pakietu Bronze',
      '2 treningi personalne w miesiącu',
      'Codzienny kontakt przez aplikację',
      'Analiza składu ciała co 2 tygodnie',
      'Dostęp do biblioteki treningów wideo',
    ],
  },
  {
    name: 'Gold',
    price: '1499 zł',
    period: 'miesięcznie',
    features: [
      'Wszystko z pakietu Silver',
      '4 treningi personalne w miesiącu',
      'High Performance Coaching',
      'Coaching mentalny',
      '24/7 dostęp do trenera',
      'Priorytetowa obsługa',
    ],
  },
];

const faqs = [
  {
    question: 'Jak wygląda pierwsza sesja treningowa?',
    answer: 'Pierwsza sesja to przede wszystkim wywiad i ocena Twojej aktualnej kondycji. Omówimy Twoje cele, historię treningową, ewentualne kontuzje i ograniczenia. Wykonamy również testy funkcjonalne, aby określić punkt startowy. Na tej podstawie stworzę spersonalizowany plan treningowy.',
  },
  {
    question: 'Czy mogę trenować jeśli mam kontuzję?',
    answer: 'Tak, możesz! W wielu przypadkach odpowiedni trening może pomóc w rehabilitacji. Współpracuję również z fizjoterapeutami, aby zapewnić Ci bezpieczny i efektywny trening. Zawsze dostosowuję plan do Twoich ograniczeń.',
  },
  {
    question: 'Ile razy w tygodniu powinienem/powinnam trenować?',
    answer: 'To zależy od Twoich celów, doświadczenia i możliwości czasowych. Dla początkujących polecam 2-3 razy w tygodniu. Dla osób zaawansowanych może to być 4-6 razy. Wszystko ustalimy podczas konsultacji.',
  },
  {
    question: 'Czy zapewniasz również plan żywieniowy?',
    answer: 'Tak! W ramach współpracy otrzymasz spersonalizowany plan żywieniowy dopasowany do Twoich celów i preferencji. Plan uwzględnia Twój tryb życia i nie wymaga gotowania skomplikowanych posiłków.',
  },
  {
    question: 'Gdzie odbywają się treningi?',
    answer: 'Treningi personalne i grupowe odbywają się w profesjonalnej siłowni w centrum miasta, do której mam stały dostęp. Możliwy jest również trening w Twoim domu lub outdoor - wszystko ustalamy indywidualnie.',
  },
  {
    question: 'Czy mogę anulować lub przełożyć trening?',
    answer: 'Tak, możesz przełożyć trening bez żadnych konsekwencji, informując mnie co najmniej 24 godziny wcześniej. Późniejsze odwołania niestety są traktowane jako wykorzystane sesje.',
  },
];

export default function OfertaPage() {
  return (
    <div>
      <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Oferta Treningowa
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary"
          >
            Wybierz pakiet dopasowany do Twoich celów
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="scroll-mt-24"
              >
                <CustomCard>
                  <div className="flex flex-col items-center text-center mb-8">
                    <service.icon className="text-red-primary mb-4" size={64} />
                    <h2 className="text-4xl font-bold text-white mb-4">{service.title}</h2>
                    <p className="text-xl text-text-secondary max-w-3xl">
                      {service.description}
                    </p>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-white mb-6 text-center">Co Zyskujesz:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <Check className="text-red-primary flex-shrink-0 mt-1" size={20} />
                          <span className="text-text-primary">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="text-center pt-6 border-t border-border">
                    <p className="text-3xl font-bold text-red-primary mb-6">{service.price}</p>
                    <CustomButton href="/kontakt" variant="primary">
                      Skontaktuj Się
                    </CustomButton>
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
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Pakiety Abonamentowe
            </h2>
            <p className="text-xl text-text-secondary">
              Wybierz pakiet i oszczędzaj na regularnych treningach
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <CustomCard
                  className={tier.popular ? 'border-red-primary border-2 relative' : ''}
                  hover={!tier.popular}
                >
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-primary text-white px-4 py-1 rounded-full text-sm font-bold">
                      NAJPOPULARNIEJSZY
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                    <div className="mb-2">
                      <span className="text-4xl font-black text-red-primary">{tier.price}</span>
                    </div>
                    <p className="text-text-muted">{tier.period}</p>
                  </div>

                  <div className="space-y-3 mb-8">
                    {tier.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <Check className="text-red-primary flex-shrink-0 mt-1" size={20} />
                        <span className="text-text-primary">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <CustomButton
                    href="/kontakt"
                    variant={tier.popular ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    Wybierz Pakiet
                  </CustomButton>
                </CustomCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              Często Zadawane Pytania
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-bg-medium border border-border rounded-lg px-6 data-[state=open]:border-red-primary"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-primary">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-secondary leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
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
              Masz Pytania?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Skontaktuj się ze mną, a wspólnie dobierzemy najlepszą opcję dla Ciebie
            </p>
            <CustomButton
              href="/kontakt"
              variant="secondary"
              className="bg-white text-red-primary hover:bg-gray-100 border-0"
            >
              Umów Konsultację
            </CustomButton>
          </motion.div>
        </div>
      </section>
    </div>
  );
}