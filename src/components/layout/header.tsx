"use client";

import Link from 'next/link';
import { useUser } from '@/firebase';
import Logo from '@/components/logo';
import AuthButton from '@/components/auth/auth-button';
import { ThemeToggle } from '@/components/theme-toggle';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

export default function Header() {
    const { user } = useUser();

    const navLinks = [
        { href: "/#services", label: "Services" },
        { href: "/#gallery", label: "Gallery" },
        { href: "/#about", label: "About" },
    ];

    const loggedInLinks = [
        { href: "/dashboard", label: "Dashboard" },
        { href: "/services", label: "Packages" },
        { href: "/payments", label: "Payments" },
        { href: "/feedback", label: "Feedback" },
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
                    {loggedInLinks.map(link => (
                        <Link key={link.href} href={link.href} className="text-foreground/70 transition-colors hover:text-foreground">
                            {link.label}
                        </Link>
                    ))}
                </>
            )}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-2">
            <ThemeToggle />
            <AuthButton />
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Open menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px]">
                        <SheetHeader className="mb-8 text-left">
                            <Logo />
                        </SheetHeader>
                        <nav className="flex flex-col items-start space-y-6">
                            {navLinks.map((link) => (
                                <SheetClose asChild key={link.href}>
                                    <Link href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                                        {link.label}
                                    </Link>
                                </SheetClose>
                            ))}
                            
                            {user && (
                                <>
                                    <Separator className="my-2" />
                                    {loggedInLinks.map((link) => (
                                        <SheetClose asChild key={link.href}>
                                            <Link href={link.href} className="text-lg font-medium text-foreground/80 transition-colors hover:text-foreground">
                                                {link.label}
                                            </Link>
                                        </SheetClose>
                                    ))}
                                </>
                            )}
                        </nav>
                    </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
