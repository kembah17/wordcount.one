import type { Metadata } from 'next';
import WordCounter from '@/components/tools/WordCounter';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Word Counter — Count Words, Characters & Sentences Online Free',
  description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, reading time, and speaking time in real time. No sign-up required.',
  alternates: { canonical: 'https://wordcount.one/word-counter' },
  openGraph: {
    title: 'Word Counter — Count Words, Characters & Sentences Online Free',
    description: 'Free online word counter tool. Count words, characters, sentences, paragraphs, reading time, and speaking time in real time.',
    url: 'https://wordcount.one/word-counter',
  },
};

const faqItems = [
  { question: 'How does the word counter work?', answer: 'Our word counter analyzes your text in real time as you type. It splits text by whitespace to count words, tracks every character, identifies sentences by punctuation marks, and detects paragraphs by blank lines. Reading time is calculated at 238 words per minute (average adult reading speed) and speaking time at 150 words per minute.' },
  { question: 'Is my text stored or sent to a server?', answer: 'No. All processing happens entirely in your browser using JavaScript. Your text never leaves your device. We do not store, transmit, or log any text you enter. This makes our tool completely private and safe for sensitive content.' },
  { question: 'How is reading time calculated?', answer: 'Reading time is calculated by dividing the total word count by 238 words per minute, which is the average adult reading speed according to research. Speaking time uses 150 words per minute, which is the average conversational speaking pace.' },
  { question: 'Can I use this for essays and academic papers?', answer: 'Absolutely! Our word counter is perfect for checking essay word counts, monitoring character limits, and ensuring your academic papers meet length requirements. The sentence and paragraph counts help you structure your writing effectively.' },
  { question: 'What counts as a word?', answer: 'A word is defined as any sequence of characters separated by whitespace (spaces, tabs, or line breaks). Hyphenated words like "well-known" count as one word. Numbers and abbreviations also count as individual words.' },
];

export default function WordCounterPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Word Counter</h1>
        <p className="text-text-light mb-6">Count words, characters, sentences, paragraphs, and estimate reading time — all in real time.</p>

        <AdSlot slot="leaderboard" />

        <WordCounter />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Word Counter</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free online word counter is the fastest way to check the word count of any text. Whether you are writing an essay, blog post, social media update, or professional document, this tool gives you instant, accurate statistics as you type.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Simply click on the text area above and start typing, or paste your text from any source. The word counter immediately begins analyzing your text and displays all statistics in real time. There is no need to click a submit button — every keystroke triggers an instant update.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding the Statistics</h3>
            <p>
              The word counter displays eight key metrics. <strong>Words</strong> shows the total number of words in your text. <strong>Characters</strong> counts every character including spaces, while <strong>No Spaces</strong> counts characters excluding all whitespace. <strong>Sentences</strong> are detected by periods, exclamation marks, and question marks. <strong>Paragraphs</strong> are separated by blank lines.
            </p>
            <p>
              <strong>Reading Time</strong> estimates how long it takes to read your text at 238 words per minute, the average adult reading speed. <strong>Speaking Time</strong> uses 150 words per minute, the average conversational pace. <strong>Average Word Length</strong> shows the mean number of characters per word, and the tool identifies the <strong>Longest Word</strong> in your text.
            </p>
            <h3 className="text-lg font-semibold text-text">Common Use Cases</h3>
            <p>
              Students use the word counter to meet essay requirements — most academic assignments specify a word count range. Bloggers check content length to optimize for SEO, as search engines tend to favor comprehensive articles of 1,500 to 2,500 words. Social media managers verify that posts fit platform character limits: Twitter allows 280 characters, LinkedIn posts perform best under 1,300 characters, and Instagram captions max out at 2,200 characters.
            </p>
            <h3 className="text-lg font-semibold text-text">Tips for Better Writing</h3>
            <p>
              Use the reading time estimate to gauge whether your content is the right length for your audience. Blog posts that take 7 minutes to read (about 1,600 words) tend to get the most engagement. Keep sentences under 20 words for maximum readability. Aim for paragraphs of 3 to 5 sentences to maintain visual appeal and reader engagement.
            </p>
            <p>
              The average word length metric helps you assess vocabulary complexity. An average of 4 to 5 characters per word indicates accessible writing suitable for a general audience. Higher averages may suggest overly complex language that could alienate readers.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/word-counter" />
      </div>
    </>
  );
}
