import { Layers } from 'lucide-react';
import React from 'react'

const LargeCard = ({ order }) => {
    const {period,color,sales} = order
  return (
    <div
      className={`rounded-lg text-white p-8 flex items-center flex-col gap-2 ${color}`}
    >
      <Layers />
      <h4>{period}</h4>
      <h2 className="text-2xl lg:text-3xl">UGX.{sales}</h2>
    </div>
  );
};

export default LargeCard