"use client";

import { useState } from "react";

export default function Tax() {
  const [formData, setFormData] = useState({
    taxrate: "17.00",
    taxid:""
  });

 const [isVatCalculation, setIsVatCalculation] = useState(true);
const [isFixOrPercentage, setIsFixOrPercentage] = useState(false);
const [isTaxIncluded, setIsTaxIncluded] = useState(false);
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
    <div className="w-full min-h-screen p-2 pl-0 pr-0">
        <h1 className="text-2xl font-bold text-[#021A70] mb-6">
          Tax
        </h1>
      <div className="bg-white rounded-lg shadow border p-4">
        

        <form onSubmit={handleSave} className="space-y-5 text-[#021A70]">
          <div>
            <label className="block text-md font-semibold mb-2">
              Tax Rate
            </label>

            <input
              type="text"
              name="appUrl"
              value={formData.taxrate}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-semibold mb-2">
              Tax id
            </label>

            <input
              type="text"
              name="appName"
              value={formData.taxid}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div> 
              <label className="text-md font-semibold">
              Is VAT calculation
            </label>

          <div className="flex items-center gap-3">
         
             <input
  type="checkbox"
  checked={isVatCalculation}
  onChange={() =>
    setIsVatCalculation(!isVatCalculation)
  }
/>
            <p className="text-gray-400">Basic tax calculation will be implemented</p>
    
          </div>
           <p>This will control tax  calculation implementation</p>
           </div>  
            <div> 
              <label className="text-md font-semibold">
              Is fix or percentage
            </label>

          <div className="flex items-center gap-3">
         
             <input
  type="checkbox"
  checked={isFixOrPercentage}
  onChange={() =>
    setIsFixOrPercentage(!isFixOrPercentage)
  }
/>
            <p className="text-gray-400">The tax amount will be excluded and added</p>
    
          </div>
           <p>This will control how tax can be add to total amount</p>
           </div>  
          
            <div> 
              <label className="text-md font-semibold">
              Is tax included
            </label>

          <div className="flex items-center gap-3">
         
                 <input
  type="checkbox"
  checked={isTaxIncluded}
  onChange={() =>
    setIsTaxIncluded(!isTaxIncluded)
  }
/>
            <p className="text-gray-400">The percentage of amount will be added</p>
    
          </div>
           <p>This will control tax  implementation could be percentage or fixed</p>
           </div>  
          
          
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