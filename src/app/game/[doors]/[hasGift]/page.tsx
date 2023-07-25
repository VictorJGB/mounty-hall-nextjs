'use client';

import React, { useEffect, useState } from 'react';

import DoorClass from '@/model/Door';

import Door from '@/components/door';

import { createDoors, refreshDoors } from '@/functions/door';

import Link from 'next/link';

const Game = ({ params }: { params: { doors: number; hasGift: number } }) => {
  const [doors, setDoors] = useState(createDoors(params.doors, params.hasGift));
  const [isValid, setIsValid] = useState(false);

  const validDoors = params.doors >= 3 && params.doors <= 20;
  const validGiftDoor = params.hasGift >= 1 && params.hasGift <= params.doors;

  useEffect(() => {
    setIsValid(validDoors && validGiftDoor);
  }, [validDoors, validGiftDoor]);

  const renderDoors = () => {
    return doors.map((door: DoorClass) => {
      return (
        <Door
          key={door.Number}
          value={door}
          onChange={(newDoor) => setDoors(refreshDoors(doors, newDoor))}
        />
      );
    });
  };

  return (
    <div className="flex flex-col w-full h-screen items-center justify-evenly bg-zinc-700 text-white">
      <div className="flex w-full flex-wrap items-center justify-evenly">
        {isValid ? (
          renderDoors()
        ) : (
          <h1 className="text-3xl font-bold">Valores inválidos</h1>
        )}
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
