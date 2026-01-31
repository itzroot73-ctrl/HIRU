import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';

export default function GallerySection() {
  const galleryImages = PlaceHolderImages.filter(img => img.id.startsWith('gallery-'));

  return (
    <section id="gallery" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Work</h2>
          <p className="text-lg text-muted-foreground mt-2">A glimpse into the moments we've captured.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <Card key={image.id} className="overflow-hidden group border-2 border-transparent hover:border-primary transition-all duration-300">
              <CardContent className="p-0">
                <div className="aspect-w-3 aspect-h-4">
                  <Image
                    src={image.imageUrl}
                    alt={image.description}
                    width={600}
                    height={800}
                    className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-300"
                    data-ai-hint={image.imageHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
