import { useFormContext } from 'react-hook-form';
import type { FormData } from '../../types/form';

export const LanguageStep = () => {
  const { register } = useFormContext<FormData>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Language Preference</h2>
      <div className="space-y-4">
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            {...register('language')}
            value="en"
            className="w-4 h-4 text-blue-500"
          />
          <span className="text-gray-700">English</span>
        </label>
        <label className="flex items-center space-x-3">
          <input
            type="radio"
            {...register('language')}
            value="de"
            className="w-4 h-4 text-blue-500"
          />
          <span className="text-gray-700">Deutsch</span>
        </label>
      </div>
    </div>
  );
};