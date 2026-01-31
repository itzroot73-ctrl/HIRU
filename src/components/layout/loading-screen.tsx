'use client';

import Logo from '@/components/logo';

interface LoadingScreenProps {
  loading: boolean;
}

export default function LoadingScreen({ loading }: LoadingScreenProps) {
  return (
    <div
      className={`fixed inset-0 bg-background z-[100] flex items-center justify-center transition-opacity duration-500 ${
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!loading}
    >
      <div className="animate-pulse-strong">
        <Logo />
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
