'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import { ArrowDown, MessageCircle } from 'lucide-react';

export default function HeroSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="accueil" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-stone-50 via-emerald-50 to-teal-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left column - Text content */}
          <div className="space-y-8">
            <AnimatedTextBlock delay={0.2}>
              <motion.h1 
                className="text-5xl lg:text-6xl font-bold text-emerald-800 leading-tight"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Maria LOPEZ
              </motion.h1>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={0.4}>
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl text-stone-700 font-medium">
                  Aidante en écoute émotionnelle et connaissance de soi
                </h2>
                <h3 className="text-lg lg:text-xl text-stone-600">
                  Accompagnante à l'autonomie
                </h3>
              </div>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={0.6}>
              <p className="text-lg text-stone-600 leading-relaxed max-w-xl">
                Accompagnement thérapeutique personnalisé selon l'approche de Laurent Martinez pour vous aider à retrouver sérénité et autonomie émotionnelle.
              </p>
            </AnimatedTextBlock>

            <AnimatedTextBlock delay={0.8}>
              <div className="flex flex-col sm:flex-row gap-4">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl shadow-lg flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Me contacter
                  </Button>
                </motion.div>
                
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => document.getElementById('apropos')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border-2 border-emerald-300 text-emerald-700 hover:bg-emerald-50 px-8 py-4 rounded-2xl flex items-center gap-2"
                  >
                    En savoir plus
                    <ArrowDown className="w-4 h-4" />
                  </Button>
                </motion.div>
              </div>
            </AnimatedTextBlock>
          </div>

          {/* Right column - Photo */}
          <AnimatedTextBlock delay={1} className="flex justify-center lg:justify-end">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full bg-gradient-to-br from-emerald-200 to-teal-300 shadow-2xl flex items-center justify-center border-4 border-white">
                <div className="w-72 h-72 lg:w-88 lg:h-88 rounded-full bg-stone-200 flex items-center justify-center text-stone-500">
                  <div className="text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-stone-300 rounded-full flex items-center justify-center">
                      <svg className="w-10 h-10 text-stone-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm font-medium">Photo de Maria</p>
                    <p className="text-xs text-stone-400 mt-1">À remplacer par votre photo</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-emerald-400 rounded-full opacity-60"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-6 h-6 bg-teal-400 rounded-full opacity-60"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </AnimatedTextBlock>
        </div>

        {/* Scroll indicator */}
        <AnimatedTextBlock delay={1.2} className="text-center mt-16">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center text-stone-400"
          >
            <span className="text-sm mb-2">Découvrez mon approche</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </AnimatedTextBlock>
      </div>
    </section>
  );
} 