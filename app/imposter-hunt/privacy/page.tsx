import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imposter Hunt - Privacy Policy',
  description: 'Privacy Policy for Imposter Hunt, the ultimate party word game.',
};

export default function ImposterHuntPrivacy() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕵️</div>
          <h1 className="text-4xl font-bold mb-2">Imposter Hunt</h1>
          <p className="text-gray-400">Privacy Policy</p>
        </div>

        {/* Last Updated */}
        <p className="text-gray-500 text-sm mb-8">Last updated: December 31, 2025</p>

        {/* Content */}
        <div className="space-y-8">
          <Section title="Overview">
            <p>
              Imposter Hunt (&quot;the App&quot;) is a party word game developed by Farhoud Talebi.
              We are committed to protecting your privacy. This policy explains how we handle
              information when you use our App.
            </p>
          </Section>

          <Section title="Information We Collect">
            <p className="font-semibold text-purple-300 mb-2">We do not collect any personal information.</p>
            <p>
              Imposter Hunt is designed to work entirely offline. The App:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
              <li>Does not require an account or login</li>
              <li>Does not collect names, emails, or contact information</li>
              <li>Does not track your location</li>
              <li>Does not use analytics or tracking services</li>
              <li>Does not contain advertisements</li>
              <li>Does not connect to the internet</li>
            </ul>
          </Section>

          <Section title="Data Storage">
            <p>
              The App stores your game preferences (such as sound settings and selected categories)
              locally on your device using standard iOS storage. This data:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
              <li>Never leaves your device</li>
              <li>Is not transmitted to any servers</li>
              <li>Is not shared with any third parties</li>
              <li>Can be deleted by uninstalling the App</li>
            </ul>
          </Section>

          <Section title="Player Names">
            <p>
              During gameplay, you may enter player names. These names are:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-gray-400">
              <li>Stored only in temporary memory during the game session</li>
              <li>Not saved permanently</li>
              <li>Not transmitted anywhere</li>
              <li>Cleared when you start a new game or close the App</li>
            </ul>
          </Section>

          <Section title="Third-Party Services">
            <p>
              Imposter Hunt does not integrate with any third-party services, analytics platforms,
              advertising networks, or social media platforms.
            </p>
          </Section>

          <Section title="Children&apos;s Privacy">
            <p>
              Imposter Hunt is safe for users of all ages. We do not knowingly collect any
              information from children or any other users, as the App does not collect
              any personal information whatsoever.
            </p>
          </Section>

          <Section title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Any changes will be
              reflected on this page with an updated revision date.
            </p>
          </Section>

          <Section title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a
              href="mailto:Farhoud.Engineer@gmail.com?subject=Imposter Hunt Privacy Inquiry"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mt-3"
            >
              <span>📧</span>
              <span>Farhoud.Engineer@gmail.com</span>
            </a>
          </Section>
        </div>

        {/* Footer */}
        <div className="text-center text-gray-500 text-sm mt-16 pt-8 border-t border-white/10">
          <p>Imposter Hunt v1.0</p>
          <p className="mt-1">Created by Farhoud Talebi</p>
          <a
            href="/imposter-hunt/support"
            className="text-purple-400 hover:text-purple-300 transition-colors mt-2 inline-block"
          >
            Support Page
          </a>
        </div>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="bg-white/5 rounded-xl p-6 border border-white/10">
      <h2 className="text-xl font-semibold text-purple-400 mb-4">{title}</h2>
      <div className="text-gray-300 leading-relaxed">{children}</div>
    </section>
  );
}
