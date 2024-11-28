import { useFormContext } from 'react-hook-form';
import { Checkbox } from './Checkbox';
import type { FormData } from '../types/form';

interface Option {
  value: string;
  label: string;
}

interface MultiSelectProps {
  title: string;
  description?: string;
  options: Option[];
  name: string;
}

export const MultiSelect = ({ title, description, options, name }: MultiSelectProps) => {
  const { register } = useFormContext<FormData>();

  return (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-medium text-gray-800">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        {options.map((option) => (
          <Checkbox
            key={option.value}
            label={option.label}
            {...register(name)}
            value={option.value}
          />
        ))}
      </div>
    </div>
  );
};