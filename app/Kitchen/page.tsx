 "use client"
import { useState } from "react"
import Kheader from "@/app/components/Kheader"
import Controlbar from "@/app/components/Controlbar"

export default function Kitchen() {

  const [row, setRow] = useState(1);

  return (

    <div className="min-h-screen p-1">

      <Kheader />

      <Controlbar row={row} setRow={setRow} />

      <div
        className={`grid gap-4 mt-4 ${
          row === 1
            ? "grid-cols-1"
            : row === 2
            ? "grid-cols-2"
            : row === 3
            ? "grid-cols-3"
            : row === 4
            ? "grid-cols-4"
            :"grid-cols-5"
        }`}
      >

        {[1, 2, 3, 4 ,5].map((item) => (

          <div
            key={item}
            className="border-2 border-[#021A70] rounded-md p-4 bg-white w-full  "
          >

            <div className="flex justify-between text-sm font-sans text-[#021A70]">

              <div>
                <p>Type :</p>
                <p>Customer :</p>
                <p>Taken at :</p>
                <p>Dinning table :</p>

                <p className="font-bold text-lg">
                  Order # 202603751
                </p>
              </div>

              <div className="text-right">

                <span className="bg-yellow-300 px-2 py-1 rounded text-sm">
                  Dining
                </span>

                <p>Walking Customer</p>
                <p>25-03-2026 06:14:30</p>
                <p>Table three(3)</p>

                <p className="font-semibold">
                  Progress : 0%
                </p>

              </div>

            </div>

            <div className="border-b-4 border-gray-400 mt-3">

              <select className="border border-[#021A70] mb-2 p-2 w-full font-medium rounded-md text-[#021A70] bg-white focus:outline-none focus:ring-0">

                <option>Select who is cooking</option>
                <option>Chef 1</option>
                <option>Chef 2</option>
                <option>Chef 3</option>

              </select>

            </div>

            <div className="m-2 flex gap-2 text-[#021A70] font-semibold">

              <input
                type="checkbox"
                className=""
              />

              2x Noodles Soup

            </div>

          </div>

        ))}

      </div>

    </div>

  )
}