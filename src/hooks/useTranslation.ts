import { useFormContext } from 'react-hook-form';
import { translations } from '../constants/translations';
import type { FormData } from '../types/form';

export const useTranslation = () => {
  const { watch } = useFormContext<FormData>();
  const language = watch('language') || 'en';

  return {
    t: (key: keyof typeof translations.en) => translations[language][key],
    language
  };
};