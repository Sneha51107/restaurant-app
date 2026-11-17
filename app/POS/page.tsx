"use client";
import { useState } from "react";
import Kheader from "../components/Kheader";
import Link from "next/link";
export default function POS()
{
  const [cartItems, setCartItems] = useState([]);
  const [row, setRow] = useState(5);
  const[notes , setNotes]=useState(false);
  const[search,setSearch]=useState("");
const addToCart = (name: string, price: number, image: string) => {
  setCartItems((prev) => [
    ...prev,
    {
      name,
      price,
      image,
    },
  ]);
};
const netTotal = cartItems.reduce(
  (sum, item) => sum + item.price,
  0
);

const tax = netTotal * 0.1;

const total = netTotal + tax;
const Discount = "10";
  const products = [
  {
    name: "Mozzarella Sticks",
    price: 12,
    image: "/images/sticks.jpg",
  },
  {
    name: "Chicken Wings",
    price: 12,
    image: "/images/fried.jpg",
  },
  {
    name: "Spinach Artichoke Dip",
    price: 10,
    image: "/images/spinac.jpg",
  },
  {
    name: "Nachos",
    price: 5,
    image: "/images/nachos.jpg",
  },
  {
    name: "Potato Skins",
    price: 9,
    image: "/images/potato.jpg",
  },
  {
    name: "Stuffed Mushrooms",
    price: 5,
    image: "/images/mushrrom2.jpg",
  },
  {
    name: "Jalapeno Poppers",
    price: 8,
    image: "/images/poppers.jpg",
  },
  {
    name: "Tomato Soup",
    price: 5,
    image: "/images/sop2.jpg",
  },
  {
    name: "Lentil Soup",
    price: 9,
    image: "/images/lentilsoup.jpg",
  },
  {
    name: "Miso Soup",
    price: 9,
    image: "/images/cutlury.jpg",
  },
];
const filteredProducts = products.filter((item) =>
  item.name.toLowerCase().includes(search.toLowerCase())
);
    return(
        <div className="bg-gray-100 ">
        <Kheader />
        {notes && (
  <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
    
    <div className="bg-white w-[400px] rounded-lg p-5">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-semibold text-lg">
          Notes
        </h2>

        <button onClick={() => setNotes(false)}>
          ✕
        </button>
      </div>

      <textarea
        className="w-full h-32 border rounded p-2"
        placeholder="Write notes..."
      />

      <button
        onClick={() => setNotes(false)}
        className="mt-4 bg-[#021A70] text-white px-4 py-2 rounded"
      >
        Save
      </button>

    </div>

  </div>
)}
        <div className="flex bg-white px-5 py-4 border border-gray-200 rounded-md shadow-sm items-center mt-2 w-full gap-3">

    <button className="h-14 w-[90px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">
  
    <span className="material-symbols-outlined text-[22px]">
      keyboard_double_arrow_left
    </span>

    <Link href="/dashboard" className="text-sm">Back</Link>
  </button> 

  <button className="h-14 w-[90px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      cancel
    </span>

    <span  onClick={() => window.location.reload()} className="text-sm">Clear all</span>
  </button>

  <button className="h-14 w-[100px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      orders
    </span>

    <span className="text-sm">All orders</span>
  </button>

  <select className="w-[260px] h-14 px-4 rounded-md border border-[#021A70] bg-gray-50 text-sm text-[#021A70] font-semibold outline-none">
    <option>Order Type:Dining</option>
    <option>TakeAway</option>
    <option>Online Orders</option>
    <option>Pickup Orders</option>
    <option>Pre Orders</option>
  </select>
  <input
    type="text"
    placeholder="Search product by name"
    value={search}
  onChange={(e) => setSearch(e.target.value)}
    className="w-[420px] h-14 px-4 rounded-md border border-[#021A70] outline-none"
  />

  <button onClick={() => setNotes(true)} className="h-14 w-[90px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      notes
    </span>

    <span className="text-sm">Notes</span>
  </button>

  <button className="h-14 w-[90px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      restaurant
    </span>

    <Link href="/Kitchen"  className="text-sm">Kitchen</Link>
  </button>

  <button className="h-14 w-[100px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      format_list_bulleted
    </span>

    <span className="text-sm">In Process</span>
  </button>

  <button className="h-14 w-[90px] rounded-md border border-[#021A70] bg-gray-50 hover:bg-teal-50 flex flex-col items-center justify-center gap-1 text-[#021A70] font-semibold shadow-sm">

    <span className="material-symbols-outlined text-[22px]">
      save
    </span>

    <span className="text-sm">Submit</span>
  </button>

</div>
       <div className="flex gap-2">

 <div className="w-[15%] bg-white mt-4 rounded-lg p-3 flex flex-col gap-4">

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/sandwich1.jpg"
      alt="sandwich"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Sandwiches
    </p>

  </div>

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/salad.jpg"
      alt="salad"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Salads
    </p>

  </div>

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/burger.jpg"
      alt="burger"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Burgers
    </p>

  </div>

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/apptizer.jpg"
      alt="apptizer"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Appetizers
    </p>

  </div>

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/soup1.jpg"
      alt="soup"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Soups
    </p>

  </div>

  <div className="border border-[#021A70] rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer">

    <img
      src="/images/homemade-pizza-pix.jpg"
      alt="pizza"
      className="w-full h-16 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-[#021A70]">
      Pizzas
    </p>

  </div>

</div>
  <div className="flex-1 w-[55%] bg-white border border-gray-300 mt-4 rounded-lg p-4">

  <div
  className="grid gap-1"
  style={{
    gridTemplateColumns: `repeat(${row}, minmax(0, 1fr))`,
  }}
>
 
  {filteredProducts.map((item, index) => (
  <div
    key={index}
    onClick={() =>
      addToCart(
        item.name,
        item.price,
        item.image
      )
    }
    className="border border-gray-300 rounded-lg bg-white p-2 shadow-sm hover:shadow-md transition cursor-pointer"
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-full h-32 object-cover rounded-md"
    />

    <p className="text-center mt-2 text-[13px] font-semibold text-gray-800">
      {item.name}
    </p>

    <p className="text-center text-sm font-bold text-[#021A70]">
      ${item.price.toFixed(2)}
    </p>
  </div>
))}
  
  </div>
  <div className="flex items-center gap-3 mt-4">

  <button className="w-1/3 h-11 bg-[#021A70] text-white rounded-md font-semibold">
    Previous
  </button>

 <select
  value={row}
  onChange={(e) => setRow(Number(e.target.value))}
  className="w-1/3 h-11 border rounded-md px-3 outline-none"
>
  <option value={5}>5 items in row</option>
  <option value={4}>4 items in row</option>
  <option value={3}>3 items in row</option>
</select>

  <button className="w-1/3 h-11 bg-red-600 text-white rounded-md font-semibold">
    Next
  </button>

</div>

</div>
 <div className="w-[30%] mt-4 bg-white border border-gray-300 rounded-lg p-2 flex flex-col">
  <div className="flex justify-between items-center border rounded border-gray-400 p-1.5 mb-4">

    <h2 className="text-lg font-semibold  text-gray-800">
      Walking Customer
    </h2>

    <button className="text-sm text-[#021A70] font-medium">
      Select Table
    </button>

  </div>

    {cartItems.map((item, index) => (
  <div
    key={index}
    className="flex items-center gap-3 border-b py-2"
  >
    <img
      src={item.image}
      alt={item.name}
      className="w-20 h-20 object-cover rounded-md"
    />

    <div className="flex-1">
      <div className="flex justify-between">
        <p className="font-medium text-sm">
          {item.name}
        </p>

        <p className="font-semibold text-sm">
          ${item.price}
        </p>
      </div>
    </div>
  </div>
))}
  <div className="flex items-center justify-between">

   <div className="font-semibold px-2 py-3 border border-gray-300 bg-gray-200 w-30 rounded">
      <p className="font-semibold">Net</p>
  <p>${netTotal.toFixed(2)}</p>
</div>
 
    <div className="font-semibold px-2 py-3 border border-gray-300 bg-gray-200 w-30 rounded">
      <p className="font-semibold">Tax</p>
 <p> ${tax.toFixed(2)}</p>
</div>
 <div className="px-2 py-3 border border-gray-300 bg-gray-200 w-30 rounded">
  <p className="font-semibold">Discount</p>
  <p>${Number(Discount).toFixed(2)}</p>
</div>

  </div>
  <div className="px-2 py-3 mt-2 border border-gray-300 bg-gray-200 rounded">
    <p className="font-semibold">Total</p>
  <p>${total.toFixed(2)}</p>
  </div>
</div> 
</div>
        </div>

    )
}