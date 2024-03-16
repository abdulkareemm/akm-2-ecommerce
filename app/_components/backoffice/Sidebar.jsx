"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Logo } from "./logo";
import {
  Boxes,
  ChevronDown,
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LayoutList,
  LogOut,
  Minus,
  MonitorPlay,
  ScanSearch,
  SendToBack,
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
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

const Sidebar = ({ showSidebar }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const sidebarLinks = [
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

  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Attributes",
      icon: SendToBack,
      href: "/dashboard/attributes",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Sliders",
      icon: MonitorPlay,
      href: "/dashboard/store-sliders",
    },
  ];
  return (
    <div
      className={showSidebar ? `hidden lg:flex w-64  flex-col space-y-20 h-screen 
      dark:bg-slate-700 dark:text-slate-50  fixed left-0 top-0`:`hidden`}
    >
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

        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className=" space-y-2 py-3 px-6"
        >
          <div className="flex items-center justify-between space-x-4 ">
            <CollapsibleTrigger asChild>
              <button className=" flex items-center space-x-6 hover:text-green-600/85 font-semibold">
                <div className="flex items-center space-x-3">
                  <Slack />
                  <span>Catalogue</span>
                </div>
                {isOpen ? (
                  <ChevronDown onClick={() => setIsOpen(false)} />
                ) : (
                  <ChevronRight onClick={() => setIsOpen(true)} />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="text-sm bg-slate-100 dark:bg-slate-800 rounded-md py-1">
            {catalogueLinks.map((item, i) => {
              const Icon = item.icon;
              return (
                <Link
                  href={item.href}
                  key={i}
                  className={`flex items-center space-x-3 px-6 py-1.5 font-semibold ${
                    pathname === item.href
                      ? "text-green-600 border-l-4 border-green-600 "
                      : "hover:text-green-600/85"
                  }`}
                >
                  <Icon />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>
        {sidebarLinks.map((item, i) => {
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
