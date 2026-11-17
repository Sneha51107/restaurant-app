"use client";

export default function Reports() {

const stats = [
{
title: "Total Sales",
value: "$5,000",
},
{
title: "Total Orders",
value: "120",
},
{
title: "Total Expenses",
value: "$1,500",
},
{
title: "Net Profit",
value: "$3,500",
},
];

const reportRows = [
{
name: "Users",
total: 25,
status: "Active",
},
{
name: "Roles",
total: 5,
status: "Active",
},
{
name: "Restaurants",
total: 3,
status: "Active",
},
{
name: "Organizations",
total: 2,
status: "Active",
},
{
name: "Divisions",
total: 4,
status: "Active",
},
];

return (

<div className="p-2">

<h1 className="text-[20px] font-bold text-[#021A70] mb-4">
Reports Overview
</h1>

<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

{stats.map((item,index)=>(

<div
key={index}
className="bg-white border border-gray-200 rounded-lg shadow-sm p-5"
>

<h3 className="text-gray-500 text-sm">
{item.title}
</h3>

<h1 className="text-[28px] font-bold text-[#021A70] mt-3">
{item.value}
</h1>

<p className="text-green-600 text-sm mt-2">
Updated from system data
</p>

</div>

))}

</div>

<div className="grid grid-cols-12 gap-4 mt-5">

<div className="col-span-12 lg:col-span-8">

<div className="bg-white border border-gray-200 rounded-lg overflow-hidden">

<div className="px-4 py-3 border-b">
<h2 className="font-semibold text-[#021A70]">
System Report Summary
</h2>
</div>

<table className="w-full">

<thead className="bg-gray-50">

<tr>
<th className="px-4 py-3 text-left">
Module
</th>

<th className="px-4 py-3 text-left">
Total Records
</th>

<th className="px-4 py-3 text-left">
Status
</th>
</tr>

</thead>

<tbody>

{reportRows.map((item,index)=>(

<tr
key={index}
className="border-b"
>

<td className="px-4 py-3">
{item.name}
</td>

<td className="px-4 py-3">
{item.total}
</td>

<td className="px-4 py-3">
<span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
{item.status}
</span>
</td>

</tr>

))}

</tbody>

</table>

</div>

</div>

<div className="col-span-12 lg:col-span-4">

<div className="bg-white border border-gray-200 rounded-lg p-5">

<h2 className="font-semibold text-[#021A70] mb-4">
Quick Statistics
</h2>

<div className="space-y-4">

<div className="flex justify-between">
<span>Total Users</span>
<span className="font-semibold">25</span>
</div>

<div className="flex justify-between">
<span>Total Orders</span>
<span className="font-semibold">120</span>
</div>

<div className="flex justify-between">
<span>Total Sales</span>
<span className="font-semibold">$5000</span>
</div>

<div className="flex justify-between">
<span>Total Expenses</span>
<span className="font-semibold">$1500</span>
</div>

<div className="flex justify-between">
<span>Total Profit</span>
<span className="font-semibold text-green-600">
$3500
</span>
</div>

</div>

</div>

</div>

</div>

</div>
);
}
