import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h2>
          <p className="text-lg text-muted-foreground mt-2">A glimpse into the moments we've captured in Sri Lanka.</p>
        </div>
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
                <Card key={image.id} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300 opacity-0 animate-fade-in-up" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
                <CardContent className="p-0">
                    <div className="aspect-square">
                    <Image
                        src={image.imageUrl}
                        alt={image.description}
                        width={600}
                        height={600}
                        className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                        data-ai-hint={image.imageHint}
                    />
                    </div>
                </CardContent>
                </Card>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
}
