import Link from 'next/link';
import AdSlot from '@/components/ui/AdSlot';

const tools = [
  { name: 'Word Counter', href: '/word-counter', icon: '📝' },
  { name: 'Character Counter', href: '/character-counter', icon: '🔤' },
  { name: 'Sentence Counter', href: '/sentence-counter', icon: '📄' },
  { name: 'Paragraph Counter', href: '/paragraph-counter', icon: '📑' },
  { name: 'Reading Time Estimator', href: '/reading-time-estimator', icon: '⏱️' },
  { name: 'Keyword Density Checker', href: '/keyword-density-checker', icon: '🔍' },
  { name: 'Text Statistics', href: '/text-statistics', icon: '📊' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: 'var(--color-footer-bg)', color: 'var(--color-footer-text)' }} className="mt-16">
      <AdSlot slot="footer" />
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>WordCount.one</h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--color-footer-muted)' }}>
              Free online word counting and text analysis tools. All processing happens in your browser — your text never leaves your device.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>Tools</h3>
            <ul className="space-y-2">
              {tools.map(tool => (
                <li key={tool.href}>
                  <Link href={tool.href} className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>
                    {tool.icon} {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-3" style={{ color: 'var(--color-footer-text)' }}>Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>About</Link></li>
              <li><Link href="/privacy" className="text-sm transition-colors" style={{ color: 'var(--color-footer-muted)' }}>Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 text-center text-sm" style={{ borderTop: '1px solid var(--color-footer-border)', color: 'var(--color-footer-muted)' }}>
          &copy; {new Date().getFullYear()} WordCount.one. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
