'use client';

import { useUser } from '@/firebase';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import FeedbackForm from '@/components/feedback/feedback-form';
import FeedbackList from '@/components/feedback/feedback-list';
import { Button } from '@/components/ui/button';
import AuthButton from '@/components/auth/auth-button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2 } from 'lucide-react';

export default function FeedbackPage() {
  const { user, isUserLoading } = useUser();

  if (isUserLoading) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow flex items-center justify-center">
                <Loader2 className="h-16 w-16 animate-spin text-primary" />
            </main>
            <Footer />
        </div>
    );
  }

  if (!user) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-3xl font-bold">Access Denied</h1>
                <p className="text-muted-foreground">You must be signed in to view this page and leave feedback.</p>
                <AuthButton />
            </main>
            <Footer />
        </div>
    );
  }


  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container py-12 md:py-16">
        <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
                <h1 className="text-4xl md:text-5xl font-bold font-headline">Share Your Feedback</h1>
                <p className="mt-2 text-lg text-muted-foreground">We'd love to hear about your experience with our services.</p>
            </div>
            <Card className="bg-card/60">
                <CardHeader>
                    <CardTitle>Leave a Review</CardTitle>
                </CardHeader>
                <CardContent>
                    <FeedbackForm userProfileId={user.uid} />
                </CardContent>
            </Card>

            <Card className="bg-card/60">
                <CardHeader>
                    <CardTitle>Your Past Feedback</CardTitle>
                </CardHeader>
                <CardContent>
                    <FeedbackList userProfileId={user.uid} />
                </CardContent>
            </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
