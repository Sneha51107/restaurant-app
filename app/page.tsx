import Image from "next/image";
import Signup from "./Signup/page";
import Login from "./login/page";
import Dashboard from "./dashboard/page";
import Layout from "./dashboard/layout";

export default function Home() {
  return (
    <Layout>
      <Dashboard />
    </Layout>
  );
}