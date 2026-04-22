'use client';

import { useState, useMemo } from 'react';
import CopyButton from '@/components/ui/CopyButton';

export default function CharacterCounter() {
  const [text, setText] = useState('');

  const stats = useMemo(() => {
    const charCount = text.length;
    const charNoSpaces = text.replace(/\s/g, '').length;
    const letterCount = (text.match(/[a-zA-Z]/g) || []).length;
    const digitCount = (text.match(/[0-9]/g) || []).length;
    const spaceCount = (text.match(/ /g) || []).length;
    const specialCount = charCount - letterCount - digitCount - spaceCount - (text.match(/[\n\r\t]/g) || []).length;
    const unicodeCount = Array.from(text).filter(c => c.charCodeAt(0) > 127).length;

    const freq: Record<string, number> = {};
    for (const ch of text.toLowerCase()) {
      if (ch.trim()) {
        freq[ch] = (freq[ch] || 0) + 1;
      }
    }
    const sortedFreq = Object.entries(freq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 30);

    return {
      charCount, charNoSpaces, letterCount, digitCount,
      spaceCount, specialCount, unicodeCount, sortedFreq,
    };
  }, [text]);

  const statsText = `Characters: ${stats.charCount}\nWithout Spaces: ${stats.charNoSpaces}\nLetters: ${stats.letterCount}\nDigits: ${stats.digitCount}\nSpaces: ${stats.spaceCount}\nSpecial Characters: ${stats.specialCount}\nUnicode Characters: ${stats.unicodeCount}`;

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
        aria-label="Text input for character counting"
      />

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          { label: 'Characters', value: stats.charCount },
          { label: 'Without Spaces', value: stats.charNoSpaces },
          { label: 'Letters', value: stats.letterCount },
          { label: 'Digits', value: stats.digitCount },
          { label: 'Spaces', value: stats.spaceCount },
          { label: 'Special Chars', value: stats.specialCount },
          { label: 'Unicode Chars', value: stats.unicodeCount },
        ].map((item) => (
          <div key={item.label} className="bg-surface border border-border rounded-lg p-4 text-center shadow-sm">
            <div className="text-2xl font-bold text-primary">{item.value}</div>
            <div className="text-sm text-text-light mt-1">{item.label}</div>
          </div>
        ))}
      </div>

      {stats.sortedFreq.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-text mb-3">Character Frequency</h3>
          <div className="bg-surface border border-border rounded-lg shadow-sm overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface-alt">
                  <th className="px-4 py-2 text-left text-text-light font-medium">Character</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Count</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Percentage</th>
                  <th className="px-4 py-2 text-left text-text-light font-medium">Bar</th>
                </tr>
              </thead>
              <tbody>
                {stats.sortedFreq.map(([ch, count]) => (
                  <tr key={ch} className="border-t border-border-light">
                    <td className="px-4 py-2 font-mono text-primary font-bold">
                      {ch === ' ' ? '\u2423' : ch}
                    </td>
                    <td className="px-4 py-2 text-text">{count}</td>
                    <td className="px-4 py-2 text-text-light">
                      {stats.charNoSpaces > 0 ? ((count / stats.charNoSpaces) * 100).toFixed(1) : '0'}%
                    </td>
                    <td className="px-4 py-2">
                      <div className="w-full bg-surface-alt rounded-full h-2">
                        <div
                          className="bg-primary rounded-full h-2"
                          style={{ width: `${stats.sortedFreq[0] ? (count / stats.sortedFreq[0][1]) * 100 : 0}%` }}
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
