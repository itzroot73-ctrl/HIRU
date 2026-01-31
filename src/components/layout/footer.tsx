import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Logo />
           <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} HIRU. All rights reserved.
          </p>
        </div>
        <p className="text-sm text-muted-foreground font-semibold">
          Contact: +94 77 123 4567
        </p>
      </div>
    </footer>
  );
}
