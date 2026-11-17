export async function GET(){
    return Response.json([
        {
id: 1,
Divison: "Kitchen",
Head: "Amit Singh",
Employees: 12,
Status: "Active"
},
{
id: 2,
Divison: "Billing",
Head: "Priya Verma",
Employees: 5,
Status: "Active"
},
{
id: 3,
Divison: "Sales",
Head: "Raj Sharma",
Employees: 8,
Status: "Active"
},
{
id: 4,
Divison: "Customer Service",
Head: "Rohit Kumar",
Employees: 6,
Status: "Active"
},
{
id: 5,
Divison: "Inventory",
Head: "Neha Gupta",
Employees: 4,
Status: "Inactive"
}
    ]);
}