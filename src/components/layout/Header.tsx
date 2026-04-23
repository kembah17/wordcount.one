'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const tools = [
  { name: 'Word Counter', href: '/word-counter' },
  { name: 'Character Counter', href: '/character-counter' },
  { name: 'Sentence Counter', href: '/sentence-counter' },
  { name: 'Paragraph Counter', href: '/paragraph-counter' },
  { name: 'Reading Time', href: '/reading-time-estimator' },
  { name: 'Keyword Density', href: '/keyword-density-checker' },
  { name: 'Text Statistics', href: '/text-statistics' },
];

export default function Header() {
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    setDark(!dark);
    if (!dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <header className="bg-surface border-b border-border shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          WordCount<span className="text-text">.one</span>
        </Link>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex items-center gap-1">
            {tools.slice(0, 4).map(tool => (
              <Link
                key={tool.href}
                href={tool.href}
                className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary-light rounded-md transition-colors"
              >
                {tool.name}
              </Link>
            ))}
            <div className="relative group">
              <button className="px-3 py-1.5 text-sm text-text-light hover:text-primary hover:bg-primary-light rounded-md transition-colors">
                More ▾
              </button>
              <div className="absolute right-0 top-full mt-1 w-48 bg-surface border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
                {tools.slice(4).map(tool => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    className="block px-4 py-2 text-sm text-text-light hover:text-primary hover:bg-primary-light transition-colors"
                  >
                    {tool.name}
                  </Link>
                ))}
              </div>
            </div>
          </nav>

          <button
              onClick={toggleTheme}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
              style={{
                display: "inline-flex",
                alignItems: "center",
                padding: "0.25rem",
                borderRadius: "9999px",
                border: "2px solid var(--color-border, #CBD5E1)",
                backgroundColor: dark ? "var(--color-primary, #10B981)" : "var(--color-border, #CBD5E1)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                width: "4rem",
                height: "2rem",
                position: "relative",
                flexShrink: 0,
              }}
            >
              <span style={{ position: "absolute", left: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: dark ? 0.4 : 1, transition: "opacity 0.3s ease", lineHeight: 1 }}>☀️</span>
              <span style={{ position: "absolute", right: "0.375rem", top: "50%", transform: "translateY(-50%)", fontSize: "0.75rem", opacity: dark ? 1 : 0.4, transition: "opacity 0.3s ease", lineHeight: 1 }}>🌙</span>
              <span style={{ position: "absolute", top: "2px", left: dark ? "calc(100% - 1.625rem)" : "2px", width: "1.5rem", height: "1.5rem", borderRadius: "50%", backgroundColor: "#FFFFFF", boxShadow: "0 1px 3px rgba(0,0,0,0.3)", transition: "left 0.3s ease" }} />
            </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg bg-surface-alt hover:bg-primary-light text-text-light hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden border-t border-border bg-surface px-4 py-2">
          {tools.map(tool => (
            <Link
              key={tool.href}
              href={tool.href}
              onClick={() => setMenuOpen(false)}
              className="block px-3 py-2 text-sm text-text-light hover:text-primary hover:bg-primary-light rounded-md transition-colors"
            >
              {tool.name}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
