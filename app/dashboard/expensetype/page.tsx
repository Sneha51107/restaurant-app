"use client";
import { useState } from "react"


export default function ExpenseType()
{
     
    const [popup, setPopup] = useState(false);

const [expenses, setExpenses] = useState([
  {
    title: "Rent",
    date: "06-06-2023",
  },
  {
    title: "Drinks",
    date: "03-06-2023",
  },
  {
    title: "Electricity",
    date: "30-05-2023",
  },
  {
    title: "Salary",
    date: "30-05-2023",
  },
  {
    title: "Kitchen expense",
    date: "22-05-2023",
  },
  {
    title: "Human resource expense",
    date: "22-05-2023",
  },
  {
    title: "Other expense",
    date: "21-05-2023",
  },
]);

const [title, setTitle] = useState("");
const handleSave = () => {
  if (!title.trim()) {
    alert("Expense Type Title is required");
    return;
  }

  const newExpense = {
    title,
    date: new Date().toLocaleDateString(),
  };

  setExpenses([...expenses, newExpense]);

  setTitle("");
  setPopup(false);
};
    
    return(
        <div>
            <div className="flex items-center justify-between">
            <h1 className="text-[#021A70] text-2xl mt-2 font-semibold ">Expenses Type</h1>
            <div className="flex gap-2">
            <button onClick={()=>setPopup(true)} className="px-3 py-2 rounded font-semibold text-gray-100 bg-[#021A70] border border-[#021A70]">Create</button>
            <button className="px-3 py-2 rounded font-semibold text-gray-100 bg-[#021A70] border border-[#021A70]">Back</button>
            </div>
              {popup && (
  <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">

    <div className="bg-white w-[500px] rounded-lg shadow-xl">

      <div className="flex justify-between items-center px-6 py-4 border-b">
        <h2 className="text-lg font-semibold text-[#021A70]">
          Add Expense Type
        </h2>

        <button
          onClick={() => setPopup(false)}
          className="text-gray-500 hover:text-red-500 text-xl"
        >
          ×
        </button>
      </div>

      
      <div className="p-6">

        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expense Type Title
        </label>

             <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter expense type"
            className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm outline-none focus:border-[#021A70]"
          />

      </div>
       <div className="px-6 pb-6 pt-2 flex gap-2 justify-end">
        <button onClick={() => setPopup(false)}
  className="px-4 py-2 bg-[#021A70] text-white rounded-md hover:bg-[#03238f]"
>
  Cancel
</button>
   <button
  onClick={handleSave}
  className="px-4 py-2 bg-[#021A70] text-white rounded-md hover:bg-[#03238f]"
>
  Save
</button>

</div>
    </div>

  </div>
)}
            </div>
             <div className="bg-white border border-gray-500 rounded-lg mt-4">

   {expenses.map((item, index) => (
     <div
      key={index}
       className="p-4 border-b hover:bg-gray-100 border-gray-300 flex justify-between items-center"
    >
      <div>
        <h3 className="font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-sm font-medium text-gray-600">
          Created at : {item.date}
        </p>
      </div>

      <span className="material-symbols-outlined text-2xl text-gray-500">
        chevron_right
      </span>
    </div>
  ))}

</div>
        </div>
    )
}