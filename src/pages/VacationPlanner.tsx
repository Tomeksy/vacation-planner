import React, { useState } from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { Palmtree } from 'lucide-react';
import { FormProgress } from '../components/FormProgress';
import { FormStep } from '../components/FormStep';
import { Button } from '../components/Button';
import { SuccessMessage } from '../components/SuccessMessage';
import { LanguageStep } from '../components/steps/LanguageStep';
import { PersonalInfoStep } from '../components/steps/PersonalInfoStep';
import { DailyRoutineStep } from '../components/steps/DailyRoutineStep';
import { AccommodationStep } from '../components/steps/AccommodationStep';
import { ActivitiesStep } from '../components/steps/ActivitiesStep';
import { DiningStep } from '../components/steps/DiningStep';
import { TransportationStep } from '../components/steps/TransportationStep';
import { BudgetStep } from '../components/steps/BudgetStep';
import { TravelPartyStep } from '../components/steps/TravelPartyStep';
import { PreviousVisitStep } from '../components/steps/PreviousVisitStep';
import { SpecialRequestsStep } from '../components/steps/SpecialRequestsStep';
import { ComplianceStep } from '../components/steps/ComplianceStep';
import { submitFormData, createFormSubmission } from '../utils/form';
import { defaultValues } from '../config/formDefaults';
import type { FormData, Language } from '../types/form';

export function VacationPlanner() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedLanguage, setSubmittedLanguage] = useState<Language>('en');
  const methods = useForm<FormData>({
    defaultValues,
    mode: 'onChange'
  });

  const totalSteps = 12;

  const handleSubmit = async (data: FormData) => {
    try {
      const submission = createFormSubmission(data, 'form_completion');
      await submitFormData(submission);
      setSubmittedLanguage(data.language);
      setIsSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
    }
  };

  const nextStep = async () => {
    if (currentStep === 2) {
      const formData = methods.getValues();
      const submission = createFormSubmission(formData, 'user_registration');
      await submitFormData(submission);
    }
    setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const canProceed = () => {
    if (currentStep === 2) {
      const { fullName, email } = methods.getValues().personalInfo;
      return fullName && email && methods.formState.errors.personalInfo === undefined;
    }
    return true;
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto py-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <SuccessMessage language={submittedLanguage} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <FormProvider {...methods}>
      <div className="min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto py-12 px-4">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center justify-center mb-8">
              <Palmtree className="w-8 h-8 text-blue-500 mr-2" />
              <h1 className="text-3xl font-bold text-gray-900">
                {methods.watch('language') === 'de' ? 'Mallorca Urlaubsplaner' : 'Mallorca Vacation Planner'}
              </h1>
            </div>

            <FormProgress currentStep={currentStep} totalSteps={totalSteps} />

            <form onSubmit={methods.handleSubmit(handleSubmit)} className="space-y-6">
              <FormStep isActive={currentStep === 1}>
                <LanguageStep />
              </FormStep>

              <FormStep isActive={currentStep === 2}>
                <PersonalInfoStep />
              </FormStep>

              <FormStep isActive={currentStep === 3}>
                <DailyRoutineStep />
              </FormStep>

              <FormStep isActive={currentStep === 4}>
                <AccommodationStep />
              </FormStep>

              <FormStep isActive={currentStep === 5}>
                <ActivitiesStep />
              </FormStep>

              <FormStep isActive={currentStep === 6}>
                <DiningStep />
              </FormStep>

              <FormStep isActive={currentStep === 7}>
                <TransportationStep />
              </FormStep>

              <FormStep isActive={currentStep === 8}>
                <BudgetStep />
              </FormStep>

              <FormStep isActive={currentStep === 9}>
                <TravelPartyStep />
              </FormStep>

              <FormStep isActive={currentStep === 10}>
                <PreviousVisitStep />
              </FormStep>

              <FormStep isActive={currentStep === 11}>
                <SpecialRequestsStep />
              </FormStep>

              <FormStep isActive={currentStep === 12}>
                <ComplianceStep />
              </FormStep>

              <div className="flex justify-between mt-8">
                {currentStep > 1 && (
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={prevStep}
                  >
                    {methods.watch('language') === 'de' ? 'Zurück' : 'Previous'}
                  </Button>
                )}
                
                {currentStep < totalSteps ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="ml-auto"
                  >
                    {methods.watch('language') === 'de' ? 'Weiter' : 'Next'}
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    disabled={!methods.watch('compliance.emailConsent')}
                    className="ml-auto"
                  >
                    {methods.watch('language') === 'de' ? 'Absenden' : 'Submit'}
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </FormProvider>
  );
}