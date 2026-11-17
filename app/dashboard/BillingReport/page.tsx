
"use client"
import { useState } from "react"
import jsPDF from "jspdf"
import autoTable from "jspdf-autotable"
import * as XLSX from "xlsx"

export default function BillingOrder()
{
    const [billing,setBilling]=useState(
        [
            {
            billno:"B001",
            customer:"Rahul",
            payment:"UPI",
            amount:"450",
            date:"29-03-2026"
            },
            {
            billno:"B002",
            customer:"Sup",
            payment:"Cash",
            amount:"350",
            date:"28-03-2026"
            },
            {
            billno:"B003",
            customer:"Neil",
            payment:"UPI",
            amount:"500",
            date:"30-03-2026"
            }
        ]

    ) 

    const [openExport,setOpenExport] = useState(false)
    

    const handleExportPDF = () => {
    
    const doc = new jsPDF()
    doc.setFontSize(16);
doc.text("Billing Report", 14, 15);

    const tableColumn = ["BillNo","Customer","Payment","Amount","Date"]
    
    const tableRows = billing.map((item)=>[
    item.billno,
    item.customer,
    item.payment,
    item.amount,
    item.date,
  
    ])
    
    autoTable(doc,{
    head:[tableColumn],
    body:tableRows,
    startY:30
    })
    
    doc.save("billing-report.pdf")
    
    }
    
    
    const handleExportExcel = () => {
    
    const worksheet = XLSX.utils.json_to_sheet(billing)
    
    const workbook = XLSX.utils.book_new()
    
    XLSX.utils.book_append_sheet(workbook, worksheet, "billings")
    
    XLSX.writeFile(workbook,"billings-report.xlsx")
    
    }
    
    return(
        <div className="w-full">

<div className="flex justify-between items-center mb-4">

<h1 className="text-xl font-semibold text-gray-800">
Billing Report
</h1>

<div className="relative">
             <button onClick={()=>setOpenExport(!openExport)} className="bg-linear-to-b from-blue-800 to-blue-950 px-3 py-3 rounded text-white hover:bg-blue-700">Export</button>
             {openExport &&(

            <div className="absolute right-0 mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg">

            <button
            onClick={handleExportPDF}
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

          <table className="w-full text-sm ">

                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
                      <tr>
                            <th className="px-2 py-3 text-left text-black">Bill NO.</th>
                            <th className="px-2 py-3 text-left">Customer</th>
                            <th className="px-2 py-3 text-left">Payment</th>
                            <th className="px-2 py-3 text-left">Amount</th>
                            <th className="px-2 py-3 text-left">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {billing.map((item,index)=>(
                        <tr className="border-b " key={index} >
                        <td className="px-2 py-3 text-black">{item.billno}</td>
                        <td className="px-2 py-3">{item.customer}</td>
                        <td className="px-2 py-3">{item.payment}</td>
                        <td className="px-2 py-3">{item.amount}</td>
                        <td className="px-2 py-3">{item.date}</td>
                        </tr>
                        ))}
                    </tbody>
                </table>
            </div>
          </div>
          </div>
    )
}