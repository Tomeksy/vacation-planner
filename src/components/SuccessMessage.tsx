import { CheckCircle } from 'lucide-react';
import type { Language } from '../types/form';

interface SuccessMessageProps {
  language: Language;
}

export const SuccessMessage = ({ language }: SuccessMessageProps) => {
  const messages = {
    en: {
      title: 'Thank you!',
      message: 'Your vacation plan request has been submitted successfully.',
      emailNote: 'You will receive your personalized Mallorca vacation plan via email shortly.',
    },
    de: {
      title: 'Vielen Dank!',
      message: 'Ihre Urlaubsplan-Anfrage wurde erfolgreich übermittelt.',
      emailNote: 'Sie erhalten Ihren personalisierten Mallorca-Urlaubsplan in Kürze per E-Mail.',
    }
  };

  const m = messages[language];

  return (
    <div className="text-center space-y-4 animate-fadeIn">
      <div className="flex justify-center">
        <CheckCircle className="w-16 h-16 text-green-500" />
      </div>
      <h2 className="text-2xl font-semibold text-gray-900">{m.title}</h2>
      <div className="space-y-2">
        <p className="text-gray-600">{m.message}</p>
        <p className="text-gray-600">{m.emailNote}</p>
      </div>
    </div>
  );
};