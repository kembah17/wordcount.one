import type { Metadata } from 'next';
import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'About WordCount.one — Free Online Word Counter & Text Analysis Tools',
  description: 'Learn about WordCount.one, a free suite of word counting and text analysis tools. All tools run in your browser for complete privacy. No sign-up required.',
  alternates: { canonical: 'https://wordcount.one/about' },
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-6">About WordCount.one</h1>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-8 shadow-sm space-y-6">
        <section>
          <h2 className="text-2xl font-semibold text-text mb-3">Our Mission</h2>
          <p className="text-text-light leading-relaxed">
            WordCount.one provides free, fast, and private word counting and text analysis tools for everyone. We believe that essential writing tools should be accessible without barriers — no sign-ups, no subscriptions, no data collection. Every tool on our site runs entirely in your browser, ensuring your text never leaves your device.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-3">What We Offer</h2>
          <p className="text-text-light leading-relaxed mb-4">
            Our suite of seven specialized tools covers every aspect of text analysis:
          </p>
          <ul className="space-y-2 text-text-light">
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/word-counter" className="text-primary hover:underline font-medium">Word Counter</Link> — Count words, characters, sentences, paragraphs, and estimate reading time</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/character-counter" className="text-primary hover:underline font-medium">Character Counter</Link> — Detailed character analysis with frequency tables</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/sentence-counter" className="text-primary hover:underline font-medium">Sentence Counter</Link> — Sentence counting with complexity analysis</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/paragraph-counter" className="text-primary hover:underline font-medium">Paragraph Counter</Link> — Paragraph analysis with visual breakdown</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/reading-time-estimator" className="text-primary hover:underline font-medium">Reading Time Estimator</Link> — Reading speed calculations with readability scores</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/keyword-density-checker" className="text-primary hover:underline font-medium">Keyword Density Checker</Link> — SEO keyword analysis with n-gram support</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary font-bold">•</span>
              <span><Link href="/text-statistics" className="text-primary hover:underline font-medium">Text Statistics</Link> — Comprehensive analysis with multiple readability formulas</span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-3">Privacy First</h2>
          <p className="text-text-light leading-relaxed">
            Your privacy is our top priority. All text processing happens locally in your web browser using JavaScript. We do not send your text to any server, we do not store it in any database, and we do not use it for any purpose. When you close the page, your text is gone. Read our <Link href="/privacy" className="text-primary hover:underline">Privacy Policy</Link> for complete details.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-3">Who Uses WordCount.one?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-text-light">
            <div className="bg-surface-alt rounded-lg p-4">
              <h3 className="font-semibold text-text mb-1">Students</h3>
              <p className="text-sm">Check essay word counts, verify character limits, and improve readability for academic assignments.</p>
            </div>
            <div className="bg-surface-alt rounded-lg p-4">
              <h3 className="font-semibold text-text mb-1">Writers & Authors</h3>
              <p className="text-sm">Track writing progress, analyze sentence complexity, and maintain consistent readability across chapters.</p>
            </div>
            <div className="bg-surface-alt rounded-lg p-4">
              <h3 className="font-semibold text-text mb-1">Bloggers & Content Creators</h3>
              <p className="text-sm">Optimize content length, check keyword density, and estimate reading time for better engagement.</p>
            </div>
            <div className="bg-surface-alt rounded-lg p-4">
              <h3 className="font-semibold text-text mb-1">SEO Professionals</h3>
              <p className="text-sm">Analyze keyword density, check readability scores, and optimize content for search engine rankings.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-text mb-3">Technology</h2>
          <p className="text-text-light leading-relaxed">
            WordCount.one is built with modern web technologies for maximum speed and reliability. Our tools use pure JavaScript algorithms that run instantly in your browser. The site is built with Next.js and optimized for fast loading on any device. No plugins, no downloads, no installations — just open and use.
          </p>
        </section>
      </div>

      <AdSlot slot="footer" />
    </div>
  );
}
