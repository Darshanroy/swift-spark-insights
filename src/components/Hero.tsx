import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap, Brain } from "lucide-react";
export const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-accent/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{
        animationDelay: '1s'
      }} />
      </div>

      <div className="container relative z-10 px-4 py-32">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/30 border border-border/50 backdrop-blur-sm animate-fade-in">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Self Discovery</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight leading-tight animate-fade-in">
            Discover what you're
            <br />
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              really good at
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed animate-fade-in" style={{
          animationDelay: '0.1s'
        }}>
            Uncover your hidden strengths in just 5 minutes. No therapy sessions, no endless forms—just honest insights powered by AI.
          </p>

          {/* Value Props */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base animate-fade-in" style={{
          animationDelay: '0.2s'
        }}>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border/30">
              <Zap className="h-4 w-4 text-primary" />
              <span>5 Questions</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border/30">
              <Brain className="h-4 w-4 text-primary" />
              <span>AI Analysis</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-background/50 backdrop-blur border border-border/30">
              <Sparkles className="h-4 w-4 text-primary" />
              <span>Instant Results</span>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-fade-in" style={{
          animationDelay: '0.3s'
        }}>
            <Button size="lg" className="text-lg px-8 py-6 bg-primary text-primary-foreground hover:bg-primary/90 group">
              Start Your Discovery
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              Watch Demo
            </Button>
          </div>

          {/* Social Proof */}
          
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};