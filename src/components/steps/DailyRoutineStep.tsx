import { useFormContext } from 'react-hook-form';
import { RadioGroup } from '../RadioGroup';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';

export const DailyRoutineStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Daily Routine Preferences',
      wakeUpTime: 'What time do you prefer to wake up during your vacation?',
      activityLevel: 'How would you describe your preferred activity level?',
      vacationGoal: 'What is your main goal for this vacation?',
      wakeUpOptions: [
        { value: 'early', label: 'Early Bird (Before 7:00 AM)' },
        { value: 'morning', label: 'Morning Person (7:00 AM - 9:00 AM)' },
        { value: 'late', label: 'Late Riser (After 9:00 AM)' }
      ],
      activityOptions: [
        { value: 'very-active', label: 'Very Active (Full days packed with activities)' },
        { value: 'moderate', label: 'Moderately Active (Balanced mix of activities and relaxation)' },
        { value: 'relaxed', label: 'Relaxed (Leisurely pace with plenty of downtime)' }
      ],
      goalOptions: [
        { value: 'exploring', label: 'Exploring and Adventure' },
        { value: 'relaxation', label: 'Relaxation and Rejuvenation' },
        { value: 'cultural', label: 'Cultural Immersion' },
        { value: 'family', label: 'Family Fun' },
        { value: 'romantic', label: 'Romantic Getaway' },
        { value: 'party', label: 'Party and Nightlife' }
      ]
    },
    de: {
      title: 'Tagesablauf-Präferenzen',
      wakeUpTime: 'Wann möchten Sie im Urlaub aufstehen?',
      activityLevel: 'Wie würden Sie Ihr bevorzugtes Aktivitätsniveau beschreiben?',
      vacationGoal: 'Was ist Ihr Hauptziel für diesen Urlaub?',
      wakeUpOptions: [
        { value: 'early', label: 'Frühaufsteher (Vor 7:00 Uhr)' },
        { value: 'morning', label: 'Morgenmuffel (7:00 - 9:00 Uhr)' },
        { value: 'late', label: 'Langschläfer (Nach 9:00 Uhr)' }
      ],
      activityOptions: [
        { value: 'very-active', label: 'Sehr aktiv (Volle Tage mit Aktivitäten)' },
        { value: 'moderate', label: 'Moderat aktiv (Ausgewogene Mischung aus Aktivitäten und Entspannung)' },
        { value: 'relaxed', label: 'Entspannt (Gemütliches Tempo mit viel Freizeit)' }
      ],
      goalOptions: [
        { value: 'exploring', label: 'Erkunden und Abenteuer' },
        { value: 'relaxation', label: 'Entspannung und Erholung' },
        { value: 'cultural', label: 'Kulturelles Eintauchen' },
        { value: 'family', label: 'Familienspaß' },
        { value: 'romantic', label: 'Romantischer Urlaub' },
        { value: 'party', label: 'Party und Nachtleben' }
      ]
    }
  };

  const l = labels[language];

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold">{l.title}</h2>

      <RadioGroup
        label={l.wakeUpTime}
        options={l.wakeUpOptions}
        registration={register('dailyRoutine.wakeUpTime')}
      />

      <RadioGroup
        label={l.activityLevel}
        options={l.activityOptions}
        registration={register('dailyRoutine.activityLevel')}
      />

      <RadioGroup
        label={l.vacationGoal}
        options={l.goalOptions}
        registration={register('dailyRoutine.vacationGoal')}
      />
    </div>
  );
};