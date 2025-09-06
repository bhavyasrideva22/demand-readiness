import React, { createContext, useContext, useReducer, ReactNode } from 'react';
import { AssessmentState, AssessmentAnswer, AssessmentSection, AssessmentResults } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';
import { calculateOverallResults } from '@/utils/scoring';

interface AssessmentContextType {
  state: AssessmentState;
  startAssessment: () => void;
  answerQuestion: (questionId: string, value: number) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  completeAssessment: () => void;
  resetAssessment: () => void;
}

const AssessmentContext = createContext<AssessmentContextType | undefined>(undefined);

type AssessmentAction =
  | { type: 'START_ASSESSMENT' }
  | { type: 'ANSWER_QUESTION'; payload: { questionId: string; value: number } }
  | { type: 'NEXT_QUESTION' }
  | { type: 'PREVIOUS_QUESTION' }
  | { type: 'COMPLETE_ASSESSMENT' }
  | { type: 'RESET_ASSESSMENT' };

const sectionOrder: AssessmentSection[] = [
  'psychometric',
  'technical',
  'wiscar-will',
  'wiscar-interest',
  'wiscar-skill',
  'wiscar-cognitive',
  'wiscar-ability',
  'wiscar-realworld'
];

function getInitialState(): AssessmentState {
  return {
    hasStarted: false,
    currentSection: 'psychometric',
    currentQuestionIndex: 0,
    answers: {},
    startTime: new Date(),
    isComplete: false
  };
}

function assessmentReducer(state: AssessmentState, action: AssessmentAction): AssessmentState {
  switch (action.type) {
    case 'START_ASSESSMENT':
      return {
        ...getInitialState(),
        hasStarted: true,
        startTime: new Date()
      };
      
    case 'ANSWER_QUESTION': {
      const { questionId, value } = action.payload;
      return {
        ...state,
        answers: {
          ...state.answers,
          [questionId]: {
            questionId,
            value,
            timestamp: new Date()
          }
        }
      };
    }
    
    case 'NEXT_QUESTION': {
      const currentSectionQuestions = assessmentQuestions.filter(q => q.section === state.currentSection);
      const currentSectionIndex = currentSectionQuestions.findIndex((_, index) => 
        index === state.currentQuestionIndex - 
        assessmentQuestions.findIndex(q => q.section === state.currentSection)
      );
      
      // Check if we're at the last question of the current section
      if (currentSectionIndex === currentSectionQuestions.length - 1) {
        // Move to next section
        const currentSectionOrderIndex = sectionOrder.indexOf(state.currentSection);
        if (currentSectionOrderIndex === sectionOrder.length - 1) {
          // Last section, complete assessment
          return {
            ...state,
            isComplete: true,
            results: calculateOverallResults(state.answers)
          };
        } else {
          const nextSection = sectionOrder[currentSectionOrderIndex + 1];
          const nextSectionStartIndex = assessmentQuestions.findIndex(q => q.section === nextSection);
          return {
            ...state,
            currentSection: nextSection,
            currentQuestionIndex: nextSectionStartIndex
          };
        }
      } else {
        // Move to next question in current section
        return {
          ...state,
          currentQuestionIndex: state.currentQuestionIndex + 1
        };
      }
    }
    
    case 'PREVIOUS_QUESTION': {
      if (state.currentQuestionIndex === 0) return state;
      
      const prevQuestionIndex = state.currentQuestionIndex - 1;
      const prevQuestion = assessmentQuestions[prevQuestionIndex];
      
      return {
        ...state,
        currentSection: prevQuestion.section,
        currentQuestionIndex: prevQuestionIndex
      };
    }
    
    case 'COMPLETE_ASSESSMENT':
      return {
        ...state,
        isComplete: true,
        results: calculateOverallResults(state.answers)
      };
      
    case 'RESET_ASSESSMENT':
      return getInitialState();
      
    default:
      return state;
  }
}

export function AssessmentProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(assessmentReducer, getInitialState());
  
  const contextValue: AssessmentContextType = {
    state,
    startAssessment: () => dispatch({ type: 'START_ASSESSMENT' }),
    answerQuestion: (questionId: string, value: number) => 
      dispatch({ type: 'ANSWER_QUESTION', payload: { questionId, value } }),
    nextQuestion: () => dispatch({ type: 'NEXT_QUESTION' }),
    previousQuestion: () => dispatch({ type: 'PREVIOUS_QUESTION' }),
    completeAssessment: () => dispatch({ type: 'COMPLETE_ASSESSMENT' }),
    resetAssessment: () => dispatch({ type: 'RESET_ASSESSMENT' })
  };
  
  return (
    <AssessmentContext.Provider value={contextValue}>
      {children}
    </AssessmentContext.Provider>
  );
}

export function useAssessment() {
  const context = useContext(AssessmentContext);
  if (context === undefined) {
    throw new Error('useAssessment must be used within an AssessmentProvider');
  }
  return context;
}