import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

// GSC verification loaded from env
const gscVerification = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  ...(gscVerification && { verification: { google: gscVerification } }),
  metadataBase: new URL('https://wordcount.one'),
  title: {
    default: 'wordcount.one — Free Online Word Counter & Text Analysis Tools',
    template: '%s | wordcount.one',
  },
  description: 'Free online word counter and text analysis tools. Count words, characters, sentences, paragraphs, estimate reading time, check keyword density, and analyze text statistics. 100% client-side processing.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://wordcount.one',
    siteName: 'wordcount.one',
    title: 'wordcount.one — Free Online Word Counter & Text Analysis Tools',
    description: 'Free online word counter and text analysis tools. Count words, characters, sentences, paragraphs, and more. Privacy-first — all processing happens in your browser.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'wordcount.one — Free Online Word Counter & Text Analysis Tools',
    description: 'Free online word counter and text analysis tools. Privacy-first — all processing happens in your browser.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://wordcount.one',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                    document.documentElement.classList.add('dark');
                  }
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-page-bg text-text antialiased">
        <GoogleAnalytics />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
