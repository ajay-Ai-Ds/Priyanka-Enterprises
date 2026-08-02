import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import Link from "next/link";
import { Shield, FileCheck, CheckCircle2, ArrowLeft, Phone, Mail, MapPin, AlertCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions | Priyanka Enterprises Hyderabad",
  description: "Terms and Conditions governing safety net installation, warranty policies, service estimates, and payments for Priyanka Enterprises Hyderabad.",
  keywords: [
    "Terms and Conditions Priyanka Enterprises",
    "Priyanka Enterprises Warranty Policy",
    "Safety Nets Service Terms Hyderabad",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Priyanka Enterprises Hyderabad",
    description: "Read our official terms of service, payment policies, and installation warranties for balcony safety nets and invisible grills.",
    url: "https://www.priyankaenterpriseshyderabad.com/terms-and-conditions",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "August 1, 2026";

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
              <FileCheck className="w-5 h-5" />
              <span>Service Terms & Operating Policy</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              These Terms and Conditions govern all installation services, site inspections, warranties, and supply agreements provided by Priyanka Enterprises Hyderabad.
            </p>
            <div className="mt-4 inline-block bg-slate-800/80 px-3 py-1.5 rounded-md text-xs text-slate-400 border border-slate-700">
              Last Updated: <span className="text-slate-200 font-medium">{lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Content Body */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-10 space-y-10">
            
            {/* Section 1: Business Operations Overview */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">1</span>
                Business Operations & Identity
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                <strong>Priyanka Enterprises</strong> (&quot;the Firm&quot;, &quot;we&quot;, &quot;us&quot;) operates as a registered direct service provider headquartered at <em>Lingampally, Ameenpur Road, near Sri Sai Baba Temple, Hyderabad, Telangana - 502032</em>.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                We manufacture, supply, and directly install High-Density Polyethylene (HDPE) safety nets, Stainless Steel 316 Marine-Grade Invisible Grills, Pigeon Nets, and Ceiling Pulley Cloth Hangers across residential apartments, gated communities, commercial structures, and sports facilities in Hyderabad and Secunderabad.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 2: Site Inspection & Quotes */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">2</span>
                Site Inspection & Price Quotations
              </h2>
              <ul className="space-y-2 text-slate-700 list-none pl-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Free Site Visit:</strong> On-site measurement and consultations within Greater Hyderabad are conducted without obligation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Transparent Quotations:</strong> Price quotes are calculated on a per-square-foot basis or fixed unit rate based on material chosen (HDPE mesh vs Stainless Steel Invisible Grill). All hardware, anchorage hooks, and labor charges are explicitly itemized prior to installation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Price Validity:</strong> Written quotations are valid for 30 calendar days from the date of issuance.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Section 3: Installation & Service Execution */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">3</span>
                Installation & Technician Safety
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Services are carried out exclusively by trained, in-house technical staff employed by Priyanka Enterprises. Our technicians adhere to strict safety standards, utilizing industrial safety harnesses and anchors for high-rise installations.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                Property owners or representatives are requested to grant safe access to electricity points for drilling equipment and ensure balcony clearance during execution.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 4: Payment Terms & Invoicing */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">4</span>
                Payment Terms & Invoicing
              </h2>
              <ul className="space-y-2 text-slate-700 list-none pl-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Payment upon Completion:</strong> Payment is due immediately upon satisfactory completion and verification of installation.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Accepted Payment Methods:</strong> UPI transfers (Google Pay, PhonePe, Paytm), Bank Account Transfer (IMPS/NEFT), or Cash.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Warranty Card & Invoice:</strong> A signed invoice and physical warranty certificate specifying the guarantee period (5 to 10 years depending on net grade) is issued upon payment receipt.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Section 5: Warranty & Guarantee Policy */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">5</span>
                Material & Installation Warranty Policy
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Priyanka Enterprises guarantees high tensile strength, UV stabilization, and weather resilience for all installed safety nets and invisible grills:
              </p>
              <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 space-y-3 text-sm text-slate-700">
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>UV-Stabilized HDPE Safety Nets:</strong> Covered against natural sun degradation, sagging, and knot slippage for 5 to 8 years.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <Shield className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <span><strong>SS 316 Marine-Grade Invisible Grills:</strong> Covered against rust, corrosion, and structural cable loosening for up to 10 years.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <AlertCircle className="w-5 h-5 text-slate-500 shrink-0 mt-0.5" />
                  <span><strong>Warranty Exclusions:</strong> Warranty does not apply to intentional damage, external sharp-blade cuts, extreme structural building modifications by third parties, or unapproved alterations.</span>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Section 6: Contact Information */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">6</span>
                Questions & Service Inquiries
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                For questions regarding these terms, warranty claims, or booking requests, please contact our customer support team:
              </p>

              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
                <div className="font-bold text-lg text-amber-400 font-display">Priyanka Enterprises Hyderabad</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Helpline / Hotline</span>
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
                        Lingampally, Ameenpur Road, near Sri Sai Baba Temple, Hyderabad, Telangana - 502032
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
