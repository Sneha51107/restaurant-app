"use client"
import { useState , useEffect} from "react";

export default function Role() {
  const [search, setSearch] = useState("");
useEffect(() => {
  fetch("/api/roles")
    .then((res) => res.json())
    .then((data) => {
      setRolesData(data);
      setRoles(data);
    });
}, []);

const [rolesData, setRolesData] = useState([]);
const [roles, setRoles] = useState([]);
const [openModal, setOpenModal] = useState(false);
const [editRole, setEditRole] = useState(null);
const [error, setError] = useState("");

const [formData, setFormData] = useState({
roleName: "",
description: "",
permissions: "",
user: "",
date: ""
});

const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value
});
};

const handleDeleteRole = (id) => {
setRoles(roles.filter((role) => role.id !== id));
};

const handleAddRole = () => {

if (!formData.roleName || !formData.description) {
setError("Fill all fields");
return;
}

setError("");

if (editRole) {

const updatedRoles = roles.map((r) =>
r.id === editRole.id
? {
...r,
roleName: formData.roleName,
description: formData.description,
permissions: formData.permissions.split(","),
usersCount: formData.user,
createdDate: formData.date
}
: r
);

setRoles(updatedRoles);

} else {

setRoles([
...roles,
{
id: Date.now(),
roleName: formData.roleName,
description: formData.description,
permissions: formData.permissions.split(","),
usersCount: formData.user,
createdDate: formData.date,
status: "Active"
}
]);

}

setOpenModal(false);
setEditRole(null);
};
const filteredUsers = roles.filter((role) =>
  (role.roleName || "")
    .toLowerCase()
    .includes(search.toLowerCase())
);
return (

<div className="pl-0 pr-0 pt-2">

<div className="flex items-center justify-between mb-3">

<h1 className="text-[18px] font-semibold text-[#021A70]">
Roles Managment
</h1>

<button
onClick={() => setOpenModal(true)}
className="bg-[#021A70] text-white px-4 py-2 rounded-md text-sm hover:bg-[#02198e]"
>
+ Add Role
</button>

</div>

<div className="bg-white border border-gray-200 rounded-lg shadow-sm p-3 mb-4 w-full">

  <div className="flex justify-between">

    <div className="flex items-center bg-gray-50 border border-gray-200 rounded-md px-3 h-9 ">

      <span className="material-symbols-outlined text-gray-400 text-[18px] mr-2">
        search
      </span>

       <input
  type="text"
  placeholder="Search Roles..."
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

<div className="bg-white w-130 rounded-lg shadow-lg">

<div className="flex justify-between items-center px-6 py-3 border-b">

<h2 className="text-base font-semibold text-gray-800">
{editRole ? "Edit Role" : "Add Role"}
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
<label className="text-sm text-gray-600">Role Name</label>
<input
type="text"
name="roleName"
value={formData.roleName}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
/>
</div>

<div>
<label className="text-sm text-gray-600">Description</label>
<input
type="text"
name="description"
value={formData.description}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
/>
</div>

<div>
<label className="text-sm text-gray-600">Permission</label>
<input
type="text"
name="permissions"
value={formData.permissions}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
/>
</div>

<div>
<label className="text-sm text-gray-600">Users</label>
<input
type="number"
name="user"
value={formData.user}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
/>
</div>

<div>
<label className="text-sm text-gray-600">Created Date</label>
<input
type="date"
name="date"
value={formData.date}
onChange={handleChange}
className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm"
/>
</div>

</div>

{error && (
<p className="text-red-500 text-sm mt-3">{error}</p>
)}

<div className="flex justify-end mt-5">

<button
onClick={handleAddRole}
className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-md"
>

{editRole ? "Update Role" : "Add Role"}

</button>

</div>

</div>

</div>

</div>

)}

<div className="overflow-x-auto bg-white shadow-sm border border-gray-200 rounded-lg">

<table className="w-full text-sm text-left text-gray-500">

<thead className="text-left text-xs font-semibold text-gray-500 uppercase bg-gray-50 border-b">

<tr>
<th className="px-6 py-3 text-left text-xs font-semibold text-gray-500 uppercase">Role Name</th>
<th className="px-6 py-3">Description</th>
<th className="px-6 py-3">Permissions</th>
<th className="px-6 py-3">Users</th>
<th className="px-6 py-3">Status</th>
<th className="px-6 py-3">Created Date</th>
<th className="px-6 py-3">Actions</th>
</tr>

</thead>

<tbody>
  {filteredUsers.map((role) => (
      <tr key={role.id} className="border-b border-gray-100 hover:bg-gray-50">

        <td className="px-6 py-3 text-sm text-gray-700">
          <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-600">
            {role.roleName}
          </span>
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          {role.description}
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          {Array.isArray(role.permissions)
            ? role.permissions.join(", ")
            : role.permissions}
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          {role.usersCount}
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          <span
            className={`px-3 py-1 text-xs font-medium rounded-full ${
              role.status === "Active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-600"
            }`}
          >
            {role.status}
          </span>
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          {role.createdDate}
        </td>

        <td className="px-6 py-3 text-sm text-gray-700">
          <div className="flex items-center gap-3">
            <span
              onClick={() => {
                setEditRole(role);
                setFormData({
                  roleName: role.roleName,
                  description: role.description,
                  permissions: Array.isArray(role.permissions)
                    ? role.permissions.join(", ")
                    : role.permissions,
                  user: role.usersCount,
                  date: role.createdDate,
                });
                setOpenModal(true);
              }}
              className="material-symbols-outlined text-blue-600 cursor-pointer hover:text-blue-800 text-[18px]"
            >
              edit
            </span>

            <span
              onClick={() => handleDeleteRole(role.id)}
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

</div>

);

}