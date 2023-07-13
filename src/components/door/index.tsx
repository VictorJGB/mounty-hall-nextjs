'use client';

import DoorClass from '@/model/Door';
import React from 'react';

type Props = {
  door: DoorClass;
};

const Door = ({ door }: Props) => {
  return (
    // Door Area
    <div className="flex flex-col items-center w-[200px] h-[310px]">
      {/* Door Border */}
      <div
        aria-checked={door.IsSelected}
        className="relative flex grow h-[90%] w-[90%] border-x-[5px] border-t-[5px] border-solid border-red-700 aria-checked:border-yellow-300"
      >
        {/* Door */}
        <div className="bg-orange-500 flex flex-col grow items-center w-[100%] h-[100%] p-[10px]">
          <span
            aria-checked={door.IsSelected}
            className="text-4xl aria-checked:text-yellow-300"
          >
            {door.Number}
          </span>
          {/* Maçaneta */}
          <button className="bg-red-700 w-[20px] h-[20px] absolute self-start top-[50%] rounded-full hover:bg-white transition ease-in-out duration-300"></button>
        </div>
      </div>
      {/* Floor */}
      <div className="h-[5%] w-full bg-zinc-100"></div>
    </div>
  );
};

export default Door;
