import type { Metadata } from 'next';
import SentenceCounter from '@/components/tools/SentenceCounter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Sentence Counter — Count Sentences & Analyze Complexity Online Free',
  description: 'Free online sentence counter. Count sentences, analyze average sentence length, find longest and shortest sentences, and assess sentence complexity in real time.',
  alternates: { canonical: 'https://wordcount.one/sentence-counter' },
  openGraph: {
    title: 'Sentence Counter — Count Sentences & Analyze Complexity Online Free',
    description: 'Free online sentence counter with complexity analysis. Count sentences, find longest/shortest, and analyze writing structure.',
    url: 'https://wordcount.one/sentence-counter',
  },
};

const faqItems = [
  { question: 'How does the sentence counter detect sentences?', answer: 'The sentence counter identifies sentences by looking for terminal punctuation marks: periods (.), exclamation marks (!), and question marks (?). It then splits the text at these boundaries and filters out empty results. This approach handles most standard English text accurately.' },
  { question: 'What determines sentence complexity?', answer: 'Sentence complexity is based on word count. Simple sentences contain 15 words or fewer, moderate sentences have 16 to 25 words, and complex sentences exceed 25 words. Research shows that sentences over 25 words become harder to understand, especially for general audiences.' },
  { question: 'Why is sentence length important for readability?', answer: 'Average sentence length directly impacts readability. The ideal average is 15-20 words per sentence. Shorter sentences are easier to understand and keep readers engaged. Mixing short and long sentences creates rhythm and maintains interest. Academic writing typically has longer sentences (20-25 words) while web content works best with shorter ones (12-18 words).' },
  { question: 'Can the tool handle abbreviations like Mr. or Dr.?', answer: 'The sentence counter may count abbreviations with periods as sentence boundaries. For the most accurate results with text containing many abbreviations, consider the count as an approximation. The tool works best with standard prose where periods primarily indicate sentence endings.' },
];

export default function SentenceCounterPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Sentence Counter</h1>
        <p className="text-text-light mb-6">Count sentences, analyze average length, find longest and shortest sentences, and assess complexity.</p>

        <AdSlot slot="leaderboard" />

        <SentenceCounter />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Sentence Counter</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free online sentence counter helps you analyze the structure and complexity of your writing. Understanding sentence patterns is crucial for creating readable, engaging content that connects with your audience.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Paste or type your text into the text area above. The sentence counter immediately identifies every sentence and displays comprehensive statistics. All analysis happens in real time as you type, with no need to click any buttons.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding the Statistics</h3>
            <p>
              The tool provides six key metrics. <strong>Sentences</strong> shows the total count. <strong>Average Length</strong> displays the mean number of words per sentence. <strong>Longest</strong> and <strong>Shortest</strong> show the word counts of your extreme sentences. <strong>Complex</strong> counts sentences over 25 words, while <strong>Simple</strong> counts those under 15 words.
            </p>
            <h3 className="text-lg font-semibold text-text">Sentence Breakdown Table</h3>
            <p>
              Below the summary statistics, the sentence breakdown table lists each sentence with its word count and complexity rating. Sentences are color-coded: green for simple, yellow for moderate, and red for complex. This visual feedback makes it easy to identify sentences that might need revision.
            </p>
            <h3 className="text-lg font-semibold text-text">Improving Your Writing</h3>
            <p>
              Use the sentence counter to improve readability. If your average sentence length exceeds 20 words, consider breaking longer sentences into shorter ones. Aim for a mix of sentence lengths to create natural rhythm. The best writing varies between short punchy sentences and longer descriptive ones.
            </p>
            <p>
              Professional editors recommend that no more than 25 percent of your sentences should be complex. If the complex sentence count is too high, look for opportunities to split compound sentences, remove unnecessary clauses, or simplify your language. Conversely, if all sentences are very short, your writing may feel choppy and disconnected.
            </p>
            <h3 className="text-lg font-semibold text-text">Who Uses Sentence Analysis?</h3>
            <p>
              Writers and editors use sentence analysis to polish their prose. Teachers evaluate student writing complexity. Content marketers optimize for web readability. Translators assess source text difficulty. Researchers analyze writing samples for linguistic studies. The sentence counter serves all these needs with instant, accurate results.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/sentence-counter" />
      </div>
    </>
  );
}
