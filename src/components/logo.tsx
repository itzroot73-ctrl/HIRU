import Link from 'next/link';
import { Sparkles } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="HIRU Home">
      <Sparkles className="h-6 w-6 text-accent" />
      <span className="font-headline text-xl font-bold tracking-tight text-foreground">
        HIRU
      </span>
    </Link>
  );
}
