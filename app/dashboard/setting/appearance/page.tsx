
"use client"

export default function Appearance()
{
       const handleSave = (e) => {
    e.preventDefault();
    alert("Settings Saved");
  };

    return(
        <div  className="w-full min-h-screen p-2 pl-0 pr-0">
              <h1 className="text-2xl font-bold text-[#021A70] mb-6">
          Outgoing Mail
        </h1>
          <form onSubmit={handleSave} >
      <div className="bg-white rounded-lg shadow border p-6">
        <h1 className=" text-[#021A70] text-lg">Logo</h1>
        <div className="bg-white rounded-lg shadow border border-gray-300 p-6 h-64 flex items-center justify-center">
  <span className="material-symbols-outlined text-[#021A70]"   style={{ fontSize: "120px" }}
>
    chef_hat
  </span>
</div>
 <h1 className="mt-4 text-[#021A70] text-lg">Background</h1>
    <div className="bg-white rounded-lg mt-0 shadow border border-gray-300 p-6 h-64 flex items-center justify-center">
  <img
    src="/images/blur1.jpg"
    alt="Logo"
    className="max-h-full max-w-full object-contain"
  />
</div>
   <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#021A70] text-white  mt-4 px-5 py-2 rounded-md hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
        </form>
        </div>
        
    )
}