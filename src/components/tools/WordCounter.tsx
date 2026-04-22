'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

export default function WordCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/) : [];
    const wordCount = words.length;
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s/g, '').length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
    const sentenceCount = sentences.length;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(p => p.trim().length > 0) : [];
    const paragraphCount = paragraphs.length || (trimmed ? 1 : 0);
    const readingTime = Math.ceil(wordCount / 238);
    const speakingTime = Math.ceil(wordCount / 150);
    const avgWordLength = wordCount > 0 ? (words.reduce((sum, w) => sum + w.length, 0) / wordCount).toFixed(1) : '0';
    const longestWord = wordCount > 0 ? words.reduce((a, b) => a.length >= b.length ? a : b, '') : '';

    return {
      wordCount, charCount, charNoSpaces, sentenceCount,
      paragraphCount, readingTime, speakingTime, avgWordLength, longestWord,
    };
  }, [text]);

  const statsText = `Words: ${stats.wordCount}\nCharacters: ${stats.charCount}\nCharacters (no spaces): ${stats.charNoSpaces}\nSentences: ${stats.sentenceCount}\nParagraphs: ${stats.paragraphCount}\nReading Time: ${stats.readingTime} min\nSpeaking Time: ${stats.speakingTime} min\nAvg Word Length: ${stats.avgWordLength}\nLongest Word: ${stats.longestWord}`;

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
        aria-label="Text input for word counting"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {[
          { label: 'Words', value: stats.wordCount },
          { label: 'Characters', value: stats.charCount },
          { label: 'No Spaces', value: stats.charNoSpaces },
          { label: 'Sentences', value: stats.sentenceCount },
          { label: 'Paragraphs', value: stats.paragraphCount },
          { label: 'Reading Time', value: `${stats.readingTime} min` },
          { label: 'Speaking Time', value: `${stats.speakingTime} min` },
          { label: 'Avg Word Length', value: stats.avgWordLength },
        ].map((item) => (
          <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-text-light mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {stats.longestWord && (
        <div className="mt-4 bg-surface border border-border rounded-lg p-4 shadow-sm">
          <span className="text-sm text-text-light">Longest Word: </span>
          <span className="font-semibold text-primary">{stats.longestWord}</span>
          <span className="text-sm text-text-light"> ({stats.longestWord.length} characters)</span>
        </div>
      )}
    </div>
  );
}
