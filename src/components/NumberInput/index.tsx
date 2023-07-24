import React from 'react';

type Props = {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
};

function NumberInput(props: Props) {
  const increase = () => props.onChange(props.value + 1);
  const decrease = () => props.onChange(props.value - 1);
  return (
    <div className="flex flex-1 flex-col items-center justify-evenly text-black">
      <span className="text-2xl text-semibold">{props.text}</span>
      <span className="text-6xl text-bold">{props.value}</span>
      <div className="flex gap-2">
      <button
          className="border h-20 w-20 text-black text-5xl bg-red-500 hover:bg-red-600 ease-in-out duration-300"
          onClick={decrease}
        >
          -
        </button>
        
        <button
          className="border h-20 w-20 text-black text-5xl bg-emerald-300 hover:bg-emerald-400 ease-in-out duration-300"
          onClick={increase}
        >
          +
        </button>
        
      </div>
    </div>
  );
}

export default NumberInput;
