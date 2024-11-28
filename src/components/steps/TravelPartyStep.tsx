import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { RadioGroup } from '../RadioGroup';

export const TravelPartyStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Travel Party Details',
      description: 'Who are you traveling with?',
      options: [
        { value: 'solo', label: 'Solo' },
        { value: 'partner', label: 'Partner/Spouse' },
        { value: 'family-young', label: 'Family with Young Children' },
        { value: 'family-teens', label: 'Family with Teens' },
        { value: 'friends', label: 'Group of Friends' }
      ],
      other: {
        label: 'Other (please specify)',
        placeholder: 'Please describe your travel party'
      }
    },
    de: {
      title: 'Reisegruppen-Details',
      description: 'Mit wem reisen Sie?',
      options: [
        { value: 'solo', label: 'Alleine' },
        { value: 'partner', label: 'Partner/Ehepartner' },
        { value: 'family-young', label: 'Familie mit kleinen Kindern' },
        { value: 'family-teens', label: 'Familie mit Jugendlichen' },
        { value: 'friends', label: 'Freundesgruppe' }
      ],
      other: {
        label: 'Andere (bitte angeben)',
        placeholder: 'Bitte beschreiben Sie Ihre Reisegruppe'
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
        registration={register('travelParty.type')}
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {l.other.label}
        </label>
        <textarea
          {...register('travelParty.other')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          rows={3}
          placeholder={l.other.placeholder}
        />
      </div>
    </div>
  );
};