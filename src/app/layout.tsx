import type { Metadata } from 'next';
import { FirebaseClientProvider } from '@/firebase/client-provider';
import { Toaster } from '@/components/ui/toaster';
import MainLayout from '@/components/layout/main-layout';
import './globals.css';
import { ThemeProvider } from '@/hooks/use-theme';
import { LanguageProvider } from '@/hooks/use-translation';

export const metadata: Metadata = {
  title: 'HIRU',
  description: 'A professional photography portfolio website.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        <ThemeProvider
          defaultTheme="dark"
          storageKey="hira-ui-theme"
        >
          <LanguageProvider>
            <FirebaseClientProvider>
              <MainLayout>{children}</MainLayout>
              <Toaster />
            </FirebaseClientProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

    