"use client";
import Link from "next/link";
import React from "react";
import { Logo } from "./logo";
import {
  ExternalLink,
  LayoutGrid,
  LogOut,
  Settings,
  Slack,
  Truck,
  User,
  User2,
  UserSquare2,
  Users2,
  Warehouse,
} from "lucide-react";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const sideBar = [
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markets",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/dashboard/",
    },
  ];
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
          className={`flex items-center space-x-3  py-3 px-6  font-semibold
          ${
            pathname === "/dashboard"
              ? "text-green-600 border-l-4 border-green-600 "
              : "hover:text-green-600/85"
          }`}
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>
        <Link
          href={"/"}
          className="py-3 px-6 flex items-center space-x-3 hover:text-green-600/85 font-semibold"
        >
          <Slack />
          <span>Catalogue</span>
        </Link>
        {sideBar.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              href={item.href}
              className={`flex items-center space-x-3  py-3 px-6  font-semibold ${
                pathname === item.href
                  ? "text-green-600 border-l-4 border-green-600 "
                  : "hover:text-green-600/85"
              }`}
              key={i}
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className="flex items-center space-x-3  py-3 px-6 bg-green-600 font-semibold rounded-md ">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
