'use client';

import { useUser } from '@/firebase';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import AuthButton from '@/components/auth/auth-button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import PageLoader from '@/components/layout/page-loader';
import { useTranslation } from '@/hooks/use-translation';

export default function DashboardPage() {
  const { user, isUserLoading } = useUser();
  const { t } = useTranslation();
  const dashboardImages = PlaceHolderImages.filter(img => img.id.startsWith('dashboard-'));

  if (isUserLoading) {
    return <PageLoader />;
  }

  if (!user) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-3xl font-bold">Access Denied</h1>
                <p className="text-muted-foreground">You must be signed in to view your dashboard.</p>
                <AuthButton />
            </main>
            <Footer />
        </div>
    );
  }

  const firstName = user.displayName?.split(' ')[0] || 'there';

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center opacity-0 animate-fade-in-up">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">{t('dashboard.welcome', { name: firstName })}</h1>
                <p className="mt-2 text-lg text-muted-foreground">{t('dashboard.description')}</p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
                {dashboardImages.map((image, index) => (
                    <div key={image.id} className="rounded-lg overflow-hidden shadow-lg opacity-0 animate-fade-in-up" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
                        <Image
                            src={image.imageUrl}
                            alt={image.description}
                            width={600}
                            height={400}
                            className="object-cover w-full h-full"
                            data-ai-hint={image.imageHint}
                        />
                    </div>
                ))}
            </div>

            <Card className="bg-card/60 opacity-0 animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                <CardHeader>
                    <CardTitle className="text-center">{t('dashboard.missionTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="text-center text-foreground/80">
                    <p>
                        {t('dashboard.missionDescription')}
                    </p>
                </CardContent>
            </Card>

            <Card className="bg-card/60 opacity-0 animate-fade-in-up" style={{ animationDelay: '500ms' }}>
                <CardHeader>
                    <CardTitle className="text-center">{t('dashboard.nextStepsTitle')}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row gap-4 items-center justify-center">
                    <Button asChild size="lg" className="group">
                        <Link href="/services">
                            {t('dashboard.servicesButton')} <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </Button>
                     <Button asChild size="lg" variant="outline">
                        <Link href="/payments">
                            {t('dashboard.paymentsButton')}
                        </Link>
                    </Button>
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

    