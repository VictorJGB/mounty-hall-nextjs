'use client';

import Door from '@/components/door';
import Present from '@/components/present';
import DoorClass from '@/model/Door';

import { useState } from 'react';

export default function Home() {
  const [door, setDoor] = useState(new DoorClass(1, false, false, false));
  const [door02, setDoor02] = useState(new DoorClass(2, false, false, false));

  return (
    <main className="h-screen w-full flex flex-col items-center justify-evenly bg-zinc-900 text-xl text-zinc-100">
      <Present />
      <div className="flex w-full items-center justify-center gap-4">
        <Door
          value={door}
          onChange={(newDoor) => setDoor(newDoor)}
        />
        <Door
          value={door02}
          onChange={(newDoor) => setDoor02(newDoor)}
        />
      </div>
    </main>
  );
}
