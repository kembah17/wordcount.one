import type { Metadata } from 'next';
import ReadingTimeEstimator from '@/components/tools/ReadingTimeEstimator';
import AdSlot from '@/components/ui/AdSlot';
import FAQ from '@/components/ui/FAQ';
import FaqSchema from '@/components/seo/FaqSchema';
import RelatedTools from '@/components/ui/RelatedTools';

export const metadata: Metadata = {
  title: 'Reading Time Estimator — Calculate Reading Time & Readability Online Free',
  description: 'Free online reading time estimator. Calculate reading time at different speeds, speaking time, Flesch-Kincaid readability score, and grade level in real time.',
  alternates: { canonical: 'https://wordcount.one/reading-time-estimator' },
  openGraph: {
    title: 'Reading Time Estimator — Calculate Reading Time & Readability Online Free',
    description: 'Free online reading time calculator with readability analysis. Estimate reading time at slow, average, and fast speeds.',
    url: 'https://wordcount.one/reading-time-estimator',
  },
};

const faqItems = [
  { question: 'How is reading time calculated?', answer: 'Reading time is calculated by dividing the total word count by a words-per-minute (WPM) rate. We provide three speeds: slow readers at 150 WPM, average readers at 238 WPM (based on research by Brysbaert, 2019), and fast readers at 300 WPM. Speaking time uses 150 WPM, the average conversational pace.' },
  { question: 'What is the Flesch-Kincaid Reading Ease score?', answer: 'The Flesch-Kincaid Reading Ease score measures how easy a text is to read on a scale of 0 to 100. Higher scores indicate easier text. A score of 60-70 is considered standard (suitable for 8th-9th graders), 70-80 is fairly easy, and 80-90 is easy. Most web content should aim for a score of 60 or higher.' },
  { question: 'What is the Flesch-Kincaid Grade Level?', answer: 'The Flesch-Kincaid Grade Level indicates the US school grade level needed to understand the text. A grade level of 8 means an 8th grader can understand it. For general web content, aim for grade level 6-8. Academic papers typically score at grade level 12-16. Lower grade levels mean more accessible writing.' },
  { question: 'How are syllables counted?', answer: 'Syllables are estimated using a rule-based algorithm that counts vowel groups in each word. While not 100% accurate for every English word (due to irregular pronunciations), the algorithm provides reliable estimates that closely match manual syllable counts for most text.' },
  { question: 'What is the ideal reading time for blog posts?', answer: 'Research by Medium found that blog posts with a 7-minute reading time (approximately 1,600 words) receive the most engagement. However, the ideal length depends on your topic and audience. Tutorials and guides can be longer (10-15 minutes), while news articles work best at 3-5 minutes.' },
];

export default function ReadingTimeEstimatorPage() {
  return (
    <>
      <FaqSchema items={faqItems} />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold text-text mb-2">Reading Time Estimator</h1>
        <p className="text-text-light mb-6">Calculate reading time at different speeds, speaking time, and analyze readability with Flesch-Kincaid scores.</p>

        <AdSlot slot="leaderboard" />

        <ReadingTimeEstimator />

        <AdSlot slot="below-results" />

        <section className="mt-12 bg-surface border border-border rounded-xl p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-text mb-4">How to Use the Reading Time Estimator</h2>
          <div className="text-text-light leading-relaxed space-y-4">
            <p>
              Our free reading time estimator helps you understand how long it takes to read or speak your text, and how accessible your writing is to different audiences. This tool is essential for content creators, educators, and anyone who wants to optimize their writing for their target audience.
            </p>
            <h3 className="text-lg font-semibold text-text">Getting Started</h3>
            <p>
              Paste or type your text into the text area above. The estimator immediately calculates reading times at three different speeds and provides readability analysis. All calculations update in real time as you edit your text.
            </p>
            <h3 className="text-lg font-semibold text-text">Understanding Reading Speeds</h3>
            <p>
              The tool provides four time estimates. <strong>Slow reading</strong> at 150 words per minute represents careful, analytical reading. <strong>Average reading</strong> at 238 WPM is the typical adult reading speed. <strong>Fast reading</strong> at 300 WPM represents skilled or skimming readers. <strong>Speaking time</strong> at 150 WPM estimates how long it takes to read the text aloud.
            </p>
            <h3 className="text-lg font-semibold text-text">Readability Scores Explained</h3>
            <p>
              The <strong>Flesch-Kincaid Reading Ease</strong> score ranges from 0 to 100, where higher scores mean easier reading. Scores above 70 are considered easy to read, 50 to 70 is moderate, and below 50 is difficult. The <strong>Grade Level</strong> indicates the US school grade needed to understand the text. For web content, aim for grade level 6 to 8.
            </p>
            <h3 className="text-lg font-semibold text-text">Optimizing Content Length</h3>
            <p>
              Use reading time estimates to optimize your content for its purpose. Blog posts perform best at 7 minutes of reading time, which is approximately 1,600 words. Email newsletters should take 2 to 3 minutes to read. Social media posts should be consumable in under 30 seconds. Whitepapers and guides can extend to 15 to 20 minutes.
            </p>
            <p>
              Speaking time is crucial for presentations, podcasts, and video scripts. A 5-minute presentation needs about 750 words. A 20-minute podcast episode requires approximately 3,000 words. Use the speaking time estimate to plan your content length for spoken delivery.
            </p>
            <h3 className="text-lg font-semibold text-text">Improving Readability</h3>
            <p>
              To improve your Flesch-Kincaid score, use shorter sentences and simpler words. Replace multi-syllable words with shorter alternatives when possible. Break long sentences into two shorter ones. Use active voice instead of passive voice. These changes make your writing more accessible without sacrificing meaning.
            </p>
          </div>
        </section>

        <AdSlot slot="in-content" />

        <section className="mt-12">
          <h2 className="text-2xl font-bold text-text mb-6">Frequently Asked Questions</h2>
          <FAQ items={faqItems} />
        </section>

        <RelatedTools currentTool="/reading-time-estimator" />
      </div>
    </>
  );
}
