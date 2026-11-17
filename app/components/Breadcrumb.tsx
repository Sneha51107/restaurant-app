"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {

  const pathname = usePathname();

  const breadcrumbMap: any = {
    dashboard: "Dashboard",
    UserReport: "User Report",
    OrderReport: "Order Report",
    BillingReport: "Billing Report",
    Role: "Role List",
    user: "User List"
  };

  const paths = pathname.split("/").filter(Boolean);

  return (
    <div className="text-sm text-gray-500 px-0 py-0">

      <Link href="/dashboard" className="text-blue-600 hover:underline">
        Home
      </Link>

      {paths.map((path, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");

        return (
          <span key={index}>
            {" > "}
            <Link href={href} className="text-blue-600 hover:underline">
              {breadcrumbMap[path] || path}
            </Link>
          </span>
        );
      })}
    </div>
  );
}