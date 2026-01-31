import Header from '@/components/layout/header';
import HeroSection from '@/components/home/hero-section';
import GallerySection from '@/components/home/gallery-section';
import AboutSection from '@/components/home/about-section';
import ScrollingFeatureSection from '@/components/home/scrolling-feature-section';
import Footer from '@/components/layout/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <GallerySection />
        <AboutSection />
        <ScrollingFeatureSection />
      </main>
      <Footer />
    </div>
  );
}
