import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { blogData } from "@/data/blogData";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface Props {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: Props): Metadata {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  return {
    title: `${post.title} | Priyanka Enterprises`,
    description: post.description,
    alternates: {
      canonical: `https://priyankaenterprises.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://priyankaenterprises.com/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      images: [
        {
          url: `https://priyankaenterprises.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ]
    }
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogData.filter((p) => post.relatedSlugs.includes(p.slug));

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [`https://priyankaenterprises.com${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Organization",
      name: "Priyanka Enterprises",
      url: "https://priyankaenterprises.com"
    },
    publisher: {
      "@type": "Organization",
      name: "Priyanka Enterprises",
      logo: {
        "@type": "ImageObject",
        url: "https://priyankaenterprises.com/images/logo_dark.png"
      }
    },
    description: post.description
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-slate-50 pt-28 pb-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="mb-10 text-center">
            <time className="text-sm font-bold text-primary tracking-wider uppercase mb-4 block">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 font-display mb-6">
              {post.title}
            </h1>
            <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          <div 
            className="prose prose-slate prose-lg max-w-none prose-headings:font-display prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary-light prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>

        {relatedPosts.length > 0 && (
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-16 border-t border-slate-200">
            <h3 className="text-2xl font-bold text-slate-900 font-display mb-8">Related Articles</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                  <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4">
                    <Image
                      src={relatedPost.image}
                      alt={relatedPost.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 group-hover:text-primary transition-colors line-clamp-2">
                    {relatedPost.title}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
