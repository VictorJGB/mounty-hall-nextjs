import React from 'react';

type Props = {};

const Present = (props: Props) => {
  return (
    <div className="flex flex-col relative items-center text-base text-zinc-50">
      <div className="bg-green-500 w-[100px] h-[25px]"></div>
      <div className="bg-green-600 w-[90px] h-[60px]"></div>
      <div className="bg-red-700 absolute w-[15px] h-[85px]"></div>
      <div className="bg-red-700 absolute top-[40px] w-[90px] h-[15px]"></div>
    </div>
  );
};

export default Present;
