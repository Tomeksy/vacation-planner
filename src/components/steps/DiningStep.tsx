import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { Checkbox } from '../Checkbox';

export const DiningStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Dining Preferences',
      description: 'Select all that apply - The more specific your choices, the more tailored your dining recommendations will be.',
      cuisineTypes: {
        title: 'What types of cuisine do you enjoy?',
        options: [
          { value: 'mallorcan', label: 'Local Mallorcan Cuisine' },
          { value: 'mediterranean', label: 'Mediterranean' },
          { value: 'vegetarian', label: 'Vegetarian' },
          { value: 'fine-dining', label: 'Fine Dining' },
          { value: 'casual', label: 'Casual Dining' },
          { value: 'food-markets', label: 'Food Markets' }
        ]
      },
      preferences: {
        label: 'Additional preferences or notes',
        placeholder: 'Enter any additional preferences (e.g., all-inclusive hotels, specific dietary requirements, etc.)'
      }
    },
    de: {
      title: 'Essenspräferenzen',
      description: 'Wählen Sie alle zutreffenden Optionen - Je spezifischer Ihre Auswahl, desto maßgeschneiderter werden Ihre Restaurantempfehlungen.',
      cuisineTypes: {
        title: 'Welche Küche bevorzugen Sie?',
        options: [
          { value: 'mallorcan', label: 'Mallorquinische Küche' },
          { value: 'mediterranean', label: 'Mediterran' },
          { value: 'vegetarian', label: 'Vegetarisch' },
          { value: 'fine-dining', label: 'Gehobene Küche' },
          { value: 'casual', label: 'Casual Dining' },
          { value: 'food-markets', label: 'Lebensmittelmärkte' }
        ]
      },
      preferences: {
        label: 'Zusätzliche Präferenzen oder Anmerkungen',
        placeholder: 'Geben Sie zusätzliche Präferenzen ein (z.B. All-Inclusive Hotels, spezielle Ernährungsanforderungen, etc.)'
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

      <div className="space-y-4">
        <h3 className="text-lg font-medium text-gray-800">{l.cuisineTypes.title}</h3>
        <div className="grid grid-cols-2 gap-4">
          {l.cuisineTypes.options.map((option) => (
            <Checkbox
              key={option.value}
              label={option.label}
              {...register('dining.cuisineTypes')}
              value={option.value}
            />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {l.preferences.label}
        </label>
        <textarea
          {...register('dining.otherDietary')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows={3}
          placeholder={l.preferences.placeholder}
        />
      </div>
    </div>
  );
};