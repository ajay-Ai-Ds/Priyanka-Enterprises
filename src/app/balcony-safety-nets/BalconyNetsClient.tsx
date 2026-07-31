"use client";

import { useState } from "react";
import { Phone, Shield, CheckCircle2, ArrowRight, MessageCircle, Star, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { handleLeadSubmission, trackGoogleConversion } from "@/utils/conversion";

export default function BalconyNetsClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please fill in your Name and Phone Number.");
      return;
    }

    const whatsappUrl = handleLeadSubmission({
      name,
      phone,
      service: "Balcony & Pigeon Safety Nets",
      location,
      message: "Enquiry from Balcony Safety Nets Landing Page",
    });

    setSubmittedUrl(whatsappUrl);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const whatsappDirectUrl = `https://wa.me/918121488961?text=${encodeURIComponent(
    "Hello Priyanka Enterprises, I want a free site inspection & quote for Balcony & Pigeon Safety Nets in Hyderabad."
  )}`;

  return (
    <div>
      {/* Hero Banner for Balcony Safety Nets */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/pigeonsafetynet.webp"
            alt="Balcony Safety Nets Hyderabad"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs sm:text-sm font-extrabold uppercase tracking-wider">
                <Shield className="w-4 h-4 text-accent" />
                <span>Heavy-Duty UV Stabilized Netting</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
                Hyderabad's #1 <span className="text-accent">Balcony & Pigeon Nets</span>
              </h1>

              <p className="text-slate-200 text-base sm:text-xl font-medium leading-relaxed max-w-2xl">
                Protect your children, pets, and balconies from accidental fall hazards and pigeon dirt. High density Garware quality HDPE nets.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "100% Child & Pet Safe",
                  "Blocks All Pigeon Entries",
                  "UV-Stabilized Anti-Sun Net",
                  "Stainless Steel Anchor Hooks",
                  "Up to 5 Years Warranty",
                  "Same Day Free Site Visit",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <a
                  href="tel:+918121488961"
                  onClick={() => trackGoogleConversion()}
                  className="bg-accent hover:bg-accent-dark text-slate-900 px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base flex items-center space-x-2 shadow-lg transition-all"
                >
                  <Phone className="w-5 h-5 fill-slate-900" />
                  <span>Call +91 81214 88961</span>
                </a>

                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackGoogleConversion()}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-extrabold text-sm sm:text-base flex items-center space-x-2 shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>WhatsApp Quote</span>
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="text-center mb-6">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Starting @ ₹15/sq ft
                </span>
                <h2 className="text-2xl font-bold font-display text-slate-900 mt-2">Book Free Site Visit</h2>
                <p className="text-slate-600 text-xs mt-1">Free measurements & instant quote in 15 mins!</p>
              </div>

              {!submittedUrl ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="blc-name" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      id="blc-name"
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="blc-phone" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="blc-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="blc-loc" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Locality in Hyderabad
                    </label>
                    <input
                      id="blc-loc"
                      type="text"
                      placeholder="e.g. Hafeezpet, Gachibowli, Manikonda"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Request Free Inspection</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold font-display text-slate-900">Enquiry Submitted!</h3>
                  <p className="text-xs text-slate-600">Connecting directly on WhatsApp to confirm measurement team arrival...</p>
                  <a
                    href={submittedUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm"
                  >
                    <span>Open WhatsApp Lead Now</span>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
