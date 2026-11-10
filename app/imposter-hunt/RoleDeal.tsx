'use client';

import { useEffect, useState } from 'react';

// A playable miniature of one Imposter Hunt round. Like the app, every card
// looks identical; only the text on the face tells crew from imposter.

const PLAYERS = ['Maya', 'Leo', 'Sam', 'Ava'] as const;

const ROUNDS = [
  { word: 'Pizza', category: 'Food & Drinks' },
  { word: 'Penguin', category: 'Animals' },
  { word: 'Volcano', category: 'Nature & Weather' },
  { word: 'Passport', category: 'Countries & Places' },
  { word: 'Skateboard', category: 'Hobbies & Activities' },
  { word: 'Dragon', category: 'Fairytales & Fantasy' },
];

type Phase = 'reveal' | 'vote' | 'result';

function randomIndex(length: number, avoid?: number) {
  let next = Math.floor(Math.random() * length);
  if (length > 1 && next === avoid) next = (next + 1) % length;
  return next;
}

export default function RoleDeal({ displayClass }: { displayClass: string }) {
  // Deterministic first deal so server and client render the same markup.
  const [imposter, setImposter] = useState(1);
  const [round, setRound] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [seen, setSeen] = useState<Set<number>>(new Set());
  const [phase, setPhase] = useState<Phase>('reveal');
  const [vote, setVote] = useState<number | null>(null);

  // Re-deal once on the client so repeat visitors don't always meet the same imposter.
  useEffect(() => {
    setImposter(randomIndex(PLAYERS.length));
    setRound(randomIndex(ROUNDS.length));
  }, []);

  const { word, category } = ROUNDS[round];
  const allSeen = seen.size === PLAYERS.length;

  function handleCard(index: number) {
    if (phase === 'vote') {
      setVote(index);
      setPhase('result');
      return;
    }
    if (phase !== 'reveal') return;
    if (open === index) {
      setOpen(null);
      return;
    }
    setOpen(index);
    setSeen((prev) => new Set(prev).add(index));
  }

  function deal() {
    setImposter((prev) => randomIndex(PLAYERS.length, prev));
    setRound((prev) => randomIndex(ROUNDS.length, prev));
    setOpen(null);
    setSeen(new Set());
    setVote(null);
    setPhase('reveal');
  }

  let status: string;
  if (phase === 'reveal') {
    status = allSeen && open === null
      ? 'Everyone has seen a card. Talk it out, then vote.'
      : 'Tap each card to peek at that player’s role. Tap again to hide it.';
  } else if (phase === 'vote') {
    status = 'Who is bluffing? Tap the player you suspect.';
  } else {
    status = vote === imposter
      ? `Caught them. ${PLAYERS[imposter]} was the imposter. The word was ${word}.`
      : `${PLAYERS[vote ?? 0]} was crew. ${PLAYERS[imposter]} got away with it. The word was ${word}.`;
  }

  return (
    <div className="w-full">
      <ul className="grid grid-cols-2 gap-3 sm:gap-4" aria-label="Player cards">
        {PLAYERS.map((name, index) => {
          const faceUp = open === index || phase === 'result';
          const isImposter = index === imposter;
          const voted = vote === index;
          return (
            <li key={name} className="[perspective:900px]">
              <button
                type="button"
                onClick={() => handleCard(index)}
                disabled={phase === 'result'}
                aria-label={
                  phase === 'vote'
                    ? `Vote for ${name}`
                    : faceUp
                      ? `${name}: ${isImposter ? 'imposter' : `the word is ${word}`}. Tap to hide.`
                      : `${name}'s card. Tap to reveal.`
                }
                className={[
                  'group relative block aspect-[4/5] w-full rounded-[1.4rem] text-left outline-none',
                  'transition-transform duration-500 ease-[cubic-bezier(.2,.8,.2,1)] [transform-style:preserve-3d]',
                  'motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-[#f0abfc] focus-visible:ring-offset-4 focus-visible:ring-offset-[#140f26]',
                  faceUp ? '[transform:rotateY(180deg)]' : '',
                  phase === 'vote' ? 'hover:-translate-y-1' : '',
                ].join(' ')}
              >
                {/* Back: identical for every player */}
                <span className="absolute inset-0 flex flex-col justify-between rounded-[1.4rem] border border-white/15 bg-[linear-gradient(160deg,#2e1f52,#1b1338)] p-4 shadow-[0_0_40px_-12px_rgba(214,58,249,.55)] [backface-visibility:hidden] sm:p-5">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    {phase === 'vote' ? 'Vote' : seen.has(index) ? 'Seen' : 'Tap to peek'}
                  </span>
                  <span className={`${displayClass} text-2xl text-white sm:text-3xl`}>{name}</span>
                </span>
                {/* Face: same colour for both roles, only the words differ */}
                <span
                  className={[
                    'absolute inset-0 flex flex-col justify-between rounded-[1.4rem] border bg-[linear-gradient(160deg,#3a2470,#1f1640)] p-4 [backface-visibility:hidden] [transform:rotateY(180deg)] sm:p-5',
                    voted ? 'border-[#ff8a3d]' : 'border-white/15',
                  ].join(' ')}
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">{name}</span>
                  {isImposter ? (
                    <span>
                      <span className={`${displayClass} block bg-gradient-to-r from-[#ff4d6d] to-[#ff8a3d] bg-clip-text text-xl text-transparent sm:text-2xl`}>
                        Imposter
                      </span>
                      <span className="mt-1 block text-sm text-white/65">Hint: {category}</span>
                    </span>
                  ) : (
                    <span>
                      <span className="block text-sm text-white/60">The word is</span>
                      <span className={`${displayClass} block text-xl text-white sm:text-2xl`}>{word}</span>
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-5 flex min-h-[3.5rem] flex-wrap items-center justify-between gap-3">
        <p className="max-w-xs text-sm leading-snug text-white/70" aria-live="polite">
          {status}
        </p>
        {phase === 'reveal' && (
          <button
            type="button"
            onClick={() => {
              setOpen(null);
              setPhase('vote');
            }}
            disabled={!allSeen}
            className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-white transition-colors enabled:hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
          >
            Vote
          </button>
        )}
        {phase === 'result' && (
          <button
            type="button"
            onClick={deal}
            className="rounded-full bg-gradient-to-r from-[#d63af9] via-[#8b7cf6] to-[#1e90ff] px-4 py-2 text-sm font-semibold text-white"
          >
            Deal again
          </button>
        )}
      </div>
    </div>
  );
}
