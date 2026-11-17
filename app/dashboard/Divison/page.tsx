"use client"
import { useEffect, useState } from "react";


export default function Divison() {

 const [divData, setDivData] = useState([
]);
   useEffect(()=>{
    fetch("/api/divison")
    .then((res)=>res.json())
    .then((data)=>setDivData(data));
   },[]);
   
  const [openModal, setOpenModal] = useState(false);
const [editData, setEditData] = useState(null);
  const [formData, setFormData] = useState({
    Divison: "",
    Head: "",
    Employees: "",
    Status: "Active"
  });
    const handleDelete = (id) => {
        setDivData(
    divData.filter((item) => item.id !== id)
  );
};
  const handleAddDivison = () => {
  if (!formData.Divison || !formData.Head || !formData.Employees) {
    alert("Please fill all fields");
    return;
  }

  if (editData) {

    const updated = divData.map((item) =>
      item.id === editData.id
        ? { ...item, ...formData }
        : item
    );

    setDivData(updated);
  } else {
    setDivData([
      ...divData,
      {
        id: Date.now(),
        Divison: formData.Divison,
        Head: formData.Head,
        Employees: formData.Employees,
        Status: formData.Status
      }
    ]);
  }

  setFormData({
    Divison: "",
    Head: "",
    Employees: "",
    Status: "Active"
  });

  setEditData(null);
  setOpenModal(false);
};

  return (
    <div className="pl-0 pr-0 pt-2">

        
        <div className="flex justify-between mb-2">
        
        <h1 className="text-xl font-semibold mb-2 text-[#021A70]">Divison Managment</h1>
        <button onClick={() => setOpenModal(true)} className="bg-[#021A70] text-white px-4 py-2 rounded-lg text-sm hover:bg-[#02198e]">
        + Add Divison
        </button>
        
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4">

  <div className="flex justify-between">

  
    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 h-9 w-64">

      <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
        search
      </span>

      <input
        type="text"
        placeholder="Search Divison..."
        className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
      />

    </div>
    <select className="bg-gray-50 border border-gray-200 rounded-md px-3 h-9 text-sm text-[#021A70] outline-none">
      <option>All Status</option>
      <option>Active</option>
      <option>Inactive</option>
    </select>



  </div>

</div>

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-50">

<div className="bg-white w-[520px] rounded-lg shadow-lg">


            <div className="flex justify-between items-center px-6 py-3 border-b">
<h2 className="text-base font-semibold text-gray-800">
{editData ? "Edit User" : "Add new divison"}
</h2>

<button
onClick={() => setOpenModal(false)}
className="text-gray-400 hover:text-gray-700 text-lg"
>
×
</button>
</div>

            <div className="p-6">

              <div>
                <label className="text-sm text-gray-500">Divison</label>
                <input
                  type="text"
                  value={formData.Divison}
                  onChange={(e) =>
                    setFormData({ ...formData, Divison: e.target.value })
                  }
                 className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
              </div>

              <div>
                <label className="text-sm text-gray-500">Head</label>
                <input
                  type="text"
                  value={formData.Head}
                  onChange={(e) =>
                    setFormData({ ...formData, Head: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
              </div>

              <div>
                <label className="text-sm text-gray-500">Employees</label>
                <input
                  type="number"
                  value={formData.Employees}
                  onChange={(e) =>
                    setFormData({ ...formData, Employees: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
              </div>

              <div>
                <label className="text-sm text-gray-500">Status</label>
                <select
                  value={formData.Status}
                  onChange={(e) =>
                    setFormData({ ...formData, Status: e.target.value })
                  }
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
>
                  <option>Active</option>
                  <option>Inactive</option>
                </select>
              </div>

              <button
                onClick={handleAddDivison}
                className="bg-linear-to-b from-blue-800 to-blue-950 mt-4 px-4 py-2 rounded text-white"
              >
                Add Divison
              </button>

            </div>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">

        <table className="w-full text-sm text-left text-gray-500">

          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3">Id</th>
              <th className="px-6 py-3">Divison</th>
              <th className="px-6 py-3">Head</th>
              <th className="px-6 py-3">Employees</th>
              <th className="px-6 py-3">Status</th>
               <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {divData.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">

                <td className="px-6 py-4">{item.id}</td>
                <td className="px-6 py-3">{item.Divison}</td>
                <td className="px-6 py-3">{item.Head}</td>
                <td className="px-6 py-3">{item.Employees}</td>

                <td className="px-6 py-3">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded
                    ${item.Status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"}`}
                  > 
                    {item.Status}
                  </span>
                </td>
                  
<td className="px-6 py-3 flex gap-2">
 <button
  onClick={() => {
    setFormData(item);
    setEditData(item);
    setOpenModal(true);
  }}
  className="material-symbols-outlined text-[#021A70] cursor-pointer hover:text-blue-800 text-[18px]"
  >
    edit
</button>

  <button  className="material-symbols-outlined text-red-600 cursor-pointer hover:text-red-800 text-[18px]"
  >
    delete
  </button>
</td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  );
}