"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

/* ---------------- TYPES ---------------- */

type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: string;
  type: "Veg" | "Non-Veg";
  image: string;
};

type CartItem = MenuItem & {
  qty: number;
};

/* ---------------- DUMMY MENU DATA ---------------- */

const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Chicken Burger",
    price: 180,
    category: "Main Course",
    type: "Non-Veg",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
  },

  {
    id: 2,
    name: "Veg Pizza",
    price: 250,
    category: "Main Course",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1513104890138-7c749659a591",
  },

  {
    id: 3,
    name: "French Fries",
    price: 120,
    category: "Starters",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1576107232684-1279f390859f",
  },

  {
    id: 4,
    name: "Chocolate Shake",
    price: 140,
    category: "Beverages",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1577805947697-89e18249d767",
  },

  {
    id: 5,
    name: "Grilled Chicken",
    price: 320,
    category: "Main Course",
    type: "Non-Veg",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2",
  },

  {
    id: 6,
    name: "Ice Cream",
    price: 90,
    category: "Desserts",
    type: "Veg",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb",
  },
];

const categories = [
  "All",
  "Starters",
  "Main Course",
  "Beverages",
  "Desserts",
];

export default function BillingPage() {
  const router = useRouter();

  const [cart, setCart] =
    useState<CartItem[]>([]);

  const [activeCategory, setActiveCategory] =
    useState("All");

  const [foodType, setFoodType] =
    useState<"All" | "Veg" | "Non-Veg">(
      "All"
    );

  const [search, setSearch] =
    useState("");

  const [discount, setDiscount] =
    useState(0);

  const taxRate = 5;

  /* ---------------- ADD ITEM ---------------- */

  const addItem = (
    item: MenuItem
  ) => {
    const exist = cart.find(
      (c) => c.id === item.id
    );

    if (exist) {
      setCart(
        cart.map((c) =>
          c.id === item.id
            ? {
                ...c,
                qty: c.qty + 1,
              }
            : c
        )
      );
    } else {
      setCart([
        ...cart,
        {
          ...item,
          qty: 1,
        },
      ]);
    }
  };

  /* ---------------- UPDATE QTY ---------------- */

  const updateQty = (
    id: number,
    type: "inc" | "dec"
  ) => {
    setCart(
      cart.map((c) => {
        if (c.id === id) {
          const newQty =
            type === "inc"
              ? c.qty + 1
              : c.qty - 1;

          if (newQty <= 0)
            return c;

          return {
            ...c,
            qty: newQty,
          };
        }

        return c;
      })
    );
  };

  /* ---------------- REMOVE ITEM ---------------- */

  const removeItem = (
    id: number
  ) => {
    setCart(
      cart.filter(
        (c) => c.id !== id
      )
    );
  };

  /* ---------------- FILTER ---------------- */

  let filteredItems =
    menuItems.filter((item) =>
      item.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  if (foodType !== "All") {
    filteredItems =
      filteredItems.filter(
        (item) =>
          item.type === foodType
      );
  }

  if (
    activeCategory !== "All"
  ) {
    filteredItems =
      filteredItems.filter(
        (item) =>
          item.category ===
          activeCategory
      );
  }

  /* ---------------- CALCULATIONS ---------------- */

  const subtotal =
    cart.reduce(
      (sum, item) =>
        sum +
        item.price * item.qty,
      0
    );

  const tax =
    (subtotal * taxRate) / 100;

  const total =
    subtotal + tax - discount;

  /* ---------------- BILL ---------------- */

  const generateBill = () => {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    router.push(
      "/dashboard/billing/invoice"
    );
  };

  return (
    <div className="pl-0 pr-0 pt-2">
      {/* HEADER */}

      <h1 className="text-xl font-semibold mb-2">
        Restaurant Billing
      </h1>

      {/* TOP BAR */}

      <div className="flex justify-between items-center mb-4">
        {/* SEARCH */}

        <input
          placeholder="Search food..."
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm w-72"
          value={search}
          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }
        />

        {/* FILTERS */}

        <div className="flex gap-2">
          <button
            onClick={() =>
              setFoodType(
                foodType === "Veg"
                  ? "All"
                  : "Veg"
              )
            }
            className={`px-3 py-2 rounded-lg text-sm border
            ${
              foodType === "Veg"
                ? "bg-green-100 text-green-700 border-green-300"
                : "border-gray-300 bg-white"
            }`}
          >
            Veg
          </button>

          <button
            onClick={() =>
              setFoodType(
                foodType ===
                  "Non-Veg"
                  ? "All"
                  : "Non-Veg"
              )
            }
            className={`px-3 py-2 rounded-lg text-sm border
            ${
              foodType ===
              "Non-Veg"
                ? "bg-red-100 text-red-700 border-red-300"
                : "border-gray-300 bg-white"
            }`}
          >
            Non-Veg
          </button>
        </div>
      </div>

      {/* CATEGORY */}

      <div className="flex gap-2 mb-4 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() =>
              setActiveCategory(cat)
            }
            className={`px-3 py-1 rounded text-sm
            ${
              activeCategory === cat
                ? "bg-[#021A70] text-white"
                : "bg-gray-100 text-gray-600"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* MAIN GRID */}

      <div className="grid grid-cols-3 gap-4">
        {/* MENU SECTION */}

        <div className="col-span-2">
          <div className="grid grid-cols-3 gap-3">
            {filteredItems.map(
              (item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden"
                >
                  {/* IMAGE */}

                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-36 object-cover"
                  />

                  {/* CONTENT */}

                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <p className="font-medium text-sm text-gray-800">
                        {item.name}
                      </p>

                      <span
                        className={`px-2 py-1 text-[10px] rounded font-medium
                        ${
                          item.type ===
                          "Veg"
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {item.type}
                      </span>
                    </div>

                    <p className="text-sm text-gray-500 mt-1">
                      ₹{item.price}
                    </p>

                    <button
                      onClick={() =>
                        addItem(
                          item
                        )
                      }
                      className="mt-4 w-full bg-[#021A70] text-white py-2 rounded text-sm"
                    >
                      + Add Item
                    </button>
                  </div>
                </div>
              )
            )}
          </div>
        </div>

        {/* BILLING SUMMARY */}

        <div className="bg-white shadow-sm border border-gray-200 rounded-lg p-4 h-fit">
          <h3 className="font-semibold mb-4">
            Billing Summary
          </h3>

          {/* CART ITEMS */}

          <div className="space-y-3 max-h-[350px] overflow-y-auto">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                {/* LEFT */}

                <div>
                  <p className="text-sm font-medium">
                    {item.name}
                  </p>

                  <p className="text-xs text-gray-500">
                    ₹{item.price}
                  </p>
                </div>

                {/* QTY */}

                <div className="flex items-center gap-2">
                  <button
                    onClick={() =>
                      updateQty(
                        item.id,
                        "dec"
                      )
                    }
                    className="border border-gray-300 px-2 py-1 rounded text-sm"
                  >
                    -
                  </button>

                  <span className="text-sm">
                    {item.qty}
                  </span>

                  <button
                    onClick={() =>
                      updateQty(
                        item.id,
                        "inc"
                      )
                    }
                    className="border border-gray-300 px-2 py-1 rounded text-sm"
                  >
                    +
                  </button>
                </div>

                {/* DELETE */}

                <button
                  onClick={() =>
                    removeItem(
                      item.id
                    )
                  }
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>

          {/* TOTALS */}

          <div className="mt-4 text-sm space-y-2">
            <div className="flex justify-between">
              <span>
                Subtotal
              </span>

              <span>
                ₹{subtotal}
              </span>
            </div>

            <div className="flex justify-between">
              <span>
                Tax (5%)
              </span>

              <span>
                ₹
                {tax.toFixed(
                  2
                )}
              </span>
            </div>

            {/* DISCOUNT */}

            <div className="flex justify-between items-center">
              <span>
                Discount
              </span>

              <input
                type="number"
                className="border border-gray-300 p-1 rounded text-right w-20"
                value={discount}
                onChange={(e) =>
                  setDiscount(
                    Number(
                      e.target
                        .value
                    )
                  )
                }
              />
            </div>

            <div className="flex justify-between font-semibold border-t pt-2">
              <span>Total</span>

              <span>
                ₹
                {total.toFixed(
                  2
                )}
              </span>
            </div>
          </div>

          {/* PAYMENT */}

          <select className="border border-gray-300 p-2 rounded-lg w-full mt-4 text-sm">
            <option>
              Cash
            </option>

            <option>
              Card
            </option>

            <option>UPI</option>
          </select>

          {/* BUTTON */}

          <button
            onClick={
              generateBill
            }
            className="mt-4 w-full bg-[#021A70] text-white py-2 rounded-lg text-sm"
          >
            Generate Bill
          </button>
        </div>
      </div>
    </div>
  );
}