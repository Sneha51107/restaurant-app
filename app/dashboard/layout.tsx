
"use client";

import { useState, type ReactNode } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Breadcrumb from "../components/Breadcrumb";

export default function Layout({ children }: { children: ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen">
     <Sidebar sidebarOpen={sidebarOpen} />

      <div className="flex flex-col flex-1">
        <Header setSidebarOpen={setSidebarOpen} />

        <main className="flex-1 overflow-y-auto bg-gray-50 p-3">
          <Breadcrumb />
          {children}
        </main>
      </div>
    </div>
  );
}
