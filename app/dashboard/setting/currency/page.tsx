"use client";

import { useState } from "react";

export default function Currency() {
  const [formData, setFormData] = useState({
    Currencysymbol: "$",
  });

  const [httpsEnabled, setHttpsEnabled] = useState(true);
  const [bypassKitchen, setBypassKitchen] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Settings Saved");
  };

  return (
    <div className="w-full min-h-screen p-6">
        <h1 className="text-2xl font-bold text-[#021A70] mb-6">
    $ Currency
        </h1>
      <div className="bg-white rounded-lg shadow border p-6">
        

        <form onSubmit={handleSave} className="space-y-5 text-[#021A70]">
          <div>
            <label className="block text-md font-semibold mb-2">
              Currency symbol
            </label>

            <input
              type="text"
              name="appUrl"
              value={formData.Currencysymbol}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          
        
    

          <div className="flex items-center gap-3">
            <label className="text-md font-semibold">
              Display side
            </label>

            <input
              type="checkbox"
              checked={httpsEnabled}
              onChange={() =>
                setHttpsEnabled(!httpsEnabled)
              }
            />
            <p className="text-gray-400">This will be render on right side</p>
        
          </div>
          <p className="font-semibold"> Display side can control currency symbol rendering side along amount to enhance overview.</p>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#021A70] text-white px-5 py-2 rounded-md hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}