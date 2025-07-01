'use client';

import { motion } from 'framer-motion';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function AnimatedTitle({ 
  title, 
  content, 
  className = '',
  titleClassName = '' 
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen} className={className}>
      <CollapsibleTrigger asChild>
        <motion.div
          className={`group cursor-pointer ${titleClassName}`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-teal-200 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1 }}
            />
            <div className="relative px-6 py-4 border-2 border-emerald-300 rounded-2xl bg-white/80 backdrop-blur-sm group-hover:border-emerald-400 transition-all duration-300 flex items-center gap-3">
              <span className="text-2xl font-bold text-emerald-700 group-hover:text-emerald-800">
                {title}
              </span>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-emerald-600" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </CollapsibleTrigger>
      
      <CollapsibleContent className="mt-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="bg-white/60 backdrop-blur-sm border border-emerald-200 rounded-2xl p-6 shadow-lg"
        >
          <div className="prose prose-stone max-w-none">
            {content}
          </div>
        </motion.div>
      </CollapsibleContent>
    </Collapsible>
  );
} 