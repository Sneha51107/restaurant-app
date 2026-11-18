
"use client";

import { useState, useEffect } from "react";

type OrganizationItem = {
  id: number;
  Organization: string;
  Country: string;
  Status: string;
};

type OrganizationForm = {
  Organization: string;
  Country: string;
  Status: string;
};

export default function Organization() {
  const [orgData, setOrgData] = useState<OrganizationItem[]>([]);

  useEffect(() => {
    fetch("/api/organization")
      .then((res) => res.json())
      .then((data: OrganizationItem[]) => setOrgData(data))
      .catch((error) => console.error("Error fetching organizations:", error));
  }, []);

  const [openModal, setOpenModal] = useState(false);
  const [editData, setEditData] = useState<OrganizationItem | null>(null);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState<OrganizationForm>({
    Organization: "",
    Country: "",
    Status: "Active",
  });

  const handleDelete = (id: number) => {
    setOrgData((prev) => prev.filter((item) => item.id !== id));
  };

  const handleAddOrganization = () => {
    if (!formData.Organization || !formData.Country || !formData.Status) {
      setError("All fields are required");
      return;
    }

    setError("");

    if (editData) {
      const updatedData = orgData.map((item) =>
        item.id === editData.id ? { ...item, ...formData } : item
      );

      setOrgData(updatedData);
    } else {
      setOrgData([
        ...orgData,
        {
          id: orgData.length + 1,
          Organization: formData.Organization,
          Country: formData.Country,
          Status: formData.Status,
        },
      ]);
    }

    setFormData({
      Organization: "",
      Country: "",
      Status: "Active",
    });

    setEditData(null);
    setOpenModal(false);
  };

  return (
    <div className="pl-0 pr-0 pt-2">
      <div className="flex items-center justify-between mb-3">
        <h1 className="text-[18px] font-semibold text-[#021A70]">
          Organization
        </h1>

        <button
          onClick={() => {
            setEditData(null);
            setFormData({
              Organization: "",
              Country: "",
              Status: "Active",
            });
            setOpenModal(true);
          }}
          className="bg-[#021A70] text-white px-4 py-2 rounded-md text-sm hover:bg-[#02198e]"
        >
          + Add Organization
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4 w-full">
        <div className="flex justify-between">
          <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 h-9">
            <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
              search
            </span>

            <input
              type="text"
              placeholder="Search organization..."
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
                {editData ? "Edit Data" : "Add new organization"}
              </h2>

              <button
                onClick={() => {
                  setOpenModal(false);
                  setEditData(null);
                }}
                className="text-gray-400 hover:text-gray-700 text-lg"
              >
                ×
              </button>
            </div>

            <div className="p-6">
              <div>
                <label className="text-sm text-gray-600">Organization</label>
                <input
                  type="text"
                  placeholder="Organization"
                  value={formData.Organization}
                  onChange={(e) =>
                    setFormData({ ...formData, Organization: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div className="mt-3">
                <label className="text-sm text-gray-600">Country</label>
                <input
                  type="text"
                  placeholder="Country"
                  value={formData.Country}
                  onChange={(e) =>
                    setFormData({ ...formData, Country: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              <div className="mt-3">
                <label className="text-sm text-gray-600">Status</label>
                <input
                  type="text"
                  value={formData.Status}
                  onChange={(e) =>
                    setFormData({ ...formData, Status: e.target.value })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}

              <div className="mt-4">
                <button
                  onClick={handleAddOrganization}
                  className="bg-linear-to-b from-blue-800 to-blue-950 px-4 py-2 rounded text-white"
                >
                  {editData ? "Update Organization" : "Add Organization"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        <table className="w-full text-sm text-left">
          <thead className="text-left text-xs font-semibold text-gray-500 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3 font-semibold">ID</th>
              <th className="px-6 py-3 font-semibold">Organization</th>
              <th className="px-6 py-3 font-semibold">Country</th>
              <th className="px-6 py-3 font-semibold">Status</th>
              <th className="px-6 py-3 font-semibold text-center">Actions</th>
            </tr>
          </thead>

          <tbody>
            {orgData.map((item) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-gray-700 font-medium">
                  {item.id}
                </td>

                <td className="px-6 py-4 text-gray-800">
                  {item.Organization}
                </td>

                <td className="px-6 py-4 text-gray-600">{item.Country}</td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 text-xs font-medium rounded-full ${
                      item.Status === "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {item.Status}
                  </span>
                </td>

                <td className="px-4 py-2">
                  <div className="flex items-center gap-2 justify-center">
                    <button
                      onClick={() => {
                        setFormData({
                          Organization: item.Organization,
                          Country: item.Country,
                          Status: item.Status,
                        });
                        setEditData(item);
                        setOpenModal(true);
                      }}
                      className="p-2 bg-blue-50 rounded-lg hover:bg-blue-100"
                    >
                      <span className="material-symbols-outlined text-blue-600 text-[18px]">
                        edit
                      </span>
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="p-2 bg-red-50 rounded-lg hover:bg-red-100"
                    >
                      <span className="material-symbols-outlined text-red-600 text-[18px]">
                        delete
                      </span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
