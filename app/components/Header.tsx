"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";

type HeaderProps = {
  setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Header({ setSidebarOpen }: HeaderProps) {

const [profileOpen, setProfileOpen] = useState(false);

return (
<header className="w-full h-16 px-4 md:px-6 bg-white border-b border-gray-200 flex items-center justify-between relative z-50">

<div className="flex items-center gap-4">

<button
className="md:hidden text-gray-600"
onClick={() => setSidebarOpen((prev)=>!prev)}
>
<span className="material-symbols-outlined text-2xl">
menu
</span>
</button>

</div>

<div className="flex flex-1 px-2 ">

<div className="relative w-full md:w-96">

<span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg">
search
</span>

<input
type="search"
placeholder="Search"
className="w-full pl-10 pr-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
/>

</div>

</div>

<div className="flex items-center gap-5">

<div className="flex items-center gap-1 border border-gray-200 px-3 py-1 rounded-md text-sm text-gray-600 cursor-pointer hover:bg-gray-100">
<span className="material-symbols-outlined text-sm">
star
</span>
2816
</div>
<span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-gray-900">
notifications
</span>

<span className="material-symbols-outlined text-gray-600 cursor-pointer hover:text-gray-900">
apps
</span>

<div className="relative">

<img
src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
className="w-8 h-8 rounded-full cursor-pointer"
onClick={()=>setProfileOpen(!profileOpen)}
/>

{profileOpen && (

<div className="absolute right-0 mt-3 w-44 bg-white border border-gray-200 rounded-lg shadow-md p-3 text-sm">

<p className="py-1 hover:text-blue-600 cursor-pointer">
Profile
</p>

<p className="py-1 hover:text-blue-600 cursor-pointer">
Settings
</p>

<Link href="/login">
<p className="py-1 hover:text-red-500 cursor-pointer">
Logout
</p>
</Link>

</div>

)}
</div>
</div>

</header>

);

}