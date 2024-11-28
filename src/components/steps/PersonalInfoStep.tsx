import React from 'react';
import { useFormContext } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from '../../hooks/useTranslation';
import type { FormData } from '../../types/form';

export const PersonalInfoStep = () => {
  const { register, watch, setValue, formState: { errors } } = useFormContext<FormData>();
  const { language } = useTranslation();

  const labels = {
    en: {
      title: 'Personal Information',
      fullName: 'Full Name',
      email: 'Email Address',
      dates: 'Travel Dates',
      arrival: 'Arrival Date',
      departure: 'Departure Date',
      travelers: 'Number of Travelers',
      adults: 'Adults (18+)',
      teens: 'Teens (13-17)',
      children: 'Children (3-12)',
      infants: 'Infants (Under 3)',
      required: 'This field is required',
      invalidEmail: 'Please enter a valid email address'
    },
    de: {
      title: 'Persönliche Informationen',
      fullName: 'Vollständiger Name',
      email: 'E-Mail-Adresse',
      dates: 'Reisedaten',
      arrival: 'Anreisedatum',
      departure: 'Abreisedatum',
      travelers: 'Anzahl der Reisenden',
      adults: 'Erwachsene (18+)',
      teens: 'Jugendliche (13-17)',
      children: 'Kinder (3-12)',
      infants: 'Kleinkinder (unter 3)',
      required: 'Dieses Feld ist erforderlich',
      invalidEmail: 'Bitte geben Sie eine gültige E-Mail-Adresse ein'
    },
  };

  const l = labels[language];

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">{l.title}</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {l.fullName} *
          </label>
          <input
            type="text"
            {...register('personalInfo.fullName', { required: true })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.personalInfo?.fullName && (
            <p className="mt-1 text-sm text-red-600">{l.required}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {l.email} *
          </label>
          <input
            type="email"
            {...register('personalInfo.email', { 
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
          {errors.personalInfo?.email?.type === 'required' && (
            <p className="mt-1 text-sm text-red-600">{l.required}</p>
          )}
          {errors.personalInfo?.email?.type === 'pattern' && (
            <p className="mt-1 text-sm text-red-600">{l.invalidEmail}</p>
          )}
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">{l.dates}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.arrival}
              </label>
              <DatePicker
                selected={watch('personalInfo.arrivalDate')}
                onChange={(date) => setValue('personalInfo.arrivalDate', date)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.departure}
              </label>
              <DatePicker
                selected={watch('personalInfo.departureDate')}
                onChange={(date) => setValue('personalInfo.departureDate', date)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                dateFormat="dd/MM/yyyy"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-700">{l.travelers}</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.adults}
              </label>
              <input
                type="number"
                min="1"
                {...register('personalInfo.travelers.adults')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.teens}
              </label>
              <input
                type="number"
                min="0"
                {...register('personalInfo.travelers.teens')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.children}
              </label>
              <input
                type="number"
                min="0"
                {...register('personalInfo.travelers.children')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-1">
                {l.infants}
              </label>
              <input
                type="number"
                min="0"
                {...register('personalInfo.travelers.infants')}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};