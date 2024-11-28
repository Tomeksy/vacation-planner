import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import { ShoppingBagIcon } from 'lucide-react';
import type { FormData } from '../../types/form';
import { RadioGroup } from '../RadioGroup';

export const BudgetStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Budget Considerations',
      description: 'What is your approximate budget per person per day? (For meals and activities)',
      note: 'Accommodation costs are calculated separately based on your preferences.',
      shoppingNote: 'We know how tempting those local markets can be! — We\'ll include a budget note in your vacation plan to help keep your bank account happy after your holiday 🛍️ 🙂',
      options: [
        { value: 'budget', label: 'Budget-Friendly (€30 - €80)' },
        { value: 'moderate', label: 'Moderate (€80 - €150)' },
        { value: 'luxury', label: 'Luxury (€200+)' },
        { value: 'no-specific', label: "Can't tell yet" }
      ]
    },
    de: {
      title: 'Budget-Überlegungen',
      description: 'Wie hoch ist Ihr ungefähres Budget pro Person und Tag? (Für Mahlzeiten und Aktivitäten)',
      note: 'Unterkunftskosten werden separat nach Ihren Präferenzen berechnet.',
      shoppingNote: 'Wir wissen, wie verlockend die lokalen Märkte sein können — daher machen wir Ihnen ein Budget-Vermerk mit auf den Urlaubsplan, damit man auch nach dem Urlaub erholt auf das Bankkonto schauen kann 🛍️ 🙂',
      options: [
        { value: 'budget', label: 'Kostengünstig (€30 - €80)' },
        { value: 'moderate', label: 'Moderat (€80 - €150)' },
        { value: 'luxury', label: 'Luxus (€200+)' },
        { value: 'no-specific', label: 'Kann ich noch nicht sagen' }
      ]
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
        <p className="text-gray-600 mt-2">{l.description}</p>
        <p className="text-gray-600 mt-1">{l.note}</p>
      </div>

      <RadioGroup
        options={l.options}
        registration={register('budget')}
      />

      <div className="flex items-center gap-2 p-4 bg-blue-50 rounded-lg text-blue-700">
        <ShoppingBagIcon className="w-5 h-5 flex-shrink-0" />
        <p className="text-sm">{l.shoppingNote}</p>
      </div>
    </div>
  );
};