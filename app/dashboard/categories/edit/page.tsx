"use client";

import { useState } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditCategory() {
  const router = useRouter();
  const params = useParams();

  const categoryId = params.id;

  const categories = [
    {
      id: "1",
      name: "Sandwiches",
      image:
        "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=300",
    },
    {
      id: "2",
      name: "Salads",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300",
    },
    {
      id: "3",
      name: "Burgers",
      image:
        "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300",
    },
    {
      id: "4",
      name: "Appetizers",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=300",
    },
  ];

  const selectedCategory =
    categories.find(
      (item) => item.id === categoryId
    ) || categories[0];

  const [name, setName] = useState(
    selectedCategory.name
  );

  const [preview, setPreview] = useState(
    selectedCategory.image
  );

  return (
    <div className="p-4">
      {/* HEADER */}

      <div className="flex justify-between mb-5">
        <h1 className="text-[28px] font-semibold text-black">
          Edit Category
        </h1>

        <div className="flex gap-2">
          <button className="bg-red-500 text-white px-5 py-2 rounded-md">
            Delete
          </button>

          <button
            onClick={() => router.back()}
            className="bg-[#021A70] text-white px-5 py-2 rounded-md"
          >
            Back
          </button>
        </div>
      </div>

      {/* CONTENT */}

      <div className="bg-white border rounded-lg p-6">
        <div className="grid grid-cols-2 gap-10">
          {/* LEFT */}

          <div>
            <h2 className="font-semibold text-xl mb-2 text-black">
              Category Information
            </h2>

            <p className="text-black">
              Edit information for product
              category.
            </p>

            <div className="mt-4 text-sm text-black">
              Category ID : {categoryId}
            </div>
          </div>

          {/* RIGHT */}

          <div>
            <label className="text-black font-medium">
              Name
            </label>

            <input
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
              className="w-full border rounded-md p-3 mt-1 text-black"
            />

            {/* IMAGE */}

            <div className="mt-6">
              <label className="text-black font-medium">
                Image
              </label>

              <label
                htmlFor="image"
                className="
                  border
                  rounded-lg
                  h-[250px]
                  flex
                  justify-center
                  items-center
                  mt-2
                  cursor-pointer
                "
              >
                <img
                  src={preview}
                  alt="Category"
                  className="h-40 object-contain"
                />
              </label>

              <input
                id="image"
                hidden
                type="file"
                accept="image/*"
                onChange={(e) => {
                  const file =
                    e.target.files?.[0];

                  if (file) {
                    setPreview(
                      URL.createObjectURL(file)
                    );
                  }
                }}
              />
            </div>

            {/* BUTTONS */}

            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => router.back()}
                className="bg-gray-500 text-white px-5 py-2 rounded-md"
              >
                Cancel
              </button>

              <button className="bg-[#021A70] text-white px-5 py-2 rounded-md">
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}