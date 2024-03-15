import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div className="w-52 flex flex-col space-y-6 h-screen dark:bg-slate-700 dark:text-slate-50 p-3 fixed left-0 top-0  ">
      <Link href={"/"}>Logo</Link>
      <div className='flex flex-col'>
        <Link href={"/dashboard"}>Dashboard</Link>
        <Link href={"/"}>Catalogue</Link>
        <Link href={"/"}>Customers</Link>
        <Link href={"/"}>Categories</Link>
        <Link href={"/"}>Markets</Link>
        <Link href={"/"}>Farmers</Link>
        <Link href={"/"}>Orders</Link>
        <Link href={"/"}>Staff</Link>
        <Link href={"/"}>Settings</Link>
        <Link href={"/"}>Online Store</Link>
      </div>
    </div>
  );
}

export default Sidebar