import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import { Checkbox } from '../Checkbox';
import type { FormData } from '../../types/form';

export const ComplianceStep = () => {
  const { register, formState: { errors } } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Last Step',
      consent: {
        label: 'I agree to receive my personalized vacation plan and related communications via email',
        error: 'Please confirm to receive your vacation plan'
      },
      privacyNote: 'We will use your email to send your vacation plan and related communication.',
      submitButton: 'Get My Vacation Plan'
    },
    de: {
      title: 'Letzter Schritt',
      consent: {
        label: 'Ich stimme zu, meinen personalisierten Urlaubsplan und damit verbundene Kommunikation per E-Mail zu erhalten',
        error: 'Bitte bestätigen Sie den Erhalt Ihres Urlaubsplans'
      },
      privacyNote: 'Wir verwenden Ihre E-Mail-Adresse, um Ihnen den Urlaubsplan zu senden und für die damit verbundene Kommunikation.',
      submitButton: 'Meinen Urlaubsplan erhalten'
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold">{l.title}</h2>
      </div>

      <div className="space-y-4">
        <div>
          <Checkbox
            label={l.consent.label}
            {...register('compliance.emailConsent', { required: true })}
          />
          {errors.compliance?.emailConsent && (
            <p className="mt-1 text-sm text-red-600">{l.consent.error}</p>
          )}
        </div>

        <p className="text-sm text-gray-500 mt-4">
          {l.privacyNote}
        </p>
      </div>
    </div>
  );
};