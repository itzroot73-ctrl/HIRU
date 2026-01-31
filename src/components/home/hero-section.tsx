import Image from 'next/image';
import Link from 'next/link';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
    const heroImage = PlaceHolderImages.find(img => img.id === 'hero-illustration');

  return (
    <section className="bg-background w-full">
        <div className="container grid md:grid-cols-2 gap-8 md:gap-16 items-center min-h-[calc(100vh-56px)] py-12 md:py-20">
            <div className="space-y-6 opacity-0 animate-fade-in-up text-center md:text-left">
                <span className="text-accent font-semibold tracking-wider uppercase">Timeless Photography</span>
                <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter">
                    Capturing Moments, Creating Art
                </h1>
                <p className="max-w-xl text-lg md:text-xl text-muted-foreground mx-auto md:mx-0">
                I turn your special moments into timeless works of art. Based in Sri Lanka, I specialize in telling stories through beautiful, high-quality photographs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <Button asChild size="default" className="group transition-transform duration-300 hover:scale-105">
                        <Link href="#services">
                            Our Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                    <Button asChild size="default" variant="outline" className="transition-transform duration-300 hover:scale-105">
                        <Link href="#gallery">
                            View Gallery
                        </Link>
                    </Button>
                </div>
            </div>
            <div className="relative aspect-square opacity-0 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                {heroImage && (
                    <Image
                        src={heroImage.imageUrl}
                        alt={heroImage.description}
                        fill
                        className="object-contain"
                        data-ai-hint={heroImage.imageHint}
                        priority
                    />
                )}
            </div>
        </div>
    </section>
  );
}
