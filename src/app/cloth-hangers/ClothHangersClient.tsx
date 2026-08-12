"use client";

import { useState } from "react";
import { Phone, Shield, CheckCircle2, ArrowRight, Sparkles, Sliders, MessageCircle, Home } from "lucide-react";
import Image from "next/image";
import { handleLeadSubmission, trackGoogleConversion } from "@/utils/conversion";

export default function ClothHangersClient() {
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
      service: "Ceiling Cloth Drying Hangers",
      location,
      message: "Enquiry from Cloth Hangers Landing Page",
    });

    setSubmittedUrl(whatsappUrl);
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  const whatsappDirectUrl = `https://wa.me/918121488961?text=${encodeURIComponent(
    "Hello Priyanka Enterprises, I want a free site inspection & quote for Ceiling Cloth Drying Hangers in Hyderabad."
  )}`;

  return (
    <div>
      {/* Hero Banner for Cloth Hangers */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="/images/clothhanger.webp"
            alt="Ceiling Cloth Hangers Hyderabad"
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
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Save 100% Balcony Floor Space</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display leading-tight text-white">
                Ceiling Mounted <span className="text-accent">Cloth Drying Hangers</span>
              </h1>

              <p className="text-slate-200 text-base sm:text-xl font-medium leading-relaxed max-w-2xl">
                Easy pulley-operated stainless steel drying rods. Hang heavy clothes near the ceiling where air circulation is maximum, keeping your balcony floor clean and free.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {[
                  "Rust-Proof Stainless Steel Rods",
                  "Smooth Pulley Gear Mechanism",
                  "Supports Up to 30kg Weight",
                  "Independently Movable Rods",
                  "3 Years Replacement Warranty",
                  "Same Day Quick Installation",
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
                <span className="bg-emerald-500/10 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Starting @ ₹2,499 Flat
                </span>
                <h2 className="text-2xl font-bold font-display text-slate-900 mt-2">Book Free Site Visit</h2>
                <p className="text-slate-600 text-xs mt-1">Get custom rod length measurements & same-day fit!</p>
              </div>

              {!submittedUrl ? (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="hng-name" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Your Name *
                    </label>
                    <input
                      id="hng-name"
                      type="text"
                      required
                      placeholder="Enter full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="hng-phone" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="hng-phone"
                      type="tel"
                      required
                      placeholder="Enter 10-digit mobile number"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <div>
                    <label htmlFor="hng-loc" className="block text-xs font-semibold text-slate-600 uppercase mb-1">
                      Locality in Hyderabad
                    </label>
                    <input
                      id="hng-loc"
                      type="text"
                      placeholder="e.g. Miyapur, Tellapur, Kukatpally"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3.5 rounded-xl font-bold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all cursor-pointer"
                  >
                    <span>Request Free Visit & Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              ) : (
                <div className="py-8 text-center space-y-4">
                  <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
                  <h3 className="text-xl font-bold font-display text-slate-900">Enquiry Submitted!</h3>
                  <p className="text-xs text-slate-600">Opening WhatsApp to connect you directly with our installation team...</p>
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

      {/* Feature Details */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-primary-light">Drying Systems</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display mt-2">
              Choose the Best System for Your Home
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-primary/10 text-primary rounded-2xl flex items-center justify-center">
                <Sliders className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">Ceiling Pulley Cloth Hangers (Manual)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Features 6 individual stainless steel pipes that lower and raise independently using smooth nylon pulleys and high-tensile nylon ropes.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Available in 4ft, 5ft, 6ft, 7ft & 8ft rod sizes</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Holds heavy wet blankets, bedsheets & daily laundry</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Zero floor space consumption</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4">
              <div className="w-12 h-12 bg-accent/20 text-slate-900 rounded-2xl flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-slate-900" />
              </div>
              <h3 className="text-2xl font-bold font-display text-slate-900">Remote Controlled Motorized Systems</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Luxury remote-controlled ceiling dryers with built-in warm air blowers and UV sanitizing lamps to dry clothes fast during monsoon rains.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Wireless remote control up and down motion</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Built-in LED balcony light & automatic obstacle sensor</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Quick warm air dryer for rainy season</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
