import type { Metadata } from 'next';
import TextStatistics from '@/components/tools/TextStatistics';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Text Statistics — Comprehensive Text Analysis & Readability Scores Online Free',
  description: 'Free online text statistics tool. Get comprehensive analysis with readability scores (Flesch-Kincaid, Gunning Fog, Coleman-Liau, SMOG), vocabulary richness, and text complexity.',
  alternates: { canonical: 'https://wordcount.one/text-statistics' },
  openGraph: {
    title: 'Text Statistics — Comprehensive Text Analysis & Readability Scores Online Free',
    description: 'Free comprehensive text analysis with 4 readability scores, vocabulary richness metrics, and detailed text statistics.',
    url: 'https://wordcount.one/text-statistics',
  },
};

const faqItems = [
  { question: 'What readability scores does this tool calculate?', answer: 'This tool calculates four industry-standard readability scores: Flesch-Kincaid Reading Ease (0-100 scale, higher is easier), Flesch-Kincaid Grade Level (US school grade), Gunning Fog Index (years of education needed), Coleman-Liau Index (US school grade based on character counts), and SMOG Index (years of education needed, most accurate for health-related texts).' },
  { question: 'What is the Type-Token Ratio?', answer: 'The Type-Token Ratio (TTR) measures vocabulary diversity by dividing the number of unique words (types) by the total number of words (tokens). A higher TTR indicates more diverse vocabulary. For example, a TTR of 70% means 70% of words in the text are unique. Academic writing typically has higher TTR than conversational writing.' },
  { question: 'What are Hapax Legomena?', answer: 'Hapax Legomena are words that appear only once in a text. The count of hapax legomena is a measure of vocabulary richness. A high number of hapax legomena relative to total words indicates diverse, varied vocabulary. This metric is used in computational linguistics, authorship attribution, and text analysis research.' },
  { question: 'How is the Gunning Fog Index different from Flesch-Kincaid?', answer: 'The Gunning Fog Index estimates the years of formal education needed to understand text on first reading. It focuses on sentence length and the percentage of complex words (3+ syllables). Unlike Flesch-Kincaid, which uses average syllables per word, Gunning Fog specifically targets polysyllabic words, making it more sensitive to jargon and technical language.' },
  { question: 'What is the SMOG Index best used for?', answer: 'The SMOG (Simple Measure of Gobbledygook) Index is considered the most accurate readability formula for health-related materials. It requires at least 30 sentences for reliable results and focuses on polysyllabic words. SMOG is widely used in healthcare, government communications, and consumer information to ensure materials are accessible to the target audience.' },
];

export default function TextStatisticsPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Text Statistics</h1>
        <p className="text-text-light mb-6">Comprehensive text analysis with readability scores, vocabulary richness, and detailed statistics.</p>

        <AdSlot slot="leaderboard" />

        <TextStatistics />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use Text Statistics</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our comprehensive text statistics tool provides the deepest analysis available for any text. It combines basic counting metrics with four industry-standard readability formulas and vocabulary richness measurements, giving you a complete picture of your writing in one place.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Paste or type your text into the text area above. The tool immediately calculates over 20 different metrics organized into three categories: Basic Counts, Readability Scores, and Vocabulary Richness. All calculations happen in real time as you type.
            </p>
            <h3 className="text-lg font-semibold text-text">Basic Counts</h3>
            <p>
              The basic counts section shows words, characters (with and without spaces), sentences, paragraphs, syllables, reading time, speaking time, average word length, and average sentence length. These fundamental metrics form the foundation for all readability calculations.
            </p>
            <h3 className="text-lg font-semibold text-text">Readability Scores Explained</h3>
            <p>
              The <strong>Flesch-Kincaid Reading Ease</strong> score ranges from 0 to 100, where higher scores mean easier reading. The <strong>Flesch-Kincaid Grade Level</strong> translates this into a US school grade. The <strong>Gunning Fog Index</strong> estimates years of education needed, focusing on complex words. The <strong>Coleman-Liau Index</strong> uses character counts instead of syllables for a different perspective. The <strong>SMOG Index</strong> is most accurate for health and government materials.
            </p>
            <h3 className="text-lg font-semibold text-text">Vocabulary Richness</h3>
            <p>
              The vocabulary section reveals how diverse your word choices are. <strong>Unique Words</strong> counts distinct words. The <strong>Type-Token Ratio</strong> shows what percentage of words are unique — higher means more diverse vocabulary. <strong>Hapax Legomena</strong> counts words used only once, another indicator of vocabulary breadth.
            </p>
            <h3 className="text-lg font-semibold text-text">Practical Applications</h3>
            <p>
              Use text statistics to match your writing to your audience. For general web content, aim for a Flesch-Kincaid score of 60 to 70 and a grade level of 7 to 8. For academic papers, scores of 30 to 50 are typical. For children's content, target scores above 80. Compare your scores across different pieces to maintain consistent readability.
            </p>
            <p>
              The complex words metric helps identify jargon and technical language that may confuse readers. If complex words exceed 15 percent of your total, consider simplifying. The vocabulary richness metrics help you avoid repetitive writing — a Type-Token Ratio below 40 percent may indicate overuse of certain words.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/text-statistics" />
      </div>
    </>
  );
}
