import type { Metadata } from 'next';
import KeywordDensityChecker from '@/components/tools/KeywordDensityChecker';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Keyword Density Checker — Analyze Keyword Frequency & SEO Online Free',
  description: 'Free online keyword density checker. Analyze keyword frequency, density percentage, top keywords, n-gram phrases, and stop word filtering for SEO optimization.',
  alternates: { canonical: 'https://wordcount.one/keyword-density-checker' },
  openGraph: {
    title: 'Keyword Density Checker — Analyze Keyword Frequency & SEO Online Free',
    description: 'Free online keyword density analyzer with n-gram support. Find top keywords, density percentages, and optimize for SEO.',
    url: 'https://wordcount.one/keyword-density-checker',
  },
};

const faqItems = [
  { question: 'What is keyword density?', answer: 'Keyword density is the percentage of times a keyword or phrase appears in a text compared to the total number of words. It is calculated as (keyword count / total words) × 100. For example, if a keyword appears 5 times in a 500-word article, the keyword density is 1%. Keyword density helps SEO professionals ensure content is optimized without being over-optimized.' },
  { question: 'What is the ideal keyword density for SEO?', answer: 'Most SEO experts recommend a primary keyword density of 1-2% for the main target keyword. Secondary keywords should appear at 0.5-1%. Keyword density above 3% may be considered keyword stuffing by search engines, which can hurt rankings. Focus on natural writing and semantic variations rather than hitting exact density targets.' },
  { question: 'What are n-grams and why do they matter?', answer: 'N-grams are sequences of N consecutive words. 1-grams are single words, 2-grams are two-word phrases, and 3-grams are three-word phrases. Analyzing n-grams helps you identify important multi-word keywords and phrases in your content. For SEO, 2-word and 3-word phrases often represent valuable long-tail keywords that can drive targeted traffic.' },
  { question: 'What are stop words and why are they filtered?', answer: 'Stop words are common words like "the," "is," "at," "which," and "on" that appear frequently in all text but carry little meaning. They are filtered from keyword analysis because they would dominate the results and obscure the meaningful keywords. Our tool automatically removes over 100 common English stop words.' },
  { question: 'How can I use keyword density analysis for SEO?', answer: 'Use keyword density analysis to ensure your target keywords appear naturally throughout your content. Check that your primary keyword has 1-2% density, verify that related keywords and synonyms are present, identify unintentional keyword stuffing, and discover which topics your content emphasizes. Combine density analysis with readability scores for optimal content.' },
];

export default function KeywordDensityCheckerPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Keyword Density Checker</h1>
        <p className="text-text-light mb-6">Analyze keyword frequency, density percentage, and n-gram phrases with automatic stop word filtering.</p>

        <AdSlot slot="leaderboard" />

        <KeywordDensityChecker />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Keyword Density Checker</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free keyword density checker is an essential tool for SEO professionals, content writers, and bloggers who want to optimize their content for search engines. It analyzes your text in real time and shows you exactly which keywords and phrases appear most frequently.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Paste your article, blog post, or any text into the text area above. The tool immediately begins analyzing keyword frequency and displays results in a sortable table. Common stop words are automatically filtered out so you see only meaningful keywords.
            </p>
            <h3 className="text-lg font-semibold text-text">Using N-Gram Analysis</h3>
            <p>
              Switch between 1-word, 2-word, and 3-word analysis using the n-gram buttons. Single-word analysis shows individual keyword frequency. Two-word analysis reveals important phrases like "content marketing" or "search engine." Three-word analysis uncovers longer phrases like "search engine optimization" that may represent valuable long-tail keywords.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding Density Percentages</h3>
            <p>
              Each keyword shows its density as a percentage of total words. For SEO, your primary target keyword should have a density of 1 to 2 percent. If a keyword exceeds 3 percent, search engines may consider it keyword stuffing, which can negatively impact rankings. The visual bars make it easy to compare relative keyword prominence.
            </p>
            <h3 className="text-lg font-semibold text-text">SEO Optimization Tips</h3>
            <p>
              After analyzing your content, check that your target keyword appears in the top results with appropriate density. Look for opportunities to add semantic variations and related terms. If important keywords are missing, revise your content to include them naturally. Use the 2-word and 3-word analysis to identify long-tail keyword opportunities.
            </p>
            <p>
              Compare your keyword density with top-ranking competitors for the same search terms. If competitors use certain phrases more frequently, consider incorporating those phrases into your content. However, always prioritize natural, reader-friendly writing over hitting specific density targets.
            </p>
            <h3 className="text-lg font-semibold text-text">Beyond Keyword Density</h3>
            <p>
              Modern SEO goes beyond simple keyword density. Search engines use semantic analysis to understand content meaning. Use the keyword density checker as one tool in your SEO toolkit alongside readability analysis, content structure optimization, and comprehensive topic coverage.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/keyword-density-checker" />
      </div>
    </>
  );
}
