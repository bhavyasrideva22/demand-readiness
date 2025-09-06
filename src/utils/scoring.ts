import { AssessmentAnswer, AssessmentResults, AssessmentSection } from '@/types/assessment';
import { assessmentQuestions } from '@/data/questions';

export function calculateSectionScore(
  section: AssessmentSection, 
  answers: Record<string, AssessmentAnswer>
): number {
  const sectionQuestions = assessmentQuestions.filter(q => q.section === section);
  
  if (sectionQuestions.length === 0) return 0;
  
  let totalScore = 0;
  let maxPossibleScore = 0;
  
  sectionQuestions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      // For likert scale (0-4), multiply by 25 to get 0-100
      // For multiple choice, award points based on correctness
      let score = 0;
      
      if (question.type === 'likert') {
        score = (answer.value / 4) * 100;
      } else if (question.type === 'multiple-choice' || question.type === 'scenario') {
        // Award points based on the "best" answer (simplified scoring)
        const correctAnswers: Record<string, number> = {
          'tech_1': 1, // 920
          'tech_2': 1, // AVERAGE()
          'tech_3': 2, // Seasonal decomposition
          'tech_4': 1, // Stockouts and lost sales
          'tech_5': 0, // MAD
          'skill_1': answer.value * 25, // Scale expertise level
          'skill_2': answer.value * 25, // Scale experience level
          'psych_6': answer.value === 0 ? 100 : 75, // Structured approach preferred
          'psych_10': answer.value === 2 ? 100 : 75, // Check calculations first
          'cognitive_1': answer.value === 0 ? 100 : 0, // 25 is correct
          'cognitive_2': answer.value === 3 ? 100 : 75, // All factors systematically
          'realworld_1': answer.value === 1 ? 100 : 75, // Investigate first
          'realworld_3': answer.value === 3 ? 100 : 75, // All of the above
        };
        
        score = correctAnswers[question.id] ?? (answer.value * 25);
      }
      
      totalScore += score * question.weight;
      maxPossibleScore += 100 * question.weight;
    }
  });
  
  return maxPossibleScore > 0 ? Math.round((totalScore / maxPossibleScore) * 100) : 0;
}

export function calculateOverallResults(answers: Record<string, AssessmentAnswer>): AssessmentResults {
  // Calculate section scores
  const psychometricScore = calculateSectionScore('psychometric', answers);
  const technicalScore = calculateSectionScore('technical', answers);
  
  const wiscarScores = {
    will: calculateSectionScore('wiscar-will', answers),
    interest: calculateSectionScore('wiscar-interest', answers),
    skill: calculateSectionScore('wiscar-skill', answers),
    cognitive: calculateSectionScore('wiscar-cognitive', answers),
    ability: calculateSectionScore('wiscar-ability', answers),
    realworld: calculateSectionScore('wiscar-realworld', answers)
  };
  
  // Calculate weighted overall score
  const overallScore = Math.round(
    (psychometricScore * 0.25) +
    (technicalScore * 0.25) +
    (Object.values(wiscarScores).reduce((sum, score) => sum + score, 0) / 6 * 0.5)
  );
  
  // Determine recommendation
  let recommendation: 'YES' | 'MAYBE' | 'NO';
  let confidence: number;
  
  if (overallScore >= 75 && technicalScore >= 70 && psychometricScore >= 70) {
    recommendation = 'YES';
    confidence = Math.min(95, overallScore + 5);
  } else if (overallScore >= 55 && (technicalScore >= 50 || psychometricScore >= 60)) {
    recommendation = 'MAYBE';
    confidence = Math.min(85, overallScore + 10);
  } else {
    recommendation = 'NO';
    confidence = Math.max(60, 100 - overallScore);
  }
  
  // Identify strengths and improvements
  const strengths: string[] = [];
  const improvements: string[] = [];
  
  if (psychometricScore >= 75) strengths.push('Strong personality fit for analytical work');
  if (technicalScore >= 75) strengths.push('Excellent technical aptitude');
  if (wiscarScores.will >= 75) strengths.push('High motivation and drive');
  if (wiscarScores.interest >= 75) strengths.push('Genuine passion for demand planning');
  if (wiscarScores.skill >= 75) strengths.push('Solid existing technical skills');
  if (wiscarScores.cognitive >= 75) strengths.push('Strong analytical thinking abilities');
  
  if (psychometricScore < 60) improvements.push('Develop structured thinking and attention to detail');
  if (technicalScore < 60) improvements.push('Build foundational Excel and forecasting skills');
  if (wiscarScores.skill < 60) improvements.push('Gain hands-on experience with data analysis tools');
  if (wiscarScores.cognitive < 60) improvements.push('Practice logical reasoning and pattern recognition');
  
  // Career and learning paths
  const careerPath = recommendation === 'YES' 
    ? ['Demand Planner', 'Supply Chain Analyst', 'Forecasting Analyst', 'S&OP Analyst']
    : recommendation === 'MAYBE'
    ? ['Inventory Analyst', 'Data Analyst', 'Supply Chain Coordinator', 'Business Analyst']
    : ['Data Entry Specialist', 'Business Analyst', 'Operations Coordinator', 'Customer Analyst'];
    
  const learningPath = recommendation === 'YES'
    ? ['Advanced Excel & Analytics', 'Forecasting Methods', 'Supply Chain Management', 'ERP Systems']
    : ['Excel Fundamentals', 'Data Analysis Basics', 'Supply Chain Concepts', 'Statistics & Forecasting'];
  
  return {
    psychometricScore,
    technicalScore,
    wiscarScores,
    overallScore,
    recommendation,
    confidence,
    strengths,
    improvements,
    careerPath,
    learningPath
  };
}