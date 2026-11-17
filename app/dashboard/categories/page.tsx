"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CategoriesPage() {
  const router = useRouter();

  const [sortBy, setSortBy] = useState("created");

  const categories = [
    {
      id: 1,
      name: "Sandwiches",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300",
      createdAt: "11-07-2023 08:11:18",
      
    },
    {
      id: 2,
      name: "Salads",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
      createdAt: "11-07-2023 08:11:18",
     
    },
    {
      id: 3,
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
      createdAt: "11-07-2023 08:11:18",
      
    },
    {
      id: 4,
      name: "Appetizers",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300",
      createdAt: "11-07-2023 08:11:18",
      
    },
  ];

  return (
    <div className="p-4 pl-0 pr-0">
      <div className="flex justify-between items-center mb-5">
        <h1 className="text-[28px] font-semibold text-black">
          Food Categories
        </h1>

        <button
          onClick={() => router.back()}
          className="bg-[#021A70] text-white px-5 py-2 rounded-md"
        >
          Back
        </button>
      </div>

      <div className="bg-white border rounded-lg p-4">
        {/* SEARCH + SORT */}

        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-md px-3 py-2 w-[250px] text-black"
          />

          <div className="flex items-center gap-3">
            <span className="text-black">
              Sort By:
            </span>

            <select
              value={sortBy}
              onChange={(e) =>
                setSortBy(e.target.value)
              }
              className="border rounded-md px-3 py-2 text-black"
            >
              <option value="created">
                Created At
              </option>

              <option value="updated">
                Updated At
              </option>


              <option value="name">
                Name
              </option>
            </select>
          
          <button
            onClick={() =>
              router.push(
                "/dashboard/categories/add"
              )
            }
            className="bg-[#021A70] text-white px-4 py-2 rounded-md"
          >
            Add
          </button>
          </div>
        </div>

        {/* CATEGORY LIST */}

        {categories.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border-b py-4"
          >
            <div className="flex items-center gap-4">
              <input type="checkbox" />

              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded"
              />

              <div>
                <h3 className="text-xl font-semibold text-black">
                  {item.name}
                </h3>

                <p className="text-sm text-black">
                  Created :
                  {" "}
                  {item.createdAt}
                </p>

               
              </div>
            </div>

            {/* ACTIONS */}

            <div className="flex gap-2">
              <button className="bg-[#021A70] text-white px-5 py-2 rounded-md">
                View
              </button>

              <button
                onClick={() =>
                  router.push(
                    `/dashboard/categories/edit?id=${item.id}`
                  )
                }
                className="bg-blue-50 p-2 rounded-lg hover:bg-blue-100"
              >
                <span className="material-symbols-outlined text-blue-600">
                  edit
                </span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}