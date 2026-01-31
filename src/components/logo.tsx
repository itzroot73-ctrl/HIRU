import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="HIRU Home">
      <Camera className="h-6 w-6 text-primary" />
      <span className="font-headline text-xl font-bold tracking-tight text-foreground">
        HIRU
      </span>
    </Link>
  );
}
