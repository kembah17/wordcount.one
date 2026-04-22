'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

function countSyllables(word: string): number {
  word = word.toLowerCase().replace(/[^a-z]/g, '');
  if (word.length <= 3) return 1;
  word = word.replace(/(?:[^laeiouy]es|ed|[^laeiouy]e)$/, '');
  word = word.replace(/^y/, '');
  const matches = word.match(/[aeiouy]{1,2}/g);
  return matches ? matches.length : 1;
}

export default function ReadingTimeEstimator() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(w => w.length > 0) : [];
    const wordCount = words.length;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0) : [];
    const sentenceCount = Math.max(sentences.length, 1);

    const slowReading = Math.ceil(wordCount / 150);
    const avgReading = Math.ceil(wordCount / 238);
    const fastReading = Math.ceil(wordCount / 300);
    const speakingTime = Math.ceil(wordCount / 150);

    const totalSyllables = words.reduce((sum, w) => sum + countSyllables(w), 0);
    const avgSyllablesPerWord = wordCount > 0 ? totalSyllables / wordCount : 0;
    const avgWordsPerSentence = wordCount / sentenceCount;

    // Flesch-Kincaid Reading Ease
    const fleschKincaid = wordCount > 0
      ? 206.835 - 1.015 * avgWordsPerSentence - 84.6 * avgSyllablesPerWord
      : 0;

    // Flesch-Kincaid Grade Level
    const gradeLevel = wordCount > 0
      ? 0.39 * avgWordsPerSentence + 11.8 * avgSyllablesPerWord - 15.59
      : 0;

    let readingLevel = 'N/A';
    if (wordCount > 0) {
      if (fleschKincaid >= 90) readingLevel = 'Very Easy (5th grade)';
      else if (fleschKincaid >= 80) readingLevel = 'Easy (6th grade)';
      else if (fleschKincaid >= 70) readingLevel = 'Fairly Easy (7th grade)';
      else if (fleschKincaid >= 60) readingLevel = 'Standard (8th-9th grade)';
      else if (fleschKincaid >= 50) readingLevel = 'Fairly Difficult (10th-12th grade)';
      else if (fleschKincaid >= 30) readingLevel = 'Difficult (College)';
      else readingLevel = 'Very Difficult (Graduate)';
    }

    return {
      wordCount, sentenceCount: sentences.length, slowReading, avgReading, fastReading,
      speakingTime, fleschKincaid: Math.round(fleschKincaid * 10) / 10,
      gradeLevel: Math.max(0, Math.round(gradeLevel * 10) / 10), readingLevel,
      totalSyllables, avgSyllablesPerWord: Math.round(avgSyllablesPerWord * 100) / 100,
    };
  }, [text]);

  const statsText = `Words: ${stats.wordCount}\nSlow Reading (150 wpm): ${stats.slowReading} min\nAverage Reading (238 wpm): ${stats.avgReading} min\nFast Reading (300 wpm): ${stats.fastReading} min\nSpeaking Time (150 wpm): ${stats.speakingTime} min\nFlesch-Kincaid Score: ${stats.fleschKincaid}\nGrade Level: ${stats.gradeLevel}\nReading Level: ${stats.readingLevel}`;

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'text-success';
    if (score >= 50) return 'text-warning';
    return 'text-error';
  };

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
        aria-label="Text input for reading time estimation"
      />

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text mb-3">Reading & Speaking Time</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { label: 'Slow (150 wpm)', value: `${stats.slowReading} min` },
            { label: 'Average (238 wpm)', value: `${stats.avgReading} min` },
            { label: 'Fast (300 wpm)', value: `${stats.fastReading} min` },
            { label: 'Speaking Time', value: `${stats.speakingTime} min` },
          ].map((item) => (
            <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-text-light mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text mb-3">Readability Analysis</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Flesch-Kincaid Reading Ease</div>
            <div className={`text-3xl font-bold ${getScoreColor(stats.fleschKincaid)}`}>
              {stats.fleschKincaid}
            </div>
            <div className="text-sm text-text-light mt-1">{stats.readingLevel}</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Grade Level</div>
            <div className="text-3xl font-bold text-primary">{stats.gradeLevel}</div>
            <div className="text-sm text-text-light mt-1">US school grade equivalent</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Total Syllables</div>
            <div className="text-3xl font-bold text-primary">{stats.totalSyllables}</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Avg Syllables/Word</div>
            <div className="text-3xl font-bold text-primary">{stats.avgSyllablesPerWord}</div>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-primary">{stats.wordCount}</div>
          <div className="text-sm text-text-light mt-1">Total Words</div>
        </div>
        <div className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
          <div className="text-2xl font-bold text-primary">{stats.sentenceCount}</div>
          <div className="text-sm text-text-light mt-1">Total Sentences</div>
        </div>
      </div>
    </div>
  );
}
