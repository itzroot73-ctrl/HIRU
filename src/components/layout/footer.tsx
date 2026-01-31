import Logo from '@/components/logo';
import Link from 'next/link';
import { Landmark, Bitcoin, MessageSquare, CreditCard } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-secondary/20">
      <div className="container py-12 text-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          
          <div className="md:col-span-1 lg:col-span-2 space-y-4">
            <Logo />
            <p className="text-muted-foreground max-w-xs">
              Capturing timeless moments in Sri Lanka.
            </p>
            <p className="text-muted-foreground">
              © {currentYear} HIRU. All rights reserved.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold tracking-wide text-foreground">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <MessageSquare className="w-4 h-4 text-primary" />
                  <span>WhatsApp</span>
                </a>
              </li>
              <li>
                <a href="https://www.fiverr.com/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 16 16"><path d="M12.2,2.8H8.5c-0.2,0-0.4,0-0.6,0.1c-1,0.2-1.9,1-2.1,2c-0.1,0.2-0.1,0.5-0.1,0.7v2.2H3.9C3.4,8,3,8.4,3,8.9v2.1 c0,0.5,0.4,0.9,0.9,0.9h1.8v1H5.7c-0.5,0-0.9,0.4-0.9,0.9v1.2c0,0.5,0.4,0.9,0.9,0.9h6.5c0.5,0,0.9-0.4,0.9-0.9V3.7 C13.1,3.2,12.7,2.8,12.2,2.8z M8.5,9.6c-0.7,0-1.3-0.6-1.3-1.3s0.6-1.3,1.3-1.3s1.3,0.6,1.3,1.3S9.2,9.6,8.5,9.6z"/></svg>
                  <span>Fiverr</span>
                </a>
              </li>
              <li>
                 <p className="flex items-center gap-2 text-muted-foreground">
                    <span className="text-primary font-bold">+94 77 123 4567</span>
                 </p>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold tracking-wide text-foreground">Payments We Accept</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-muted-foreground">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Visa & Mastercard</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Landmark className="w-4 h-4 text-primary" />
                <span>Bank Transfer</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Bitcoin className="w-4 h-4 text-primary" />
                <span>Cryptocurrency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
