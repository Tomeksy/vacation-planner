export type Language = 'en' | 'de';

export type SubmissionStatus = 'user_registration' | 'form_completion';

export interface FormSubmission {
  data: FormData;
  status: SubmissionStatus;
  timestamp: string;
}

export interface FormData {
  language: Language;
  personalInfo: {
    fullName: string;
    email: string;
    arrivalDate: Date;
    departureDate: Date;
    travelers: {
      adults: number;
      teens: number;
      children: number;
      infants: number;
    };
  };
  dailyRoutine: {
    wakeUpTime: 'early' | 'morning' | 'late';
    activityLevel: 'very-active' | 'moderate' | 'relaxed';
    vacationGoal: 'exploring' | 'relaxation' | 'cultural' | 'family' | 'romantic' | 'party';
  };
  accommodation: {
    types: string[];
    locations: string[];
  };
  activities: {
    beach: string[];
    adventure: string[];
    cultural: string[];
    nightlife: string[];
    gastronomy: string[];
    wellness: string[];
    family: string[];
    shopping: string[];
    seasonal: string[];
  };
  dining: {
    cuisineTypes: string[];
    dietaryRestrictions: string[];
    otherDietary: string;
  };
  transportation: string[];
  budget: 'budget' | 'moderate' | 'luxury' | 'no-specific';
  travelParty: {
    type: string;
    other?: string;
  };
  previousVisit: {
    visited: boolean;
    enjoyedMost?: string;
  };
  specialRequests: {
    includedExperiences?: string;
    avoidActivities?: string;
    specialOccasion: string;
    otherOccasion?: string;
  };
  compliance: {
    emailConsent: boolean;
  };
}