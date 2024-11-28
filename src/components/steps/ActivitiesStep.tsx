import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';
import { Checkbox } from '../Checkbox';

export const ActivitiesStep = () => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Activity Interests',
      description: 'Select all activities that interest you - The more specific your choices, the more personalized your vacation plan will be.',
      sections: {
        beach: {
          title: 'Beach and Water Activities',
          options: [
            { value: 'swimming', label: 'Swimming and Sunbathing' },
            { value: 'snorkeling', label: 'Snorkeling' },
            { value: 'scuba', label: 'Scuba Diving' },
            { value: 'sailing', label: 'Sailing/Boating Excursions' },
            { value: 'catamaran', label: 'Catamaran Cruises' },
            { value: 'kayaking', label: 'Kayaking or Paddleboarding' }
          ]
        },
        adventure: {
          title: 'Adventure and Outdoor Activities',
          options: [
            { value: 'hiking', label: 'Hiking' },
            { value: 'cycling', label: 'Cycling' },
            { value: 'climbing', label: 'Rock Climbing' },
            { value: 'horseback', label: 'Horseback Riding' },
            { value: 'balloon', label: 'Hot Air Ballooning' }
          ]
        },
        cultural: {
          title: 'Cultural Experiences',
          options: [
            { value: 'castles', label: 'Castells and Palaces' },
            { value: 'villages', label: 'Traditional Villages' },
            { value: 'train', label: 'Historic Sóller Train' },
            { value: 'museums', label: 'Museums and Art Galleries' }
          ]
        },
        nightlife: {
          title: 'Nightlife and Entertainment',
          options: [
            { value: 'beach-parties', label: 'Beach Parties' },
            { value: 'clubs', label: 'Nightclubs and Bars' },
            { value: 'live-music', label: 'Live Music Venues' },
            { value: 'wine-bars', label: 'Wine bars and lounges' }
          ]
        }
      }
    },
    de: {
      title: 'Aktivitätsinteressen',
      description: 'Wählen Sie alle Aktivitäten aus, die Sie interessieren - Je spezifischer Ihre Auswahl, desto persönlicher wird Ihr Urlaubsplan.',
      sections: {
        beach: {
          title: 'Strand- und Wasseraktivitäten',
          options: [
            { value: 'swimming', label: 'Schwimmen und Sonnenbaden' },
            { value: 'snorkeling', label: 'Schnorcheln' },
            { value: 'scuba', label: 'Tauchen' },
            { value: 'sailing', label: 'Segel-/Bootsausflüge' },
            { value: 'catamaran', label: 'Katamaran-Ausflüge' },
            { value: 'kayaking', label: 'Kajakfahren oder Paddeln' }
          ]
        },
        adventure: {
          title: 'Abenteuer- und Outdoor-Aktivitäten',
          options: [
            { value: 'hiking', label: 'Wandern' },
            { value: 'cycling', label: 'Radfahren' },
            { value: 'climbing', label: 'Klettern' },
            { value: 'horseback', label: 'Reiten' },
            { value: 'balloon', label: 'Heißluftballonfahrt' }
          ]
        },
        cultural: {
          title: 'Kulturelle Erlebnisse',
          options: [
            { value: 'castles', label: 'Burgen und Paläste' },
            { value: 'villages', label: 'Traditionelle Dörfer' },
            { value: 'train', label: 'Historische Sóller-Bahn' },
            { value: 'museums', label: 'Museen und Kunstgalerien' }
          ]
        },
        nightlife: {
          title: 'Nachtleben und Unterhaltung',
          options: [
            { value: 'beach-parties', label: 'Strandpartys' },
            { value: 'clubs', label: 'Nachtclubs und Bars' },
            { value: 'live-music', label: 'Live-Musik-Locations' },
            { value: 'wine-bars', label: 'Weinbars und Lounges' }
          ]
        }
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

      {Object.entries(l.sections).map(([key, section]) => (
        <div key={key} className="space-y-4">
          <h3 className="text-lg font-medium text-gray-800">{section.title}</h3>
          <div className="grid grid-cols-2 gap-4">
            {section.options.map((option) => (
              <Checkbox
                key={option.value}
                label={option.label}
                {...register(`activities.${key}`)}
                value={option.value}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};