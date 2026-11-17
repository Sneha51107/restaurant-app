"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

export default function Signup() {

const router = useRouter()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")
const [confirmPassword,setConfirmPassword] = useState("")

const handleSignup = () => {

if(!email || !password || !confirmPassword){
alert("Please fill all fields")
return
}

if(password !== confirmPassword){
alert("Passwords do not match")
return
}

alert("Account created successfully")

router.push("/login")

}

return (

<div className="w-full max-w-md bg-white rounded-lg shadow p-6">


<h2 className="text-xl font-bold text-gray-900 mb-6">
Create a Free Account
</h2>

<form className="space-y-5" onSubmit={(e)=>e.preventDefault()}>

<div>

<label className="block mb-2 text-sm font-medium text-gray-900">
Your email
</label>

<input
type="email"
placeholder="name@company.com"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

</div>

<div>

<label className="block mb-2 text-sm font-medium text-gray-900">
Your password
</label>

<input
type="password"
placeholder="••••••••"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
value={password}
onChange={(e)=>setPassword(e.target.value)}
/>

</div>

<div>

<label className="block mb-2 text-sm font-medium text-gray-900">
Confirm password
</label>

<input
type="password"
placeholder="••••••••"
className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full p-2.5 focus:ring-blue-500 focus:border-blue-500"
value={confirmPassword}
onChange={(e)=>setConfirmPassword(e.target.value)}
/>

</div>

<div className="flex items-center">

<input
type="checkbox"
className="w-4 h-4 border-gray-300 rounded"
/>

<label className="ml-2 text-sm text-gray-600">
I accept the <span className="text-blue-600">Terms and Conditions</span>
</label>

</div>

<button
type="button"
onClick={handleSignup}
className="w-full text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5"
>

Create account

</button>

<p className="text-sm text-gray-500">

Already have an account?{" "}

<Link href="/login" className="text-blue-600 hover:underline">
Login here
</Link>

</p>

</form>

</div>



)

}