'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import { MessageCircle, Clock, Euro, CheckCircle, Headphones } from 'lucide-react';

export default function TarifsSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const features = [
    "Un entretien suffit à découvrir la racine de tes émotions",
    "Accompagnement personnalisé selon vos besoins",
    "Outils thérapeutiques éprouvés",
    "Flexibilité géographique et temporelle",
    "Tarif abordable et transparent"
  ];

  return (
    <section id="tarifs" className="py-20 bg-gradient-to-br from-stone-50 via-emerald-25 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedTextBlock delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">MON TARIF</h2>
          <p className="text-lg text-stone-600">
            Un accompagnement de qualité à un tarif accessible
          </p>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.4} className="flex justify-center mb-12">
          <motion.div
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-lg"
          >
            <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-emerald-50 overflow-hidden">
              <div className="bg-emerald-600 text-white text-center py-4">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Headphones className="w-6 h-6" />
                  <h3 className="text-xl font-bold">SÉANCE INDIVIDUELLE</h3>
                </div>
                <p className="text-emerald-100">EN AUDIO-THÉRAPIE</p>
              </div>
              
              <CardContent className="text-center py-8">
                <div className="mb-6">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Euro className="w-8 h-8 text-emerald-600" />
                    <span className="text-5xl font-bold text-emerald-700">45</span>
                    <span className="text-2xl text-stone-600">€</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-stone-600">
                    <Clock className="w-5 h-5" />
                    <span className="text-lg">Durée 1h30/séance</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-3 text-stone-700"
                    >
                      <CheckCircle className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span className="text-left">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button
                    onClick={scrollToContact}
                    size="lg"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-4 rounded-2xl shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Réserver une séance
                  </Button>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.8}>
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 border border-emerald-200 shadow-lg">
            <h3 className="text-xl font-semibold text-emerald-700 mb-4 text-center">
              Informations importantes
            </h3>
            <div className="space-y-4 text-stone-700 text-center">
              <p className="leading-relaxed">
                Un entretien suffit à découvrir la racine de tes émotions à l'aide de l'échelle émotionnelle.
              </p>
              <p className="leading-relaxed">
                La suite de nos entretiens aura pour but de t'aider à dépasser tes enjeux psychologiques.
              </p>
            </div>
          </div>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={1} className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200"
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-emerald-600" />
              </div>
              <h4 className="text-lg font-semibold text-emerald-700 mb-2">Flexibilité</h4>
              <p className="text-stone-600 text-sm">
                Séances adaptées à votre emploi du temps, sans contrainte géographique
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200"
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Euro className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="text-lg font-semibold text-teal-700 mb-2">Tarif accessible</h4>
              <p className="text-stone-600 text-sm">
                Un prix abordable pour un accompagnement thérapeutique de qualité
              </p>
            </motion.div>
          </div>
        </AnimatedTextBlock>
      </div>
    </section>
  );
} 