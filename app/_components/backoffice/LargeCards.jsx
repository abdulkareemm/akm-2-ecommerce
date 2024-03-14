import React from "react";
import LargeCard from "./LargeCard";

const LargeCards = ({ orderStatus }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8">
      {orderStatus.map((order, ind) => {
        return <LargeCard order={...order} key={ind} />;
      })}
    </div>
  );
};

export default LargeCards;
