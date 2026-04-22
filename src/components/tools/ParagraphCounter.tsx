'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

export default function ParagraphCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) {
      return {
        paragraphCount: 0, totalWords: 0, avgWordsPerParagraph: 0,
        avgSentencesPerParagraph: 0, paragraphs: [] as { text: string; words: number; sentences: number; chars: number }[],
      };
    }

    const paraTexts = trimmed.split(/\n\s*\n/).map(p => p.trim()).filter(p => p.length > 0);
    if (paraTexts.length === 0 && trimmed) {
      const words = trimmed.split(/\s+/).filter(w => w.length > 0).length;
      const sentences = trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      return {
        paragraphCount: 1, totalWords: words, avgWordsPerParagraph: words,
        avgSentencesPerParagraph: sentences,
        paragraphs: [{ text: trimmed, words, sentences, chars: trimmed.length }],
      };
    }

    const paragraphs = paraTexts.map(p => {
      const words = p.split(/\s+/).filter(w => w.length > 0).length;
      const sentences = p.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
      return { text: p, words, sentences, chars: p.length };
    });

    const paragraphCount = paragraphs.length;
    const totalWords = paragraphs.reduce((sum, p) => sum + p.words, 0);
    const avgWordsPerParagraph = paragraphCount > 0 ? Math.round(totalWords / paragraphCount) : 0;
    const totalSentences = paragraphs.reduce((sum, p) => sum + p.sentences, 0);
    const avgSentencesPerParagraph = paragraphCount > 0 ? Math.round(totalSentences / paragraphCount) : 0;

    return { paragraphCount, totalWords, avgWordsPerParagraph, avgSentencesPerParagraph, paragraphs };
  }, [text]);

  const statsText = `Paragraphs: ${stats.paragraphCount}\nTotal Words: ${stats.totalWords}\nAvg Words/Paragraph: ${stats.avgWordsPerParagraph}\nAvg Sentences/Paragraph: ${stats.avgSentencesPerParagraph}`;

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setText('')}
          className="px-4 py-2 text-sm font-medium bg-surface border border-border rounded-lg hover:bg-surface-alt transition-colors text-text"
        >
          Clear
        </button>
        <CopyButton text={statsText} label="Copy Stats" />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here. Separate paragraphs with a blank line..."
        className="w-full h-56 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y shadow-sm"
        aria-label="Text input for paragraph counting"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Paragraphs', value: stats.paragraphCount },
          { label: 'Total Words', value: stats.totalWords },
          { label: 'Avg Words/Para', value: stats.avgWordsPerParagraph },
          { label: 'Avg Sentences/Para', value: stats.avgSentencesPerParagraph },
        ].map((item) => (
          <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-text-light mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {stats.paragraphs.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-text mb-3">Paragraph Breakdown</h3>
          <div className="space-y-3">
            {stats.paragraphs.map((p, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-primary">Paragraph {i + 1}</span>
                  <div className="flex gap-4 text-sm text-text-light">
                    <span>{p.words} words</span>
                    <span>{p.sentences} sentences</span>
                    <span>{p.chars} chars</span>
                  </div>
                </div>
                <div className="w-full bg-surface-alt rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all"
                    style={{ width: `${stats.totalWords > 0 ? (p.words / stats.totalWords) * 100 : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
