'use client';

import { useUser } from '@/firebase';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import AuthButton from '@/components/auth/auth-button';
import PageLoader from '@/components/layout/page-loader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CreditCard, Landmark, Bitcoin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function PaymentsPage() {
  const { user, isUserLoading } = useUser();

  const paymentCardImage = PlaceHolderImages.find(img => img.id === 'payment-card');
  const paymentBankImage = PlaceHolderImages.find(img => img.id === 'payment-bank');
  const paymentCryptoImage = PlaceHolderImages.find(img => img.id === 'payment-crypto');

  if (isUserLoading) {
    return <PageLoader />;
  }

  if (!user) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow container flex flex-col items-center justify-center text-center space-y-4">
                <h1 className="text-3xl font-bold">Access Denied</h1>
                <p className="text-muted-foreground">You must be signed in to view payment information.</p>
                <AuthButton />
            </main>
            <Footer />
        </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-secondary/20">
      <Header />
      <main className="flex-grow container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
                <h1 className="font-headline text-4xl md:text-5xl font-bold">Contact & Payment</h1>
                <p className="text-lg text-muted-foreground mt-2">
                Ready to book or have questions? Get in touch! We accept multiple payment methods for your convenience.
                </p>
            </div>

            <Card className="mb-12 bg-card/80 border-amber-500/50 shadow-lg">
                <CardHeader>
                    <CardTitle className="text-amber-500">Important Notice</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-foreground/90">
                    To secure your booking date and begin the creative process, we require a 50% advance payment for all our photography packages. The remaining balance is due on the day of the photoshoot.
                    </p>
                </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <Card className="bg-card/80">
                    <CardHeader>
                        <CardTitle>Contact Details</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                            <Phone className="w-5 h-5 text-primary" />
                            <span>+94 77 123 4567 (WhatsApp)</span>
                        </a>
                        <a href="mailto:contact@hiru.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                            <Mail className="w-5 h-5 text-primary" />
                            <span>contact@hiru.com</span>
                        </a>
                    </CardContent>
                </Card>
                 <Card className="bg-card/80">
                    <CardHeader>
                        <CardTitle>Business Hours</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-muted-foreground">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                        <p>Saturday: 10:00 AM - 4:00 PM</p>
                        <p>Sunday: Closed</p>
                    </CardContent>
                </Card>
            </div>
            
            <div className="text-center mb-12">
                 <h2 className="font-headline text-3xl font-bold">Payment Methods</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                 <Card className="flex flex-col bg-card/80 overflow-hidden group">
                    {paymentCardImage && (
                        <div className="aspect-video relative">
                            <Image src={paymentCardImage.imageUrl} alt={paymentCardImage.description} fill className="object-cover" data-ai-hint={paymentCardImage.imageHint} />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><CreditCard className="w-6 h-6 text-primary" /> Visa & Mastercard</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Securely pay with your credit or debit card.</p>
                    </CardContent>
                </Card>

                 <Card className="flex flex-col bg-card/80 overflow-hidden group">
                    {paymentBankImage && (
                        <div className="aspect-video relative">
                            <Image src={paymentBankImage.imageUrl} alt={paymentBankImage.description} fill className="object-cover" data-ai-hint={paymentBankImage.imageHint} />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Landmark className="w-6 h-6 text-primary" /> Bank Transfer</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">Directly transfer from your bank account. Contact us for details.</p>
                    </CardContent>
                </Card>

                <Card className="flex flex-col bg-card/80 overflow-hidden group">
                    {paymentCryptoImage && (
                        <div className="aspect-video relative">
                            <Image src={paymentCryptoImage.imageUrl} alt={paymentCryptoImage.description} fill className="object-cover" data-ai-hint={paymentCryptoImage.imageHint} />
                        </div>
                    )}
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2"><Bitcoin className="w-6 h-6 text-primary" /> Cryptocurrency</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow">
                        <p className="text-muted-foreground">We accept major cryptocurrencies like Bitcoin (BTC) and Ethereum (ETH).</p>
                    </CardContent>
                </Card>
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
