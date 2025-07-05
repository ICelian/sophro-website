'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import AnimatedTitle from '@/components/AnimatedTitle';
import { MessageCircle, Heart, Users } from 'lucide-react';

export default function AboutSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const aboutContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        Je suis formée selon l'approche thérapeutique de Laurent Martinez.
      </p>
      <p>
        J'accompagne les personnes en souffrance psychologique, professionnelle, relationnelle : stress, anxiété, perte de confiance en soi, tristesse, colère, peurs, fatigue psychologique, difficultés relationnelles, hypersensibilité...
      </p>
      <p>
        C'est pour avoir moi-même parcouru ce chemin de libération personnelle que je suis devenue compétente à le transmettre. J'estime qu'il y a une imposture à prétendre pouvoir aider quelqu'un quand on n'a pas été capable de se transformer soi-même.
      </p>
    </div>
  );

  return (
    <section id="apropos" className="py-20 bg-gradient-to-br from-white via-emerald-25 to-stone-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedTextBlock delay={0.2} className="text-center mb-16">
          <AnimatedTitle
            title="QUI SUIS-JE ?"
            content={aboutContent}
            className="justify-center"
          />
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Approche bienveillante</h3>
              <p className="text-stone-600 text-sm">
                Accompagnement personnalisé avec empathie et respect de votre rythme
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Expérience vécue</h3>
              <p className="text-stone-600 text-sm">
                Ayant parcouru mon propre chemin de transformation personnelle
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-emerald-100"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Écoute active</h3>
              <p className="text-stone-600 text-sm">
                Accompagnement vers l'autonomie et la connaissance de soi
              </p>
            </motion.div>
          </div>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.6} className="text-center mt-16">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-2xl shadow-lg flex items-center gap-2 mx-auto"
            >
              <MessageCircle className="w-5 h-5" />
              Me contacter
            </Button>
          </motion.div>
        </AnimatedTextBlock>
      </div>
    </section>
  );
} 