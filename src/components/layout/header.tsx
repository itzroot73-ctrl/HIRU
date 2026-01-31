"use client";

import Link from 'next/link';
import { useUser } from '@/firebase';
import Logo from '@/components/logo';
import AuthButton from '@/components/auth/auth-button';
import { ThemeToggle } from '@/components/theme-toggle';
import { LanguageToggle } from '@/components/language-toggle';
import { useTranslation } from '@/hooks/use-translation';

export default function Header() {
    const { user } = useUser();
    const { t } = useTranslation();

    const navLinks = [
        { href: "/#services", label: t('header.services') },
        { href: "/#gallery", label: t('header.gallery') },
        { href: "/#about", label: t('header.about') },
    ];

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
                        {t('header.dashboard')}
                    </Link>
                    <Link href="/services" className="text-foreground/70 transition-colors hover:text-foreground">
                        {t('header.packages')}
                    </Link>
                    <Link href="/payments" className="text-foreground/70 transition-colors hover:text-foreground">
                        {t('header.payments')}
                    </Link>
                    <Link href="/feedback" className="text-foreground/70 transition-colors hover:text-foreground">
                        {t('header.feedback')}
                    </Link>
                </>
            )}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <LanguageToggle />
            <ThemeToggle />
            <AuthButton />
        </div>
      </div>
    </header>
  );
}

    