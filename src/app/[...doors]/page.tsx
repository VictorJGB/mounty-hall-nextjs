'use client';

import React, { useState } from 'react';

import DoorClass from '@/model/Door';

import Door from '../../components/Door';

import { createDoors, refreshDoors } from '@/functions/door';
import Link from 'next/link';

const Game = ({ params }: { params: { doors: number; hasGift: number } }) => {
  const [doors, setDoors] = useState(createDoors(params.doors, params.hasGift));

  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly bg-zinc-700 text-white">
      <h1 className="text-4xl">Mounty Hall</h1>
      <div className="flex w-full flex-wrap items-center justify-evenly">
        {doors.map((door: DoorClass) => {
          return (
            <Door
              key={door.Number}
              value={door}
              onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
            />
          );
        })}
      </div>
      <div className="flex items-center justify-center">
        <Link href={'/'}>
          <button className="bg-red-600 text-white py-2 px-3 drop-shadow hover:bg-red-600/70 ease-in-out duration-200">
            Reiniciar jogo
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Game;
