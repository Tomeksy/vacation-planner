import type { FormData } from '../types/form';

export const defaultValues: FormData = {
  language: 'en',
  personalInfo: {
    fullName: '',
    email: '',
    arrivalDate: new Date(),
    departureDate: new Date(),
    travelers: {
      adults: 1,
      teens: 0,
      children: 0,
      infants: 0
    }
  },
  dailyRoutine: {
    wakeUpTime: 'morning',
    activityLevel: 'moderate',
    vacationGoal: 'exploring'
  },
  accommodation: {
    types: [],
    locations: []
  },
  activities: {
    beach: [],
    adventure: [],
    cultural: [],
    nightlife: [],
    gastronomy: [],
    wellness: [],
    family: [],
    shopping: [],
    seasonal: []
  },
  dining: {
    cuisineTypes: [],
    dietaryRestrictions: [],
    otherDietary: ''
  },
  transportation: [],
  budget: 'moderate',
  travelParty: {
    type: 'solo',
    other: ''
  },
  previousVisit: {
    visited: false,
    enjoyedMost: ''
  },
  specialRequests: {
    includedExperiences: '',
    avoidActivities: '',
    specialOccasion: 'none',
    otherOccasion: ''
  },
  compliance: {
    emailConsent: false
  }
};