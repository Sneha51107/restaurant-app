export async function GET() {
  return Response.json([
    {
id: 1,
roleName: "Admin",
description: "Full access to restaurant management system",
permissions: "All Modules",
usersCount: 1,
status: "Active",
createdDate: "2026-03-15"
},
{
id: 2,
roleName: "Manager",
description: "Manages restaurant operations and staff",
permissions: "Dashboard, Users, Reports, Sales",
usersCount: 2,
status: "Active",
createdDate: "2026-03-16"
},
{
id: 3,
roleName: "Cashier",
description: "Handles billing and POS operations",
permissions: "POS, Billing",
usersCount: 3,
status: "Active",
createdDate: "2026-03-17"
},
{
id: 4,
roleName: "Chef",
description: "Manages kitchen orders and food preparation",
permissions: "Kitchen",
usersCount: 4,
status: "Active",
createdDate: "2026-03-18"
},
{
id: 5,
roleName: "Waiter",
description: "Takes customer orders and serves food",
permissions: "Orders",
usersCount: 6,
status: "Active",
createdDate: "2026-03-19"
}
]);

}