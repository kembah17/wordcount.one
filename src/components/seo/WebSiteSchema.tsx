export default function WebSiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'WordCount.one',
    url: 'https://wordcount.one',
    description: 'Free online word counting and text analysis tools. Count words, characters, sentences, paragraphs, and more — all in your browser.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://wordcount.one/?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
