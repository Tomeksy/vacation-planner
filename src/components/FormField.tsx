import { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import { useFormContext } from 'react-hook-form';
import { useTranslation } from '../hooks/useTranslation';
import type { FormData } from '../types/form';

interface BaseFieldProps {
  label: string;
  name: string;
  required?: boolean;
  error?: string;
}

interface InputFieldProps extends BaseFieldProps, InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'email' | 'number';
}

interface TextAreaFieldProps extends BaseFieldProps, TextareaHTMLAttributes<HTMLTextAreaElement> {
  type: 'textarea';
}

type FormFieldProps = InputFieldProps | TextAreaFieldProps;

export const FormField = ({ label, name, required, error, type, ...props }: FormFieldProps) => {
  const { register } = useFormContext<FormData>();
  const { language } = useTranslation();

  const baseClassName = "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500";

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && '*'}
      </label>
      {type === 'textarea' ? (
        <textarea
          {...register(name)}
          {...props as TextAreaFieldProps}
          className={baseClassName}
        />
      ) : (
        <input
          type={type}
          {...register(name)}
          {...props as InputFieldProps}
          className={baseClassName}
        />
      )}
      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}
    </div>
  );
};