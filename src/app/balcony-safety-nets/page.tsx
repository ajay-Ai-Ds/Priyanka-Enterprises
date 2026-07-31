import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import PriceCalculator from "@/components/PriceCalculator";
import BalconyNetsClient from "./BalconyNetsClient";

export const metadata: Metadata = {
  title: "Balcony Safety Nets & Pigeon Protection Nets Hyderabad | Priyanka Enterprises",
  description: "Hyderabad's #1 UV-stabilized balcony safety nets & pigeon protection netting. 100% child-safe, durable HDPE netting, same-day installation. Call +91 81214 88961 for a free visit!",
  keywords: [
    "Balcony Safety Nets Hyderabad",
    "Pigeon Safety Nets Hyderabad",
    "Bird Protection Nets Hyderabad",
    "Child Safety Nets Hyderabad",
    "Balcony Netting Cost Hyderabad",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/balcony-safety-nets",
  },
  openGraph: {
    title: "Balcony Safety Nets & Pigeon Nets Hyderabad | Priyanka Enterprises",
    description: "Keep your balcony clean, safe, and pigeon-free with heavy-duty UV-resistant netting in Hyderabad. 5 Year Warranty & Free Site Inspection.",
    url: "https://www.priyankaenterpriseshyderabad.com/balcony-safety-nets",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.priyankaenterpriseshyderabad.com/images/pigeonsafetynet.webp",
        width: 1200,
        height: 630,
        alt: "Balcony Safety Nets Installation Hyderabad",
      },
    ],
  },
};

export default function BalconyNetsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <BalconyNetsClient />
        <PriceCalculator />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
