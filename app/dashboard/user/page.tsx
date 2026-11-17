"use client"
import { useState , useEffect } from "react";

export default function User() {
 const [search, setSearch] = useState("");
const [openModal, setOpenModal] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);


const [formData, setFormData] = useState({
firstName:"",
lastName:"", 
email:"",
position:"",
bio:""
});

const [error,setError] = useState("");

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};
const handleDeletUser=(id)=>{
    setUsers(users.filter((user)=>user.id !==id));
}
const handleAddUser = () => {

if(
!formData.firstName ||
!formData.lastName ||
!formData.email ||
!formData.position ||
!formData.bio
){
setError("All fields are required");
return;
}

setError("");

setUsers([
...users,
{
id: Date.now(),
name: formData.firstName + " " + formData.lastName,
email: formData.email,
position: formData.position,
bio: formData.bio,
country:"USA",
status:"Active",
avatar:"https://flowbite.com/docs/images/people/profile-picture-5.jpg"
}
]);

setFormData({
firstName:"",
lastName:"",
email:"",
position:"",
bio:""
});

setOpenModal(false);

};
const handleUpdateUser = () => {

if(
!formData.firstName ||
!formData.lastName ||
!formData.email ||
!formData.position ||
!formData.bio
){
setError("All fields are required");
return;
}

setUsers(
users.map((user) =>
user.id === editUser.id
? {
...user,
name: formData.firstName + " " + formData.lastName,
email: formData.email,
position: formData.position,
bio: formData.bio
}
: user
)
);

setEditUser(null);
setError("");

setFormData({
firstName:"",
lastName:"",
email:"",
position:"",
bio:""
});

setOpenModal(false);
};
const filteredUsers = users.filter((user) =>
  user.name.toLowerCase().includes(search.toLowerCase())
);
const usersPerPage=3;
const lastIndex = currentPage * usersPerPage;

const firstIndex = lastIndex - usersPerPage;

const currentUsers = users.slice(firstIndex, lastIndex);

const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

return (

<div className="pl-0 pr-0 pt-2">

   <div className="flex items-center justify-between mb-3">

<h1 className="text-[18px] font-semibold text-[#021A70]">
User Managment
</h1>

<button
onClick={() => setOpenModal(true)}
className="bg-[#021A70] text-white px-4 py-2 rounded-md text-sm hover:bg-[#02198e]"
>
+ Add User
</button>

</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4 w-full">

  <div className="flex justify-between gap-3">

    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 h-9 ">

      <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
        search
      </span>

      <input
        type="text"
        placeholder="Search User..."
         value={search}
  onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
      />

    </div>

    <select className="bg-gray-50 border border-gray-200 rounded-md px-3 h-9 text-sm text-[#021A70] outline-none ">
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
{editUser ? "Edit User" : "Add new user"}
</h2>

<button
onClick={() => setOpenModal(false)}
className="text-gray-400 hover:text-gray-700 text-lg"
>
×
</button>
</div>

<div className="p-6">

<div className="grid grid-cols-2 gap-4">

<div>
<label className="text-sm text-gray-600">First Name</label>
<input
type="text"
name="firstName"
value={formData.firstName}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>

<div>
<label className="text-sm text-gray-600">Last Name</label>
<input
type="text"
name="lastName"
value={formData.lastName}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>

<div>
<label className="text-sm text-gray-600">Email</label>
<input
type="email"
name="email"
value={formData.email}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>


<div>
<label className="text-sm text-gray-600">Biography</label>
<input
type="text"
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>


<div className="col-span-2">
<label className="text-sm text-gray-600">Position</label>
<input
type="text"
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>
<div className="col-span-2">
<label className="text-sm text-gray-600">Country</label>
<input
type="text"
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
/>
</div>

</div>

{error && (
<p className="text-red-500 text-sm mt-3">{error}</p>
)}


<div className="flex justify-end mt-5">
<button
onClick={editUser ? handleUpdateUser : handleAddUser}
className="bg-linear-to-b from-blue-800 to-blue-950 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
>
{editUser ? "Update User" : "Add User"}
</button>
</div>

</div>

</div>
</div>
)}
 <div className="overflow-x-auto mt-6 bg-white shadow-sm border border-gray-200 rounded-lg">

<table className="w-full text-sm text-left text-gray-500">

<thead className="text-left text-xs font-semibold text-gray-500 uppercase bg-gray-50 border-b">

<tr className=" text-left text-xs font-semibold text-gray-500 uppercase">
<th className="px-6 py-3 ">Name</th>
<th className="px-6 py-3">Biography</th>
<th className="px-6 py-3">Position</th>
<th className="px-6 py-3">Country</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Actions</th>
</tr>

</thead>

<tbody>

{filteredUsers
  .slice(firstIndex, lastIndex)
  .map((user) => (

<tr key={user.id} className="border-b border-gray-100 hover:bg-gray-50">

<td className="px-6 py-3 align-middle flex items-center gap-3">

<img
src={user.avatar}
alt={user.name}
className="w-10 h-10 rounded-full"
/>

<div>
<p className="font-semibold text-gray-900">{user.name}</p>
<p className="text-gray-500 text-xs">{user.email}</p>
</div>

</td>

<td className="px-6 py-3 text-gray-600 align-middle">{user.bio}</td>

<td className="px-6 py-3 align-middle">{user.position}</td>

<td className="px-6 py-3 align-middle">{user.country}</td>
<td className="px-6 py-3 align-middle">
<span className="flex items-center gap-2 text-green-600 font-medium text-sm">
  <span
    className={`px-3 py-1 text-xs font-medium rounded-full ${
      user.status === "Active"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-600"
    }`}
  >
    {user.status}
  </span>
</span>
</td>
<td className="px-6 py-3 align-middle">
<div className="flex items-center gap-3">

  <span 
    onClick={() => {
      setEditUser(user)

      setFormData({
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ")[1],
        email: user.email,
        position: user.position,
        bio: user.bio
      })

      setOpenModal(true)
    }}
    className="material-symbols-outlined text-[#021A70] cursor-pointer hover:text-blue-800 text-[18px]"
  >
    edit
  </span>

  <span 
    onClick={() => handleDeletUser(user.id)}
    className="material-symbols-outlined text-red-600 cursor-pointer hover:text-red-800 text-[18px]"
  >
    delete
  </span>

</div>
</td>

</tr>

))}

</tbody>

</table>

</div>
  <div className="flex gap-3 mt-4">

  <button
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
    className="px-2 py-1  text-blue-600 bg-gray-200 rounded disabled:opacity-50"
  >
      &lt;
  </button>
    
  <button
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
    className="px-2 py-1 bg-gray-200 text-blue-600 rounded disabled:opacity-50"
  >
    &gt;
  </button>

</div>
</div>

);
} 