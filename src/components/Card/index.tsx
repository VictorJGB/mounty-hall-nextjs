import React, { ReactNode } from 'react';

type Props = {
  bgColor?: string;
  children?: ReactNode;
};

function Card(props: Props) {
  return (
    <div
      className="flex justify-start h-80 w-80 m-1 p-5 text-2xl"
      style={{
        backgroundColor: props.bgColor ?? '#fff',
        color: props.bgColor ? '#fff' : '#000',
      }}
    >
      {props.children}
    </div>
  );
}

export default Card;
