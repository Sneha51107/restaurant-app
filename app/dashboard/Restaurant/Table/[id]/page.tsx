
"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

type TableItem = {
  table: string;
  seats: number;
  status: string;
};

export default function Table() {
  const params = useParams<{ id: string }>();
  const id = params.id;

  const tableData: Record<string, TableItem[]> = {
    "1": [
      { table: "T1", seats: 4, status: "Available" },
      { table: "T2", seats: 6, status: "Occupied" },
      { table: "T3", seats: 4, status: "Reserved" },
    ],

    "2": [
      { table: "T1", seats: 2, status: "Available" },
      { table: "T2", seats: 4, status: "Reserved" },
      { table: "T3", seats: 6, status: "Occupied" },
    ],

    "3": [
      { table: "T1", seats: 4, status: "Available" },
      { table: "T2", seats: 2, status: "Available" },
      { table: "T3", seats: 6, status: "Occupied" },
    ],

    "4": [
      { table: "T1", seats: 2, status: "Reserved" },
      { table: "T2", seats: 4, status: "Available" },
      { table: "T3", seats: 6, status: "Occupied" },
    ],
  };

  const [tables, setTables] = useState<TableItem[]>(
    tableData[id] || []
  );

  const totalTables = tables.length;
  const occupied = tables.filter(
    (t) => t.status === "Occupied"
  ).length;

  const available = tables.filter(
    (t) => t.status === "Available"
  ).length;

  const reserved = tables.filter(
    (t) => t.status === "Reserved"
  ).length;

  return (
    <div className="p-1">
      <div className="flex justify-between mb-6">
        <h1 className="text-xl font-bold px-1 py-2">
          Tables Detail
        </h1>

        <button className="bg-gradient-to-b from-blue-800 to-blue-950 text-white px-4 py-2 rounded">
          Add Table
        </button>
      </div>

      <div className="flex gap-4 mb-6">
        <div className="bg-white shadow-md rounded p-4 w-50">
          <p className="text-gray-500 text-sm">Total Tables</p>
          <h2 className="text-2xl font-bold">{totalTables}</h2>
        </div>

        <div className="bg-white shadow-md rounded p-4 w-50">
          <p className="text-gray-500 text-sm">Occupied</p>
          <h2 className="text-2xl font-bold text-red-500">
            {occupied}
          </h2>
        </div>

        <div className="bg-white shadow-md rounded p-4 w-50">
          <p className="text-gray-500 text-sm">Available</p>
          <h2 className="text-2xl font-bold text-green-500">
            {available}
          </h2>
        </div>

        <div className="bg-white shadow-md rounded p-4 w-50">
          <p className="text-gray-500 text-sm">Reserved</p>
          <h2 className="text-2xl font-bold text-yellow-500">
            {reserved}
          </h2>
        </div>
      </div>

      <div className="bg-white rounded shadow-lg">
        <table className="text-sm w-full shadow-md">
          <thead className="text-xs text-black uppercase border-b bg-gray-50">
            <tr>
              <th className="text-left px-4 py-3">Table</th>
              <th className="text-left px-4 py-3">Seats</th>
              <th className="text-left px-4 py-3">Status</th>
            </tr>
          </thead>

          <tbody>
            {tables.map((item, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3">{item.table}</td>
                <td className="px-4 py-3">{item.seats}</td>
                <td className="px-4 py-3">
                  <span
                    className={
                      item.status === "Available"
                        ? "text-green-600 font-semibold"
                        : item.status === "Occupied"
                        ? "text-red-600 font-semibold"
                        : "text-yellow-600 font-semibold"
                    }
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
