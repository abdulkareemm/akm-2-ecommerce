import { Heading, LargeCards } from "@/app/_components/backoffice";
import React from "react";

const page = () => {
  const orderStatus = [
    {
      period: "Today Orders",
      sales: 110000,
      color: "bg-green-600",
    },
    {
      period: "Yesterday Orders",
      sales: 103000,
      color: "bg-blue-600",
    },
    {
      period: "This Month",
      sales: 1100000,
      color: "bg-orange-600",
    },
    {
      period: "All-time Sales",
      sales: 11000000,
      color: "bg-purple-600",
    },
  ];
  return (
    <div>
      <Heading title="Dashboard Overview" />
      <LargeCards orderStatus ={orderStatus}/>
    </div>
  );
};

export default page;
