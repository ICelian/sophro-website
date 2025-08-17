'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import AnimatedTitle from '@/components/AnimatedTitle';
import { MessageCircle, GraduationCap, Stethoscope, Brain } from 'lucide-react';

export default function ParcoursSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const parcoursContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        Je suis diplômée d'un DESI (diplôme d'état en soins infirmiers). J'ai pratiqué durant 16 ans dont une partie en psychiatrie.
      </p>
      <p>
        C'est la pratique psychiatrique, que je trouvais très insatisfaisante, qui m'a poussée à aider autrement.
      </p>
      <p>
        J'ai aussi une formation complète en sophrologie (192 heures avec l'institut Aliotta)
      </p>
      <p>
        En parallèle, j'ai effectué ma formation d'aidante sur plusieurs années (supérieur à 5 ans) avec Laurent Martinez, thérapeute maïeuticien et découvreur de l'échelle émotionnelle.
      </p>
    </div>
  );

  const ethiqueContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        Lors de nos entretiens, mon aide portera uniquement sur le sujet demandé et dans la direction où tu souhaites aller.
      </p>
      <p>
        Nos entretiens ont pour but de t'aider à mettre de la conscience sur ton vécu souffrant, de te fournir tous les outils dont tu auras besoin, jamais à te dire quoi faire. Mon intention est de maintenir ou encourager ton autonomie.
      </p>
      <p>Pour cela je t'inviterai à :</p>
      <ul className="list-disc list-inside space-y-2 ml-4">
        <li>connaître l'origine de tes émotions qui parasitent ta vie, grâce à l'échelle émotionnelle, ce qui t'aidera à la transcender.</li>
        <li>revisiter les pensées qui, en te décalant, en te coupant de ton vécu réel, sont créatrices de souffrances. Pour cela on utilisera la sémantique.</li>
      </ul>
      <p>
        A l'aide de ses outils de conscience, tu pourras transcender l'origine de tes émotions par des décisions et des actions qui vont modifier ta vie et révéler la puissance de ton être.
      </p>
      <p>
        Plus aligné(e) avec qui tu es, tu en éprouveras une plus grande sérénité.
      </p>
      <p>
        Je t'accompagne dans ce changement tout en préservant ta souveraineté.
      </p>
    </div>
  );

  return (
    <section id="parcours" className="py-20 bg-gradient-to-br from-stone-50 via-white to-emerald-25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedTextBlock delay={0.2} className="text-center mb-16">
          <AnimatedTitle
            title="MON PARCOURS"
            content={parcoursContent}
            className="justify-center"
          />
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.4}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-16">
            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-blue-700 mb-2">16 ans d'expérience</h3>
              <p className="text-stone-600 text-sm">
                Diplôme d'État en soins infirmiers avec pratique en psychiatrie
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-emerald-700 mb-2">Formation sophrologie</h3>
              <p className="text-stone-600 text-sm">
                192 heures avec l'institut Aliotta
              </p>
            </motion.div>

            <motion.div 
              className="text-center p-6 bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg border border-stone-200"
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold text-teal-700 mb-2">Formation Laurent Martinez</h3>
              <p className="text-stone-600 text-sm">
                Plus de 5 ans de formation thérapeutique spécialisée
              </p>
            </motion.div>
          </div>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.6} className="text-center mb-16">
          <AnimatedTitle
            title="MON ÉTHIQUE"
            content={ethiqueContent}
            className="justify-center"
          />
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.8} className="text-center mt-16">
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