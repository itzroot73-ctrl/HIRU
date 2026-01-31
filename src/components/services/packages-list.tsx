'use client';

import { Camera, User, PartyPopper, CheckCircle2, ShoppingCart, CreditCard, Landmark, Phone, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Separator } from "@/components/ui/separator";

const packages = [
  {
    icon: Camera,
    title: "Basic Wedding",
    price: "LKR 80,000",
    description: "Ideal for intimate ceremonies. Capturing the essential moments of your special day.",
    points: ["4 hours coverage", "1 photographer", "200 edited photos", "Online gallery"],
  },
  {
    icon: PartyPopper,
    title: "Standard Wedding",
    price: "LKR 150,000",
    description: "Comprehensive coverage for your wedding day, from preparation to reception.",
    points: ["8 hours coverage", "2 photographers", "400 edited photos", "Online gallery & USB", "10-page photo album"],
  },
  {
    icon: Camera,
    title: "Premium Wedding",
    price: "LKR 250,000",
    description: "The complete package for a truly unforgettable wedding experience.",
    points: ["Full day coverage", "2 photographers, 1 videographer", "600 edited photos", "5-min highlight video", "Premium 30-page album"],
  },
  {
    icon: User,
    title: "Portrait Session",
    price: "LKR 30,000",
    description: "Professional portraits for individuals, couples, or families.",
    points: ["2-hour session", "On-location or studio", "50 edited photos", "Personalized styling advice"],
  },
  {
    icon: PartyPopper,
    title: "Event Photography",
    price: "LKR 60,000",
    description: "Coverage for corporate events, birthdays, and other special occasions.",
    points: ["3 hours coverage", "1 photographer", "150 edited photos", "Quick turnaround"],
  }
];

export default function PackagesList() {
    const { toast } = useToast();

    const handlePurchase = (packageName: string) => {
        toast({
            title: "Purchase Not Implemented",
            description: `Real payment processing for the ${packageName} package is not yet available.`,
        });
    }

  return (
    <section id="packages" className="py-16 md:py-24 bg-secondary/20 overflow-hidden">
      <div className="container">
        <div className="text-center mb-12 opacity-0 animate-fade-in-up">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Packages</h2>
          <p className="text-lg text-muted-foreground mt-2">Choose the perfect package for your needs.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                    <div key={pkg.title} className="opacity-0 animate-fade-in-up" style={{ animationDelay: `${100 * (index + 1)}ms` }}>
                        <Card className="h-full flex flex-col bg-card/60 backdrop-blur-sm border-border/50 hover:border-primary transition-colors duration-300">
                            <CardHeader className="items-center text-center">
                                <div className="p-4 bg-primary/10 rounded-full mb-4">
                                    <Icon className="w-8 h-8 text-primary" />
                                </div>
                                <CardTitle>{pkg.title}</CardTitle>
                                <CardDescription className="text-lg font-bold text-primary">{pkg.price}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-muted-foreground text-center mb-6 flex-grow">{pkg.description}</p>

                                <ul className="space-y-3 pt-4 border-t border-border/30">
                                {pkg.points.map(point => (
                                    <li key={point} className="flex items-center gap-3">
                                    <CheckCircle2 className="h-5 w-5 text-primary" />
                                    <span className="text-foreground/90">{point}</span>
                                    </li>
                                ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button className="w-full" onClick={() => handlePurchase(pkg.title)}>
                                    <ShoppingCart className="mr-2 h-4 w-4" />
                                    Purchase Package
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                );
            })}
        </div>

        <Separator className="my-16" />

        <div className="max-w-4xl mx-auto text-center">
             <h3 className="font-headline text-3xl font-bold mb-4">Contact & Payment</h3>
             <p className="text-muted-foreground mb-8">
                Ready to book or have questions? Get in touch with us! We accept multiple payment methods for your convenience.
             </p>
             <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4 text-left">
                    <h4 className="font-bold text-lg text-primary">Contact Details</h4>
                     <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <Phone className="w-5 h-5 text-primary" />
                        <span>+94 77 123 4567 (WhatsApp)</span>
                    </a>
                     <a href="mailto:contact@hiru.com" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
                        <Mail className="w-5 h-5 text-primary" />
                        <span>contact@hiru.com</span>
                    </a>
                </div>
                 <div className="space-y-4 text-left">
                    <h4 className="font-bold text-lg text-primary">Payments We Accept</h4>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <CreditCard className="w-5 h-5 text-primary" />
                        <span>Visa & Mastercard</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                        <Landmark className="w-5 h-5 text-primary" />
                        <span>Direct Bank Transfer</span>
                    </div>
                 </div>
             </div>
        </div>

      </div>
    </section>
  );
}

    