import { Heading } from "@/app/_components/backoffice";
import { Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <Heading title="Category" />
        <Link
          href="/dashboard/categories/new"
          className="flex items-center justify-center text-white bg-green-600 
          hover:bg-green-600/90 focus:ring-4 focus:outline-none focus:ring-bg-green-600/50 
          font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:focus:ring-bg-green-600/55 me-2 mb-2"
        >
          <Plus />
          Add Category
        </Link>
        <div className="flex py-4 bg-slate-700 rounded-lg">
    
        </div>
      </div>
    </div>
  );
}
