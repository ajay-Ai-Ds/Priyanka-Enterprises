// Conversion tracking & lead handling utility

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
    gtag?: (...args: any[]) => void;
  }
}

export function trackGoogleConversion(url?: string) {
  if (typeof window !== "undefined" && typeof window.gtag_report_conversion === "function") {
    try {
      window.gtag_report_conversion(url);
    } catch (err) {
      console.warn("Conversion tracking failed:", err);
    }
  } else if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("event", "conversion", {
        send_to: "AW-18291286869/gdBgCIWs38wcENXG-5FE",
      });
    } catch (err) {
      console.warn("gtag conversion failed:", err);
    }
  }
}

export interface LeadData {
  name: string;
  phone: string;
  service: string;
  location?: string;
  message?: string;
  dimensions?: string;
}

export function handleLeadSubmission(data: LeadData): string {
  // 1. Fire Google Ads conversion event
  trackGoogleConversion();

  // 2. Save lead locally to ensure no lead is ever lost
  try {
    const existingLeads = JSON.parse(localStorage.getItem("priyanka_leads") || "[]");
    existingLeads.push({
      ...data,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem("priyanka_leads", JSON.stringify(existingLeads));
  } catch (e) {
    console.error("Failed to save lead locally", e);
  }

  // 3. Construct formatted WhatsApp lead message
  let text = `*NEW ENQUIRY FROM WEBSITE*\n\n`;
  text += `👤 *Name:* ${data.name.trim()}\n`;
  text += `📞 *Phone:* ${data.phone.trim()}\n`;
  text += `🛠️ *Service Needed:* ${data.service}\n`;
  if (data.location?.trim()) text += `📍 *Location:* ${data.location.trim()}\n`;
  if (data.dimensions?.trim()) text += `📐 *Dimensions:* ${data.dimensions.trim()}\n`;
  if (data.message?.trim()) text += `💬 *Message:* ${data.message.trim()}\n`;
  text += `\n_Please send me a quote and schedule a free site inspection!_`;

  const encoded = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/918121488961?text=${encoded}`;

  return whatsappUrl;
}
