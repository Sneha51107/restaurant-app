"use client"
import { useState } from "react"
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

export default function UserReport() {

const [user,setUser]=useState([
{id:1,name:"Neil Sims",role:"Chef",email:"neil.sims@flowbite.com",shift:"Morning",status:"Active"},
{id:2,name:"Jese Leos",role:"Manager",email:"jese.leos@flowbite.com",shift:"All time",status:"Active"},
{id:3,name:"Bonnie Green",role:"Chef",email:"bonnie.green@flowbite.com",shift:"Evening",status:"Active"}
]);

const [openExport,setOpenExport]=useState(false);

const handleExportExcel = () => {
const worksheet = XLSX.utils.json_to_sheet(user);
const workbook = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(workbook, worksheet, "Users");
XLSX.writeFile(workbook, "users-report.xlsx");
};

const handleExport = () => {
const doc = new jsPDF();
doc.setFontSize(16);
doc.text("User Report", 14, 15);

const tableColumn = ["Name","Role","Email","Shift","Status"];
const tableRows = user.map((item)=>[
item.name,
item.role,
item.email,
item.shift,
item.status

]);

autoTable(doc,{
head:[tableColumn],
body:tableRows,
startY:30   
});

doc.save("users-report.pdf");

};
return(

<div className="w-full">

<div className="flex justify-between items-center mb-4">

<h1 className="text-xl font-semibold text-gray-800">
User Report
</h1>

<div className="relative">

<button
onClick={()=>setOpenExport(!openExport)}
className="bg-[#021A70] hover:bg-[#02198e] text-white text-sm px-4 py-2 rounded-md"
>
Export
</button>

{openExport && (

<div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">

<button
onClick={handleExport}
className="w-full text-left text-sm px-4 py-2 hover:bg-gray-100"
>
Download PDF
</button>

<button
onClick={handleExportExcel}
className="w-full text-left text-sm px-4 py-2 hover:bg-gray-100"
>
Download Excel
</button>

</div>

)}

</div>
</div>


<div className="bg-white border border-gray-200 rounded-lg shadow-sm">

<div className="overflow-x-auto">

<table className="w-full text-sm text-gray-600">

<thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">

<tr>

<th className="px-6 py-3 text-left">Name</th>
<th className="px-6 py-3 text-left">Role</th>
<th className="px-6 py-3 text-left">Email</th>
<th className="px-6 py-3 text-left">Shift</th>
<th className="px-6 py-3 text-left">Status</th>

</tr>

</thead>

<tbody>

{user.map((item,index)=>(

<tr key={index} className="border-b hover:bg-gray-50">

<td className="px-6 py-3">{item.name}</td>
<td className="px-6 py-3">{item.role}</td>
<td className="px-6 py-3 ">{item.email}</td>
<td className="px-6 py-3">{item.shift}</td>
 <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded
                    ${item.status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}
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

</div>

)
}