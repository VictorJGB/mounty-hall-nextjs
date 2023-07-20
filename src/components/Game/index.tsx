import React, { useState } from 'react';

import DoorClass from '@/model/Door';

import Door from '../Door';

import { createDoors, refreshDoors } from '@/functions/door';

type Props = {};

const Game = (props: Props) => {
  const [doors, setDoors] = useState(createDoors(3, 2));

  return (
    <div className="flex w-full items-center justify-center gap-4">
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
  );
};

export default Game;
