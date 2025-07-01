'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function AnimatedTextBlock({ 
  children, 
  className = '', 
  delay = 0,
  duration = 0.6,
  y = 30 
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: y }}
      transition={{ 
        duration: duration, 
        delay: delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 