import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import { ExternalLink, LayoutDashboard, LayoutGrid, Settings, Slack, Truck, User, UserSquare2, Users2, Warehouse } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="w-64 flex flex-col space-y-20 h-screen dark:bg-slate-700 dark:text-slate-50  fixed left-0 top-0  ">
      <Link href={"/"} className="w-[150px] h-[60px] py-8 px-6">
        <Logo
          color={"#616364"}
          color1={"#616364"}
          color2="#16a24a"
          width={150}
          height={60}
        />
      </Link>
      <div className="flex flex-col space-y-3">
        <Link
          href={"/dashboard"}
          className="flex items-center space-x-3 border-l-4 border-green-500 py-3 px-6" 
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link href={"/"} className="py-3 px-6 flex items-center space-x-3">
          <Slack />
          <span>Catalogue</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <Users2 />
          <span>Customers</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <Truck />
          <span>Orders</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <Warehouse />
          <span>Markets</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <UserSquare2 />
          <span>Farmers</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <User/>
          <span>Our Staff</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <Settings/>
          <span>Settings</span>
        </Link>
        <Link href={"/"} className="flex items-center space-x-3 py-3 px-6">
          <ExternalLink/>
          <span>Online Store</span>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
