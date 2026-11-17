"use client"

import { useState } from "react"
import Link from "next/link"

type SidebarProps = {
  sidebarOpen: boolean
}

export default function Sidebar({ sidebarOpen }: SidebarProps) {

const [layoutOpen,setLayoutOpen] = useState(false)
const [crudOpen,setCrudOpen] = useState(false)
const [authOpen,setAuthOpen] = useState(false)
const[reportOpen,setReportOpen]=useState(false)
const[expense,setExpense]=useState(false)

return (
<aside
className={`fixed md:static top-0 left-0 w-64 h-screen overflow-y-auto
bg-[#021A70]  border-r border-gray-200
transition-transform duration-300
${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
md:translate-x-0`}
>
  <div className="flex justify-center items-center gap-2 px-4 py-4 border-b border-white/10">


<span className="text-lg font-semibold text-white">
Weblight
</span>

</div>

<nav className="p-4 text-sm text-gray-200">

<ul className="space-y-1">

<li>
<Link
href="/dashboard"
className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
>
<span className="material-symbols-outlined text-[18px]">
dashboard
</span>
Dashboard
</Link>
</li>


<li>
<div
onClick={()=>setCrudOpen(!crudOpen)}
className="flex items-center justify-between px-3 py-2 rounded cursor-pointer hover:bg-white/10"
>
<div className="flex items-center gap-3">

<span className="material-symbols-outlined text-[18px]">
database
</span>

CRUD

</div>

<span className="material-symbols-outlined text-[18px]">
expand_more 
</span>

</div>

{crudOpen && (

<ul className="ml-8 mt-1 space-y-1">

<li>

<Link
href="/dashboard/user"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>

Users

</Link>

</li>

<li>

<Link
href="/dashboard/Role"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>

Roles

</Link>

</li>
 
</ul>

)}

</li>
   <li>
<Link
href="/dashboard/Organization"
className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
>
<span className="material-symbols-outlined text-[18px]">
business
</span>

Organization
</Link>
</li>

<li>
<Link
href="/dashboard/Divison"
className="flex items-center gap-3 px-3 py-2 rounded  hover:bg-white/10"
>
<span className="material-symbols-outlined text-[18px]">
groups
</span>

Divison
</Link>
</li>
<li>
<Link
href="/POS"
className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
>
<span className="material-symbols-outlined">
kitchen
</span>
POS
</Link>
</li>
<li>
<Link
href="/Kitchen"
className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
>
<span className="material-symbols-outlined">
kitchen
</span>
Kitchen
</Link>
</li>
<li>
<div
onClick={()=>setExpense(!expense)}
className="flex items-center justify-between px-3 py-2 rounded cursor-pointer hover:bg-white/10"
>
<div className="flex items-center gap-3">

<span className="material-symbols-outlined text-[18px]">
database
</span>

Expenses

</div>

<span className="material-symbols-outlined text-[18px]">
expand_more 
</span>

</div>

{expense && (

<ul className="ml-8 mt-1 space-y-1">

<li>

<Link
href="/dashboard/expenses"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>

Expenses

</Link>

</li>

<li>

<Link
href="/dashboard/expensetype"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>

Expenses type

</Link>

</li>
 
</ul>

)}
</li>

<li>
<Link
href="/dashboard/Restaurant"
className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
>
<span className="material-symbols-outlined">
restaurant
</span>
Restaurant
</Link>
</li>

<li>
  <Link
    href="/dashboard/categories"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
  >
    <span className="material-symbols-outlined text-[18px]">
      restaurant_menu
    </span>

    Categories
  </Link>
</li>
<li>
  <Link
    href="/dashboard/sales"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
  >
    <span className="material-symbols-outlined">
      sell
    </span>

    Sales
  </Link>
</li>
<li>
  <Link
    href="/dashboard/billing"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
  >
    <span className="material-symbols-outlined text-[18px]">
      receipt_long
    </span>

    Billing
  </Link>
</li>

<li>
  <Link
    href="/dashboard/alerts"
    className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10"
  >
    <span className="material-symbols-outlined text-[18px]">
      notifications
    </span>

    Alerts
  </Link>
</li>

<li>
  
<div
onClick={()=>setReportOpen(!reportOpen)}
className="flex items-center justify-between px-3 py-2 rounded cursor-pointer hover:bg-white/10"
>
  
<div className="flex items-center gap-3">

<span className="material-symbols-outlined">
analytics
</span>

Report

</div>

<span className="material-symbols-outlined text-[18px]">
expand_more
</span>

</div>
{reportOpen && (

<ul className="ml-8 mt-1 space-y-1">

<li>

<Link
href="/dashboard/UserReport"
className="block px-2 py-1.5 rounded hover:bg-white/10"
>User Report

</Link>

</li>
<li>

<Link
href="/dashboard/OrderReport"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>Order Report

</Link>

</li>
<li>

<Link
href="/dashboard/BillingReport"
className="block px-2 py-1.5 rounded hover:bg-white/10"
>Billing Report

</Link>

</li>
</ul>

)}
</li>

<li>
  
<Link
href="/dashboard/setting"
className="flex items-center gap-3 px-3 py-2 rounded  hover:bg-white/10"
>

<span className="material-symbols-outlined text-[18px]">
settings
</span>

Settings

</Link>

</li>

<li>

<div
onClick={()=>setAuthOpen(!authOpen)}
className="flex items-center justify-between px-3 py-2 rounded cursor-pointer  hover:bg-white/10"
>

<div className="flex items-center gap-3">

<span className="material-symbols-outlined text-[18px]">
lock
</span>

Authentication

</div>

<span className="material-symbols-outlined text-[18px]">
expand_more
</span>

</div>

{authOpen && (

<ul className="ml-8 mt-1 space-y-1">

<li>

<Link
href="/login"
className="block px-2 py-1.5 rounded  hover:bg-white/10"
>

Login

</Link>

</li>

<li>

<Link
href="/Sign"
className="block px-2 py-1.5 rounded hover:bg-white/10"
>

Sign Up

</Link>

</li>

</ul>

)}

</li>

</ul>

</nav>

</aside>

)

}