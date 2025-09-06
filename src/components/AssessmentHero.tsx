import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight, BarChart3, TrendingUp, Users, Clock } from "lucide-react";
import heroImage from "@/assets/hero-assessment.jpg";

interface AssessmentHeroProps {
  onStartAssessment: () => void;
}

export default function AssessmentHero({ onStartAssessment }: AssessmentHeroProps) {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Demand Planning Assessment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Are You Ready to Become a 
              <span className="text-primary-glow"> Demand Planner?</span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Discover your fit for a career in Demand Planning through our comprehensive 
              psychometric and technical assessment. Get personalized insights, career guidance, 
              and a custom learning roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={onStartAssessment}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow px-8 py-6 text-lg font-semibold"
              >
                Start Your Assessment
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg"
              >
                Learn More About the Role
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-primary-foreground/80">
              <div className="flex items-center justify-center gap-2">
                <Clock className="h-5 w-5" />
                <span>20-30 mins</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <BarChart3 className="h-5 w-5" />
                <span>8 Sections</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <TrendingUp className="h-5 w-5" />
                <span>Detailed Results</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Users className="h-5 w-5" />
                <span>Career Guidance</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What You'll Discover Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What You'll Discover
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive assessment evaluates multiple dimensions of your readiness for a demand planning career.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Psychometric Evaluation
              </h3>
              <p className="text-muted-foreground">
                Assess personality traits, work preferences, and cognitive styles that align with demand planning success.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Technical Aptitude
              </h3>
              <p className="text-muted-foreground">
                Evaluate your analytical skills, Excel proficiency, and understanding of forecasting fundamentals.
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                WISCAR Framework
              </h3>
              <p className="text-muted-foreground">
                Comprehensive readiness analysis covering Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world fit.
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Career Overview Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              About Demand Planning Careers
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                What Is Demand Planning?
              </h3>
              <p className="text-muted-foreground mb-6">
                Demand Planning is the process of forecasting product demand to ensure companies can deliver 
                the right products in the right quantity at the right time. It combines data analysis, 
                business insight, supply chain management, and advanced software tools.
              </p>
              
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Typical Career Paths:
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Demand Planner</li>
                <li>• Supply Chain Analyst</li>
                <li>• Inventory Optimization Analyst</li>
                <li>• Forecasting Analyst</li>
                <li>• S&OP Coordinator</li>
                <li>• Data-Driven Operations Specialist</li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">
                Key Skills for Success:
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Analytical and data-driven mindset</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">High attention to detail and accuracy</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Proficiency with Excel, dashboards, and statistical tools</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Strong communication and stakeholder collaboration</span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span className="text-muted-foreground">Conscientiousness and structured problem-solving</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}