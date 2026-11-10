import { ImageResponse } from 'next/og';

export const alt = 'Imposter Hunt: everyone knows the word, except the imposter.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          color: 'white',
          backgroundColor: '#140f26',
          backgroundImage:
            'radial-gradient(circle at 12% 30%, rgba(123,47,191,.55), transparent 45%), radial-gradient(circle at 70% 85%, rgba(30,79,191,.5), transparent 45%), radial-gradient(circle at 95% 0%, rgba(176,32,79,.45), transparent 35%)',
        }}
      >
        <div style={{ fontSize: 28, letterSpacing: 6, color: '#f0abfc', textTransform: 'uppercase' }}>
          Imposter Hunt · Party word game for iPhone
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 28, fontSize: 84, fontWeight: 900, lineHeight: 1 }}>
          <span>Everyone knows the word.</span>
          <span style={{ color: '#ff6a55' }}>Except the imposter.</span>
        </div>
        <div style={{ marginTop: 40, fontSize: 30, color: 'rgba(255,255,255,.7)' }}>
          Free · 3–12 players · One phone · Offline
        </div>
      </div>
    ),
    size,
  );
}
