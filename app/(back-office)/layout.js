import React from 'react'
import {Navbar, Sidebar} from '../_components/backoffice';

export default function Layout({children}) {
  return (
    <div className="flex gap-1">
      {/** sidebar */}
      <Sidebar />
      {/** main body */}
      <div className="w-full ml-52">
        {/** header */}
        <Navbar/>
        {/** main */}
        <main className='p-8 bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 min-h-screen mt-16'>{children}</main>
      </div>

      
    </div>
  );
}
