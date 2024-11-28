import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { RadioGroup } from '../RadioGroup';

export const PreviousVisitStep = () => {
  const { register, watch } = useFormContext<FormData>();
  const { language } = useTranslation();
  const hasVisited = watch('previousVisit.visited');

  const labels = {
    en: {
      title: 'Previous Visits',
      description: 'Your past experiences help us create a better plan for your next visit.',
      options: [
        { value: 'true', label: 'Yes' },
        { value: 'false', label: 'No' }
      ],
      enjoyedMost: {
        label: 'What did you enjoy most during your previous visit?',
        placeholder: 'Tell us about your favorite experiences, places, or activities from your last visit'
      }
    },
    de: {
      title: 'Vorherige Besuche',
      description: 'Ihre bisherigen Erfahrungen helfen uns, einen besseren Plan für Ihren nächsten Besuch zu erstellen.',
      options: [
        { value: 'true', label: 'Ja' },
        { value: 'false', label: 'Nein' }
      ],
      enjoyedMost: {
        label: 'Was hat Ihnen bei Ihrem letzten Besuch am besten gefallen?',
        placeholder: 'Erzählen Sie uns von Ihren Lieblingserlebnissen, -orten oder -aktivitäten von Ihrem letzten Besuch'
      }
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
        <p className="text-gray-600 mt-2">{l.description}</p>
      </div>

      <RadioGroup
        options={l.options}
        registration={register('previousVisit.visited')}
      />

      {hasVisited && (
        <div className="animate-fadeIn">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {l.enjoyedMost.label}
          </label>
          <textarea
            {...register('previousVisit.enjoyedMost')}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            rows={4}
            placeholder={l.enjoyedMost.placeholder}
          />
        </div>
      )}
    </div>
  );
};