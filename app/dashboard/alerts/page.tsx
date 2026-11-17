"use client";

import { useState } from "react";

type Alert = {
  id: number;
  title: string;
  category: string;
  priority: "High" | "Medium" | "Low";
  date: string;
  status: "Active" | "Resolved";
};

/* ---------------- ALERT DATA ---------------- */

const initialAlerts: Alert[] = [
  {
    id: 1,
    title: "Low Stock - Tomatoes",
    category: "Inventory",
    priority: "High",
    date: "21 Mar 2025",
    status: "Active",
  },

  {
    id: 2,
    title: "Kitchen Delay - Order #205",
    category: "Orders",
    priority: "Medium",
    date: "20 Mar 2025",
    status: "Resolved",
  },

  {
    id: 3,
    title: "Staff Shortage - FOH",
    category: "Staff",
    priority: "High",
    date: "19 Mar 2025",
    status: "Active",
  },

  {
    id: 4,
    title: "Oven Maintenance Required",
    category: "Equipment",
    priority: "Low",
    date: "18 Mar 2025",
    status: "Active",
  },
];

export default function AlertsPage() {
  const [alerts, setAlerts] =
    useState(initialAlerts);

  const [search, setSearch] =
    useState("");

  const [priorityFilter, setPriorityFilter] =
    useState("all");

  const [statusFilter, setStatusFilter] =
    useState("all");

  const [openModal, setOpenModal] =
    useState(false);

  const [editData, setEditData] =
    useState<Alert | null>(null);

  const [error, setError] =
    useState("");

  const [formData, setFormData] =
    useState({
      title: "",
      category: "",
      priority: "High" as
        | "High"
        | "Medium"
        | "Low",
      date: "",
      status: "Active" as
        | "Active"
        | "Resolved",
    });

  /* ---------------- FILTER ---------------- */

  let filtered = alerts.filter((a) =>
    a.title
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (priorityFilter !== "all") {
    filtered = filtered.filter(
      (a) =>
        a.priority === priorityFilter
    );
  }

  if (statusFilter !== "all") {
    filtered = filtered.filter(
      (a) =>
        a.status === statusFilter
    );
  }

  /* ---------------- DELETE ---------------- */

  const handleDelete = (
    id: number
  ) => {
    setAlerts(
      alerts.filter(
        (a) => a.id !== id
      )
    );
  };

  /* ---------------- SAVE ---------------- */

  const handleSave = () => {
    if (
      !formData.title ||
      !formData.category ||
      !formData.date
    ) {
      setError(
        "All fields are required"
      );

      return;
    }

    setError("");

    if (editData) {
      const updatedData =
        alerts.map((item) =>
          item.id === editData.id
            ? {
                ...item,
                ...formData,
              }
            : item
        );

      setAlerts(updatedData);
    } else {
      setAlerts([
        ...alerts,
        {
          id:
            alerts.length + 1,
          ...formData,
        },
      ]);
    }

    setFormData({
      title: "",
      category: "",
      priority: "High",
      date: "",
      status: "Active",
    });

    setEditData(null);
    setOpenModal(false);
  };

  return (
    <div className="pl-0 pr-2 pt-2">
      {/* HEADER */}

      <h1 className="text-xl font-semibold mb-2">
        Alerts
      </h1>

      {/* TOP BAR */}

      <div className="flex justify-between mb-4">
        {/* SEARCH */}

        <input
          placeholder="Search alerts..."
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-64"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        {/* FILTERS */}

        <div className="flex gap-2">
          <select
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            onChange={(e) =>
              setPriorityFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Priority
            </option>

            <option value="High">
              High
            </option>

            <option value="Medium">
              Medium
            </option>

            <option value="Low">
              Low
            </option>
          </select>

          <select
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm"
            onChange={(e) =>
              setStatusFilter(
                e.target.value
              )
            }
          >
            <option value="all">
              All Status
            </option>

            <option value="Active">
              Active
            </option>

            <option value="Resolved">
              Resolved
            </option>
          </select>

          {/* ADD BUTTON */}

          <button
            onClick={() => {
              setEditData(null);

              setFormData({
                title: "",
                category: "",
                priority: "High",
                date: "",
                status: "Active",
              });

              setOpenModal(true);
            }}
            className="bg-[#021A70] text-white px-4 py-2 rounded-lg text-sm"
          >
            + Add Alert
          </button>
        </div>
      </div>

      {/* MODAL */}

      {openModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/10 backdrop-blur-[2px] z-50">
          <div className="bg-white w-[520px] rounded-lg shadow-lg">
            {/* HEADER */}

            <div className="flex justify-between items-center px-6 py-3 border-b">
              <h2 className="text-base font-semibold text-gray-800">
                {editData
                  ? "Edit Alert"
                  : "Add New Alert"}
              </h2>

              <button
                onClick={() =>
                  setOpenModal(
                    false
                  )
                }
                className="text-gray-400 hover:text-gray-700 text-lg"
              >
                ×
              </button>
            </div>

            {/* BODY */}

            <div className="p-6">
              {/* TITLE */}

              <div>
                <label className="text-sm text-gray-600">
                  Alert Title
                </label>

                <input
                  type="text"
                  placeholder="Enter alert title"
                  value={
                    formData.title
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      title:
                        e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* CATEGORY */}

              <div className="mt-3">
                <label className="text-sm text-gray-600">
                  Category
                </label>

                <input
                  type="text"
                  placeholder="Enter category"
                  value={
                    formData.category
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      category:
                        e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* PRIORITY */}

              <div className="mt-3">
                <label className="text-sm text-gray-600">
                  Priority
                </label>

                <select
                  value={
                    formData.priority
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      priority:
                        e.target
                          .value as
                          | "High"
                          | "Medium"
                          | "Low",
                    })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option>
                    High
                  </option>

                  <option>
                    Medium
                  </option>

                  <option>
                    Low
                  </option>
                </select>
              </div>

              {/* DATE */}

              <div className="mt-3">
                <label className="text-sm text-gray-600">
                  Date
                </label>

                <input
                  type="text"
                  placeholder="21 Mar 2025"
                  value={
                    formData.date
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      date:
                        e.target.value,
                    })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* STATUS */}

              <div className="mt-3">
                <label className="text-sm text-gray-600">
                  Status
                </label>

                <select
                  value={
                    formData.status
                  }
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      status:
                        e.target
                          .value as
                          | "Active"
                          | "Resolved",
                    })
                  }
                  className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
                >
                  <option>
                    Active
                  </option>

                  <option>
                    Resolved
                  </option>
                </select>
              </div>

              {/* ERROR */}

              {error && (
                <p className="text-red-500 text-sm mt-2">
                  {error}
                </p>
              )}

              {/* BUTTON */}

              <div className="mt-4">
                <button
                  onClick={
                    handleSave
                  }
                  className="bg-[#021A70] px-4 py-2 rounded text-white text-sm"
                >
                  {editData
                    ? "Update Alert"
                    : "Add Alert"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TABLE */}

      <div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 border-b">
            <tr>
              <th className="px-6 py-3">
                Alert
              </th>

              <th className="px-6 py-3">
                Category
              </th>

              <th className="px-6 py-3">
                Priority
              </th>

              <th className="px-6 py-3">
                Date
              </th>

              <th className="px-6 py-3">
                Status
              </th>

              <th className="px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {filtered.map((alert) => (
              <tr
                key={alert.id}
                className="border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4 font-medium text-gray-900">
                  {alert.title}
                </td>

                <td className="px-6 py-4">
                  {alert.category}
                </td>

                {/* PRIORITY */}

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded
                    ${
                      alert.priority ===
                      "High"
                        ? "bg-red-100 text-red-700"
                        : alert.priority ===
                          "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                    }`}
                  >
                    {alert.priority}
                  </span>
                </td>

                <td className="px-6 py-4">
                  {alert.date}
                </td>

                {/* STATUS */}

                <td className="px-6 py-4">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded
                    ${
                      alert.status ===
                      "Active"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-200 text-gray-700"
                    }`}
                  >
                    {alert.status}
                  </span>
                </td>

                {/* ACTIONS */}

                <td className="px-6 py-4 flex gap-2">
                  <button
                    onClick={() => {
                      setEditData(
                        alert
                      );

                      setFormData({
                        title:
                          alert.title,
                        category:
                          alert.category,
                        priority:
                          alert.priority,
                        date:
                          alert.date,
                        status:
                          alert.status,
                      });

                      setOpenModal(
                        true
                      );
                    }}
                    className="bg-[#021A70] text-white px-2 py-1 rounded text-xs"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() =>
                      handleDelete(
                        alert.id
                      )
                    }
                    className="bg-red-600 text-white px-2 py-1 rounded text-xs"
                  >
                    Delete
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