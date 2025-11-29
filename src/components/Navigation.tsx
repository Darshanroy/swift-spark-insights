import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Swift Spark" className="h-8 w-8 object-contain" />
            <span className="text-xl font-bold">Swift Spark</span>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how-it-works" className="text-foreground hover:text-primary transition-colors">
              How It Works
            </a>
            <a href="#testimonials" className="text-foreground hover:text-primary transition-colors">
              Testimonials
            </a>
            <Button variant="outline" size="sm">
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
