import React, { ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ProgramSections } from '../types/programTypes';

interface ProgramComponentManagerProps {
  activeTab: string;
  component: keyof ProgramSections;
  children: ReactNode;
}

export const ProgramComponentManager: React.FC<ProgramComponentManagerProps> = ({
  activeTab,
  component,
  children
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`${component}-${activeTab}`}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
