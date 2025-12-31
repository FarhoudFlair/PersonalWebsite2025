import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Imposter Hunt - Support',
  description: 'Get help and support for Imposter Hunt, the ultimate party word game.',
};

export default function ImposterHuntSupport() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-900 via-gray-900 to-black text-white">
      <div className="max-w-2xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🕵️</div>
          <h1 className="text-4xl font-bold mb-2">Imposter Hunt</h1>
          <p className="text-gray-400">Support & Help</p>
        </div>

        {/* Contact Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">Contact Us</h2>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <p className="text-gray-300 mb-4">
              Having issues or questions about Imposter Hunt? We&apos;re here to help!
            </p>
            <a
              href="mailto:Farhoud.Engineer@gmail.com?subject=Imposter Hunt Support"
              className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 transition-colors px-6 py-3 rounded-lg font-medium"
            >
              <span>📧</span>
              <span>Farhoud.Engineer@gmail.com</span>
            </a>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 text-purple-400">FAQ</h2>
          <div className="space-y-4">
            <FaqItem
              question="How many players can play?"
              answer="Imposter Hunt supports 3-12 players, making it perfect for small gatherings or larger parties."
            />
            <FaqItem
              question="Do all players need to download the app?"
              answer="No! Only one phone is needed. Players pass the phone around to see their roles privately."
            />
            <FaqItem
              question="How do I play?"
              answer="One player is secretly assigned as the Imposter and doesn't know the secret word. Everyone else knows the word and takes turns giving clues. Try to find the Imposter without revealing the word!"
            />
            <FaqItem
              question="What are Imposter Hints?"
              answer="You can optionally give the Imposter a category hint (like 'Animals' or 'Food') to make the game easier. Configure this in Game Settings."
            />
            <FaqItem
              question="Can I play with multiple imposters?"
              answer="Yes! You can have up to 4 imposters depending on your player count, adding extra challenge and deception."
            />
          </div>
        </section>

        {/* About Section */}
        <section className="text-center text-gray-500 text-sm">
          <p>Imposter Hunt v1.0</p>
          <p className="mt-1">Created by Farhoud Talebi</p>
          <a
            href="https://farhoudtalebi.com"
            className="text-purple-400 hover:text-purple-300 transition-colors mt-2 inline-block"
          >
            farhoudtalebi.com
          </a>
        </section>
      </div>
    </main>
  );
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white/5 rounded-xl p-5 border border-white/10">
      <h3 className="font-semibold text-white mb-2">{question}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{answer}</p>
    </div>
  );
}
