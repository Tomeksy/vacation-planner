import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { Checkbox } from '../Checkbox';

export const AccommodationStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Accommodation Preferences',
      subtitle: 'Select all that apply - The more specific your choices, the more tailored your vacation plan will be.',
      types: 'What type of accommodation do you prefer?',
      locations: 'Preferred Location',
      typeOptions: [
        { value: 'luxury', label: 'Luxury Hotel' },
        { value: 'boutique', label: 'Boutique Hotel' },
        { value: 'resort', label: 'Resort' },
        { value: 'airbnb', label: 'AirBnB' },
        { value: 'no-preference', label: 'No Preference' }
      ],
      locationOptions: [
        { value: 'beachfront', label: 'Beachfront' },
        { value: 'city-center', label: 'City Center (Palma)' },
        { value: 'countryside', label: 'Countryside' },
        { value: 'mountain', label: 'Mountain Area' },
        { value: 'nightlife', label: 'Near Nightlife' },
        { value: 'no-preference', label: 'No Preference' }
      ]
    },
    de: {
      title: 'Unterkunftspräferenzen',
      subtitle: 'Wählen Sie alle zutreffenden Optionen - Je spezifischer Ihre Auswahl, desto maßgeschneiderter wird Ihr Urlaubsplan.',
      types: 'Welche Art von Unterkunft bevorzugen Sie?',
      locations: 'Bevorzugte Lage',
      typeOptions: [
        { value: 'luxury', label: 'Luxushotel' },
        { value: 'boutique', label: 'Boutique-Hotel' },
        { value: 'resort', label: 'Resort' },
        { value: 'airbnb', label: 'AirBnB' },
        { value: 'no-preference', label: 'Keine Präferenz' }
      ],
      locationOptions: [
        { value: 'beachfront', label: 'Direkt am Strand' },
        { value: 'city-center', label: 'Stadtzentrum (Palma)' },
        { value: 'countryside', label: 'Auf dem Land' },
        { value: 'mountain', label: 'In den Bergen' },
        { value: 'nightlife', label: 'Nahe am Nachtleben' },
        { value: 'no-preference', label: 'Keine Präferenz' }
      ]
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
        <p className="text-gray-600 mt-2">{l.subtitle}</p>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">{l.types}</h3>
        <div className="grid grid-cols-2 gap-4">
          {l.typeOptions.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              {...register('accommodation.types')}
              value={option.value}
            />
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-sm font-medium text-gray-700">{l.locations}</h3>
        <div className="grid grid-cols-2 gap-4">
          {l.locationOptions.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              {...register('accommodation.locations')}
              value={option.value}
            />
          ))}
        </div>
      </div>
    </div>
  );
};