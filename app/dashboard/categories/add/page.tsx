"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddCategory() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [preview, setPreview] = useState("");

  return (
    <div className="p-4">
      {/* HEADER */}

      <div className="flex justify-between mb-5">
        <h1 className="text-[28px] font-semibold text-black">
          Add Category
        </h1>

        <button
          onClick={() => router.back()}
          className="bg-[#021A70] text-white px-5 py-2 rounded-md"
        >
          Back
        </button>
      </div>

      {/* CONTENT */}

      <div className="bg-white border rounded-lg p-6">
        <div className="grid grid-cols-2 gap-10">
          {/* LEFT SIDE */}

          <div>
            <h2 className="font-semibold text-xl mb-2 text-black">
              Category Information
            </h2>

            <p className="text-black">
              Enter information for new product category.
            </p>
          </div>

          {/* RIGHT SIDE */}

          <div>
            <label className="text-black font-medium">
              Name
            </label>

            <input
              type="text"
              placeholder="Name"
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
                  border-2 border-dashed
                  rounded-lg
                  h-[250px]
                  mt-2
                  flex
                  flex-col
                  justify-center
                  items-center
                  cursor-pointer
                "
              >
                {preview ? (
                  <img
                    src={preview}
                    alt="Preview"
                    className="h-40 object-contain"
                  />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[60px] text-gray-400">
                      cloud_upload
                    </span>

                    <p className="text-black text-sm">
                      Drag and drop a file here or click
                    </p>
                  </>
                )}
              </label>

              <input
                id="image"
                type="file"
                hidden
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
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}