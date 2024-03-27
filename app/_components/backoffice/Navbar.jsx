import {
  AlignJustify,
  Bell,
  LayoutDashboard,
  LogOut,
  Settings,
  Sun,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
//import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import ThemeSwitcherButton from "../ThemeSwitcherButton";

const Navbar = ({ setShowSidebar, showSidebar }) => {
  return (
    <div
      className={
        showSidebar
          ? `flex items-center justify-between bg-white dark:bg-slate-800 
    text-slate-50 h-16 px-8 fixed w-full top-0 z-50 lg:pr-[20rem]`
          : `flex items-center justify-between bg-white dark:bg-slate-800 
    text-slate-50 h-16 px-8 fixed w-full top-0 z-50`
      }
    >
      <button onClick={() => setShowSidebar((prev) => !prev)}>
        <AlignJustify className="text-green-600" />
      </button>
      <div className="flex space-x-3 items-center text-green-600">
        <ThemeSwitcherButton />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg ">
              <Bell />
              <div
                className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold 
                text-white bg-red-500 rounded-full top-0 end-5 dark:border-gray-900"
              >
                20
              </div>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem className="flex flex-row gap-6 w-full px-4 py-2">
              <div className="flex flex-row gap-2 items-center justify-center">
                <Image
                  src="/profile.jpg"
                  width={200}
                  height={200}
                  className="w-10 h-10 rounded-full object-contain"
                />
                <div className="flex flex-col space-y-2">
                  <p>Yellow Sweet Corn Stock out,</p>
                  <div className="flex items-center space-x-2">
                    <p className="px-2 py-1 bg-red-700 text-white rounded-full">
                      Stock Out
                    </p>
                    <p>Dec 12 2021 - 12:40PM</p>
                  </div>
                </div>
              </div>
              <X className="cursor-pointer" />
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full px-4 py-2">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Image
              src="/profile.jpg"
              width={200}
              height={200}
              alt="asd"
              className="w-8 h-8 rounded-full object-contain"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="">
            <DropdownMenuItem className="w-full px-4 py-2">
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span>Dashboard</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full px-4 py-2">
              <Settings className="mr-2 h-4 w-4" />
              <span>Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="w-full px-4 py-2">
              <LogOut className="mr-2 h-4 w-4" />
              <span>Logout</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default Navbar;
