import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { BarChart3, Brain, Target, TrendingUp, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-assessment.jpg";

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Demand Planning Career Assessment" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-90" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Discover Your Path to
              <span className="text-primary-glow block">
                Demand Planning Excellence
              </span>
            </h1>
            
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
              Take our comprehensive psychometric and technical assessment to discover if you're ready 
              for a successful career in demand planning. Get personalized insights, career guidance, 
              and a custom learning roadmap.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button 
                size="lg" 
                onClick={() => navigate('/assessment')}
                className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 shadow-glow px-8 py-6 text-lg font-semibold"
              >
                Start Your Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Comprehensive Assessment Framework
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our evidence-based evaluation covers all critical aspects of demand planning readiness
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Brain className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Psychometric Profile
              </h3>
              <p className="text-muted-foreground text-sm">
                Assess personality traits and cognitive styles for optimal role fit
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <BarChart3 className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Technical Aptitude
              </h3>
              <p className="text-muted-foreground text-sm">
                Evaluate analytical skills and technical tool proficiency
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <Target className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                WISCAR Analysis
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive readiness across six critical dimensions
              </p>
            </Card>
            
            <Card className="p-6 shadow-card hover:shadow-glow transition-all duration-300 text-center">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4 mx-auto">
                <TrendingUp className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Career Roadmap
              </h3>
              <p className="text-muted-foreground text-sm">
                Personalized learning path and career recommendations
              </p>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Why Take This Assessment?
              </h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Scientifically Validated
                    </h3>
                    <p className="text-muted-foreground">
                      Based on established psychometric frameworks and industry best practices
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Actionable Insights
                    </h3>
                    <p className="text-muted-foreground">
                      Get specific recommendations for skill development and career planning
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <CheckCircle className="h-6 w-6 text-success flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">
                      Industry-Relevant
                    </h3>
                    <p className="text-muted-foreground">
                      Aligned with real-world demand planning roles and requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <Card className="p-6 shadow-card">
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  Assessment Includes:
                </h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Personality & motivation evaluation</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Technical skills assessment</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Cognitive ability testing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Real-world scenario analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span>Personalized career roadmap</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
