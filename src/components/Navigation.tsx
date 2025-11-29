import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="text-2xl font-display font-bold tracking-tight">Swift Spark</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground/80 hover:text-primary transition-colors font-medium">
              Testimonials
            </a>
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Quiz
            </Button>
          </div>

          {/* Mobile CTA */}
          <div className="md:hidden">
            <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
