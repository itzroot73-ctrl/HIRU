import { Camera, PartyPopper, User, CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

const features = [
  {
    icon: Camera,
    title: "Wedding Photography",
    description: "Your special day, captured with elegance and emotion. We focus on the authentic moments, telling the story of your love from the grandest gestures to the smallest details.",
    points: ["Full-day coverage", "Candid moments & posed portraits", "High-resolution digital gallery"],
  },
  {
    icon: User,
    title: "Portrait Sessions",
    description: "Whether for professional headshots, family photos, or creative portraits, we craft images that reflect your unique personality and style.",
    points: ["Studio or on-location shoots", "Professional retouching", "Personalized styling advice"],
  },
  {
    icon: PartyPopper,
    title: "Event Coverage",
    description: "From corporate events to milestone birthdays, we provide dynamic coverage that captures the energy and atmosphere of any gathering.",
    points: ["Discreet & professional presence", "Quick turnaround times", "Highlights and full galleries"],
  }
];

export default function ScrollingFeatureSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2">Tailored photography services to meet your needs.</p>
        </div>
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                    <div key={feature.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
                        <Card className="h-full bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary transition-colors duration-300">
                            <CardHeader className="items-center text-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle>{feature.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-muted-foreground text-center mb-6 flex-grow">{feature.description}</p>
                                <ul className="space-y-3 pt-4 border-t border-border/30">
                                {feature.points.map(point => (
                                    <li key={point} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="text-foreground/90">{point}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                );
            })}
        </div>
      </div>
    </section>
  );
}
