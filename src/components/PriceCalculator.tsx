"use client";

import { useState } from "react";
import { Calculator, CheckCircle2, Phone, MessageCircle, ArrowRight, ShieldCheck } from "lucide-react";
import { handleLeadSubmission, trackGoogleConversion } from "@/utils/conversion";

const servicePricing = [
  {
    id: "balcony-nets",
    name: "Balcony Safety Nets (HDPE)",
    ratePerSqFt: 15, // Approx starting ₹15-₹25 per sq ft
    minSqFt: 100,
    unit: "sq ft",
    warranty: "5 Years Warranty",
    badge: "Most Popular",
  },
  {
    id: "invisible-grills",
    name: "Invisible Grills (SS 316)",
    ratePerSqFt: 140, // Approx starting ₹140-₹180 per sq ft
    minSqFt: 50,
    unit: "sq ft",
    warranty: "5 Years Anti-Rust Warranty",
    badge: "Premium Quality",
  },
  {
    id: "pigeon-nets",
    name: "Pigeon Protection Nets",
    ratePerSqFt: 18,
    minSqFt: 100,
    unit: "sq ft",
    warranty: "3 Years Warranty",
    badge: "100% Pigeon Proof",
  },
  {
    id: "cloth-hangers",
    name: "Ceiling Cloth Drying Hangers",
    ratePerSqFt: 0, // Flat rate per system
    flatRate: 2499, // ₹2499 starting flat rate
    minSqFt: 0,
    unit: "system",
    warranty: "3 Years Pulley Warranty",
    badge: "Space Saver",
  },
];

export default function PriceCalculator() {
  const [selectedServiceId, setSelectedServiceId] = useState("balcony-nets");
  const [width, setWidth] = useState<number>(10);
  const [height, setHeight] = useState<number>(6);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [submittedUrl, setSubmittedUrl] = useState<string | null>(null);

  const selectedService = servicePricing.find((s) => s.id === selectedServiceId) || servicePricing[0];

  const totalSqFt = Math.max(width * height, 1);

  const calculatedEstimate = selectedService.flatRate
    ? selectedService.flatRate
    : Math.max(totalSqFt, selectedService.minSqFt) * selectedService.ratePerSqFt;

  const handleCalculateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) {
      alert("Please enter your name and phone number to get your free estimate call!");
      return;
    }

    const whatsappUrl = handleLeadSubmission({
      name,
      phone,
      service: selectedService.name,
      location,
      dimensions: selectedService.flatRate ? "Standard Ceiling Set" : `${width} ft x ${height} ft (${totalSqFt} sq ft)`,
      message: `Calculated Estimate: Approx ₹${calculatedEstimate.toLocaleString("en-IN")}`,
    });

    setSubmittedUrl(whatsappUrl);
    
    // Auto redirect after brief moment
    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 400);
  };

  return (
    <section id="calculator" className="py-16 bg-gradient-to-br from-slate-900 via-primary-dark to-slate-950 text-white relative overflow-hidden">
      {/* Glow background effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-accent/20 border border-accent/40 text-accent text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-4 h-4" />
            <span>Instant Price Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display leading-tight">
            Calculate Your Estimated Installation Cost
          </h2>
          <p className="text-slate-300 text-sm sm:text-base mt-3">
            Select your required service and balcony dimensions to get an instant cost range. Free site inspection & measurements included!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Side - Calculator Inputs */}
          <div className="lg:col-span-7 bg-slate-800/80 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-slate-700/60 shadow-2xl space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                1. Select Service Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {servicePricing.map((item) => {
                  const isSelected = selectedServiceId === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setSelectedServiceId(item.id)}
                      className={`p-4 rounded-2xl border text-left transition-all relative flex flex-col justify-between cursor-pointer ${
                        isSelected
                          ? "bg-primary border-accent text-white shadow-lg shadow-primary/40 ring-2 ring-accent/30"
                          : "bg-slate-900/60 border-slate-700/80 text-slate-300 hover:border-slate-500 hover:bg-slate-900"
                      }`}
                    >
                      <span className="text-xs font-bold px-2 py-0.5 rounded bg-accent/20 text-accent border border-accent/30 self-start mb-2">
                        {item.badge}
                      </span>
                      <span className="font-bold text-sm sm:text-base font-display">{item.name}</span>
                      <span className="text-xs text-slate-300 mt-1">
                        {item.flatRate ? `From ₹${item.flatRate}` : `From ₹${item.ratePerSqFt}/sq ft`}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Dimension inputs (if not flat rate) */}
            {!selectedService.flatRate && (
              <div className="space-y-4 pt-2">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                  2. Enter Balcony / Area Measurements (Feet)
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Width (ft)</label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={width}
                      onChange={(e) => setWidth(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold text-base focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-slate-400 mb-1">Height (ft)</label>
                    <input
                      type="number"
                      min={1}
                      max={200}
                      value={height}
                      onChange={(e) => setHeight(Math.max(1, Number(e.target.value)))}
                      className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white font-bold text-base focus:ring-2 focus:ring-accent focus:outline-none"
                    />
                  </div>
                </div>
                <div className="text-xs text-slate-400 flex justify-between pt-1">
                  <span>Total Area: <strong className="text-accent">{totalSqFt} sq ft</strong></span>
                  <span>Minimum billing area: {selectedService.minSqFt} sq ft</span>
                </div>
              </div>
            )}

            {/* Calculated Result Card */}
            <div className="bg-gradient-to-r from-emerald-950/80 via-slate-900 to-slate-900 border border-emerald-500/40 rounded-2xl p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-emerald-400 font-semibold uppercase tracking-wider block">Estimated Price</span>
                <span className="text-3xl sm:text-4xl font-extrabold text-white font-display">
                  ₹{calculatedEstimate.toLocaleString("en-IN")}*
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">Includes materials, installation & warranty</span>
              </div>
              <div className="text-right sm:text-left">
                <span className="inline-flex items-center gap-1 text-xs text-emerald-400 font-bold bg-emerald-500/10 px-3 py-1.5 rounded-lg border border-emerald-500/20">
                  <ShieldCheck className="w-4 h-4" />
                  {selectedService.warranty}
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Get Exact Quote Form */}
          <div className="lg:col-span-5 bg-white text-slate-900 p-6 sm:p-8 rounded-3xl shadow-2xl border border-slate-100 relative">
            <div className="text-center mb-6">
              <h3 className="text-xl font-bold font-display text-slate-900">Lock In Your Discount & Free Visit</h3>
              <p className="text-slate-600 text-xs mt-1">Get an exact on-site quote within 15 minutes. Same-day inspection available!</p>
            </div>

            {!submittedUrl ? (
              <form onSubmit={handleCalculateSubmit} className="space-y-4">
                <div>
                  <label htmlFor="calc-name" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    id="calc-name"
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="calc-phone" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Phone Number *
                  </label>
                  <input
                    id="calc-phone"
                    type="tel"
                    required
                    placeholder="Enter 10-digit phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="calc-loc" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-1">
                    Your Location (Hyderabad Area)
                  </label>
                  <input
                    id="calc-loc"
                    type="text"
                    placeholder="e.g. Manikonda, Gachibowli, Kondapur"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 text-sm focus:ring-2 focus:ring-primary focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent-dark text-slate-900 py-3.5 rounded-xl font-extrabold text-sm flex items-center justify-center space-x-2 shadow-lg transition-all active:scale-98 cursor-pointer"
                >
                  <span>Get Exact Quote on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="pt-2 text-center">
                  <span className="text-xs text-slate-500 block mb-2">Or call directly for immediate assistance:</span>
                  <a
                    href="tel:+918121488961"
                    onClick={() => trackGoogleConversion()}
                    className="inline-flex items-center space-x-2 bg-primary text-white px-5 py-2.5 rounded-xl font-bold text-xs hover:bg-primary-light transition-colors"
                  >
                    <Phone className="w-4 h-4 fill-white" />
                    <span>Call +91 81214 88961</span>
                  </a>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto animate-bounce" />
                <h4 className="text-xl font-bold font-display text-slate-900">Enquiry Generated!</h4>
                <p className="text-xs text-slate-600">
                  Opening WhatsApp with your estimate details... If WhatsApp did not open automatically, click below:
                </p>
                <a
                  href={submittedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-2 bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:bg-emerald-500 transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Open WhatsApp Lead Now</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
