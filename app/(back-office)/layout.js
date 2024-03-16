"use client"
import React, { useState } from 'react'
import {Navbar, Sidebar} from '../_components/backoffice';

export default function Layout({children}) {
  const [showSidebar,setShowSidebar] = useState(true)
  return (
    <div className="flex gap-1">
      {/** sidebar */}
      <Sidebar showSidebar={showSidebar}/>
      {/** main body */}
      <div className="w-full lg:ml-64 flex-grow min-h-screen">
        {/** header */}
        <Navbar setShowSidebar={setShowSidebar}/>
        {/** main */}
        <main className='p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 min-h-screen mt-16'>{children}</main>
      </div>

      
    </div>
  );
}
