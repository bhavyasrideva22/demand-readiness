import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Question } from "@/types/assessment";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { sectionInfo } from "@/data/questions";

interface AssessmentQuestionProps {
  question: Question;
  currentQuestionIndex: number;
  totalQuestions: number;
  selectedAnswer?: number;
  onAnswerSelect: (value: number) => void;
  onNext: () => void;
  onBack: () => void;
  canGoNext: boolean;
  canGoBack: boolean;
}

export default function AssessmentQuestion({
  question,
  currentQuestionIndex,
  totalQuestions,
  selectedAnswer,
  onAnswerSelect,
  onNext,
  onBack,
  canGoNext,
  canGoBack
}: AssessmentQuestionProps) {
  const progress = ((currentQuestionIndex + 1) / totalQuestions) * 100;
  const sectionData = sectionInfo[question.section];
  
  const renderLikertScale = () => (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <div className="flex justify-between text-sm text-muted-foreground mb-2">
          <span>Strongly Disagree</span>
          <span>Strongly Agree</span>
        </div>
      </div>
      
      <div className="flex justify-center gap-4">
        {[0, 1, 2, 3, 4].map((value) => (
          <button
            key={value}
            onClick={() => onAnswerSelect(value)}
            className={`w-16 h-16 rounded-full border-2 transition-all duration-300 font-semibold ${
              selectedAnswer === value
                ? 'bg-gradient-primary text-primary-foreground border-primary shadow-glow'
                : 'border-border hover:border-primary hover:shadow-card'
            }`}
          >
            {value + 1}
          </button>
        ))}
      </div>
      
      <div className="flex justify-between text-xs text-muted-foreground mt-2">
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
      </div>
    </div>
  );
  
  const renderMultipleChoice = () => (
    <div className="space-y-3">
      {question.options?.map((option, index) => (
        <button
          key={index}
          onClick={() => onAnswerSelect(index)}
          className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-300 ${
            selectedAnswer === index
              ? 'bg-gradient-primary text-primary-foreground border-primary shadow-glow'
              : 'border-border hover:border-primary hover:shadow-card bg-card'
          }`}
        >
          <div className="flex items-start gap-3">
            <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 ${
              selectedAnswer === index 
                ? 'bg-primary-foreground border-primary-foreground' 
                : 'border-border'
            }`} />
            <span className="text-sm">{option}</span>
          </div>
        </button>
      ))}
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-subtle flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        {/* Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-lg font-semibold text-primary">
                {sectionData.title}
              </h2>
              <p className="text-sm text-muted-foreground">
                {sectionData.description}
              </p>
            </div>
            <div className="text-right">
              <div className="text-sm font-medium text-foreground">
                Question {currentQuestionIndex + 1} of {totalQuestions}
              </div>
              <div className="text-xs text-muted-foreground">
                {Math.round(progress)}% Complete
              </div>
            </div>
          </div>
          
          <Progress value={progress} className="h-2" />
        </div>
        
        {/* Question Card */}
        <Card className="p-8 shadow-card">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-foreground mb-4 leading-relaxed">
              {question.question}
            </h3>
          </div>
          
          <div className="mb-8">
            {question.type === 'likert' ? renderLikertScale() : renderMultipleChoice()}
          </div>
          
          {/* Navigation */}
          <div className="flex justify-between pt-6 border-t border-border">
            <Button
              variant="outline"
              onClick={onBack}
              disabled={!canGoBack}
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </Button>
            
            <Button
              onClick={onNext}
              disabled={!canGoNext}
              className="flex items-center gap-2 bg-gradient-primary hover:opacity-90"
            >
              Next
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}