"use client";

import { useState } from "react";
import { Phone, Shield, CheckCircle2, Star, ArrowRight, Eye, Layers, Lock, Award, MessageCircle } from "lucide-react";
import Image from "next/image";
import { handleLeadSubmission, trackGoogleConversion } from "@/utils/conversion";

export default function InvisibleGrillsClient() {
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
      service: "Invisible Grills (SS 316)",
      location,
      message: "Enquiry from Invisible Grills Landing Page",
    });

    setSubmittedUrl(whatsappUrl);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const whatsappDirectUrl = `https://wa.me/918121488961?text=${encodeURIComponent(
    "Hello Priyanka Enterprises, I want a free site inspection & quote for SS 316 Invisible Grills in Hyderabad."
  )}`;

  return (
    <div>
      {/* Dedicated Hero Section for Invisible Grills */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/balconygrill.webp"
            alt="Invisible Grills Hyderabad Balcony"
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
                <span>Marine Grade 316 Stainless Steel</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
                Modern <span className="text-accent">Invisible Grills</span> for Hyderabad Apartments
              </h1>

              <p className="text-slate-200 text-base sm:text-xl font-medium leading-relaxed max-w-2xl">
                Enjoy 100% unobstructed panoramic balcony views without compromising child & pet safety. Engineered to withstand 400kg+ tensile load.
              </p>

              {/* Feature Highlights */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "316 Grade Stainless Steel",
                  "400kg Tensile Strength",
                  "Nylon Anti-Scratch Coating",
                  "5 Years Anti-Rust Guarantee",
                  "Zero View Obstruction",
                  "Same Day Free Site Visit",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-2 text-xs sm:text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-accent shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Call to Action Buttons */}
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
                  <span>WhatsApp Instant Quote</span>
                </a>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100">
              <div className="text-center mb-6">
                <span className="bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Special Offer
                </span>
                <h2 className="text-2xl font-bold font-display text-slate-900 mt-2">Get Free On-Site Quote</h2>
                <p className="text-slate-600 text-xs mt-1">Starting from ₹140/sq ft. Technician visit in 2 hours!</p>
              </div>

              {!submittedUrl ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="inv-name" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      id="inv-name"
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inv-phone" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="inv-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="inv-loc" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Locality in Hyderabad
                    </label>
                    <input
                      id="inv-loc"
                      type="text"
                      placeholder="e.g. Manikonda, Kondapur, Gachibowli"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-light text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Request Free Site Visit</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold font-display text-slate-900">Request Sent!</h3>
                  <p className="text-xs text-slate-600">Redirecting to WhatsApp to send measurements directly to our technician...</p>
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

      {/* Why Choose Invisible Grills Feature Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">Key Benefits</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mt-2">
              Why Upgrade to SS 316 Invisible Grills?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Traditional heavy iron grills rust, block light, and look like cage bars. Invisible grills give you luxury look with zero safety compromise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">Unobstructed Panoramic View</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Made from 2mm - 3mm high-tensile 316 stainless steel wire cables spaced at 2 to 4 inches. They do not block your apartment view or light.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-accent/20 text-slate-900 rounded-2xl flex items-center justify-center">
                <Lock className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">400kg Tensile Load Capacity</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Each individual cable can withstand up to 400kg of force. Prevents children and pets from accidental balcony fall accidents.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-emerald-500/10 text-emerald-600 rounded-2xl flex items-center justify-center">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold font-display text-slate-900">Marine Grade 316 Anti-Rust</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Coated with transparent protective nylon sheath. Never rusts, peels, or degrades under heavy monsoon rains or harsh Hyderabad sun.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table Section */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-slate-900 font-display">
              Invisible Grills vs Traditional MS Iron Grills
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse bg-slate-50 rounded-2xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-slate-900 text-white text-sm">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-accent">Priyanka Invisible Grills</th>
                  <th className="p-4 sm:p-5 text-slate-400">Traditional Iron Grills</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 text-xs sm:text-sm text-slate-700">
                <tr>
                  <td className="p-4 font-bold">Balcony View & Light</td>
                  <td className="p-4 text-emerald-600 font-bold">100% Unobstructed Clean View</td>
                  <td className="p-4 text-red-500 font-medium">Blocks Light & Looks Like Cage</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Rust Resistance</td>
                  <td className="p-4 text-emerald-600 font-bold">316 SS Marine Grade - Never Rusts</td>
                  <td className="p-4 text-red-500 font-medium">Rusts & Requires Painting Every Year</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Fire Safety Escape</td>
                  <td className="p-4 text-emerald-600 font-bold">Can be cut with cable cutter in emergency</td>
                  <td className="p-4 text-red-500 font-medium">Traps occupants in fire emergencies</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Child & Pet Safety</td>
                  <td className="p-4 text-emerald-600 font-bold">100% Safe (Custom gap spacing)</td>
                  <td className="p-4 text-slate-600">Safe but harsh metal edges</td>
                </tr>
                <tr>
                  <td className="p-4 font-bold">Warranty</td>
                  <td className="p-4 text-emerald-600 font-bold">5 Years Warranty</td>
                  <td className="p-4 text-slate-600">No Warranty</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
