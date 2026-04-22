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

export default function TextStatistics() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const trimmed = text.trim();
    if (!trimmed) {
      return {
        wordCount: 0, charCount: 0, charNoSpaces: 0, sentenceCount: 0,
        paragraphCount: 0, syllableCount: 0, avgWordLength: '0',
        avgSentenceLength: '0', avgSyllablesPerWord: '0',
        fleschKincaid: 0, fleschGrade: 0, gunningFog: 0,
        colemanLiau: 0, smog: 0, readingLevel: 'N/A',
        uniqueWords: 0, typeTokenRatio: '0', hapaxLegomena: 0,
        readingTime: 0, speakingTime: 0, longestWord: '', shortestWord: '',
        complexWordCount: 0, complexWordPct: '0',
      };
    }

    const words = trimmed.split(/\s+/).filter(w => w.length > 0);
    const wordCount = words.length;
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s/g, '').length;
    const sentences = trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const sentenceCount = Math.max(sentences.length, 1);
    const paragraphs = trimmed.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    const paragraphCount = paragraphs.length || 1;

    const syllableCounts = words.map(w => countSyllables(w));
    const syllableCount = syllableCounts.reduce((a, b) => a + b, 0);
    const complexWords = words.filter(w => countSyllables(w) >= 3);
    const complexWordCount = complexWords.length;
    const complexWordPct = wordCount > 0 ? ((complexWordCount / wordCount) * 100).toFixed(1) : '0';

    const avgWordLength = wordCount > 0 ? (words.reduce((s, w) => s + w.replace(/[^a-zA-Z]/g, '').length, 0) / wordCount).toFixed(1) : '0';
    const avgSentenceLength = (wordCount / sentenceCount).toFixed(1);
    const avgSyllablesPerWord = wordCount > 0 ? (syllableCount / wordCount).toFixed(2) : '0';

    const ASL = wordCount / sentenceCount;
    const ASW = wordCount > 0 ? syllableCount / wordCount : 0;

    // Flesch-Kincaid Reading Ease
    const fleschKincaid = wordCount > 0
      ? Math.round((206.835 - 1.015 * ASL - 84.6 * ASW) * 10) / 10
      : 0;

    // Flesch-Kincaid Grade Level
    const fleschGrade = wordCount > 0
      ? Math.max(0, Math.round((0.39 * ASL + 11.8 * ASW - 15.59) * 10) / 10)
      : 0;

    // Gunning Fog Index
    const gunningFog = wordCount > 0
      ? Math.round((0.4 * (ASL + 100 * (complexWordCount / wordCount))) * 10) / 10
      : 0;

    // Coleman-Liau Index
    const L = wordCount > 0 ? (charNoSpaces / wordCount) * 100 : 0;
    const S = wordCount > 0 ? (sentenceCount / wordCount) * 100 : 0;
    const colemanLiau = wordCount > 0
      ? Math.max(0, Math.round((0.0588 * L - 0.296 * S - 15.8) * 10) / 10)
      : 0;

    // SMOG Index
    const smog = sentenceCount >= 3 && wordCount > 0
      ? Math.round((1.0430 * Math.sqrt(complexWordCount * (30 / sentenceCount)) + 3.1291) * 10) / 10
      : 0;

    let readingLevel = 'N/A';
    if (wordCount > 0) {
      if (fleschKincaid >= 90) readingLevel = 'Very Easy';
      else if (fleschKincaid >= 80) readingLevel = 'Easy';
      else if (fleschKincaid >= 70) readingLevel = 'Fairly Easy';
      else if (fleschKincaid >= 60) readingLevel = 'Standard';
      else if (fleschKincaid >= 50) readingLevel = 'Fairly Difficult';
      else if (fleschKincaid >= 30) readingLevel = 'Difficult';
      else readingLevel = 'Very Difficult';
    }

    // Vocabulary richness
    const lowerWords = words.map(w => w.toLowerCase().replace(/[^a-z'-]/g, '')).filter(w => w.length > 0);
    const uniqueSet = new Set(lowerWords);
    const uniqueWords = uniqueSet.size;
    const typeTokenRatio = wordCount > 0 ? ((uniqueWords / wordCount) * 100).toFixed(1) : '0';

    const wordFreq: Record<string, number> = {};
    for (const w of lowerWords) {
      wordFreq[w] = (wordFreq[w] || 0) + 1;
    }
    const hapaxLegomena = Object.values(wordFreq).filter(c => c === 1).length;

    const readingTime = Math.ceil(wordCount / 238);
    const speakingTime = Math.ceil(wordCount / 150);

    const sorted = [...words].sort((a, b) => b.length - a.length);
    const longestWord = sorted[0] || '';
    const shortestWord = sorted[sorted.length - 1] || '';

    return {
      wordCount, charCount, charNoSpaces, sentenceCount: sentences.length, paragraphCount,
      syllableCount, avgWordLength, avgSentenceLength, avgSyllablesPerWord,
      fleschKincaid, fleschGrade, gunningFog, colemanLiau, smog, readingLevel,
      uniqueWords, typeTokenRatio, hapaxLegomena,
      readingTime, speakingTime, longestWord, shortestWord,
      complexWordCount, complexWordPct,
    };
  }, [text]);

  const statsText = `Words: ${stats.wordCount}\nCharacters: ${stats.charCount}\nCharacters (no spaces): ${stats.charNoSpaces}\nSentences: ${stats.sentenceCount}\nParagraphs: ${stats.paragraphCount}\nSyllables: ${stats.syllableCount}\nReading Time: ${stats.readingTime} min\nSpeaking Time: ${stats.speakingTime} min\n\nReadability Scores:\nFlesch-Kincaid Reading Ease: ${stats.fleschKincaid}\nFlesch-Kincaid Grade Level: ${stats.fleschGrade}\nGunning Fog Index: ${stats.gunningFog}\nColeman-Liau Index: ${stats.colemanLiau}\nSMOG Index: ${stats.smog}\nReading Level: ${stats.readingLevel}\n\nVocabulary:\nUnique Words: ${stats.uniqueWords}\nType-Token Ratio: ${stats.typeTokenRatio}%\nHapax Legomena: ${stats.hapaxLegomena}\nComplex Words: ${stats.complexWordCount} (${stats.complexWordPct}%)`;

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
        <CopyButton text={statsText} label="Copy All Stats" />
      </div>

      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste your text here for comprehensive analysis..."
        className="w-full h-56 p-4 bg-surface border border-border rounded-lg text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-y shadow-sm"
        aria-label="Text input for comprehensive text statistics"
      />

      {/* Basic Counts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text mb-3">Basic Counts</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            { label: 'Words', value: stats.wordCount },
            { label: 'Characters', value: stats.charCount },
            { label: 'No Spaces', value: stats.charNoSpaces },
            { label: 'Sentences', value: stats.sentenceCount },
            { label: 'Paragraphs', value: stats.paragraphCount },
            { label: 'Syllables', value: stats.syllableCount },
            { label: 'Reading Time', value: `${stats.readingTime} min` },
            { label: 'Speaking Time', value: `${stats.speakingTime} min` },
            { label: 'Avg Word Length', value: stats.avgWordLength },
            { label: 'Avg Sentence', value: `${stats.avgSentenceLength} words` },
          ].map((item) => (
            <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
              <div className="text-2xl font-bold text-primary">{item.value}</div>
              <div className="text-sm text-text-light mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Readability Scores */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text mb-3">Readability Scores</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Flesch-Kincaid Reading Ease</div>
            <div className={`text-3xl font-bold ${getScoreColor(stats.fleschKincaid)}`}>{stats.fleschKincaid}</div>
            <div className="text-sm text-text-light mt-1">{stats.readingLevel}</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Flesch-Kincaid Grade Level</div>
            <div className="text-3xl font-bold text-primary">{stats.fleschGrade}</div>
            <div className="text-sm text-text-light mt-1">US school grade</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Gunning Fog Index</div>
            <div className="text-3xl font-bold text-primary">{stats.gunningFog}</div>
            <div className="text-sm text-text-light mt-1">Years of education needed</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Coleman-Liau Index</div>
            <div className="text-3xl font-bold text-primary">{stats.colemanLiau}</div>
            <div className="text-sm text-text-light mt-1">US school grade</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">SMOG Index</div>
            <div className="text-3xl font-bold text-primary">{stats.smog}</div>
            <div className="text-sm text-text-light mt-1">Years of education needed</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Complex Words</div>
            <div className="text-3xl font-bold text-primary">{stats.complexWordCount}</div>
            <div className="text-sm text-text-light mt-1">{stats.complexWordPct}% of total (3+ syllables)</div>
          </div>
        </div>
      </div>

      {/* Vocabulary Richness */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold text-text mb-3">Vocabulary Richness</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Unique Words</div>
            <div className="text-3xl font-bold text-primary">{stats.uniqueWords}</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Type-Token Ratio</div>
            <div className="text-3xl font-bold text-primary">{stats.typeTokenRatio}%</div>
            <div className="text-sm text-text-light mt-1">Higher = more diverse vocabulary</div>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <div className="text-sm text-text-light mb-1">Hapax Legomena</div>
            <div className="text-3xl font-bold text-primary">{stats.hapaxLegomena}</div>
            <div className="text-sm text-text-light mt-1">Words used only once</div>
          </div>
        </div>
      </div>

      {/* Word Details */}
      {stats.longestWord && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <span className="text-sm text-text-light">Longest Word: </span>
            <span className="font-semibold text-primary">{stats.longestWord}</span>
            <span className="text-sm text-text-light"> ({stats.longestWord.length} chars)</span>
          </div>
          <div className="bg-surface border border-border rounded-lg p-4 shadow-sm">
            <span className="text-sm text-text-light">Shortest Word: </span>
            <span className="font-semibold text-primary">{stats.shortestWord}</span>
            <span className="text-sm text-text-light"> ({stats.shortestWord.length} chars)</span>
          </div>
        </div>
      )}
    </div>
  );
}
