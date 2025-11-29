import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/10">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-6xl font-bold">
            Ready to ignite your inner genius?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands discovering their true strengths. Start your journey in just 5 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl hover:scale-105 transition-all"
            >
              Take the Quiz Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="text-lg px-8 py-6 rounded-full"
            >
              Learn More
            </Button>
          </div>
          <p className="text-sm text-muted-foreground pt-4">
            No credit card required • 100% free to start • Takes 5 minutes
          </p>
        </div>
      </div>
    </section>
  );
};
