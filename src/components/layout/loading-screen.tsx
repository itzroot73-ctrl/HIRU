'use client';

import { Sparkles } from 'lucide-react';

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
      <div className="relative flex items-center justify-center">
        <Sparkles className="h-24 w-24 text-accent animate-pulse" />
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}
