'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Mail, Phone, User, Send } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nom.trim()) newErrors.nom = 'Le nom est requis';
    if (!formData.prenom.trim()) newErrors.prenom = 'Le prénom est requis';
    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Format d\'email invalide';
    }
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Le numéro de téléphone est requis';
    } else if (!/^[0-9\s\-\+\(\)]+$/.test(formData.telephone)) {
      newErrors.telephone = 'Format de téléphone invalide';
    }
    if (!formData.message.trim()) newErrors.message = 'Le message est requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Votre message a été envoyé avec succès ! Je vous répondrai dans les plus brefs délais.');
      setFormData({ nom: '', prenom: '', email: '', telephone: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
      <CardHeader className="text-center pb-6">
        <CardTitle className="text-2xl text-emerald-700 flex items-center justify-center gap-2">
          <Mail className="w-6 h-6" />
          Pour me contacter
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <Input
                  type="text"
                  name="nom"
                  placeholder="Nom *"
                  value={formData.nom}
                  onChange={handleChange}
                  className={`pl-10 rounded-2xl border-2 transition-all ${
                    errors.nom ? 'border-red-300' : 'border-stone-200 focus:border-emerald-300'
                  }`}
                />
              </div>
              {errors.nom && <p className="text-red-500 text-sm mt-1">{errors.nom}</p>}
            </div>
            
            <div>
              <div className="relative">
                <User className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
                <Input
                  type="text"
                  name="prenom"
                  placeholder="Prénom *"
                  value={formData.prenom}
                  onChange={handleChange}
                  className={`pl-10 rounded-2xl border-2 transition-all ${
                    errors.prenom ? 'border-red-300' : 'border-stone-200 focus:border-emerald-300'
                  }`}
                />
              </div>
              {errors.prenom && <p className="text-red-500 text-sm mt-1">{errors.prenom}</p>}
            </div>
          </div>

          <div>
            <div className="relative">
              <Mail className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <Input
                type="email"
                name="email"
                placeholder="Email *"
                value={formData.email}
                onChange={handleChange}
                className={`pl-10 rounded-2xl border-2 transition-all ${
                  errors.email ? 'border-red-300' : 'border-stone-200 focus:border-emerald-300'
                }`}
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <div className="relative">
              <Phone className="absolute left-3 top-3 w-4 h-4 text-stone-400" />
              <Input
                type="tel"
                name="telephone"
                placeholder="Numéro de téléphone *"
                value={formData.telephone}
                onChange={handleChange}
                className={`pl-10 rounded-2xl border-2 transition-all ${
                  errors.telephone ? 'border-red-300' : 'border-stone-200 focus:border-emerald-300'
                }`}
              />
            </div>
            {errors.telephone && <p className="text-red-500 text-sm mt-1">{errors.telephone}</p>}
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Votre message *"
              value={formData.message}
              onChange={handleChange}
              rows={6}
              className={`rounded-2xl border-2 transition-all resize-none ${
                errors.message ? 'border-red-300' : 'border-stone-200 focus:border-emerald-300'
              }`}
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-2xl shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Envoyer
                </>
              )}
            </Button>
          </motion.div>
        </form>
      </CardContent>
    </Card>
  );
} 