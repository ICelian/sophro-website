'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import AnimatedTitle from '@/components/AnimatedTitle';
import { MessageCircle, Layers, Lightbulb, Users, Headphones } from 'lucide-react';

export default function OutilsSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const echelleContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        Pour l'écoute des émotions, j'utilise l'Échelle émotionnelle.
      </p>
      <p>
        Cet outil te permet d'en connaître l'origine, de comprendre sur quoi elles se fondent.
      </p>
      <p>
        Les émotions sont comme les feuilles d'un arbre : si on les écoute, elles nous ramènent à la même racine (il peut en exister deux, parfois trois, mais guère plus)
      </p>
      <p>
        C'est dans cette racine, qu'on appelle "égo" ou "identité virtuelle", que se situe le fondement de tes schémas de répétition : les répétitions sont un mécanisme intelligent qui te remettent dans ta prison d'enfance jusqu'à ce que tu apprennent à en sortir.
      </p>
      <p>
        Cette mise en conscience de la cause de tes émotions va faciliter la gestion de tes émotions (en les vivant à l'endroit), faciliter ta capacité à mettre de la distance entre tes émotions (qui ne parlent que de toi) et la situation qui les a déclenchées et t'aider à agir autrement et de façon plus puissante.
      </p>
    </div>
  );

  const semantiqueContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        En plus de l'identification de la source de tes émotions grâce à l'échelle émotionnelle, j'utilise un autre outil : la sémantique.
      </p>
      <p>
        Cet outil permet de mettre en évidence les dissonances cognitives qui se manifestent par des émotions. Elle permet la résolution de tes conflits internes, des décalages entre ce que tu penses et ce que tu vis.
      </p>
      <p>
        Ce nettoyage du mental, grâce à la sémantique, permet la suppression de croyances qui t'enferment, favorise l'expression de ton potentiel resté jusque là enfoui, libère ton être profond, ta puissance de vie et se manifeste par une plus grande sérénité.
      </p>
    </div>
  );

  const spinnlerContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        Les attentes que tu portes sur une/des personnes de ton entourage, sur certaines de tes relations, peuvent être source de souffrance.
      </p>
      <p>
        Pour mettre de la clarté sur ce qu'il est possible de vivre avec elles, j'utilise un outil : le modèle d'Olivier Spinnler (du psychiatre suisse Olivier Spinnler). Cet outil permet de trouver la bonne distance relationnelle qu'il est possible de vivre avec chaque personne qui t'entoure.
      </p>
      <p>
        Le but sera de vivre sereinement et sainement chaque relation.
      </p>
    </div>
  );

  const audioTherapieContent = (
    <div className="space-y-4 text-base leading-relaxed text-stone-700">
      <p>
        <strong>JE SUIS À L'ÉCOUTE</strong>
      </p>
      <p>
        J'ai fait le choix de ce mode de communication d'abord pour raisons personnelles : je suis amenée à voyager souvent.
      </p>
      <p>
        Ensuite cela me permet de proposer des tarifs bien plus abordables que ceux qui sont demandés habituellement.
      </p>
      <p>
        De plus, la distance et le manque de temps sont la règle générale dans notre société occidentale : cet inconvénient est en parti supprimé.
      </p>
      <p>
        J'ai conscience que certaines personnes seront malgré tout gênés de ne pas avoir la personne en face, dans un cabinet comme il se fait classiquement. Inversement ce sera un avantage pour d'autres. C'est ainsi.
      </p>
      <p>
        Je transmets malgré tout une vidéo dans mes retours de mails afin de me présenter ainsi que ma méthode de travail.
      </p>
      <p>
        Quoiqu'il en soit, ce qui importe n'est pas à quoi je ressemble mais ce que j'ai à te transmettre.
      </p>
    </div>
  );

  return (
    <section id="outils" className="py-20 bg-gradient-to-br from-emerald-25 via-white to-teal-25">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedTextBlock delay={0.2} className="text-center mb-12">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">MES OUTILS</h2>
          <p className="text-lg text-stone-600">
            Des méthodes éprouvées pour votre accompagnement thérapeutique
          </p>
        </AnimatedTextBlock>

        {/* Outil 1 - Échelle émotionnelle */}
        <AnimatedTextBlock delay={0.3} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
              <Layers className="w-6 h-6 text-emerald-600" />
            </div>
            <span className="text-xl font-semibold text-emerald-700">1.</span>
          </div>
          <AnimatedTitle
            title="L'échelle émotionnelle"
            content={echelleContent}
          />
        </AnimatedTextBlock>

        {/* Outil 2 - Sémantique */}
        <AnimatedTextBlock delay={0.4} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-teal-600" />
            </div>
            <span className="text-xl font-semibold text-teal-700">2.</span>
          </div>
          <AnimatedTitle
            title="La sémantique"
            content={semantiqueContent}
          />
        </AnimatedTextBlock>

        {/* Outil 3 - Modèle Spinnler */}
        <AnimatedTextBlock delay={0.5} className="mb-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <span className="text-xl font-semibold text-blue-700">3.</span>
          </div>
          <AnimatedTitle
            title="Le modèle d'Olivier Spinnler"
            content={spinnlerContent}
          />
        </AnimatedTextBlock>

        {/* Audio-thérapie */}
        <AnimatedTextBlock delay={0.6} className="mb-12">
          <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <Headphones className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-emerald-700">L'AUDIO-THÉRAPIE</h3>
            </div>
            <AnimatedTitle
              title="JE SUIS À L'ÉCOUTE"
              content={audioTherapieContent}
              titleClassName="text-emerald-600"
            />
          </div>
        </AnimatedTextBlock>

        {/* Call to action */}
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