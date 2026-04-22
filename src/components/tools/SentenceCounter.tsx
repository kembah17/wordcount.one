'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

export default function SentenceCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) {
      return {
        sentenceCount: 0, avgLength: 0, longestSentence: '', shortestSentence: '',
        longestWords: 0, shortestWords: 0, complexSentences: 0, simpleSentences: 0,
        sentences: [] as { text: string; words: number; complexity: string }[],
      };
    }

    const sentenceTexts = trimmed
      .split(/(?<=[.!?])\s+/)
      .map(s => s.trim())
      .filter(s => s.length > 0);

    const sentences = sentenceTexts.map(s => {
      const words = s.split(/\s+/).filter(w => w.length > 0).length;
      let complexity = 'Simple';
      if (words > 25) complexity = 'Complex';
      else if (words > 15) complexity = 'Moderate';
      return { text: s, words, complexity };
    });

    const sentenceCount = sentences.length;
    const totalWords = sentences.reduce((sum, s) => sum + s.words, 0);
    const avgLength = sentenceCount > 0 ? Math.round(totalWords / sentenceCount) : 0;

    const sorted = [...sentences].sort((a, b) => b.words - a.words);
    const longestSentence = sorted[0]?.text || '';
    const shortestSentence = sorted[sorted.length - 1]?.text || '';
    const longestWords = sorted[0]?.words || 0;
    const shortestWords = sorted[sorted.length - 1]?.words || 0;

    const complexSentences = sentences.filter(s => s.complexity === 'Complex').length;
    const simpleSentences = sentences.filter(s => s.complexity === 'Simple').length;

    return {
      sentenceCount, avgLength, longestSentence, shortestSentence,
      longestWords, shortestWords, complexSentences, simpleSentences, sentences,
    };
  }, [text]);

  const statsText = `Sentences: ${stats.sentenceCount}\nAverage Length: ${stats.avgLength} words\nLongest: ${stats.longestWords} words\nShortest: ${stats.shortestWords} words\nComplex Sentences: ${stats.complexSentences}\nSimple Sentences: ${stats.simpleSentences}`;

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
        placeholder="Start typing or paste your text here..."
        className="w-full h-56 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y shadow-sm"
        aria-label="Text input for sentence counting"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { label: 'Sentences', value: stats.sentenceCount },
          { label: 'Avg Length', value: `${stats.avgLength} words` },
          { label: 'Longest', value: `${stats.longestWords} words` },
          { label: 'Shortest', value: `${stats.shortestWords} words` },
          { label: 'Complex', value: stats.complexSentences },
          { label: 'Simple', value: stats.simpleSentences },
        ].map((item) => (
          <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-text-light mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {stats.sentences.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-text mb-3">Sentence Breakdown</h3>
          <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-4 py-2 text-left text-text-light font-medium">#</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Sentence</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Words</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Complexity</th>
                </tr>
              </thead>
              <tbody>
                {stats.sentences.slice(0, 20).map((s, i) => (
                  <tr key={i} className="border-t border-border-light">
                    <td className="px-4 py-2 text-text-light">{i + 1}</td>
                    <td className="px-4 py-2 text-text max-w-md truncate">{s.text}</td>
                    <td className="px-4 py-2 text-primary font-semibold">{s.words}</td>
                    <td className="px-4 py-2">
                      <span className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        s.complexity === 'Complex' ? 'bg-error/10 text-error' :
                        s.complexity === 'Moderate' ? 'bg-warning/10 text-warning' :
                        'bg-success/10 text-success'
                      }`}>
                        {s.complexity}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
