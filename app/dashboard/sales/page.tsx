"use client";

import { useState , useEffect } from "react";

export default function SalesOrders() {
   const [orders, setOrders] = useState([]);
   useEffect(() => {
  fetch("/api/sales")
    .then((res) => res.json())
    .then((data) => setOrders(data));
}, []);
    return (
        <div className="pl-0 pr-0 pt-2">
            {/* HEADER */}

            <div className="flex items-center justify-between mb-2">
                <h1 className="text-[30px] font-semibold text-[#021A70]">
                    Sale Orders
                </h1>

                <div className="flex items-center gap-2">
                    {/* SEARCH */}

                    <div className="flex items-center bg-white border border-gray-200 rounded-md px-3 h-10 w-[250px]">
                        <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
                            search
                        </span>

                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full outline-none text-sm"
                        />
                    </div>

                    {/* FILTER */}

                    <button className="flex items-center gap-2 bg-[#021A70] text-white px-4 h-10 rounded-md">
                        <span className="material-symbols-outlined text-[18px]">
                            filter_alt
                        </span>
                        Filters
                    </button>

                    {/* REFRESH */}

                    <button className="bg-[#021A70] text-white w-10 h-10 rounded-md flex items-center justify-center">
                        <span className="material-symbols-outlined">
                            refresh
                        </span>
                    </button>

                    {/* BACK */}

                    <button className="bg-[#021A70] text-white px-5 h-10 rounded-md">
                        Back
                    </button>
                </div>
            </div>

            {/* TABLE */}

            <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                <table className="w-full text-sm">
                    <thead className="bg-[#021A70] text-white">
                        <tr>
                            <th className="px-4 py-3 text-left">
                                TRACKING
                            </th>

                            <th className="px-4 py-3 text-left">
                                INFORMATION
                            </th>

                            <th className="px-4 py-3 text-left">
                                ORDER TYPE
                            </th>

                            <th className="px-4 py-3 text-left">
                                STATUS
                            </th>

                            <th className="px-4 py-3 text-left">
                                BOOKED AT
                            </th>

                            <th className="px-4 py-3 text-left">
                                PREPARED AT
                            </th>

                            <th className="px-4 py-3 text-left">
                                COMPLETED AT
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map((order) => (
                            <tr
                                key={order.id}
                                className="border-b hover:bg-gray-50"
                            >
                                {/* Barcode */}

                                <td className="px-5 py-4 align-top">
                                    <div className="flex flex-col items-center">
                                        <div className="flex items-end h-8 gap-[1px]">
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[3px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[2px] h-full bg-black"></div>
                                            <div className="w-[4px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[3px] h-full bg-black"></div>
                                            <div className="w-[2px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[5px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[2px] h-full bg-black"></div>
                                            <div className="w-[4px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[3px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[5px] h-full bg-black"></div>
                                            <div className="w-[2px] h-full bg-black"></div>
                                            <div className="w-[1px] h-full bg-black"></div>
                                            <div className="w-[4px] h-full bg-black"></div>
                                        </div>

                                        <p className="text-[11px] text-black mt-1">
                                            20260601
                                        </p>
                                    </div>
                                </td>

                                {/* INFORMATION */}

                                <td className="px-4 py-4">
                                    <div className="space-y-1">
                                        <div>
                                            <span className="bg-gray-100 px-2 py-1 rounded text-black">
                                                ID # {order.id}
                                            </span>

                                            <span className="bg-gray-100 px-2 py-1 rounded ml-2 text-black">
                                                Customer : {order.customer}
                                            </span>
                                        </div>

                                        <div className="flex flex-wrap gap-1">
                                            <span className="bg-yellow-200 px-2 py-1 text-xs text-black">
                                                Cost : {order.cost}
                                            </span>

                                            <span className="bg-yellow-200 px-2 py-1 text-xs text-black">
                                                Price : {order.price}
                                            </span>

                                            <span className="bg-yellow-200 px-2 py-1 text-xs text-black">
                                                Discount : {order.discount}
                                            </span>

                                            <span className="bg-yellow-200 px-2 py-1 text-xs text-black">
                                                Tax : {order.tax}
                                            </span>
                                        </div>
                                    </div>
                                </td>

                                {/* ORDER TYPE */}

                                <td className="px-4 py-4">
                                    <div className="bg-green-400 text-center py-3 px-4 rounded text-sm text-black">
                                        <div>{order.table}</div>
                                        <div>{order.orderType}</div>
                                    </div>
                                </td>

                                {/* STATUS */}

                                <td className="px-4 py-4 text-black font-medium">
                                    {order.status}
                                </td>

                                {/* BOOKED */}

                                <td className="px-4 py-4 text-black">
                                    <div>
                                        {order.bookedAt.split(" ")[0]}
                                    </div>

                                    <div>
                                        {order.bookedAt.split(" ")[1]}
                                    </div>
                                </td>

                                {/* PREPARED */}

                                <td className="px-4 py-4 text-black">
                                    <div>
                                        {order.preparedAt.split(" ")[0]}
                                    </div>

                                    <div>
                                        {order.preparedAt.split(" ")[1]}
                                    </div>
                                </td>

                                {/* COMPLETED */}

                                <td className="px-4 py-4 text-black">
                                    <div>
                                        {order.completedAt.split(" ")[0]}
                                    </div>

                                    <div>
                                        {order.completedAt.split(" ")[1]}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* FOOTER */}

                <div className="flex justify-between items-center px-4 py-3 border-t bg-gray-50">
                    <span className="text-sm text-black">
                        Showing 1 to {orders.length} of {orders.length} results
                    </span>

                    <div className="flex gap-2">
                        <button className="px-4 py-2 border rounded text-sm text-black bg-white">
                            Previous
                        </button>

                        <button className="px-4 py-2 border rounded text-sm text-black bg-white">
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}