'use client';

import { useState } from 'react';

import Card from '@/components/Card';

import NumberInput from '@/components/NumberInput';

import Link from 'next/link';

export default function Home() {
  const [doorsQuantity, setDoorsQuantity] = useState(3);
  const [giftDoor, setGiftDoor] = useState(1);

  return (
    <main className="h-screen w-full flex flex-col items-center justify-center bg-zinc-900 text-zinc-100">
      {/* card row */}
      <div className="flex">
        <Card bgColor="#c0392c">
          <h1 className="text-5xl font-bold">Mounty Hall</h1>
        </Card>
        <Card>
          <NumberInput
            text={'Quantidades de portas'}
            value={doorsQuantity}
            onChange={(newQuantity) => setDoorsQuantity(newQuantity)}
          />
        </Card>
      </div>
      {/* card row */}
      <div className="flex">
        <Card>
          <NumberInput
            text={'Porta com presente'}
            value={giftDoor}
            onChange={(newGiftDoor) => setGiftDoor(newGiftDoor)}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link
            className="flex-1 flex items-center justify-center"
            href={`/game/${doorsQuantity}/${giftDoor}`}
          >
            <h2 className="text-5xl font-bold">Iniciar</h2>
          </Link>
        </Card>
      </div>
    </main>
  );
}
