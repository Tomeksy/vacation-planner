import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FormStepProps {
  children: ReactNode;
  isActive: boolean;
}

export const FormStep = ({ children, isActive }: FormStepProps) => {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};