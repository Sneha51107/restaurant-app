"use client";

import { useState } from "react";

export default function General() {
  const [formData, setFormData] = useState({
    appUrl: "https://resto.codehas.net",
    appName: "Restaurant POS",
    phone: "7866718114",
    address: "4466 Scheuvront Drive Centennial, CO 80112",
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
          General Settings
        </h1>
      <div className="bg-white rounded-lg shadow border p-6">
        

        <form onSubmit={handleSave} className="space-y-5 text-[#021A70]">
          <div>
            <label className="block text-md font-semibold mb-2">
              App URL
            </label>

            <input
              type="text"
              name="appUrl"
              value={formData.appUrl}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>
          <div>
            <label className="block text-md font-semibold mb-2">
              App Name
            </label>

            <input
              type="text"
              name="appName"
              value={formData.appName}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-md font-semibold mb-2">
              App Phone
            </label>

            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div>
            <label className="block text-md font-semibold mb-2">
              Address
            </label>

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 outline-none"
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-md font-semibold">
              Bypass Kitchen Bar
            </label>

            <input
              type="checkbox"
              checked={bypassKitchen}
              onChange={() =>
                setBypassKitchen(!bypassKitchen)
              }
            />
          </div>

          <div className="flex items-center gap-3">
            <label className="text-md font-semibold">
              Force HTTPS
            </label>

            <input
              type="checkbox"
              checked={httpsEnabled}
              onChange={() =>
                setHttpsEnabled(!httpsEnabled)
              }
            />
            <p className="text-gray-400">The site will be forced to load with  https</p>
        
          </div>
          <p>Force the loading of the site using HTTPS , to improve the security and SEO positioningof the site.</p>
          
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