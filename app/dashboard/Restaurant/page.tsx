"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Restaurant()
{
   const[openModal,setOpenModal]=useState(false)
   const[formData,setFormData]=useState({
        restaurant:"",
        gst:"",
        address:""
    })
  const [restaurant,setrestaurant]=useState([]);

  useEffect(()=>{
    fetch("/api/restaurant")
    .then((res) => res.json())
      .then((data) => setrestaurant(data));
  })
    const handleAdd=()=>{
      setrestaurant([...restaurant,formData])
     setFormData({
restaurant:"",
gst:"",
address:""
})

setOpenModal(false)
    }
     const handleDelete = (index) => {
      setrestaurant(restaurant.filter((item, i) => i !== index))
}
    return(
     <div className="pl-0 pr-0 pt-2">

    <h1 className="text-xl font-semibold mb-2 text-[#021A70]">Restaurant Info</h1>
        
        <div className="flex justify-between mb-2">
        
        <input
        type="text"
        placeholder="Search restaurant"
        className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
        />
        
        <button onClick={() => setOpenModal(true)} className="bg-[#021A70] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#02198e]">
        + Add Restaurant
        </button>
        
        </div>

              {openModal && (
             <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-50">

<div className="bg-white w-[520px] rounded-lg shadow-lg">

      <div className="flex justify-between items-center px-6 py-3 border-b">
<h2 className="text-base font-semibold text-gray-800">
{handleAdd ? "Add new Resturant":"Edit Restaurant"}
</h2>

<button
onClick={() => setOpenModal(false)}
className="text-gray-400 hover:text-gray-700 text-lg"
>
×
</button>
</div>

      <div className="p-6">
      <div className="mb-4">
        <label className="text-sm text-gray-600">Restaurant</label>
        <input
          type="text"
          name="restname"
          placeholder="Restaurant Name"
          value={formData.restaurant}
          onChange={(e) =>
            setFormData({ ...formData, restaurant: e.target.value })
          }
          className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">GST</label>
        <input
          type="text"
          name="gst"
          placeholder="GST Number"
          value={formData.gst}
          onChange={(e) =>
            setFormData({ ...formData, gst: e.target.value })
          }
          className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <label className="text-sm text-gray-600">Address</label>
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
          className="w-full mt-1 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <button
        onClick={handleAdd}
        className="bg-linear-to-b from-blue-800 to-blue-950 text-white px-5 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Add
      </button>

    </div>
    </div>
  </div>
)}
               
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm">

           <div className="overflow-x-auto">

            <table className="text-sm w-full">
                <thead className="text-xs text-black  uppercase border-b bg-gray-50">
                    <tr>
                     <th className="px-6 py-3 text-left">Resturant</th>
                     <th className="px-6 py-3 text-left">GST</th>
                     <th className="px-6 py-3 text-left">Address</th>
                     <th className="px-6 py-3 text-left">Action</th>
                    </tr>
                </thead>
                <tbody>
                     {restaurant.map((item, index) => (
                          <tr key={index} className="border-b text-gray-700">
                        <td className="px-6 py-4">{item.restaurant}</td>
                        <td className="px-6 py-4">{item.gst}</td>
                        <td className="px-6 py-4">{item.address}</td>
                        <td className="px-6 py-4 flex gap-2">
                 <Link href={`/dashboard/Restaurant/Table/${item.id}`}><span className="text-green-500 hover:text-green-700 px-3 py-1 rounded text-xs material-symbols-outlined">visibility</span></Link>  
                     <span className="material-symbols-outlined text-[#021A70] cursor-pointer hover:text-blue-800 text-[18px]"
  >
    edit</span>
              <span onClick={()=>handleDelete(index)} className="material-symbols-outlined text-red-600 cursor-pointer hover:text-red-800 text-[18px]"
  >
    delete</span>

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

