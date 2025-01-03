import { ReactNode } from 'react';

export type ProgramVariant = 'EIE European Business School Program' | 'AcceleratorX Program';

export interface ProgramSection {
  'EIE European Business School Program': ReactNode;
  'AcceleratorX Program': ReactNode;
}

export interface ProgramSections {
  Hero: ProgramSection;
  Highlights: ProgramSection;
  BYDP: ProgramSection;
  LearningJourney: ProgramSection;
  Benefits: ProgramSection;
  Certificate: ProgramSection;
  Mentors: ProgramSection;
  SkillsAndTools: ProgramSection;
  SkillsAssessment: ProgramSection;
  Pricing: ProgramSection;
  FAQ: ProgramSection;
}

export interface ProgramContent {
  cohortDate: string;
  title: string;
  description: string;
  features: {
    weeks: number;
    specializations: number;
    jobs: number;
    salary: string;
  };
  brochureLink: string;
}
