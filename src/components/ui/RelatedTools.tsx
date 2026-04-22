import Link from 'next/link';

interface Tool {
  name: string;
  href: string;
  description: string;
}

const allTools: Tool[] = [
  { name: 'Word Counter', href: '/word-counter', description: 'Count words, characters, sentences, and paragraphs in real time' },
  { name: 'Character Counter', href: '/character-counter', description: 'Count characters with and without spaces, letters, digits, and special characters' },
  { name: 'Sentence Counter', href: '/sentence-counter', description: 'Count sentences and analyze sentence length and complexity' },
  { name: 'Paragraph Counter', href: '/paragraph-counter', description: 'Count paragraphs and analyze words per paragraph' },
  { name: 'Reading Time Estimator', href: '/reading-time-estimator', description: 'Calculate reading and speaking time with readability scores' },
  { name: 'Keyword Density Checker', href: '/keyword-density-checker', description: 'Analyze keyword frequency, density, and n-gram phrases' },
  { name: 'Text Statistics', href: '/text-statistics', description: 'Comprehensive text analysis with readability scores and vocabulary richness' },
];

interface RelatedToolsProps {
  currentTool: string;
}

export default function RelatedTools({ currentTool }: RelatedToolsProps) {
  const related = allTools.filter(t => t.href !== currentTool).slice(0, 4);

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold text-text mb-6">Related Tools</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map(tool => (
          <Link
            key={tool.href}
            href={tool.href}
            className="block p-4 bg-surface border border-border rounded-lg shadow-sm hover:shadow-md hover:border-primary transition-all"
          >
            <h3 className="font-semibold text-primary mb-1">{tool.name}</h3>
            <p className="text-sm text-text-light">{tool.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
