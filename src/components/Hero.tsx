import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-background opacity-50" />
      
      {/* Content */}
      <div className="container relative z-10 px-4 py-20">
        <div className="mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img 
              src={logo} 
              alt="Swift Spark" 
              className="h-24 w-24 object-contain drop-shadow-2xl animate-pulse"
            />
          </div>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Discover what you're{" "}
            <span className="relative inline-block">
              really
              <span className="absolute -bottom-2 left-0 right-0 h-1 bg-primary"></span>
            </span>{" "}
            good at
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            In 5 questions and 5 minutes. No fluff, just you.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>AI analyzes your stories</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Discover hidden superpowers</span>
            </div>
            <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full shadow-sm">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Get actionable insights</span>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-8">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-105 shadow-xl"
            >
              Start Your Discovery
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 text-sm text-muted-foreground">
            Join 10,000+ people uncovering their true potential
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
    </section>
  );
};
