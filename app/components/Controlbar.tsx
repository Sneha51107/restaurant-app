
import { useState } from "react";

export default function Controlbar({row,setRow}) {

  return (

     <div className="flex flex-wrap items-center gap-3 p-3 bg-white border border-gray-200 rounded-md shadow-sm w-full">

       <button className="h-12 px-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 flex items-center gap-2 text-gray-700 font-medium shadow-sm">

      <span className="material-symbols-outlined text-[#021A70]">
        keyboard_double_arrow_left
      </span>

      Back

    </button>

   
      <select className="flex-1 min-w-[220px] h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all">

      <option>Display All Orders</option>
      <option>Pending Orders</option>
      <option>Completed Orders</option>

    </select>
        <select
      value={row}
      onChange={(e) => setRow(Number(e.target.value))}
      className="flex-1 min-w-[220px] h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all"
    >

      <option value="1">In a row : 1</option>
      <option value="2">In a row : 2</option>
      <option value="3">In a row : 3</option>
      <option value="4">In a row : 4</option>
      <option value="5">In a row : 5</option>

    </select> 

     <select className="flex-1 min-w-[220px] h-12 px-4 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 font-medium outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all">

      <option>Background : White</option>
      <option>Background : Dark</option>

    </select>


     <button
      onClick={() => window.location.reload()}
      className="h-12 px-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 flex items-center gap-2 text-gray-700 font-medium shadow-sm"
    >

      <span className="material-symbols-outlined text-teal-700">
        cached
      </span>

      Reload

    </button>


      <button className="h-12 px-5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-teal-50 hover:border-teal-400 transition-all duration-200 flex items-center gap-2 text-gray-700 font-medium shadow-sm">

      <span className="material-symbols-outlined text-teal-700">
        beenhere
      </span>

      Acknowledge

    </button>
 

    </div>
  );
}