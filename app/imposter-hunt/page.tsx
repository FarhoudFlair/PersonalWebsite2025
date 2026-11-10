/*
 * THESIS: The page plays a round instead of describing one. It refuses the
 * generic "phone mockup + feature grid" app page.
 * OWN-WORLD: The app's own night: deep indigo ground, soft magenta and blue
 * glow, magenta-to-blue action gradient, red-to-orange imposter accent.
 * Wide, heavy Archivo for display; the system stack for text, as in the app.
 * STORY: Visitors get the game in one line, try the deal themselves, see the
 * real screens, then download.
 * FIRST VIEWPORT: Headline and App Store button on the left. The playable
 * four-card deal on the right (stacked below on phones).
 */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Archivo } from 'next/font/google';
import { FaApple } from 'react-icons/fa';
import RoleDeal from './RoleDeal';

const display = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  display: 'swap',
});

const DISPLAY = `${display.className} font-black [font-stretch:118%] tracking-[-0.02em]`;

const APP_ID = '6757217696';
const APP_STORE_URL = `https://apps.apple.com/app/imposter-hunt/id${APP_ID}`;
const PAGE_URL = 'https://www.farhoudtalebi.com/imposter-hunt';
const TITLE = 'Imposter Hunt: Pass-the-Phone Party Word Game for iPhone';
const DESCRIPTION =
  'Everyone gets the secret word except the imposter. A free party word game for 3 to 12 players on one iPhone. 23 categories, offline, no ads, no accounts.';

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  keywords: [
    'Imposter Hunt',
    'imposter game',
    'imposter word game',
    'pass the phone game',
    'party word game',
    'party game iPhone',
    'secret word game',
    'game night',
    'offline party game',
  ],
  alternates: { canonical: PAGE_URL },
  itunes: { appId: APP_ID },
  openGraph: {
    type: 'website',
    url: PAGE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: 'Imposter Hunt',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'MobileApplication',
  name: 'Imposter Hunt',
  url: PAGE_URL,
  description: DESCRIPTION,
  operatingSystem: 'iOS 17.0 or later',
  applicationCategory: 'GameApplication',
  applicationSubCategory: 'Party game',
  installUrl: APP_STORE_URL,
  downloadUrl: APP_STORE_URL,
  image: 'https://www.farhoudtalebi.com/images/imposter-hunt/app-icon.png',
  screenshot: [
    '01-home',
    '04-pass-phone',
    '05-crew-card',
    '07-imposter-reveal',
  ].map((name) => `https://www.farhoudtalebi.com/images/imposter-hunt/${name}.png`),
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
  author: { '@type': 'Person', name: 'Farhoud Talebi', url: 'https://www.farhoudtalebi.com' },
  sameAs: [APP_STORE_URL],
};

const STEPS = [
  {
    image: '02-players',
    title: 'Add the players',
    body: 'Type 3 to 12 names up front, or let each person enter theirs when the phone reaches them.',
  },
  {
    image: '04-pass-phone',
    title: 'Pass the phone',
    body: 'Each player peeks at a private card. The crew sees the secret word. The imposter sees only that they’re the imposter.',
  },
  {
    image: '06-start',
    title: 'Describe the word',
    body: 'Take turns describing it without saying it. Say enough to prove you know it, but not enough to give it away.'
  },
  {
    image: '07-imposter-reveal',
    title: 'Vote, then reveal',
    body: 'Argue, accuse, vote. Then flip to see who was bluffing and what the word was.',
  },
];

const CATEGORIES = [
  'Animals', 'Food & Drinks', 'Sports', 'Movies & TV', 'Countries & Places',
  'Jobs & Professions', 'Household Items', 'Nature & Weather', 'Transportation',
  'Music', 'Technology', 'Clothing & Fashion', 'School & Education', 'Body Parts',
  'Hobbies & Activities', 'Emotions & Feelings', 'Fairytales & Fantasy',
  'Superheroes & Villains', 'Space & Astronomy', 'Holidays & Celebrations',
  'Streamers & Creators', 'Athletes', 'Celebrities',
];

const FEATURES = [
  {
    title: 'One phone, the whole room',
    body: '3 to 12 players. Nobody else installs anything, signs up, or joins a lobby.',
  },
  {
    title: 'Your own words',
    body: 'Add inside jokes, local places, or class vocab. They stay on your phone.',
  },
  {
    title: 'Cards that give nothing away',
    body: 'Crew and imposter cards look exactly the same, so nobody can spot the imposter from across the room.',
  },
  {
    title: 'Tune the bluff',
    body: 'Add more imposters, choose who sees the category, and give imposters an optional clue word. The crew always outnumbers them.',
  },
  {
    title: 'Works anywhere',
    body: 'Fully offline. No ads, no tracking, no accounts. Good for road trips and cabins.',
  },
  {
    title: 'Built for everyone',
    body: 'Supports VoiceOver, Dynamic Type, and Reduce Motion.',
  },
];

const FAQ = [
  {
    q: 'How do you play the imposter word game?',
    a: 'Everyone except the imposter gets the same secret word. Players take turns describing it without saying it. The imposter has to blend in without knowing it. Then everyone debates and votes on who was bluffing.',
  },
  {
    q: 'Does everyone need the app?',
    a: 'No. Imposter Hunt runs on one iPhone. You pass it around so each person can see their role privately.',
  },
  {
    q: 'How many players can play?',
    a: 'From 3 to 12. You can add more than one imposter, up to one for every three players.',
  },
  {
    q: 'Is Imposter Hunt free?',
    a: 'Yes. It’s free on the App Store for iPhone with iOS 17 or later.',
  },
  {
    q: 'Is it OK for kids and family game nights?',
    a: 'Yes. The words are family-safe, Family Mode keeps them easy, and the app is rated 4+. It collects no data and has no chat or online play.',
  },
  {
    q: 'Does it need internet?',
    a: 'No. Everything runs on the device, so it works on planes, road trips, and anywhere without signal.',
  },
];

function AppStoreButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      className={`inline-flex items-center gap-3 rounded-2xl bg-white px-5 py-3 text-[#140f26] shadow-[0_10px_40px_-10px_rgba(214,58,249,.7)] transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#f0abfc] motion-reduce:transition-none ${className}`}
    >
      <FaApple aria-hidden className="h-7 w-7" />
      <span className="leading-tight">
        <span className="block text-[0.7rem] font-medium">Download on the</span>
        <span className="block text-lg font-semibold">App Store</span>
      </span>
    </a>
  );
}

function PhoneShot({ name, alt, priority = false }: { name: string; alt: string; priority?: boolean }) {
  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-black shadow-[0_30px_80px_-30px_rgba(30,144,255,.45)]">
      <Image
        src={`/images/imposter-hunt/${name}.png`}
        alt={alt}
        width={660}
        height={1434}
        sizes="(min-width: 1024px) 260px, 70vw"
        priority={priority}
        className="h-auto w-full"
      />
    </div>
  );
}

export default function ImposterHuntPage() {
  return (
    <main
      className="relative isolate min-h-screen overflow-hidden bg-[#140f26] text-white"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, "Segoe UI", sans-serif' }}
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* The app's ambient glow */}
      <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[1100px]">
        <div className="absolute -left-40 top-24 h-[520px] w-[520px] rounded-full bg-[#7b2fbf]/40 blur-[120px]" />
        <div className="absolute left-1/3 top-[420px] h-[460px] w-[460px] rounded-full bg-[#1e4fbf]/35 blur-[120px]" />
        <div className="absolute -right-32 -top-20 h-[380px] w-[380px] rounded-full bg-[#b0204f]/30 blur-[120px]" />
      </div>

      <header className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6">
        <Link href="/imposter-hunt" className="flex items-center gap-3" aria-label="Imposter Hunt home">
          <Image src="/images/imposter-hunt/app-icon.png" alt="" width={40} height={40} className="rounded-[0.7rem]" />
          <span className={`${DISPLAY} text-lg uppercase`}>Imposter Hunt</span>
        </Link>
        <a href={APP_STORE_URL} className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold transition-colors hover:bg-white/10">
          Get the app
        </a>
      </header>

      {/* Hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.1fr_1fr] lg:pb-28 lg:pt-14">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f0abfc]">
            Party word game for iPhone
          </p>
          <h1 className={`${DISPLAY} mt-4 text-[2.6rem] leading-[0.98] sm:text-6xl lg:text-[4.6rem]`}>
            Everyone knows the word.{' '}
            <span className="bg-gradient-to-r from-[#ff4d6d] to-[#ff8a3d] bg-clip-text text-transparent">
              Except the imposter.
            </span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/75">
            Pass one phone around the room. The crew gets a secret word. The imposter gets nothing and has to bluff
            their way through it. Can your group catch them?
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-4">
            <AppStoreButton />
            <p className="text-sm text-white/60">Free · 3–12 players · Offline · No ads</p>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm sm:p-6">
          <p className={`${DISPLAY} mb-4 text-xl`}>Try a round</p>
          <RoleDeal displayClass={DISPLAY} />
        </div>
      </section>

      {/* How to play */}
      <section aria-labelledby="how-heading" className="border-t border-white/10 bg-[#100c1f]/60 py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 id="how-heading" className={`${DISPLAY} max-w-2xl text-4xl leading-none sm:text-5xl`}>
            How a round works
          </h2>
          <ol className="-mx-4 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 sm:-mx-6 sm:px-6 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {STEPS.map((step, index) => (
              <li key={step.image} className="w-[68vw] max-w-[280px] shrink-0 snap-start lg:w-auto lg:max-w-none">
                <PhoneShot name={step.image} alt={`Imposter Hunt screen: ${step.title}`} />
                <p className={`${DISPLAY} mt-6 text-5xl text-white/15`}>{String(index + 1).padStart(2, '0')}</p>
                <h3 className={`${DISPLAY} mt-1 text-xl`}>{step.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-white/70">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Word bank */}
      <section aria-labelledby="words-heading" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-start">
          <div>
            <p className={`${DISPLAY} bg-gradient-to-r from-[#d63af9] via-[#8b7cf6] to-[#1e90ff] bg-clip-text text-7xl text-transparent sm:text-8xl`}>
              1,754
            </p>
            <h2 id="words-heading" className={`${DISPLAY} mt-2 text-3xl leading-tight sm:text-4xl`}>
              family-safe words in 23 categories
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-white/70">
              Pick one category or mix them all. Play in Family Mode, Medium, or Hard. Add your own words with their own category and clue.
            </p>
          </div>
          <ul className="flex flex-wrap gap-2" aria-label="Word categories">
            {CATEGORIES.map((name) => (
              <li key={name} className="rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-sm text-white/85">
                {name}
              </li>
            ))}
            <li className="rounded-full border border-[#d63af9]/60 bg-[#d63af9]/10 px-4 py-2 text-sm font-semibold text-[#f0abfc]">
              + My Words
            </li>
          </ul>
        </div>
      </section>

      {/* Features */}
      <section aria-labelledby="features-heading" className="border-t border-white/10 py-20 lg:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.4fr]">
          <div className="lg:sticky lg:top-10 lg:self-start">
            <h2 id="features-heading" className={`${DISPLAY} text-4xl leading-none sm:text-5xl`}>
              Made for the table, not the screen
            </h2>
            <div className="mx-auto mt-10 hidden w-[240px] lg:mx-0 lg:block">
              <PhoneShot name="05-crew-card" alt="Imposter Hunt crew card showing the secret word" />
            </div>
          </div>
          <dl className="divide-y divide-white/10 border-y border-white/10">
            {FEATURES.map((feature) => (
              <div key={feature.title} className="grid gap-2 py-6 sm:grid-cols-[14rem_1fr] sm:gap-6">
                <dt className={`${DISPLAY} text-lg`}>{feature.title}</dt>
                <dd className="leading-relaxed text-white/70">{feature.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* FAQ */}
      <section aria-labelledby="faq-heading" className="mx-auto max-w-3xl px-4 py-20 sm:px-6 lg:py-28">
        <h2 id="faq-heading" className={`${DISPLAY} text-4xl leading-none sm:text-5xl`}>
          Questions
        </h2>
        <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
          {FAQ.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {item.q}
                <span aria-hidden className="text-2xl leading-none text-white/50 transition-transform group-open:rotate-45 motion-reduce:transition-none">
                  +
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-white/70">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Close */}
      <section className="relative border-t border-white/10 py-24 text-center lg:py-32">
        <div aria-hidden className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7b2fbf]/35 blur-[120px]" />
        <Image src="/images/imposter-hunt/app-icon.png" alt="" width={96} height={96} className="mx-auto rounded-[1.4rem] shadow-[0_0_60px_-10px_rgba(255,77,109,.6)]" />
        <h2 className={`${DISPLAY} mx-auto mt-8 max-w-3xl px-4 text-4xl leading-none sm:text-6xl`}>
          Someone at your next game night is lying.
        </h2>
        <p className="mt-5 text-white/70">Free on the App Store for iPhone.</p>
        <AppStoreButton className="mt-8" />
      </section>

      <footer className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p>
            Made by{' '}
            <Link href="/" className="text-white/80 underline-offset-4 hover:underline">
              Farhoud Talebi
            </Link>
          </p>
          <nav aria-label="Imposter Hunt" className="flex gap-6">
            <Link href="/imposter-hunt/support" className="hover:text-white">Support</Link>
            <Link href="/imposter-hunt/privacy" className="hover:text-white">Privacy</Link>
            <a href={APP_STORE_URL} className="hover:text-white">App Store</a>
          </nav>
        </div>
      </footer>
    </main>
  );
}
