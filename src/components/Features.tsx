import { Card, CardContent } from "@/components/ui/card";
import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI reads between the lines of your responses to uncover patterns you might miss."
  },
  {
    icon: Zap,
    title: "Swift Results",
    description: "Get comprehensive insights in minutes, not months. Quick discovery, deep impact."
  },
  {
    icon: Target,
    title: "Personalized Profiles",
    description: "Receive a unique strength profile with actionable tips tailored to your natural abilities."
  },
  {
    icon: TrendingUp,
    title: "Growth Roadmap",
    description: "Move from insight to action with a clear 30-day plan designed for your strengths."
  }
];

export const Features = () => {
  return (
    <section className="py-24 bg-accent/50">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            How Swift Spark Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform self-discovery from overwhelming to enlightening
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="border-border bg-card hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <CardContent className="pt-6 space-y-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
