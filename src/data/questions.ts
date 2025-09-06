import { Question } from '@/types/assessment';

export const assessmentQuestions: Question[] = [
  // Psychometric Evaluation (15 questions)
  {
    id: 'psych_1',
    section: 'psychometric',
    type: 'likert',
    question: 'I enjoy solving problems using data and forecasts.',
    weight: 1,
    construct: 'interest'
  },
  {
    id: 'psych_2',
    section: 'psychometric',
    type: 'likert',
    question: 'I prefer clear routines and checklists in my work.',
    weight: 1,
    construct: 'conscientiousness'
  },
  {
    id: 'psych_3',
    section: 'psychometric',
    type: 'likert',
    question: 'I don\'t give up until a problem is fully resolved.',
    weight: 1,
    construct: 'grit'
  },
  {
    id: 'psych_4',
    section: 'psychometric',
    type: 'likert',
    question: 'I like optimizing systems more than creating them from scratch.',
    weight: 1,
    construct: 'workstyle'
  },
  {
    id: 'psych_5',
    section: 'psychometric',
    type: 'likert',
    question: 'I find satisfaction in identifying patterns in large datasets.',
    weight: 1,
    construct: 'analytical_thinking'
  },
  {
    id: 'psych_6',
    section: 'psychometric',
    type: 'multiple-choice',
    question: 'When facing a complex project, I prefer to:',
    options: [
      'Break it down into smaller, manageable steps',
      'Brainstorm creative solutions first',
      'Seek input from multiple stakeholders',
      'Start with research and data gathering'
    ],
    weight: 1,
    construct: 'problem_solving_style'
  },
  {
    id: 'psych_7',
    section: 'psychometric',
    type: 'likert',
    question: 'I enjoy working with spreadsheets and data visualization tools.',
    weight: 1,
    construct: 'tool_affinity'
  },
  {
    id: 'psych_8',
    section: 'psychometric',
    type: 'likert',
    question: 'I can maintain focus on detailed work for extended periods.',
    weight: 1,
    construct: 'attention_detail'
  },
  {
    id: 'psych_9',
    section: 'psychometric',
    type: 'likert',
    question: 'I communicate well with both technical and non-technical colleagues.',
    weight: 1,
    construct: 'communication'
  },
  {
    id: 'psych_10',
    section: 'psychometric',
    type: 'scenario',
    question: 'You discover a discrepancy in your demand forecast that could impact inventory levels. Your first action would be:',
    options: [
      'Immediately alert management about the issue',
      'Investigate the root cause before reporting',
      'Double-check your calculations and methodology',
      'Consult with the sales team for context'
    ],
    weight: 1,
    construct: 'decision_making'
  },

  // Technical & Aptitude (10 questions)
  {
    id: 'tech_1',
    section: 'technical',
    type: 'multiple-choice',
    question: 'If demand increased 15% from 800 units, what is the new total demand?',
    options: ['815', '920', '890', '950'],
    weight: 1,
    construct: 'numerical_reasoning'
  },
  {
    id: 'tech_2',
    section: 'technical',
    type: 'multiple-choice',
    question: 'Which Excel function would you use to calculate a moving average?',
    options: ['SUM()', 'AVERAGE()', 'FORECAST()', 'TREND()'],
    weight: 1,
    construct: 'excel_knowledge'
  },
  {
    id: 'tech_3',
    section: 'technical',
    type: 'multiple-choice',
    question: 'What method is most effective for reducing seasonal fluctuations in demand data?',
    options: [
      'Simple moving average',
      'Exponential smoothing',
      'Seasonal decomposition',
      'Linear regression'
    ],
    weight: 1,
    construct: 'forecasting_fundamentals'
  },
  {
    id: 'tech_4',
    section: 'technical',
    type: 'multiple-choice',
    question: 'In a supply chain, what happens if demand is consistently underestimated?',
    options: [
      'Excess inventory and higher costs',
      'Stockouts and lost sales',
      'Improved customer satisfaction',
      'Reduced supplier relationships'
    ],
    weight: 1,
    construct: 'supply_chain_knowledge'
  },
  {
    id: 'tech_5',
    section: 'technical',
    type: 'multiple-choice',
    question: 'Which of the following is the best indicator of forecast accuracy?',
    options: [
      'Mean Absolute Deviation (MAD)',
      'R-squared value',
      'Standard deviation',
      'Correlation coefficient'
    ],
    weight: 1,
    construct: 'forecasting_metrics'
  },

  // WISCAR Framework (18 questions, 3 per dimension)
  {
    id: 'will_1',
    section: 'wiscar-will',
    type: 'likert',
    question: 'I have clear long-term career goals and work consistently toward them.',
    weight: 1,
    construct: 'goal_clarity'
  },
  {
    id: 'will_2',
    section: 'wiscar-will',
    type: 'likert',
    question: 'I maintain motivation even when facing repetitive or challenging tasks.',
    weight: 1,
    construct: 'persistence'
  },
  {
    id: 'will_3',
    section: 'wiscar-will',
    type: 'likert',
    question: 'I am committed to developing expertise in data-driven decision making.',
    weight: 1,
    construct: 'commitment'
  },

  {
    id: 'interest_1',
    section: 'wiscar-interest',
    type: 'likert',
    question: 'I find supply chain and logistics operations fascinating.',
    weight: 1,
    construct: 'domain_interest'
  },
  {
    id: 'interest_2',
    section: 'wiscar-interest',
    type: 'likert',
    question: 'I actively seek out information about market trends and consumer behavior.',
    weight: 1,
    construct: 'curiosity'
  },
  {
    id: 'interest_3',
    section: 'wiscar-interest',
    type: 'likert',
    question: 'I enjoy analyzing business problems and finding data-driven solutions.',
    weight: 1,
    construct: 'analytical_interest'
  },

  {
    id: 'skill_1',
    section: 'wiscar-skill',
    type: 'multiple-choice',
    question: 'How would you rate your current Excel proficiency?',
    options: [
      'Beginner (basic formulas)',
      'Intermediate (pivot tables, vlookup)',
      'Advanced (macros, complex modeling)',
      'Expert (VBA, advanced analytics)'
    ],
    weight: 1,
    construct: 'excel_skill'
  },
  {
    id: 'skill_2',
    section: 'wiscar-skill',
    type: 'multiple-choice',
    question: 'Which best describes your experience with data analysis?',
    options: [
      'Limited to basic calculations',
      'Some experience with trends and patterns',
      'Comfortable with statistical analysis',
      'Advanced modeling and forecasting'
    ],
    weight: 1,
    construct: 'analytical_skill'
  },
  {
    id: 'skill_3',
    section: 'wiscar-skill',
    type: 'likert',
    question: 'I can effectively present complex data insights to stakeholders.',
    weight: 1,
    construct: 'communication_skill'
  },

  {
    id: 'cognitive_1',
    section: 'wiscar-cognitive',
    type: 'multiple-choice',
    question: 'Complete the pattern: 100, 95, 85, 70, 50, ?',
    options: ['25', '30', '35', '40'],
    weight: 1,
    construct: 'pattern_recognition'
  },
  {
    id: 'cognitive_2',
    section: 'wiscar-cognitive',
    type: 'scenario',
    question: 'You notice that sales spike every third week of the month. What factors would you investigate first?',
    options: [
      'Marketing campaign timing',
      'Payroll cycles and consumer spending',
      'Competitor promotional activities',
      'All of the above systematically'
    ],
    weight: 1,
    construct: 'logical_reasoning'
  },
  {
    id: 'cognitive_3',
    section: 'wiscar-cognitive',
    type: 'likert',
    question: 'I can quickly identify errors and inconsistencies in data.',
    weight: 1,
    construct: 'attention_detail'
  },

  {
    id: 'ability_1',
    section: 'wiscar-ability',
    type: 'likert',
    question: 'I actively seek feedback to improve my performance.',
    weight: 1,
    construct: 'growth_mindset'
  },
  {
    id: 'ability_2',
    section: 'wiscar-ability',
    type: 'likert',
    question: 'I enjoy learning new software tools and analytical methods.',
    weight: 1,
    construct: 'learning_agility'
  },
  {
    id: 'ability_3',
    section: 'wiscar-ability',
    type: 'likert',
    question: 'I can adapt my approach when my initial analysis proves incorrect.',
    weight: 1,
    construct: 'adaptability'
  },

  {
    id: 'realworld_1',
    section: 'wiscar-realworld',
    type: 'scenario',
    question: 'A major customer suddenly doubles their order. How do you handle this in your forecast?',
    options: [
      'Immediately adjust all future forecasts upward',
      'Investigate if this is a one-time event or trend',
      'Wait for more data before making changes',
      'Consult with sales before any adjustments'
    ],
    weight: 1,
    construct: 'practical_judgment'
  },
  {
    id: 'realworld_2',
    section: 'wiscar-realworld',
    type: 'likert',
    question: 'I understand how demand planning decisions impact other business functions.',
    weight: 1,
    construct: 'business_understanding'
  },
  {
    id: 'realworld_3',
    section: 'wiscar-realworld',
    type: 'scenario',
    question: 'Your forecast accuracy has been declining. What is your systematic approach?',
    options: [
      'Review and update forecasting parameters',
      'Analyze external factors affecting demand',
      'Collaborate with sales and marketing teams',
      'All of the above in a structured process'
    ],
    weight: 1,
    construct: 'systematic_thinking'
  }
];

export const sectionInfo = {
  psychometric: {
    title: 'Personality & Motivation',
    description: 'Evaluating your psychological fit for demand planning work',
    questions: assessmentQuestions.filter(q => q.section === 'psychometric').length
  },
  technical: {
    title: 'Technical Aptitude',
    description: 'Testing your analytical and technical readiness',
    questions: assessmentQuestions.filter(q => q.section === 'technical').length
  },
  'wiscar-will': {
    title: 'Will & Drive',
    description: 'Assessing your motivation and commitment',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-will').length
  },
  'wiscar-interest': {
    title: 'Interest & Passion',
    description: 'Measuring your genuine interest in demand planning',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-interest').length
  },
  'wiscar-skill': {
    title: 'Current Skills',
    description: 'Evaluating your existing technical competencies',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-skill').length
  },
  'wiscar-cognitive': {
    title: 'Cognitive Abilities',
    description: 'Testing analytical thinking and pattern recognition',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-cognitive').length
  },
  'wiscar-ability': {
    title: 'Learning Ability',
    description: 'Assessing your capacity for growth and adaptation',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-ability').length
  },
  'wiscar-realworld': {
    title: 'Real-World Application',
    description: 'Evaluating practical judgment and business acumen',
    questions: assessmentQuestions.filter(q => q.section === 'wiscar-realworld').length
  }
};