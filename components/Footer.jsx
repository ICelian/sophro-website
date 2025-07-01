'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-700 text-white py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2"
          >
            <Heart className="w-5 h-5 text-emerald-200" />
            <h3 className="text-xl font-semibold">Maria LOPEZ</h3>
          </motion.div>
          
          <p className="text-emerald-100 max-w-md mx-auto">
            Aidante en écoute émotionnelle et connaissance de soi
          </p>
          
          <div className="border-t border-emerald-600 pt-6 mt-8">
            <p className="text-emerald-200 text-sm">
              © {new Date().getFullYear()} Maria LOPEZ - Tous droits réservés
            </p>
            <p className="text-emerald-300 text-xs mt-2">
              Accompagnement thérapeutique selon l'approche de Laurent Martinez
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
} 