import Logo from '@/components/logo';

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col sm:flex-row items-center justify-between gap-4">
        <Logo />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} HIRU. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
