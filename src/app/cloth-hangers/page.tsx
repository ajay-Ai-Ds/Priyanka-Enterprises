import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import PriceCalculator from "@/components/PriceCalculator";
import ClothHangersClient from "./ClothHangersClient";

export const metadata: Metadata = {
  title: "Ceiling Cloth Drying Hangers Hyderabad | Pulley & Motorized Systems | Priyanka Enterprises",
  description: "Hyderabad's best ceiling-mounted cloth drying hangers. Heavy-duty stainless steel & aluminum pulley rods, space-saving designs, same-day installation. Call +91 81214 88961 for a free visit!",
  keywords: [
    "Cloth Hangers Hyderabad",
    "Ceiling Cloth Drying Hangers Hyderabad",
    "Balcony Cloth Hangers Hyderabad",
    "Pulley Cloth Hanger Hyderabad",
    "Motorized Cloth Drying System Hyderabad",
    "Cloth Drying Stand Hyderabad",
    "Best Cloth Hangers Installation Hyderabad",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/cloth-hangers",
  },
  openGraph: {
    title: "Ceiling Cloth Drying Hangers Hyderabad | Priyanka Enterprises",
    description: "Save 100% balcony floor space with ceiling-mounted pulley cloth drying systems in Hyderabad. High quality stainless steel & heavy duty nylon ropes.",
    url: "https://www.priyankaenterpriseshyderabad.com/cloth-hangers",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.priyankaenterpriseshyderabad.com/images/clothhanger.webp",
        width: 1200,
        height: 630,
        alt: "Ceiling Cloth Drying Hangers Hyderabad",
      },
    ],
  },
};

export default function ClothHangersPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24">
        <ClothHangersClient />
        <PriceCalculator />
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
