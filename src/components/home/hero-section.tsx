import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative h-[calc(100vh-56px)] w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 -z-10 brightness-50"
        poster="https://storage.googleapis.com/aifirebase-75fb8.appspot.com/images%2Fwedding_couple_poster.jpg"
      >
        <source src="https://storage.googleapis.com/aifirebase-75fb8.appspot.com/videos%2Fwedding_couple.mp4" type="video/mp4" />
      </video>
      <div className="container relative z-10 flex h-full items-center justify-center text-center">
        <div className="max-w-3xl mx-auto space-y-6 opacity-0 animate-fade-in-up">
          <span className="text-accent font-semibold tracking-wider uppercase">Timeless Photography</span>
          <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white">
            Capturing Moments, Creating Art
          </h1>
          <p className="text-lg md:text-xl text-neutral-300">
            I turn your special moments into timeless works of art. Based in Sri Lanka, I specialize in telling stories through beautiful, high-quality photographs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="group transition-transform duration-300 hover:scale-105">
              <Link href="/services">
                Our Services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="transition-transform duration-300 hover:scale-105 bg-transparent text-white hover:bg-white hover:text-black">
              <Link href="#gallery">
                View Gallery
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
