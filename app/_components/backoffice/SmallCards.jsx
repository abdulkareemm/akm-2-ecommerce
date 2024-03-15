import SmallCard from './SmallCard';
import { CheckCheck, Loader2, RefreshCcw, ShoppingCart } from 'lucide-react';

const SmallCards = () => {
  const orderStatus = [
    {
      title: "Total Order",
      sales: 600,
      iconBg: "bg-green-600",
      icon:ShoppingCart
    },
    {
      title: "Pending Order",
      sales: 100,
      iconBg: "bg-blue-600",
      icon:Loader2
    },
    {
      title: "Order Processing",
      sales: 500,
      iconBg: "bg-orange-600",
      icon:RefreshCcw
    },
    {
      title: "Orders Delivers",
      sales: 450,
      iconBg: "bg-purple-600",
      icon:CheckCheck
    },
  ];
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-8
    ">
      {orderStatus.map((order, ind) => {
        return <SmallCard order={...order} key={ind} />;
      })}
    </div>
  )
}

export default SmallCards