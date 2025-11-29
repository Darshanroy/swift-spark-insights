import { Brain, Zap, Target, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Analysis",
    description: "Our advanced AI analyzes your responses to uncover patterns and insights you might miss about yourself."
  },
  {
    icon: Zap,
    title: "Swift Results",
    description: "Get comprehensive insights in under 5 minutes. No lengthy assessments or waiting periods required."
  },
  {
    icon: Target,
    title: "Personalized Profile",
    description: "Receive a detailed strength profile tailored to you, with actionable career and personal growth recommendations."
  },
  {
    icon: TrendingUp,
    title: "Growth Roadmap",
    description: "Get a customized 30-day action plan with specific steps to leverage your strengths and address gaps."
  }
];

export const Features = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-accent/20 via-background to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              How Swift Spark Works
            </h2>
            <p className="text-xl text-muted-foreground">
              A simple, powerful journey to self-discovery in four seamless steps
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition-transform">
                    <Icon className="h-6 w-6" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
