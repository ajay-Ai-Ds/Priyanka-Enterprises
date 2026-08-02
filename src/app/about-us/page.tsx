import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import Link from "next/link";
import { Building2, ShieldCheck, CheckCircle2, ArrowLeft, Phone, Mail, MapPin, Wrench, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us & Business Operations | Priyanka Enterprises Hyderabad",
  description: "Learn about Priyanka Enterprises Hyderabad - our business model, direct installation services, address, and commitment to balcony safety nets and invisible grills.",
  keywords: [
    "About Priyanka Enterprises",
    "Priyanka Enterprises Hyderabad Address",
    "Safety Nets Provider Hyderabad Business Operations",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/about-us",
  },
  openGraph: {
    title: "About Us & Business Operations | Priyanka Enterprises Hyderabad",
    description: "Discover Hyderabad's leading safety net provider. Direct service model with in-house technicians for balcony nets and invisible grills.",
    url: "https://www.priyankaenterpriseshyderabad.com/about-us",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-slate-50">
        {/* Header Hero */}
        <section className="bg-slate-900 text-white py-12 md:py-16 border-b border-slate-800">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-slate-400 hover:text-amber-400 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <div className="flex items-center space-x-3 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-3">
              <Building2 className="w-5 h-5" />
              <span>Company Profile & Operations</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              About Priyanka Enterprises
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Hyderabad&apos;s trusted direct service provider for high-tensile balcony safety nets, pigeon protection mesh, invisible stainless steel grills, and cloth drying solutions.
            </p>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-10 space-y-10">
            
            {/* Business Model Overview Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-amber-500/10 p-6 rounded-xl border border-amber-500/20">
              <div className="flex items-start space-x-3">
                <Wrench className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">Direct Service Model</h3>
                  <p className="text-slate-600 text-xs mt-1">We operate directly without middle-man agencies or third-party resellers.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Users className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">In-House Skilled Technicians</h3>
                  <p className="text-slate-600 text-xs mt-1">Our certified technical team handles site measurement, drilling, and netting installation.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Award className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">100% Quality Guaranteed</h3>
                  <p className="text-slate-600 text-xs mt-1">UV-stabilized HDPE netting and Marine SS 316 invisible grills with physical warranty cards.</p>
                </div>
              </div>
            </div>

            {/* Section 1: Business Operations */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">1</span>
                Who We Are & How We Operate
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                <strong>Priyanka Enterprises</strong> is a registered local home service business established in Hyderabad, Telangana. We specialize in child safety, bird prevention, pet protection, and balcony enhancement for high-rise apartments, individual houses, villas, and commercial properties.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Our business model is straightforward and transparent: when a customer requests a consultation via our website (<a href="https://www.priyankaenterpriseshyderabad.com" className="text-blue-700 hover:underline">www.priyankaenterpriseshyderabad.com</a>) or phone, our field supervisors carry out a site inspection, provide a direct material quote, and deploy our in-house installation specialists.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 2: Core Services Provided */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">2</span>
                Our Product & Service Portfolio
              </h2>
              <ul className="space-y-3 text-slate-700 list-none pl-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Balcony & Children Safety Nets:</strong> Heavy-duty Garware-grade UV-treated HDPE netting designed to withstand heavy tension and severe weather.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Pigeon & Bird Anti-Roosting Nets:</strong> Durable transparent nylon and HDPE netting to keep balconies and utility spaces bird-free and hygienic.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>316 Grade Stainless Steel Invisible Grills:</strong> Modern high-strength cable grills providing safety without obstructing scenic views.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Ceiling Pulley Cloth Hangers:</strong> Space-saving ceiling cloth drying hangers with smooth pulley mechanisms.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Section 3: Verified Contact & Legal Address */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">3</span>
                Official Contact & Registered Business Address
              </h2>
              
              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
                <div className="font-bold text-lg text-amber-400 font-display">Priyanka Enterprises Hyderabad</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Phone Numbers</span>
                      <a href="tel:+918121488961" className="hover:text-amber-400 font-medium">
                        +91 81214 88961
                      </a>
                      <span className="mx-1">/</span>
                      <a href="tel:+919963217077" className="hover:text-amber-400 font-medium">
                        +91 99632 17077
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Email Address</span>
                      <a href="mailto:Enterprisespriyanka564@gmail.com" className="hover:text-amber-400 font-medium">
                        Enterprisespriyanka564@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 md:col-span-2 pt-2 border-t border-slate-800">
                    <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="block text-xs text-slate-400">Registered Office Address</span>
                      <span className="text-slate-200">
                        Lingampally, Ameenpur Road, near Sri Sai Baba Temple, Hyderabad, Telangana - 502032, India
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
      <FloatingCTAs />
    </>
  );
}
