'use client';

import React from 'react';

import DoorClass from '@/model/Door';

import Present from '../present';


type Props = {
  value: DoorClass;
  onChange: (newDoor: DoorClass) => void;
};

const Door = (props: Props) => {
  const changeSelection = (e: any) =>
    props.onChange(props.value.changeSelection());

  const openDoor = (e: any) => {
    e.stopPropagation();
    props.onChange(props.value.openDoor());
  };

  // Função para renderizar porta
  const renderDoor = () => {
    return (
      <div className="bg-orange-500 flex flex-col grow items-center w-[100%] h-[100%] p-[10px]">
        <span className="text-4xl">{props.value.Number}</span>
        {/* Maçaneta */}
        <button
          className="bg-red-700 w-[20px] h-[20px] absolute self-start top-[50%] rounded-full hover:bg-white transition ease-in-out duration-300"
          onClick={openDoor}
        ></button>
      </div>
    );
  };

  // retorno principal
  return (
    // Door Area
    <div
      className="flex flex-col items-center w-[200px] h-[310px]"
      onClick={changeSelection}
    >
      {/* Door Border */}
      <div
        aria-checked={props.value.IsSelected && !props.value.IsOpen}
        className="relative flex items-end justify-center grow h-[90%] w-[90%] bg-zinc-700 border-x-[5px] border-t-[5px] border-solid border-red-700 aria-checked:border-yellow-500"
      >
        {props.value.IsClosed ? (
          renderDoor()
        ) : props.value.HasGift ? (
          <Present />
        ) : (
          false
        )}
      </div>
      {/* Floor */}
      <div className="h-[5%] w-full bg-zinc-100"></div>
    </div>
  );
};

export default Door;
