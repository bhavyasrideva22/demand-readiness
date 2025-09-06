import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { AssessmentResults as ResultsType } from "@/types/assessment";
import { 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  TrendingUp, 
  Brain, 
  Target, 
  BookOpen,
  Users,
  Award,
  ArrowRight,
  BarChart3
} from "lucide-react";

interface AssessmentResultsProps {
  results: ResultsType;
  onRetakeAssessment: () => void;
  onViewCareerPath: () => void;
}

export default function AssessmentResults({ results, onRetakeAssessment, onViewCareerPath }: AssessmentResultsProps) {
  const getRecommendationIcon = () => {
    switch (results.recommendation) {
      case 'YES': return <CheckCircle className="h-8 w-8 text-success" />;
      case 'MAYBE': return <AlertTriangle className="h-8 w-8 text-warning" />;
      case 'NO': return <XCircle className="h-8 w-8 text-destructive" />;
    }
  };
  
  const getRecommendationColor = () => {
    switch (results.recommendation) {
      case 'YES': return 'text-success';
      case 'MAYBE': return 'text-warning';
      case 'NO': return 'text-destructive';
    }
  };
  
  const getRecommendationBg = () => {
    switch (results.recommendation) {
      case 'YES': return 'from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20';
      case 'MAYBE': return 'from-yellow-50 to-amber-50 dark:from-yellow-950/20 dark:to-amber-950/20';
      case 'NO': return 'from-red-50 to-rose-50 dark:from-red-950/20 dark:to-rose-950/20';
    }
  };
  
  const getRecommendationMessage = () => {
    switch (results.recommendation) {
      case 'YES':
        return {
          title: "Excellent Fit!",
          message: "You show strong alignment with demand planning requirements. You're ready to start your journey in this field."
        };
      case 'MAYBE':
        return {
          title: "Good Potential",
          message: "You have solid foundations but some areas need development. With focused learning, you can succeed in demand planning."
        };
      case 'NO':
        return {
          title: "Consider Alternatives",
          message: "Your profile suggests other career paths might be more suitable. Explore related roles that better match your strengths."
        };
    }
  };
  
  const recommendation = getRecommendationMessage();
  
  return (
    <div className="min-h-screen bg-gradient-subtle py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Your Assessment Results
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analysis of your readiness for a demand planning career
          </p>
        </div>
        
        {/* Main Result */}
        <Card className={`p-8 mb-8 bg-gradient-to-br ${getRecommendationBg()} shadow-card`}>
          <div className="text-center">
            <div className="flex justify-center mb-4">
              {getRecommendationIcon()}
            </div>
            
            <h2 className={`text-3xl font-bold mb-2 ${getRecommendationColor()}`}>
              {recommendation.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              {recommendation.message}
            </p>
            
            <div className="flex items-center justify-center gap-6 mb-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">
                  {results.overallScore}
                </div>
                <div className="text-sm text-muted-foreground">
                  Overall Score
                </div>
              </div>
              
              <div className="w-px h-12 bg-border" />
              
              <div className="text-center">
                <div className="text-3xl font-bold text-foreground">
                  {results.confidence}%
                </div>
                <div className="text-sm text-muted-foreground">
                  Confidence
                </div>
              </div>
            </div>
            
            <Badge variant="outline" className="text-lg px-4 py-2">
              Recommendation: {results.recommendation}
            </Badge>
          </div>
        </Card>
        
        {/* Detailed Scores */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Core Scores */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-primary" />
              Core Assessment Scores
            </h3>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Psychological Fit
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {results.psychometricScore}%
                  </span>
                </div>
                <Progress value={results.psychometricScore} className="h-2" />
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-foreground">
                    Technical Aptitude
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    {results.technicalScore}%
                  </span>
                </div>
                <Progress value={results.technicalScore} className="h-2" />
              </div>
            </div>
          </Card>
          
          {/* WISCAR Scores */}
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Target className="h-5 w-5 text-primary" />
              WISCAR Framework
            </h3>
            
            <div className="space-y-4">
              {Object.entries(results.wiscarScores).map(([key, score]) => (
                <div key={key}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-foreground capitalize">
                      {key === 'realworld' ? 'Real World' : key}
                    </span>
                    <span className="text-sm font-bold text-foreground">
                      {score}%
                    </span>
                  </div>
                  <Progress value={score} className="h-1.5" />
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Strengths & Improvements */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Award className="h-5 w-5 text-success" />
              Your Strengths
            </h3>
            
            <div className="space-y-3">
              {results.strengths.map((strength, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{strength}</span>
                </div>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Areas to Develop
            </h3>
            
            <div className="space-y-3">
              {results.improvements.map((improvement, index) => (
                <div key={index} className="flex items-start gap-3">
                  <ArrowRight className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{improvement}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Career Path & Learning */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              Recommended Career Roles
            </h3>
            
            <div className="space-y-2">
              {results.careerPath.map((role, index) => (
                <Badge key={index} variant="secondary" className="mr-2 mb-2">
                  {role}
                </Badge>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 shadow-card">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-primary" />
              Learning Roadmap
            </h3>
            
            <div className="space-y-2">
              {results.learningPath.map((topic, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                  <span className="text-sm text-foreground">{topic}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button onClick={onViewCareerPath} size="lg" className="bg-gradient-primary hover:opacity-90">
            <Brain className="h-5 w-5 mr-2" />
            Explore Learning Paths
          </Button>
          
          <Button 
            variant="outline" 
            size="lg" 
            onClick={onRetakeAssessment}
          >
            Retake Assessment
          </Button>
        </div>
      </div>
    </div>
  );
}