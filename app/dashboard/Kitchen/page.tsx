"use client"
import { useState } from "react"
import Kheader from "@/app/components/Kheader"
import Controlbar from "@/app/components/Controlbar"

export default function Kitchen()
{
    return (
        <div className="min-h-screen p-1">
   <Kheader/>
   <Controlbar/>
      <div className="border-2 mt-4 border-teal-700 rounded-md p-4 w-[550px] bg-white">
    
     <div className="flex justify-between text-sm font-sans text-teal-800 ">

    <div>
    <p>Type :</p>
    <p>Customer :</p>
    <p>Taken at :</p>
    <p>Dinning table :</p>

    <p className="font-bold text-lg">Order # 202603751</p>
    </div>

    <div className="text-right">

    <span className="bg-yellow-300 px-2 py-1 rounded text-sm">
     Dining
      </span>

      <p>Walking Customer</p>
      <p>25-03-2026 06:14:30</p>
      <p>Table three(3)</p>

     <p className="font-semibold">Progress : 0%</p>

    </div>

     </div>
  <div className="border-b-4 border-gray-400 ">
    <select className="border  border-gray-600 mb-2 p-2 w-full font-medium rounded-md text-teal-800 bg-white focus:outline-none focus:ring-0">

      <option>Select who is cooking</option>
      <option>Chef 1</option>
      <option>Chef 2</option>
      <option>Chef 3</option>
 
    </select>
  </div>
  <div className="m-2 flex gap-2 text-gray-500 font-semibold">
    <input type="checkbox" name="" id="" className=""/>2x Noodles Soup
  </div>
</div>
</div>
    )
}