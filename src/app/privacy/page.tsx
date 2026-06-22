import type { Metadata } from 'next';
import AdSlot from '@/components/ui/AdSlot';

export const metadata: Metadata = {
  title: 'Privacy Policy — WordCount.one',
  description: 'Privacy policy for WordCount.one. All text processing happens in your browser. We do not collect, store, or transmit your text data.',
  alternates: { canonical: 'https://wordcount.one/privacy' },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-text mb-6">Privacy Policy</h1>

      <AdSlot slot="leaderboard" />

      <div className="bg-surface border border-border rounded-xl p-8 shadow-sm space-y-6">
        <p className="text-text-light leading-relaxed">
          Last updated: April 2025
        </p>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Overview</h2>
          <p className="text-text-light leading-relaxed">
            WordCount.one is committed to protecting your privacy. This privacy policy explains how we handle information when you use our website and tools. The short version: your text data stays on your device and we do not collect it.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Text Data Processing</h2>
          <p className="text-text-light leading-relaxed">
            All text analysis on WordCount.one happens entirely within your web browser using client-side JavaScript. Your text is never sent to our servers or any third-party service. We do not store, log, cache, or transmit any text you enter into our tools. When you close or refresh the page, all text data is permanently removed from memory.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Information We Collect</h2>
          <p className="text-text-light leading-relaxed mb-3">
            We may collect limited, non-personal information to improve our service:
          </p>
          <ul className="list-disc list-inside text-text-light space-y-2">
            <li><strong>Usage Analytics:</strong> We may use privacy-respecting analytics to understand which pages are visited and how users interact with the site. This data is aggregated and does not identify individual users.</li>
            <li><strong>Technical Information:</strong> Standard web server logs may record your IP address, browser type, and referring page. This information is used solely for security and performance monitoring.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Cookies</h2>
          <p className="text-text-light leading-relaxed">
            WordCount.one uses minimal cookies. We may use a cookie to remember your theme preference (light or dark mode). Third-party advertising partners may use cookies to serve relevant advertisements. You can control cookie settings through your browser preferences.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Third-Party Advertising</h2>
          <p className="text-text-light leading-relaxed">
            We display advertisements to support the free operation of our tools. Our advertising partners may use cookies and similar technologies to serve ads based on your browsing activity. We do not share any text data you enter into our tools with advertisers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Data Security</h2>
          <p className="text-text-light leading-relaxed">
            Since your text data never leaves your browser, it is protected by your device's own security measures. Our website is served over HTTPS to ensure secure communication between your browser and our servers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Children's Privacy</h2>
          <p className="text-text-light leading-relaxed">
            Our tools are suitable for users of all ages. We do not knowingly collect personal information from children under 13. Since our tools process text locally without data collection, they can be safely used by students and young writers.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Changes to This Policy</h2>
          <p className="text-text-light leading-relaxed">
            We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of WordCount.one after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-text mb-3">Contact</h2>
          <p className="text-text-light leading-relaxed">
            If you have questions about this privacy policy or our data practices, please contact us through our website.
          </p>
        </section>
      </div>

      <AdSlot slot="footer" />
    </div>
  );
}
