import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <div id="how-it-works">
          <Features />
        </div>
        <div id="testimonials">
          <Testimonials />
        </div>
        <CTA />
      </main>
      
      {/* Footer */}
      <footer className="border-t border-border bg-accent/30 py-12">
        <div className="container px-4">
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Swift Spark. All rights reserved.
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
