import type { Metadata } from 'next';
import ParagraphCounter from '@/components/tools/ParagraphCounter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Paragraph Counter — Count Paragraphs & Analyze Structure Online Free',
  description: 'Free online paragraph counter. Count paragraphs, analyze words per paragraph, average paragraph length, and visualize text structure in real time.',
  alternates: { canonical: 'https://wordcount.one/paragraph-counter' },
  openGraph: {
    title: 'Paragraph Counter — Count Paragraphs & Analyze Structure Online Free',
    description: 'Free online paragraph counter with structure analysis. Count paragraphs, words per paragraph, and visualize text breakdown.',
    url: 'https://wordcount.one/paragraph-counter',
  },
};

const faqItems = [
  { question: 'How does the paragraph counter detect paragraphs?', answer: 'The paragraph counter identifies paragraphs by looking for blank lines (two or more consecutive line breaks) between blocks of text. This is the standard paragraph separation method used in most text editors and word processors. Single line breaks within a block of text do not create new paragraphs.' },
  { question: 'What is the ideal paragraph length?', answer: 'For web content, the ideal paragraph length is 3 to 5 sentences or 50 to 100 words. Shorter paragraphs improve readability on screens and make content feel more scannable. Academic writing typically uses longer paragraphs of 100 to 200 words, while journalism favors very short paragraphs of 1 to 3 sentences.' },
  { question: 'Why does paragraph structure matter?', answer: 'Good paragraph structure improves readability, comprehension, and engagement. Each paragraph should focus on one main idea. Well-structured paragraphs help readers scan content quickly, understand the logical flow of arguments, and find specific information. Poor paragraph structure leads to reader fatigue and higher bounce rates.' },
  { question: 'How do I separate paragraphs in the text area?', answer: 'Press Enter twice to create a blank line between paragraphs. A single Enter creates a line break but not a new paragraph. The tool follows the standard convention where paragraphs are separated by at least one blank line.' },
];

export default function ParagraphCounterPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Paragraph Counter</h1>
        <p className="text-text-light mb-6">Count paragraphs, analyze words per paragraph, and visualize your text structure.</p>

        <AdSlot slot="leaderboard" />

        <ParagraphCounter />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Paragraph Counter</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free online paragraph counter helps you analyze the structure and organization of your writing. Understanding paragraph patterns is essential for creating well-organized content that guides readers through your ideas effectively.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Type or paste your text into the text area above. Make sure paragraphs are separated by blank lines (press Enter twice between paragraphs). The tool instantly counts paragraphs and displays detailed statistics about each one.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding the Statistics</h3>
            <p>
              The tool displays four summary metrics: total <strong>Paragraphs</strong>, <strong>Total Words</strong> across all paragraphs, <strong>Average Words per Paragraph</strong>, and <strong>Average Sentences per Paragraph</strong>. Below these, the paragraph breakdown shows each paragraph with its word count, sentence count, character count, and a visual bar representing its proportion of the total text.
            </p>
            <h3 className="text-lg font-semibold text-text">Optimizing Paragraph Length</h3>
            <p>
              The ideal paragraph length depends on your medium and audience. For web content and blog posts, keep paragraphs between 50 and 100 words. This creates visual breathing room and makes content easier to scan on screens. For academic papers, paragraphs of 100 to 200 words are standard. For social media and email, even shorter paragraphs of 1 to 3 sentences work best.
            </p>
            <h3 className="text-lg font-semibold text-text">Paragraph Structure Best Practices</h3>
            <p>
              Each paragraph should contain one main idea. Start with a topic sentence that introduces the idea, follow with supporting details or evidence, and end with a transition to the next paragraph. This structure helps readers follow your argument and find information quickly.
            </p>
            <p>
              Use the visual breakdown to identify paragraphs that are too long or too short. Very long paragraphs may need to be split into two or more focused paragraphs. Very short paragraphs (under 20 words) may need to be combined with adjacent paragraphs or expanded with more detail.
            </p>
            <h3 className="text-lg font-semibold text-text">Who Benefits from Paragraph Analysis?</h3>
            <p>
              Content writers use paragraph analysis to ensure their articles are well-structured and scannable. Students check that their essays have proper paragraph organization. Editors verify that content flows logically from one idea to the next. Email marketers optimize paragraph length for mobile readability.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/paragraph-counter" />
      </div>
    </>
  );
}
