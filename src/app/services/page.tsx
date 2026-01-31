'use client';

import { useUser } from '@/firebase';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import PackagesList from '@/components/services/packages-list';
import AuthButton from '@/components/auth/auth-button';
import PageLoader from '@/components/layout/page-loader';

export default function ServicesPage() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return <PageLoader />;
  }

  if (!user) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-3xl font-bold">Access Denied</h1>
                <p className="text-muted-foreground">You must be signed in to view our packages.</p>
                <AuthButton />
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <PackagesList />
      </main>
      <Footer />
    </div>
  );
}
