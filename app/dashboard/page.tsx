
"use client";

import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import type { ApexOptions } from "apexcharts";
import { LayoutDashboard, RotateCw } from "lucide-react";

type Order = {
  bookedAt: string;
  price: string | number;
  cost: string | number;
  discount: string | number;
  tax: string | number;
};

type Expense = {
  amount: string | number;
};

const parseAmount = (value: string | number | undefined) => {
  return Number(String(value ?? 0).replace(/[$,]/g, "")) || 0;
};

export default function DashboardPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/sales").then((res) => {
        if (!res.ok) throw new Error("Sales fetch failed");
        return res.json();
      }),
      fetch("/api/expenses").then((res) => {
        if (!res.ok) throw new Error("Expenses fetch failed");
        return res.json();
      }),
    ])
      .then(([salesData, expensesData]) => {
        setOrders(salesData as Order[]);
        setExpenses(expensesData as Expense[]);
      })
      .catch((error) => {
        console.error("Dashboard data error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const monthlySales = new Array(12).fill(0);

  orders.forEach((order) => {
    const dateParts = order.bookedAt.split(" ")[0].split("-");
    const month = Number(dateParts[1]) - 1;

    if (month >= 0 && month < 12) {
      monthlySales[month] += parseAmount(order.price);
    }
  });

  const totalSales = orders.reduce(
    (sum, order) => sum + parseAmount(order.price),
    0
  );

  const totalCost = orders.reduce(
    (sum, order) => sum + parseAmount(order.cost),
    0
  );

  const totalDiscount = orders.reduce(
    (sum, order) => sum + parseAmount(order.discount),
    0
  );

  const totalTax = orders.reduce(
    (sum, order) => sum + parseAmount(order.tax),
    0
  );

  const totalExpenses = expenses.reduce(
    (sum, item) => sum + parseAmount(item.amount),
    0
  );

  const totalPayable = totalSales + totalTax - totalDiscount;

  const profit = totalSales - totalCost - totalTax - totalExpenses;

  const chartOptions: ApexOptions = {
    chart: {
      toolbar: { show: false },
      zoom: { enabled: false },
    },
    stroke: {
      curve: "straight",
      width: 2,
    },
    colors: ["#021A70"],
    dataLabels: { enabled: false },
    grid: { borderColor: "#d1d5db" },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sept", "Oct", "Nov", "Dec",
      ],
    },
    yaxis: {
      min: 0,
      max: Math.max(...monthlySales, 100),
      tickAmount: 5,
    },
    tooltip: { enabled: false },
  };

  const chartSeries = [
    {
      name: "Sales",
      data: monthlySales,
    },
  ];

  const cards = [
    { title: "Total Sale Amount", value: `$${totalSales.toFixed(2)}` },
    { title: "Total Cost Amount", value: `$${totalCost.toFixed(2)}` },
    { title: "Total Discount Amount", value: `$${totalDiscount.toFixed(2)}` },
    { title: "Total Profit Amount", value: `$${profit.toFixed(2)}` },
    { title: "Total Tax Amount", value: `$${totalTax.toFixed(2)}` },
    { title: "Total Payable Amount", value: `$${totalPayable.toFixed(2)}` },
  ];

  return (
    <div className="min-h-screen p-2">
      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="flex items-center gap-2 text-[18px] font-bold text-[#021A70]">
          <LayoutDashboard size={20} />
          Dashboard
        </h1>

        <div className="flex items-center gap-2">
          <select className="h-[38px] border rounded-md px-3 text-sm">
            <option>Current Month</option>
          </select>

          <button className="h-[42px] w-[52px] bg-[#021A70] text-white rounded-md flex items-center justify-center">
            <RotateCw size={18} />
          </button>
        </div>
      </div>

      {/* CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
        {cards.map((card, index) => (
          <div key={index} className="bg-white border rounded-md p-4">
            <h2 className="text-[15px] font-semibold">{card.title}</h2>
            <h1 className="text-[18px] font-bold mt-1">{card.value}</h1>
          </div>
        ))}
      </div>

      {/* CHART */}
      <div className="mt-4 bg-white border rounded-md p-4">
        <h1 className="text-[20px] font-bold text-[#021A70] mb-4">
          Annual Graphic View
        </h1>

        <Chart
          options={chartOptions}
          series={chartSeries}
          type="line"
          height={300}
        />
      </div>
    </div>
  );
}
