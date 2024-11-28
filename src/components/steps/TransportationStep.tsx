import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { Checkbox } from '../Checkbox';

export const TransportationStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Transportation Preferences',
      description: 'Select all that apply - The more specific your choices, the more tailored your transportation recommendations will be.',
      options: [
        { value: 'rental-car', label: 'Rental Car' },
        { value: 'public-transport', label: 'Public Transportation' },
        { value: 'transfers', label: 'Transfers' },
        { value: 'walking-biking', label: 'Walking/Biking' },
        { value: 'private-driver', label: 'Private Driver' },
        { value: 'no-preference', label: 'No Preference' }
      ]
    },
    de: {
      title: 'Transportpräferenzen',
      description: 'Wählen Sie alle zutreffenden Optionen - Je spezifischer Ihre Auswahl, desto maßgeschneiderter werden Ihre Transportempfehlungen.',
      options: [
        { value: 'rental-car', label: 'Mietwagen' },
        { value: 'public-transport', label: 'Öffentliche Verkehrsmittel' },
        { value: 'transfers', label: 'Transfers' },
        { value: 'walking-biking', label: 'Zu Fuß/Fahrrad' },
        { value: 'private-driver', label: 'Privater Fahrer' },
        { value: 'no-preference', label: 'Keine Präferenz' }
      ]
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
        <p className="text-gray-600 mt-2">{l.description}</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {l.options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            {...register('transportation')}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
};