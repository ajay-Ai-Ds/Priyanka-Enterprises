import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import PriceCalculator from "@/components/PriceCalculator";
import InvisibleGrillsClient from "./InvisibleGrillsClient";

export const metadata: Metadata = {
  title: "Invisible Grills Hyderabad | SS 316 Balcony & Window Grills | Priyanka Enterprises",
  description: "Hyderabad's #1 provider of Marine Grade 316 Stainless Steel Invisible Grills. Unobstructed view, 400kg load capacity, 100% child safe & rust-proof. Call +91 81214 88961 for a free inspection!",
  keywords: [
    "Invisible Grills Hyderabad",
    "Balcony Invisible Grills Hyderabad",
    "Invisible Window Grills",
    "Stainless Steel Invisible Grills Hyderabad",
    "Invisible Grills Price Per Sq Ft Hyderabad",
    "Best Invisible Grills Hyderabad",
    "Balcony Safety Grills Hyderabad",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/invisible-grills",
  },
  openGraph: {
    title: "Invisible Grills Hyderabad | Marine Grade SS 316 Balcony Grills",
    description: "Get modern, rust-proof, high-tensile invisible grills for high-rise balconies and windows in Hyderabad. 5 Year Warranty & Same Day Installation.",
    url: "https://www.priyankaenterpriseshyderabad.com/invisible-grills",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.priyankaenterpriseshyderabad.com/images/balconygrill.webp",
        width: 1200,
        height: 630,
        alt: "Invisible Grills Installation in Hyderabad",
      },
    ],
  },
};

export default function InvisibleGrillsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <InvisibleGrillsClient />
        <PriceCalculator />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
