
"use client";

import { useState } from "react";

export default function Outgoing() {
  const [formData, setFormData] = useState({
    Processing: "send by asynchronously",
    Fromaddress: "info.codehas@gmail.com",
     Fromname: "Restaurant System",
    Outgoingmailmethod: "SendMail",
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
          Outgoing Mail
        </h1>
      <div className="bg-white rounded-lg shadow border p-6">
        

        <form onSubmit={handleSave} className="space-y-5 text-[#021A70]">
             <label className="block text-md font-semibold mb-2">
              Processing
            </label>
          <select
            name="Processing"
            value={formData.Processing}
            onChange={handleChange}
            className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none"
          >
  <option value="send by asynchronously">
    Send by asynchronously
  </option>
  <option value="send immediately">
    Send immediately
  </option>
</select>
          <div>
            <label className="block text-md font-semibold mb-2">
              From address
            </label>

            <input
              type="text"
              name="appName"
              value={formData.Fromaddress}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none"
            />   <p className="mt-1 font-semibold">All outgoing application emails will be sent from this email address.</p>
          </div>
       
          <div>
            <label className="block text-md font-semibold mb-2">
              From name
            </label>

            <input
              type="text"
              name="phone"
              value={formData.Fromname}
              onChange={handleChange}
              className="w-full border border-gray-400  rounded-md px-3 py-2 outline-none"
            />   <p className="mt-1 font-semibold ">All outgoing application emails will be sent from this name.</p>
          </div>

          <div>
            <label className="block text-md font-semibold mb-2">
              Outgoing mail method
            </label>
                <select
              name="Outgoingmailmethod"
              value={formData.Outgoingmailmethod}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded-md px-3 py-2 outline-none"
            >
  <option value="SendMail">SendMail</option>
  <option value="SMTP">SMTP</option>
  <option value="MailGun">MailGun</option>
</select>
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