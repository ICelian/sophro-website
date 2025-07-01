'use client';

import AnimatedTextBlock from '@/components/AnimatedTextBlock';
import ContactForm from '@/components/ContactForm';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-emerald-25 via-teal-25 to-stone-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <AnimatedTextBlock delay={0.2} className="text-center mb-16">
          <h2 className="text-4xl font-bold text-emerald-700 mb-4">POUR ME CONTACTER</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Prenez le premier pas vers votre bien-être. Je vous répondrai dans les plus brefs délais pour planifier votre séance d'audio-thérapie.
          </p>
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.4}>
          <ContactForm />
        </AnimatedTextBlock>

        <AnimatedTextBlock delay={0.6} className="text-center mt-12">
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-lg max-w-2xl mx-auto">
            <p className="text-stone-600 text-sm leading-relaxed">
              <strong>Informations requises :</strong> Votre nom, prénom, email et numéro de téléphone sont nécessaires pour vous contacter et organiser nos séances d'audio-thérapie. Toutes vos informations restent confidentielles.
            </p>
          </div>
        </AnimatedTextBlock>
      </div>
    </section>
  );
} 