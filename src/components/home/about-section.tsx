import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutSection() {
  const photographerImage = PlaceHolderImages.find(img => img.id === 'about-photographer');

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="relative aspect-square opacity-0 animate-fade-in-up">
            {photographerImage && (
              <Image
                src={photographerImage.imageUrl}
                alt={photographerImage.description}
                width={500}
                height={500}
                className="rounded-lg object-cover shadow-2xl"
                data-ai-hint={photographerImage.imageHint}
              />
            )}
          </div>
          <div className="space-y-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Meet the Artist</h2>
            <Card className="bg-card/60 backdrop-blur-md border-border/50">
                <CardContent className="p-6">
                    <p className="text-lg text-foreground/80 mb-4">
                    Based in the beautiful island of Sri Lanka, I have a passion for storytelling and a keen eye for detail, turning fleeting moments into timeless memories. My approach combines artistic vision with technical expertise to create stunning visuals that resonate.
                    </p>
                    <p className="text-lg text-foreground/80">
                    From the lush green hills to the golden sandy beaches, I capture the essence of your story. Whether it's a wedding or a portrait session, I believe in a collaborative process, working closely with you to bring your vision to life. Let's create something beautiful together.
                    </p>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
