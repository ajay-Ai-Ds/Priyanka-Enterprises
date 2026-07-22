import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Priyanka Enterprises Hyderabad | Premium Balcony Safety Nets & Invisible Grills",
  description: "Priyanka Enterprises is Hyderabad's leading provider of premium, UV-resistant safety nets, invisible grills, and ceiling cloth hangers. Same-day installation. 100% safe & affordable. Call +91 81214 88961 for a free inspection!",
  keywords: [
    "Hyderabad Safety Nets",
    "Safety Nets Hyderabad",
    "Pigeon Safety Nets Hyderabad",
    "Bird Nets Hyderabad",
    "Monkey Safety Nets Hyderabad",
    "Invisible Grills Hyderabad",
    "Balcony Safety Nets",
    "Children Safety Nets",
    "Sports Nets Hyderabad",
    "Cricket Nets Hyderabad",
    "Cloth Hangers Hyderabad",
    "Best Safety Nets Hyderabad",
    "Affordable Safety Nets Hyderabad"
  ],
  authors: [{ name: "Priyanka Enterprises Hyderabad" }],
  category: "Home Services",
  alternates: {
    canonical: "https://www.priyankaenterpriseshyderabad.com",
  },
  verification: {
    google: "5r3kQZoixhnEDL0Uv_UboRzJCIv4w5UXJz7iPnX5STc",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Priyanka Enterprises Hyderabad | Balcony Safety Nets & Invisible Grills",
    description: "Hyderabad's trusted safety net installation experts. Premium quality, UV-resistant materials, same-day service, & free inspection. Protect your family today!",
    url: "https://www.priyankaenterpriseshyderabad.com",
    siteName: "Priyanka Enterprises",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://www.priyankaenterpriseshyderabad.com/images/balcony.webp",
        width: 1200,
        height: 630,
        alt: "Priyanka Enterprises Installation in Hyderabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Priyanka Enterprises Hyderabad | Balcony Safety Nets",
    description: "Hyderabad's premium safety net experts. Same-day installation & free site inspection. Call +91 81214 88961.",
    images: ["https://www.priyankaenterpriseshyderabad.com/images/balcony.webp"],
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Inject Local Business Schema Markup
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Priyanka Enterprises",
    "image": "https://www.priyankaenterpriseshyderabad.com/images/balcony.webp",
    "@id": "https://www.priyankaenterpriseshyderabad.com/#localbusiness",
    "url": "https://www.priyankaenterpriseshyderabad.com",
    "telephone": "+918121488961",
    "email": "mrjoe4425@gmail.com",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lingampally, Amneepur Road, near Sri Sai Baba Temple",
      "addressLocality": "Hyderabad",
      "addressRegion": "Telangana",
      "postalCode": "502032",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 17.4834,
      "longitude": 78.3188
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "19:00"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Safety Nets and Grills",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Balcony Safety Nets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pigeon & Bird Protection Nets"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Invisible Grills"
          }
        }
      ]
    }
  };

  const serviceSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Balcony Safety Nets",
      "provider": {
        "@id": "https://www.priyankaenterpriseshyderabad.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "description": "High-density polyethylene (HDPE) balcony safety nets installed to prevent accidental falls and block pigeons."
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Invisible Grills",
      "provider": {
        "@id": "https://www.priyankaenterpriseshyderabad.com/#localbusiness"
      },
      "areaServed": {
        "@type": "City",
        "name": "Hyderabad"
      },
      "description": "Marine Grade 316 Stainless Steel invisible grills offering maximum security without blocking your balcony view."
    }
  ];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${outfit.variable} scroll-smooth h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
        />
      </head>
      <body className="min-h-full bg-slate-50 text-slate-900 flex flex-col font-sans pb-[60px] md:pb-0 overflow-x-hidden">
        {/* Google tag (gtag.js) */}
        <Script 
          src="https://www.googletagmanager.com/gtag/js?id=AW-18291286869" 
          strategy="afterInteractive" 
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-18291286869');
          `}
        </Script>
        
        {/* Event snippet for Contact conversion page */}
        <Script id="google-conversion" strategy="afterInteractive">
          {`
            function gtag_report_conversion(url) {
              var callback = function () {
                if (typeof(url) != 'undefined') {
                  window.location = url;
                }
              };
              gtag('event', 'conversion', {
                  'send_to': 'AW-18291286869/gdBgCIWs38wcENXG-5FE',
                  'event_callback': callback
              });
              return false;
            }
          `}
        </Script>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-K6KCTMS8');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-K6KCTMS8"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}
