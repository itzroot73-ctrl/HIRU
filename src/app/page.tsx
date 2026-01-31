'use client';

import { useEffect } from 'react';
import { useUser } from '@/firebase';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/header';
import HeroSection from '@/components/home/hero-section';
import GallerySection from '@/components/home/gallery-section';
import AboutSection from '@/components/home/about-section';
import ScrollingFeatureSection from '@/components/home/scrolling-feature-section';
import Footer from '@/components/layout/footer';
import { Loader2 } from 'lucide-react';

export default function Home() {
  const { user, isUserLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isUserLoading && user) {
      router.push('/dashboard');
    }
  }, [user, isUserLoading, router]);

  if (isUserLoading || user) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
      </div>
    );
  }

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
