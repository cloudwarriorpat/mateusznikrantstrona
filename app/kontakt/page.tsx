'use client';

import React, { useState } from 'react';
import { CustomInput } from '@/components/ui/custom-input';
import { CustomTextarea } from '@/components/ui/custom-textarea';
import { CustomButton } from '@/components/ui/custom-button';
import { Mail, Phone, Instagram, Facebook, Youtube, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitError('');
    setSubmitSuccess(false);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Form data:', data);
      setSubmitSuccess(true);
      reset();

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      setSubmitError('Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-20">
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'linear-gradient(rgba(10, 10, 10, 0.7), rgba(10, 10, 10, 0.7)), url(https://images.pexels.com/photos/3768722/pexels-photo-3768722.jpeg?auto=compress&cs=tinysrgb&w=1920)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-black text-white mb-4"
          >
            Kontakt
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-text-secondary"
          >
            Skontaktuj się ze mną i rozpocznij swoją transformację
          </motion.p>
        </div>
      </section>

      <section className="py-20 bg-bg-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Skontaktuj Się Ze Mną
              </h2>

              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                Masz pytania? Chcesz umówić się na konsultację? A może po prostu chcesz dowiedzieć się więcej
                o moich usługach? Napisz do mnie, a odpowiem najszybciej jak to możliwe!
              </p>

              <div className="space-y-6 mb-8">
                <a
                  href="mailto:kontakt@mateusznikrant.pl"
                  className="flex items-center space-x-4 group"
                >
                  <div className="bg-red-primary/10 p-4 rounded-lg group-hover:bg-red-primary/20 transition-colors">
                    <Mail className="text-red-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Email</p>
                    <p className="text-lg text-white group-hover:text-red-primary transition-colors">
                      kontakt@mateusznikrant.pl
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+48123456789"
                  className="flex items-center space-x-4 group"
                >
                  <div className="bg-red-primary/10 p-4 rounded-lg group-hover:bg-red-primary/20 transition-colors">
                    <Phone className="text-red-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Telefon</p>
                    <p className="text-lg text-white group-hover:text-red-primary transition-colors">
                      +48 123 456 789
                    </p>
                  </div>
                </a>

                <div className="flex items-center space-x-4">
                  <div className="bg-red-primary/10 p-4 rounded-lg">
                    <MapPin className="text-red-primary" size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">Lokalizacja</p>
                    <p className="text-lg text-white">
                      Warszawa, Centrum
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Znajdź Mnie Również Na</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/mateusznikrant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-primary/10 p-4 rounded-lg hover:bg-red-primary hover:scale-110 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="text-red-primary hover:text-white transition-colors" size={28} />
                  </a>
                  <a
                    href="https://facebook.com/mateusznikrant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-primary/10 p-4 rounded-lg hover:bg-red-primary hover:scale-110 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="text-red-primary hover:text-white transition-colors" size={28} />
                  </a>
                  <a
                    href="https://youtube.com/@mateusznikrant"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-primary/10 p-4 rounded-lg hover:bg-red-primary hover:scale-110 transition-all"
                    aria-label="YouTube"
                  >
                    <Youtube className="text-red-primary hover:text-white transition-colors" size={28} />
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-bg-medium p-8 rounded-lg border border-border"
            >
              <h3 className="text-2xl font-bold text-white mb-6">Wyślij Wiadomość</h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <CustomInput
                  label="Imię i Nazwisko"
                  placeholder="Jan Kowalski"
                  error={errors.name?.message}
                  {...register('name', {
                    required: 'Imię i nazwisko jest wymagane',
                    minLength: {
                      value: 3,
                      message: 'Imię i nazwisko musi mieć minimum 3 znaki',
                    },
                  })}
                />

                <CustomInput
                  label="Email"
                  type="email"
                  placeholder="jan@example.com"
                  error={errors.email?.message}
                  {...register('email', {
                    required: 'Email jest wymagany',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Nieprawidłowy adres email',
                    },
                  })}
                />

                <CustomInput
                  label="Telefon"
                  type="tel"
                  placeholder="+48 123 456 789"
                  error={errors.phone?.message}
                  {...register('phone', {
                    required: 'Numer telefonu jest wymagany',
                    pattern: {
                      value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,4}$/,
                      message: 'Nieprawidłowy numer telefonu',
                    },
                  })}
                />

                <CustomTextarea
                  label="Wiadomość"
                  placeholder="Opisz czego potrzebujesz..."
                  error={errors.message?.message}
                  {...register('message', {
                    required: 'Wiadomość jest wymagana',
                    minLength: {
                      value: 10,
                      message: 'Wiadomość musi mieć minimum 10 znaków',
                    },
                  })}
                />

                {submitSuccess && (
                  <div className="bg-green-500/10 border border-green-500 rounded-lg p-4">
                    <p className="text-green-500 font-medium">
                      Wiadomość została wysłana pomyślnie! Odpowiem najszybciej jak to możliwe.
                    </p>
                  </div>
                )}

                {submitError && (
                  <div className="bg-destructive/10 border border-destructive rounded-lg p-4">
                    <p className="text-destructive font-medium">{submitError}</p>
                  </div>
                )}

                <CustomButton
                  type="submit"
                  variant="primary"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Wysyłanie...' : 'Wyślij Wiadomość'}
                </CustomButton>
              </form>
            </motion.div>
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
              Godziny Dostępności
            </h2>
            <div className="bg-bg-medium p-8 rounded-lg border border-border">
              <div className="space-y-3 text-lg">
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Poniedziałek - Piątek</span>
                  <span className="text-white font-semibold">6:00 - 21:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Sobota</span>
                  <span className="text-white font-semibold">8:00 - 16:00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">Niedziela</span>
                  <span className="text-white font-semibold">Zamknięte</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}