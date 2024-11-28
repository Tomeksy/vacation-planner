import type { FormData, FormSubmission, SubmissionStatus } from '../types/form';

export const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email);
};

export const createFormSubmission = (data: FormData, status: SubmissionStatus): FormSubmission => ({
  data,
  status,
  timestamp: new Date().toISOString()
});

export const submitFormData = async (submission: FormSubmission) => {
  console.log(`Sending ${submission.status} submission...`);
  
  try {
    const response = await fetch('https://hook.eu2.make.com/toj89byjq5r3fngpu1be9qdbkxdoo9m9', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(submission),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    console.log(`Successfully sent ${submission.status} submission`);
  } catch (error) {
    console.error(`Error submitting form (${submission.status}):`, error);
    throw error;
  }
};