import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTAs from "@/components/FloatingCTAs";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, FileText, Phone, Mail, MapPin, ArrowLeft, CheckCircle2, UserCheck, Bell } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Priyanka Enterprises Hyderabad",
  description: "Privacy Policy for Priyanka Enterprises Hyderabad. Learn how we collect, protect, and handle your personal data when requesting safety net installation and site inspection services.",
  keywords: [
    "Privacy Policy Priyanka Enterprises",
    "Priyanka Enterprises Hyderabad Privacy",
    "Safety Nets Hyderabad Privacy Policy",
  ],
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Priyanka Enterprises Hyderabad",
    description: "Read our privacy policy to understand how Priyanka Enterprises Hyderabad safeguards your contact details and personal information.",
    url: "https://www.priyankaenterpriseshyderabad.com/privacy-policy",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "July 31, 2026";

  return (
    <>
      <Header />
      <main className="flex-1 pt-24 pb-16 bg-slate-50">
        {/* Top Breadcrumb & Hero */}
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
              <ShieldCheck className="w-5 h-5" />
              <span>Data Protection & Privacy</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold font-display tracking-tight text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-slate-300 text-base md:text-lg max-w-3xl leading-relaxed">
              At Priyanka Enterprises Hyderabad, your trust and privacy are paramount. This policy outlines how we collect, use, protect, and manage your personal information.
            </p>
            <div className="mt-4 inline-block bg-slate-800/80 px-3 py-1.5 rounded-md text-xs text-slate-400 border border-slate-700">
              Last Updated: <span className="text-slate-200 font-medium">{lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Policy Content */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200/80 p-6 md:p-10 space-y-10">
            
            {/* Quick Summary Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-50 p-6 rounded-xl border border-slate-200">
              <div className="flex items-start space-x-3">
                <Lock className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">100% Confidential</h3>
                  <p className="text-slate-600 text-xs mt-1">We never sell, trade, or rent your personal information to third parties.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <UserCheck className="w-6 h-6 text-blue-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">Purpose-Driven Use</h3>
                  <p className="text-slate-600 text-xs mt-1">Information is used strictly to fulfill site visits, quotes, and service requests.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Eye className="w-6 h-6 text-amber-600 shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-slate-900 text-sm font-display">Transparent Control</h3>
                  <p className="text-slate-600 text-xs mt-1">You can request data correction or removal at any time by contacting us directly.</p>
                </div>
              </div>
            </div>

            {/* Section 1: Overview */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">1</span>
                Introduction & Scope
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Welcome to <strong>Priyanka Enterprises Hyderabad</strong> (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;). We are Hyderabad&apos;s leading provider of balcony safety nets, pigeon protection nets, invisible grills, and ceiling cloth hangers. 
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                This Privacy Policy applies to all users visiting our website (<a href="https://www.priyankaenterpriseshyderabad.com" className="text-blue-700 hover:underline">www.priyankaenterpriseshyderabad.com</a>), submitting inquiries, requesting phone callbacks, or scheduling free site inspection visits across Hyderabad and Telangana.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 2: Information We Collect */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">2</span>
                Information We Collect
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about our products or services:
              </p>
              <ul className="space-y-2 text-slate-700 list-none pl-2">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Contact Information:</strong> Full Name, Phone / Mobile Number, Email Address, and Site Location / Address in Hyderabad.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Service Details:</strong> Details of your safety net or invisible grill requirements, measurements, and balcony specifications.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Communication Records:</strong> WhatsApp messages, call logs, and customer support queries sent to our team.</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 mr-2 shrink-0 mt-0.5" />
                  <span><strong>Technical Data:</strong> IP address, browser type, device type, referring URLs, and page navigation data collected via analytics.</span>
                </li>
              </ul>
            </div>

            <hr className="border-slate-200" />

            {/* Section 3: How We Use Your Information */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">3</span>
                How We Use Your Information
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We use the information we collect strictly for legitimate business operations and service delivery, including:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Service Execution</h4>
                  <p className="text-slate-600 text-xs">Scheduling free site visits, providing price estimates, and dispatching installation technicians to your location.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Customer Support & Invoicing</h4>
                  <p className="text-slate-600 text-xs">Sending installation confirmations, warranty documentation, and answering post-installation queries.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Website Analytics</h4>
                  <p className="text-slate-600 text-xs">Improving website performance, page load speeds, and user navigation experience.</p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80">
                  <h4 className="font-bold text-slate-900 text-sm mb-1">Advertising Measurement</h4>
                  <p className="text-slate-600 text-xs">Measuring Google Ads campaign effectiveness to ensure relevant service promotion in Hyderabad.</p>
                </div>
              </div>
            </div>

            <hr className="border-slate-200" />

            {/* Section 4: Cookies & Tracking Technologies */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">4</span>
                Cookies & Analytics Tools
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                Our website utilizes standard cookies and analytics tools to enhance your browsing experience. Specifically:
              </p>
              <ul className="space-y-2 text-slate-700 list-none pl-2">
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-slate-900 mt-2 mr-3 shrink-0" />
                  <span><strong>Google Analytics (gtag.js):</strong> Helps us understand visitor counts, popular service pages, and website interaction patterns.</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 rounded-full bg-slate-900 mt-2 mr-3 shrink-0" />
                  <span><strong>Google Tag Manager & Conversion Tracking:</strong> Tracks phone call clicks and quote form conversions to evaluate ad campaigns.</span>
                </li>
              </ul>
              <p className="text-slate-600 text-xs italic mt-2">
                You can choose to disable cookies in your browser settings. However, disabling cookies will not impact your ability to browse our services or call us directly.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 5: Data Protection & Security */}
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">5</span>
                Data Security & Sharing
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
              <p className="text-slate-700 text-base leading-relaxed">
                <strong>No Third-Party Data Sale:</strong> We do NOT sell, rent, or lease your personal information or phone number to marketing agencies or third parties. Information is shared only with our in-house technicians assigned to your installation project or if required by law.
              </p>
            </div>

            <hr className="border-slate-200" />

            {/* Section 6: Policy Updates & Contact Us */}
            <div className="space-y-6">
              <h2 className="text-xl md:text-2xl font-bold text-slate-900 font-display flex items-center">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-slate-900 text-amber-400 text-sm font-bold mr-3 shrink-0">6</span>
                Contact Us Regarding Privacy
              </h2>
              <p className="text-slate-700 text-base leading-relaxed">
                If you have questions, concerns, or requests regarding this Privacy Policy or wishes to update/delete your submitted details, please reach out to us:
              </p>

              <div className="bg-slate-900 text-white p-6 rounded-xl space-y-4">
                <div className="font-bold text-lg text-amber-400 font-display">Priyanka Enterprises Hyderabad</div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-slate-300">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-400 shrink-0" />
                    <div>
                      <span className="block text-xs text-slate-400">Call / WhatsApp</span>
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
                      <span className="block text-xs text-slate-400">Office Location</span>
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
