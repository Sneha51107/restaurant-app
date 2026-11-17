"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login()
{
const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = {
    email: "admin@gmail.com",
    password: "1234"
  };

  const handleLogin = () => {
    if (
      email === user.email &&
      password === user.password
    ) {
      router.push("/dashboard");
    } else {
      alert("Invalid credentials");
    }
  

};
    return(
        <div className="flex flex-col items-center justify-center px-6 pt-8 mx-auto md:h-screen pt:mt-0 dark:bg-gray-900">
        <div className="w-full max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800 ">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Sign in to Platform</h2>
        
        <input type="email"
          placeholder="Email"  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login to your account
        </button>

        <div className="text-sm text-gray-500">
          Don't have an account?{" "}
          <Link href="/" className="text-blue-600">
            Create account
          </Link>
        </div>
    </div>
    </div>
    )
}