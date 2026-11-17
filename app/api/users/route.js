export async function GET() {
  const users = [
  {
  id: 1,
  name: "Raj Sharma",
  email: "raj@restaurant.com",
  bio: "Restaurant Operations Manager",
  position: "Manager",
  country: "India",
  status: "Active",
  avatar:"https://i.pravatar.cc/150?img=1"
  },
  {
  id: 2,
  name: "Priya Verma",
  email: "priya@restaurant.com",
  bio: "Handles Billing and POS",
  position: "Cashier",
  country: "India",
  status: "Active",
  avatar:"https://i.pravatar.cc/150?img=5"
  },
  {
  id: 3,
  name: "Amit Singh",
  email: "amit@restaurant.com",
  bio: "Prepares food orders",
  position: "Chef",
  country: "India",
  status: "Active",
  avatar:"https://i.pravatar.cc/150?img=8"
  },
  {
  id: 4,
  name: "Rohit Kumar",
  email: "rohit@restaurant.com",
  bio: "Customer Service Executive",
  position: "Waiter",
  country: "India",
  status: "Active",
  avatar:"https://i.pravatar.cc/150?img=10"
  },
  {
  id: 5,
  name: "Neha Gupta",
  email: "neha@restaurant.com",
  bio: "Restaurant Administrator",
  position: "Admin",
  country: "India",
  status: "Inactive",
  avatar:"https://i.pravatar.cc/150?img=15"
  }
  ]
  
  return Response.json(users);
}