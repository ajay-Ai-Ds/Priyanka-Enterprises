import Link from 'next/link';

export const metadata = {
  title: 'Areas We Serve in Hyderabad | Priyanka Enterprises',
  description: 'Priyanka Enterprises provides premium safety nets and invisible grills across major localities in Hyderabad including Gachibowli, Kondapur, and Manikonda.',
  alternates: {
    canonical: 'https://priyankaenterprises.com/areas',
  },
  openGraph: {
    title: 'Areas We Serve in Hyderabad | Priyanka Enterprises',
    description: 'Priyanka Enterprises provides premium safety nets and invisible grills across major localities in Hyderabad including Gachibowli, Kondapur, and Manikonda.',
    url: 'https://priyankaenterprises.com/areas',
    siteName: 'Priyanka Enterprises',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Areas We Serve in Hyderabad | Priyanka Enterprises',
    description: 'Premium safety nets and invisible grills across major localities in Hyderabad.',
  }
};

const areas = [
  { name: 'Manikonda', slug: 'manikonda' },
  { name: 'Hafeezpet', slug: 'hafeezpet' },
  { name: 'Gachibowli', slug: 'gachibowli' },
  { name: 'Kondapur', slug: 'kondapur' },
  { name: 'Kokapet', slug: 'kokapet' },
  { name: 'Tellapur', slug: 'tellapur' },
  { name: 'Nallagandla', slug: 'nallagandla' },
  { name: 'Miyapur', slug: 'miyapur' }
];

export default function AreasOverview() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://priyankaenterprises.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Areas We Serve",
        "item": "https://priyankaenterprises.com/areas"
      }
    ]
  };

  return (
    <main className="py-32 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 font-display">
            Areas We Serve in Hyderabad
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Priyanka Enterprises is proud to offer our premium safety net and invisible grill installation services across all major residential and commercial hubs in Hyderabad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map(area => (
            <Link 
              key={area.slug} 
              href={`/areas/${area.slug}`}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 flex flex-col items-center justify-center text-center group"
            >
              <h2 className="text-xl font-bold text-slate-800 group-hover:text-primary font-display">
                {area.name}
              </h2>
              <span className="text-accent text-sm mt-2 font-semibold">View Details &rarr;</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
