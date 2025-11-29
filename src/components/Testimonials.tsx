import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Alex Rivera",
    role: "Marketing Manager",
    content: "This nailed my career pivot! I discovered strengths I didn't even know I had. The action plan actually worked.",
    rating: 5
  },
  {
    name: "Jordan Kim",
    role: "Software Developer",
    content: "Finally, a self-discovery tool that doesn't feel like therapy homework. Quick, insightful, and surprisingly accurate.",
    rating: 5
  },
  {
    name: "Sam Taylor",
    role: "Designer",
    content: "The AI analysis revealed patterns across my stories that I never connected. Game-changer for understanding my creative process.",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            What People Are Discovering
          </h2>
          <p className="text-xl text-muted-foreground">
            Real insights from real people
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6 space-y-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground italic">"{testimonial.content}"</p>
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
