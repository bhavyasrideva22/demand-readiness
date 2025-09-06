export interface Question {
  id: string;
  section: AssessmentSection;
  type: 'likert' | 'multiple-choice' | 'scenario';
  question: string;
  options?: string[];
  weight: number;
  construct: string; // What this question measures
}

export type AssessmentSection = 
  | 'psychometric' 
  | 'technical' 
  | 'wiscar-will' 
  | 'wiscar-interest' 
  | 'wiscar-skill' 
  | 'wiscar-cognitive' 
  | 'wiscar-ability' 
  | 'wiscar-realworld';

export interface AssessmentAnswer {
  questionId: string;
  value: number; // 0-4 for Likert, index for multiple choice
  timestamp: Date;
}

export interface SectionScore {
  section: AssessmentSection;
  score: number; // 0-100
  maxScore: number;
}

export interface AssessmentResults {
  psychometricScore: number;
  technicalScore: number;
  wiscarScores: {
    will: number;
    interest: number;
    skill: number;
    cognitive: number;
    ability: number;
    realworld: number;
  };
  overallScore: number;
  recommendation: 'YES' | 'MAYBE' | 'NO';
  confidence: number;
  strengths: string[];
  improvements: string[];
  careerPath: string[];
  learningPath: string[];
}

export interface AssessmentState {
  hasStarted: boolean;
  currentSection: AssessmentSection;
  currentQuestionIndex: number;
  answers: Record<string, AssessmentAnswer>;
  startTime: Date;
  isComplete: boolean;
  results?: AssessmentResults;
}