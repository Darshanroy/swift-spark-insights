import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Marketing Manager",
    content: "This completely nailed my career pivot! The insights were spot-on and the action plan actually helped me land my dream job.",
    rating: 5
  },
  {
    name: "Jordan Chen",
    role: "Software Engineer",
    content: "I was skeptical at first, but the AI analysis picked up on patterns I never noticed. It's like having a career coach in your pocket.",
    rating: 5
  },
  {
    name: "Sam Taylor",
    role: "Entrepreneur",
    content: "The 4-step evaluation guide helped me identify my actual strengths vs. what I thought they were. Game changer for my business strategy.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-32 bg-accent/10">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto space-y-16">
          {/* Section Header */}
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight">
              Real People, Real Results
            </h2>
            <p className="text-xl text-muted-foreground">
              See how Swift Spark has helped thousands unlock their potential
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg space-y-4"
              >
                {/* Stars */}
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-foreground/90 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="pt-4 border-t border-border/50">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
