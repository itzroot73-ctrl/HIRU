"use client";

import Link from 'next/link';
import { useUser } from '@/firebase';
import Logo from '@/components/logo';
import AuthButton from '@/components/auth/auth-button';

const navLinks = [
    { href: "/#services", label: "Services" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/#about", label: "About" },
];

export default function Header() {
    const { user } = useUser();
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Logo />
        <nav className="ml-10 hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map(link => (
                <Link key={link.href} href={link.href} className="text-foreground/70 transition-colors hover:text-foreground">
                    {link.label}
                </Link>
            ))}
            {user && (
                 <>
                    <Link href="/dashboard" className="text-foreground/70 transition-colors hover:text-foreground">
                        Dashboard
                    </Link>
                    <Link href="/services" className="text-foreground/70 transition-colors hover:text-foreground">
                        Packages
                    </Link>
                    <Link href="/feedback" className="text-foreground/70 transition-colors hover:text-foreground">
                        Feedback
                    </Link>
                </>
            )}
        </nav>
        <div className="flex flex-1 items-center justify-end">
            <AuthButton />
        </div>
      </div>
    </header>
  );
}
