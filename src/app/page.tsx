'use client';

import Game from '@/components/Game';

export default function Home() {
  return (
    <main className="h-screen w-full flex flex-col items-center justify-evenly bg-zinc-900 text-xl text-zinc-100">
      <Game />
    </main>
  );
}
