import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { FormField } from '../FormField';

export const SpecialRequestsStep = () => {
  const { register, watch } = useFormContext<FormData>();
  const { language } = useTranslation();
  const specialOccasion = watch('specialRequests.specialOccasion');

  const labels = {
    en: {
      title: 'Special Interests or Requests',
      description: 'Help us personalize your vacation plan with any specific requests or preferences.',
      includedExperiences: {
        label: 'Are there any specific attractions or experiences you definitely want to include?',
        placeholder: 'Tell us about any must-see places or must-do activities'
      },
      avoidActivities: {
        label: 'Any areas or activities you\'d prefer to avoid?',
        placeholder: 'Let us know if there\'s anything you\'d rather skip'
      },
      specialOccasion: {
        label: 'Do you have any special occasions during your trip?',
        options: [
          { value: 'none', label: 'No special occasion' },
          { value: 'honeymoon', label: 'Honeymoon' },
          { value: 'anniversary', label: 'Anniversary' },
          { value: 'birthday', label: 'Birthday' },
          { value: 'other', label: 'Other' }
        ]
      },
      otherOccasion: {
        label: 'Please tell us more about your special occasion',
        placeholder: 'Share any details that will help us make it extra special'
      },
      consent: 'By submitting this form, you agree to allow us to contact you via email regarding your vacation plan.'
    },
    de: {
      title: 'Besondere Interessen oder Wünsche',
      description: 'Helfen Sie uns, Ihren Urlaubsplan mit speziellen Wünschen oder Vorlieben zu personalisieren.',
      includedExperiences: {
        label: 'Gibt es bestimmte Attraktionen oder Erlebnisse, die Sie unbedingt einplanen möchten?',
        placeholder: 'Erzählen Sie uns von Orten, die Sie unbedingt sehen, oder Aktivitäten, die Sie unbedingt machen möchten'
      },
      avoidActivities: {
        label: 'Gibt es Bereiche oder Aktivitäten, die Sie lieber vermeiden möchten?',
        placeholder: 'Lassen Sie uns wissen, was Sie lieber auslassen möchten'
      },
      specialOccasion: {
        label: 'Haben Sie während Ihrer Reise besondere Anlässe zu feiern?',
        options: [
          { value: 'none', label: 'Kein besonderer Anlass' },
          { value: 'honeymoon', label: 'Flitterwochen' },
          { value: 'anniversary', label: 'Jahrestag' },
          { value: 'birthday', label: 'Geburtstag' },
          { value: 'other', label: 'Anderer Anlass' }
        ]
      },
      otherOccasion: {
        label: 'Bitte erzählen Sie uns mehr über Ihren besonderen Anlass',
        placeholder: 'Teilen Sie uns Details mit, die uns helfen, ihn besonders zu gestalten'
      },
      consent: 'Mit dem Absenden dieses Formulars erklären Sie sich damit einverstanden, dass wir Sie per E-Mail bezüglich Ihres Urlaubsplans kontaktieren dürfen.'
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
        <p className="text-gray-600 mt-2">{l.description}</p>
      </div>

      <FormField
        type="textarea"
        label={l.includedExperiences.label}
        name="specialRequests.includedExperiences"
        placeholder={l.includedExperiences.placeholder}
        rows={3}
      />

      <FormField
        type="textarea"
        label={l.avoidActivities.label}
        name="specialRequests.avoidActivities"
        placeholder={l.avoidActivities.placeholder}
        rows={3}
      />

      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          {l.specialOccasion.label}
        </label>
        <select
          {...register('specialRequests.specialOccasion')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        >
          {l.specialOccasion.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>

        {specialOccasion && specialOccasion !== 'none' && (
          <div className="animate-fadeIn">
            <FormField
              type="textarea"
              label={l.otherOccasion.label}
              name="specialRequests.otherOccasion"
              placeholder={l.otherOccasion.placeholder}
              rows={3}
            />
          </div>
        )}
      </div>

      <div className="mt-8 text-sm text-gray-600">
        {l.consent}
      </div>
    </div>
  );
};