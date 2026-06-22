import type { Metadata } from 'next';
import CharacterCounter from '@/components/tools/CharacterCounter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Character Counter — Count Characters, Letters & Digits Online Free',
  description: 'Free online character counter. Count characters with and without spaces, letters, digits, special characters, and see character frequency analysis in real time.',
  alternates: { canonical: 'https://wordcount.one/character-counter' },
  openGraph: {
    title: 'Character Counter — Count Characters, Letters & Digits Online Free',
    description: 'Free online character counter with frequency analysis. Count characters, letters, digits, and special characters in real time.',
    url: 'https://wordcount.one/character-counter',
  },
};

const faqItems = [
  { question: 'What is the difference between characters and characters without spaces?', answer: 'Characters counts every single character in your text including spaces, tabs, and line breaks. Characters without spaces excludes all whitespace, giving you only the visible characters. This distinction is important for platforms with strict character limits.' },
  { question: 'How are special characters counted?', answer: 'Special characters include punctuation marks, symbols, and any character that is not a letter, digit, or whitespace. Examples include @, #, $, %, &, !, and quotation marks. Our tool counts these separately so you can see exactly what makes up your text.' },
  { question: 'Does the character counter support Unicode and emoji?', answer: 'Yes! Our character counter fully supports Unicode characters including accented letters, Chinese/Japanese/Korean characters, Arabic script, and emoji. Unicode characters that fall outside the basic ASCII range are counted separately in the Unicode Characters metric.' },
  { question: 'What does the character frequency table show?', answer: 'The character frequency table shows each unique character in your text, how many times it appears, what percentage of the total it represents, and a visual bar for comparison. Characters are sorted by frequency from most to least common, helping you identify patterns in your writing.' },
  { question: 'What are common character limits I should know?', answer: 'Twitter/X allows 280 characters, SMS messages are 160 characters, Instagram captions max at 2,200 characters, LinkedIn posts perform best under 1,300 characters, meta descriptions should be 150-160 characters, and title tags should be under 60 characters.' },
];

export default function CharacterCounterPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Character Counter</h1>
        <p className="text-text-light mb-6">Count characters with and without spaces, letters, digits, special characters, and analyze character frequency.</p>

        <AdSlot slot="leaderboard" />

        <CharacterCounter />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Character Counter</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free online character counter provides instant, detailed analysis of every character in your text. Whether you need to check character limits for social media, optimize meta descriptions for SEO, or analyze the composition of your writing, this tool delivers accurate results as you type.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Type directly into the text area above or paste text from any source. The character counter immediately begins analyzing your text and updates all statistics in real time. Every keystroke triggers an instant recalculation, so you always see current numbers.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding Character Metrics</h3>
            <p>
              The tool displays seven key metrics. <strong>Characters</strong> counts every character including spaces and line breaks. <strong>Without Spaces</strong> excludes all whitespace characters. <strong>Letters</strong> counts only alphabetic characters (A-Z, a-z). <strong>Digits</strong> counts numeric characters (0-9). <strong>Spaces</strong> counts only space characters (not tabs or line breaks). <strong>Special Characters</strong> counts punctuation and symbols. <strong>Unicode Characters</strong> identifies characters outside the basic ASCII range.
            </p>
            <h3 className="text-lg font-semibold text-text">Character Frequency Analysis</h3>
            <p>
              Below the main statistics, the character frequency table shows every unique character in your text ranked by how often it appears. Each entry shows the character, its count, its percentage of the total, and a visual bar for easy comparison. This analysis is valuable for cryptography, linguistics research, and understanding writing patterns.
            </p>
            <h3 className="text-lg font-semibold text-text">Common Use Cases</h3>
            <p>
              Social media managers use the character counter to ensure posts fit platform limits. SEO professionals check that meta titles stay under 60 characters and meta descriptions under 160 characters. Developers verify string lengths for database fields and API payloads. Writers analyze their character usage patterns to improve style and readability.
            </p>
            <h3 className="text-lg font-semibold text-text">Tips for Character Optimization</h3>
            <p>
              When writing for character-limited platforms, every character counts. Use contractions to save characters. Replace long words with shorter synonyms. Remove unnecessary adjectives and adverbs. Use numerals instead of spelling out numbers. These techniques help you communicate effectively within tight character constraints.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/character-counter" />
      </div>
    </>
  );
}
