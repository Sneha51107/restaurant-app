
"use client";

import { useEffect, useState } from "react";

type ExpenseItem = {
  id?: number;
  title: string;
  amount: string;
  category: string;
  description: string;
  date: string;
};

export default function Expenses() {
  const [search, setSearch] = useState("");
  const [popup, setPopup] = useState(false);
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [openMenu, setOpenMenu] = useState<number | null>(null);

  const [expenses, setExpenses] = useState<ExpenseItem[]>([]);

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Vegetables");
  const [description, setDescription] = useState("");

  useEffect(() => {
    fetch("/api/expenses")
      .then((res) => res.json())
      .then((data: ExpenseItem[]) => setExpenses(data))
      .catch((error) => console.error("Expenses fetch error:", error));
  }, []);

  const handleSave = () => {
    if (!title || !amount || !category || !description) {
      alert("All fields are required");
      return;
    }

    const newExpense: ExpenseItem = {
      title,
      amount,
      category,
      description,
      date: new Date().toLocaleDateString(),
    };

    if (editIndex !== null) {
      const updatedExpenses = [...expenses];

      updatedExpenses[editIndex] = {
        ...updatedExpenses[editIndex],
        ...newExpense,
      };

      setExpenses(updatedExpenses);
    } else {
      setExpenses((prev) => [...prev, newExpense]);
    }

    setTitle("");
    setAmount("");
    setCategory("Vegetables");
    setDescription("");
    setEditIndex(null);
    setPopup(false);
  };

  return (
    <div>
      <div className="flex justify-between">
        <h1 className="text-[#021A70] text-2xl mt-2 font-semibold">
          Expenses
        </h1>

        <div className="flex justify-between gap-3 items-center">
          <button className="px-3 py-2 rounded font-semibold text-gray-100 bg-[#021A70] border border-[#021A70]">
            Back
          </button>

          <button
            onClick={() => {
              setEditIndex(null);
              setTitle("");
              setAmount("");
              setCategory("Vegetables");
              setDescription("");
              setPopup(true);
            }}
            className="px-3 py-2 rounded font-semibold text-gray-100 bg-[#021A70] border border-[#021A70]"
          >
            Add
          </button>

          {popup && (
            <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-50">
              <div className="bg-white w-[520px] rounded-lg shadow-lg">
                <div className="flex justify-between items-center px-6 py-3 border-b">
                  <h2 className="text-base font-semibold text-[#021A70]">
                    {editIndex !== null ? "Edit Expense" : "Add Expense"}
                  </h2>

                  <button
                    onClick={() => {
                      setPopup(false);
                      setEditIndex(null);
                    }}
                    className="text-gray-400 hover:text-gray-700 text-lg"
                  >
                    ×
                  </button>
                </div>

                <div className="p-6">
                  <div>
                    <label className="block mb-2 text-sm text-gray-700">
                      Title
                    </label>

                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="block mb-2 text-sm text-gray-700">
                      Amount
                    </label>

                    <input
                      type="number"
                      name="Amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mt-3">
                    <label className="text-sm block mb-2 text-gray-700">
                      Expense Type
                    </label>

                    <select
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                      className="w-full text-gray-700 mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    >
                      <option>Vegetables</option>
                      <option>Accomodation</option>
                      <option>Meals</option>
                    </select>
                  </div>

                  <div className="mt-3">
                    <label className="text-sm block mb-2 text-gray-700">
                      Description
                    </label>

                    <textarea
                      placeholder="Description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>

                  <p className="text-red-600">
                    This information will be displayed publicly
                  </p>

                  <div className="flex justify-end gap-2 mt-5">
                    <button
                      onClick={() => {
                        setPopup(false);
                        setEditIndex(null);
                      }}
                      className="bg-[#021A70] hover:bg-[#0125a5] text-white text-sm px-4 py-2 rounded-md"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleSave}
                      className="bg-[#021A70] hover:bg-[#0125a5] text-white text-sm px-4 py-2 rounded-md"
                    >
                      {editIndex !== null ? "Update" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white flex justify-between items-center gap-20 border mt-2 border-gray-200 rounded-lg shadow-sm p-3 mb-4 w-full">
        <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 h-9">
          <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
            search
          </span>

          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
          />
        </div>

        <div className="flex items-center gap-3">
          <p className="font-medium">Sort By:</p>

          <select className="border border-gray-300 rounded-md px-3 py-2 outline-none">
            <option>Created At</option>
            <option>Amount</option>
            <option>Category</option>
            <option>Title</option>
          </select>

          <button className="bg-[#021A70] text-white px-4 py-2 rounded-md">
            Sort
          </button>
        </div>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg mt-4">
        {expenses
          .filter((item) =>
            item.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={item.id ?? index}
              className="grid grid-cols-[100px_1fr_1fr_1fr_100px] items-center border-b border-gray-300 p-4"
            >
              <input type="checkbox" />

              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-xs text-gray-500">{item.date}</p>
              </div>

              <div>
                <h3 className="font-semibold">${item.amount}</h3>
                <p className="text-xs text-gray-500">Amount</p>
              </div>

              <div>
                <h3 className="font-semibold">{item.category}</h3>
                <p className="text-xs text-gray-500">Category</p>
              </div>

              <div className="relative">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === index ? null : index)
                  }
                  className="bg-[#021A70] text-white px-2 py-2 rounded"
                >
                  View
                </button>

                {openMenu === index && (
                  <div className="absolute right-0 mt-2 w-28 bg-white border rounded-md shadow-lg z-10">
                    <button
                      onClick={() => {
                        setTitle(item.title);
                        setAmount(item.amount);
                        setCategory(item.category);
                        setDescription(item.description || "");
                        setEditIndex(index);
                        setPopup(true);
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => {
                        setExpenses((prev) =>
                          prev.filter((_, i) => i !== index)
                        );
                        setOpenMenu(null);
                      }}
                      className="block w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100"
                    >
                      Delete
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
