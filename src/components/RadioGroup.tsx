import { UseFormRegisterReturn } from 'react-hook-form';

interface Option {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: Option[];
  registration: UseFormRegisterReturn;
  label?: string;
}

export const RadioGroup = ({ options, registration, label }: RadioGroupProps) => {
  return (
    <div className="space-y-4">
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
      )}
      <div className="space-y-2">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-3">
            <input
              type="radio"
              value={option.value}
              className="w-4 h-4 text-blue-500"
              {...registration}
            />
            <span className="text-gray-700">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};