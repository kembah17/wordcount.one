import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';
import HomeToolGrid from '@/components/ui/HomeToolGrid';

const tools = [
  { name: 'Word Counter', href: '/word-counter', description: 'Count words, characters, sentences, paragraphs, reading time, and more in real time.', icon: '📝' },
  { name: 'Character Counter', href: '/character-counter', description: 'Count characters with and without spaces, letters, digits, special characters, and Unicode.', icon: '🔤' },
  { name: 'Sentence Counter', href: '/sentence-counter', description: 'Count sentences, analyze average length, find longest and shortest sentences.', icon: '📄' },
  { name: 'Paragraph Counter', href: '/paragraph-counter', description: 'Count paragraphs and analyze words per paragraph with visual breakdown.', icon: '📑' },
  { name: 'Reading Time Estimator', href: '/reading-time-estimator', description: 'Calculate reading time at different speeds with Flesch-Kincaid readability scores.', icon: '⏱️' },
  { name: 'Keyword Density Checker', href: '/keyword-density-checker', description: 'Analyze keyword frequency, density percentage, and n-gram phrases for SEO.', icon: '🔍' },
  { name: 'Text Statistics', href: '/text-statistics', description: 'Comprehensive analysis with readability scores, vocabulary richness, and text complexity.', icon: '📊' },
];

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <section style={{ backgroundColor: 'var(--color-surface)', borderBottom: '1px solid var(--color-border)' }}>
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>
            Free Online <span style={{ color: 'var(--color-primary)' }}>Word Counter</span> & Text Analysis
          </h1>
          <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: 'var(--color-text-light)' }}>
            Count words, characters, sentences, and paragraphs instantly. Analyze readability, keyword density, and text statistics — all in your browser, 100% private.
          </p>
          <Link
            href="/word-counter"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-lg transition-colors font-medium text-lg"
            style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-primary-text)' }}
          >
            Start Counting
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        <AdSlot slot="leaderboard" />

        <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: 'var(--color-text)' }}>All Word Counting Tools</h2>
        <HomeToolGrid tools={tools} />

        <AdSlot slot="in-content" />

        <section className="mt-16 rounded-xl p-8" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', boxShadow: 'var(--shadow-sm)' }}>
          <h2 className="text-2xl font-bold mb-4" style={{ color: 'var(--color-text)' }}>Why Use WordCount.one?</h2>
          <div className="prose max-w-none leading-relaxed space-y-4" style={{ color: 'var(--color-text-light)' }}>
            <p>
              WordCount.one is a free, privacy-first suite of word counting and text analysis tools designed for writers, students, bloggers, SEO professionals, and anyone who works with text. Every tool runs entirely in your browser — your text never leaves your device.
            </p>
            <p>
              Whether you need to check the word count of an essay, analyze the readability of a blog post, or optimize keyword density for SEO, our tools provide instant, accurate results as you type. No sign-up required, no data collection, no waiting for server responses.
            </p>
            <h3 className="text-xl font-semibold mt-6" style={{ color: 'var(--color-text)' }}>Real-Time Analysis</h3>
            <p>
              All our tools update instantly as you type. There are no submit buttons or loading screens. Simply paste or type your text and watch the statistics update in real time. This makes it easy to edit your text and see the impact of changes immediately.
            </p>
            <h3 className="text-xl font-semibold mt-6" style={{ color: 'var(--color-text)' }}>Comprehensive Text Metrics</h3>
            <p>
              Beyond simple word counting, we offer character counting with and without spaces, sentence and paragraph analysis, reading time estimation at multiple speeds, keyword density analysis with n-gram support, and comprehensive readability scores including Flesch-Kincaid, Gunning Fog, Coleman-Liau, and SMOG indices.
            </p>
            <h3 className="text-xl font-semibold mt-6" style={{ color: 'var(--color-text)' }}>Perfect for Every Use Case</h3>
            <p>
              Students can check essay word counts and readability levels. Bloggers can optimize content length and keyword density. SEO professionals can analyze text statistics and keyword usage. Authors can track writing progress and analyze sentence complexity. Social media managers can ensure posts fit character limits.
            </p>
          </div>
        </section>

        <AdSlot slot="footer" />
      </div>
    </>
  );
}
