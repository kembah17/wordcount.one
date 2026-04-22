'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

const STOP_WORDS = new Set([
  'a','an','the','and','or','but','in','on','at','to','for','of','with','by','from','is','are',
  'was','were','be','been','being','have','has','had','do','does','did','will','would','could',
  'should','may','might','shall','can','need','dare','ought','used','it','its','this','that',
  'these','those','i','me','my','mine','we','us','our','ours','you','your','yours','he','him',
  'his','she','her','hers','they','them','their','theirs','what','which','who','whom','whose',
  'where','when','how','not','no','nor','as','if','then','than','too','very','just','about',
  'above','after','again','all','also','am','any','because','before','between','both','each',
  'few','further','get','got','here','into','more','most','other','out','over','own','same',
  'so','some','such','there','through','under','until','up','while','s','t','re','ve','ll','d','m',
]);

export default function KeywordDensityChecker() {
  const [text, setText] = useState('');
  const [showCount, setShowCount] = useState(20);
  const [ngramSize, setNgramSize] = useState(1);

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) return { keywords: [], totalWords: 0 };

    const words = trimmed.toLowerCase().replace(/[^a-z0-9\s'-]/g, '').split(/\s+/).filter(w => w.length > 1);
    const totalWords = words.length;
    const filteredWords = words.filter(w => !STOP_WORDS.has(w));

    const freq: Record<string, number> = {};

    if (ngramSize === 1) {
      for (const word of filteredWords) {
        freq[word] = (freq[word] || 0) + 1;
      }
    } else {
      for (let i = 0; i <= words.length - ngramSize; i++) {
        const ngram = words.slice(i, i + ngramSize).join(' ');
        const ngramWords = ngram.split(' ');
        const hasContent = ngramWords.some(w => !STOP_WORDS.has(w));
        if (hasContent) {
          freq[ngram] = (freq[ngram] || 0) + 1;
        }
      }
    }

    const keywords = Object.entries(freq)
      .map(([keyword, count]) => ({
        keyword,
        count,
        density: totalWords > 0 ? ((count / totalWords) * 100) : 0,
      }))
      .sort((a, b) => b.count - a.count)
      .slice(0, showCount);

    return { keywords, totalWords };
  }, [text, showCount, ngramSize]);

  const statsText = stats.keywords.map(k => `${k.keyword}: ${k.count} (${k.density.toFixed(2)}%)`).join('\n');

  return (
    <div>
      <div className="mb-4 flex flex-wrap gap-2">
        <button
          onClick={() => setText('')}
          className="px-4 py-2 text-sm font-medium bg-surface border border-border rounded-lg hover:bg-surface-alt transition-colors text-text"
        >
          Clear
        </button>
        <CopyButton text={statsText} label="Copy Results" />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here to analyze keyword density..."
        className="w-full h-56 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y shadow-sm"
        aria-label="Text input for keyword density analysis"
      />

      <div className="mt-4 flex flex-wrap gap-4 items-center">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text">N-gram:</label>
          <div className="flex gap-1">
            {[1, 2, 3].map(n => (
              <button
                key={n}
                onClick={() => setNgramSize(n)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  ngramSize === n
                    ? 'bg-primary text-primary-text'
                    : 'bg-surface border border-border text-text-light hover:bg-surface-alt'
                }`}
              >
                {n}-word
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-text">Show top:</label>
          <div className="flex gap-1">
            {[10, 20, 50].map(n => (
              <button
                key={n}
                onClick={() => setShowCount(n)}
                className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                  showCount === n
                    ? 'bg-primary text-primary-text'
                    : 'bg-surface border border-border text-text-light hover:bg-surface-alt'
                }`}
              >
                {n}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-primary">{stats.totalWords}</div>
          <div className="text-sm text-text-light mt-1">Total Words</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-primary">{stats.keywords.length}</div>
          <div className="text-sm text-text-light mt-1">Unique Keywords</div>
        </div>
      </div>

      {stats.keywords.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-text mb-3">
            Top {ngramSize === 1 ? 'Keywords' : `${ngramSize}-Word Phrases`}
          </h3>
          <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-4 py-2 text-left text-text-light font-medium">#</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Keyword</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Count</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Density</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Bar</th>
                </tr>
              </thead>
              <tbody>
                {stats.keywords.map((k, i) => (
                  <tr key={k.keyword} className="border-t border-border-light">
                    <td className="px-4 py-2 text-text-light">{i + 1}</td>
                    <td className="px-4 py-2 font-medium text-text">{k.keyword}</td>
                    <td className="px-4 py-2 text-primary font-semibold">{k.count}</td>
                    <td className="px-4 py-2 text-text-light">{k.density.toFixed(2)}%</td>
                    <td className="px-4 py-2">
                      <div className="w-full bg-surface-alt rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${stats.keywords[0] ? (k.count / stats.keywords[0].count) * 100 : 0}%` }}
                        />
                      </div>
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
