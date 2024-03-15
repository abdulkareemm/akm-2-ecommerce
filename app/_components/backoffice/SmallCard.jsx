import { ShoppingCart } from "lucide-react";
import React from "react";

const SmallCard = ({ order }) => {
  const { title, sales, iconBg, icon: Icon } = order;
  return (
    <div className="rounded-lg shadow-md bg-slate-100  dark:bg-slate-700 p-4">
      <div className="flex space-x-4">
        <div
          className={`w-12 h-12 ${iconBg} rounded-full items-center flex justify-center`}
        >
          <Icon className="" />
        </div>
        <div className="flex flex-col items-center mt-3">
          <p>{title}</p>
          <h3 className="text-xl lg:text-2xl font-bold">{sales}</h3>
        </div>
      </div>
    </div>
  );
};

export default SmallCard;
