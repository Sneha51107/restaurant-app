
export async function GET()
{
    return Response.json([
        {
    title: "Vegetables",
    amount: 30000,
    category: "Kitchen expense",
    date: "07-06-2023",
  },
  {
    title: "Fish",
    amount: 2200,
    category: "Kitchen expense",
    date: "08-06-2023",
  },
  {
    title: "Rent1",
    amount: 100,
    category: "Rent",
    date: "08-06-2023",
  },
  {
     title: "pepsi",
    amount: 50000,
    category: "Drinks",
    date: "09-06-2023",
  },
  {
     title: "test",
    amount: 1000,
    category: "Human resource expense",
    date: "08-06-2023",
  },
  {
     title: "veg",
    amount: 230,
    category: "Kitchen expense",
    date: "08-06-2023",
  }
    ]);
}