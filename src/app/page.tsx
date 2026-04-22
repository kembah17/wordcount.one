import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';
import WebSiteSchema from '@/components/seo/WebSiteSchema';

const tools = [
  { name: 'Word Counter', href: '/word-counter', description: 'Count words, characters, sentences, paragraphs, reading time, and more in real time.', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' },
  { name: 'Character Counter', href: '/character-counter', description: 'Count characters with and without spaces, letters, digits, special characters, and Unicode.', icon: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129' },
  { name: 'Sentence Counter', href: '/sentence-counter', description: 'Count sentences, analyze average length, find longest and shortest sentences.', icon: 'M4 6h16M4 12h16M4 18h7' },
  { name: 'Paragraph Counter', href: '/paragraph-counter', description: 'Count paragraphs and analyze words per paragraph with visual breakdown.', icon: 'M4 6h16M4 10h16M4 14h16M4 18h16' },
  { name: 'Reading Time Estimator', href: '/reading-time-estimator', description: 'Calculate reading time at different speeds with Flesch-Kincaid readability scores.', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { name: 'Keyword Density Checker', href: '/keyword-density-checker', description: 'Analyze keyword frequency, density percentage, and n-gram phrases for SEO.', icon: 'M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z' },
  { name: 'Text Statistics', href: '/text-statistics', description: 'Comprehensive analysis with readability scores, vocabulary richness, and text complexity.', icon: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z' },
];

export default function HomePage() {
  return (
    <>
      <WebSiteSchema />
      <section className="bg-surface border-b border-border">
        <div className="max-w-6xl mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-4">
            Free Online <span className="text-primary">Word Counter</span> & Text Analysis
          </h1>
          <p className="text-lg text-text-light max-w-2xl mx-auto mb-8">
            Count words, characters, sentences, and paragraphs instantly. Analyze readability, keyword density, and text statistics — all in your browser, 100% private.
          </p>
          <Link
            href="/word-counter"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-text rounded-lg hover:bg-primary-hover transition-colors font-medium text-lg"
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

        <h2 className="text-2xl font-bold text-text mb-6 text-center">All Word Counting Tools</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              className="block p-6 bg-surface border border-border rounded-xl shadow-sm hover:shadow-md hover:border-primary transition-all group"
            >
              <div className="w-12 h-12 bg-primary-light rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <svg className="w-6 h-6 text-primary group-hover:text-primary-text transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tool.icon} />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-primary transition-colors">{tool.name}</h3>
              <p className="text-sm text-text-light">{tool.description}</p>
            </Link>
          ))}
        </div>

        <AdSlot slot="in-content" />

        <section className="mt-16 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">Why Use WordCount.one?</h2>
          <div className="prose max-w-none text-text-light leading-relaxed space-y-4">
            <p>
              WordCount.one is a free, privacy-first suite of word counting and text analysis tools designed for writers, students, bloggers, SEO professionals, and anyone who works with text. Every tool runs entirely in your browser — your text never leaves your device.
            </p>
            <p>
              Whether you need to check the word count of an essay, analyze the readability of a blog post, or optimize keyword density for SEO, our tools provide instant, accurate results as you type. No sign-up required, no data collection, no waiting for server responses.
            </p>
            <h3 className="text-xl font-semibold text-text mt-6">Real-Time Analysis</h3>
            <p>
              All our tools update instantly as you type. There are no submit buttons or loading screens. Simply paste or type your text and watch the statistics update in real time. This makes it easy to edit your text and see the impact of changes immediately.
            </p>
            <h3 className="text-xl font-semibold text-text mt-6">Comprehensive Text Metrics</h3>
            <p>
              Beyond simple word counting, we offer character counting with and without spaces, sentence and paragraph analysis, reading time estimation at multiple speeds, keyword density analysis with n-gram support, and comprehensive readability scores including Flesch-Kincaid, Gunning Fog, Coleman-Liau, and SMOG indices.
            </p>
            <h3 className="text-xl font-semibold text-text mt-6">Perfect for Every Use Case</h3>
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
