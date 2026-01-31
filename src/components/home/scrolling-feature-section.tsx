import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { CheckCircle2 } from "lucide-react";

const features = [
  {
    title: "Wedding Photography",
    description: "Your special day, captured with elegance and emotion. We focus on the authentic moments, telling the story of your love from the grandest gestures to the smallest details.",
    points: ["Full-day coverage", "Candid moments & posed portraits", "High-resolution digital gallery"],
    imageId: "feature-wedding"
  },
  {
    title: "Portrait Sessions",
    description: "Whether for professional headshots, family photos, or creative portraits, we craft images that reflect your unique personality and style.",
    points: ["Studio or on-location shoots", "Professional retouching", "Personalized styling advice"],
    imageId: "feature-portrait"
  },
  {
    title: "Event Coverage",
    description: "From corporate events to milestone birthdays, we provide dynamic coverage that captures the energy and atmosphere of any gathering.",
    points: ["Discreet & professional presence", "Quick turnaround times", "Highlights and full galleries"],
    imageId: "feature-event"
  }
];

export default function ScrollingFeatureSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container space-y-20">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up" >
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-lg text-muted-foreground mt-2">Tailored photography services to meet your needs.</p>
        </div>
        {features.map((feature, index) => {
          const image = PlaceHolderImages.find(img => img.id === feature.imageId);
          const isReversed = index % 2 !== 0;

          return (
            <div key={feature.title} className="grid md:grid-cols-2 gap-8 md:gap-12 items-center opacity-0 animate-fade-in-up" style={{ animationDelay: `${200 * (index + 1)}ms` }}>
              <div className={`relative aspect-video ${isReversed ? 'md:order-last' : ''}`}>
                {image && (
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={800}
                    height={600}
                    className="rounded-lg object-cover shadow-xl"
                    data-ai-hint={image.imageHint}
                  />
                )}
              </div>
              <div className={`space-y-4 ${isReversed ? 'md:order-first' : ''}`}>
                <h3 className="font-headline text-3xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground text-lg">{feature.description}</p>
                <ul className="space-y-2 pt-2">
                  {feature.points.map(point => (
                    <li key={point} className="flex items-center gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary" />
                      <span className="text-foreground/90">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
