import { useAssessment } from '@/contexts/AssessmentContext';
import AssessmentHero from '@/components/AssessmentHero';
import AssessmentQuestion from '@/components/AssessmentQuestion';
import AssessmentResults from '@/components/AssessmentResults';
import { assessmentQuestions } from '@/data/questions';

export default function Assessment() {
  const { 
    state, 
    startAssessment, 
    answerQuestion, 
    nextQuestion, 
    previousQuestion, 
    resetAssessment 
  } = useAssessment();
  
  // Show hero if assessment hasn't started
  if (!state.hasStarted) {
    return <AssessmentHero onStartAssessment={startAssessment} />;
  }
  
  // Show results if assessment is complete
  if (state.isComplete && state.results) {
    return (
      <AssessmentResults
        results={state.results}
        onRetakeAssessment={resetAssessment}
        onViewCareerPath={() => {
          // TODO: Navigate to career guidance page
          console.log('Navigate to career path');
        }}
      />
    );
  }
  
  // Show current question
  const currentQuestion = assessmentQuestions[state.currentQuestionIndex];
  const selectedAnswer = state.answers[currentQuestion.id]?.value;
  
  return (
    <AssessmentQuestion
      question={currentQuestion}
      currentQuestionIndex={state.currentQuestionIndex}
      totalQuestions={assessmentQuestions.length}
      selectedAnswer={selectedAnswer}
      onAnswerSelect={(value) => answerQuestion(currentQuestion.id, value)}
      onNext={nextQuestion}
      onBack={previousQuestion}
      canGoNext={selectedAnswer !== undefined}
      canGoBack={state.currentQuestionIndex > 0}
    />
  );
}