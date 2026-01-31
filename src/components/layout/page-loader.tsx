'use client';

import Logo from '@/components/logo';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export default function PageLoader() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="animate-pulse-strong">
          <Logo />
        </div>
        <span className="sr-only">Loading...</span>
      </main>
      <Footer />
    </div>
  );
}
