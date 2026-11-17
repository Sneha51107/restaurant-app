import Image from "next/image";

export default function Signin() {
  return (
    <div className="flex min-h-screen">

      <div className="w-[45%] bg-[#021A70] flex flex-col justify-between text-white p-16">

        <div>
          <div>
            <h1 className="text-2xl font-bold">WebLight</h1>
            <p className="text-xs tracking-widest text-gray-200">
              IT SOLUTIONS
            </p>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-semibold leading-snug">
              Powerful Solutions. <br />
              Seamless Management.
            </h2>

            <p className="text-gray-300 text-sm mt-4 max-w-md">
              Secure, reliable and intuitive admin panel to manage
              your business efficiently.
            </p>
          </div>


        </div>

        <div>

          <div className="flex gap-10">

            <div className="text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-lg text-blue-700">
                  shield_lock
                </span>
                Secure
              </div>

              <p className="text-gray-300 text-xs">
                Advanced security to protect your data
              </p>
            </div>


            <div className="text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-lg text-blue-700">
                  speed
                </span>
                Fast
              </div>

              <p className="text-gray-300 text-xs">
                Optimised performance for productivity
              </p>
            </div>


            <div className="text-sm">
              <div className="flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-lg text-blue-700">
                  verified
                </span>
                Reliable
              </div>

              <p className="text-gray-300 text-xs">
                99.9% uptime you can count on
              </p>
            </div>

          </div>

          <p className="text-gray-300 text-xs mt-8">
            © 2026 WebLight IT Solutions. All rights reserved.
          </p>

        </div>

      </div>

      <div className="w-[55%] flex items-center justify-center bg-white">

        <div className="bg-white p-8 rounded-2xl shadow-2xs w-[420px]">

          <h1 className="text-2xl font-semibold text-[#021A70]  mb-1">
            Welcome Back!
          </h1>

          <p className="text-sm text-gray-500 mb-6">
            Sign in to continue to your admin account
          </p>

          <div className="mb-4">
            <label className="text-sm text-gray-600">
              Username or Email
            </label>

            <div className="flex items-center border rounded-lg px-3 mt-1">
              <span className="material-symbols-outlined text-gray-400 text-sm">
                person
              </span>

              <input
                type="text"
                placeholder="Enter your username or email"
                className="w-full p-2 outline-none border-gray-300 text-sm"
              />
            </div>
          </div>

          <div className="mb-3">
            <label className="text-sm text-gray-600">
              Password
            </label>

            <div className="flex items-center border rounded-lg px-3 mt-1">
              <span className="material-symbols-outlined text-gray-400 text-sm">
                lock
              </span>

              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-2 outline-none text-sm"
              />
            </div>
          </div>
          <div className="flex justify-between items-center mb-4 text-sm">

            <label className="flex items-center gap-2 text-gray-500">
              <input type="checkbox" />
              Remember me
            </label>

            <span className="text-blue-600 cursor-pointer hover:underline">
              Forgot Password?
            </span>

          </div>
          <button className="w-full bg-[#021A70]  text-white p-2 rounded-lg hover:bg-blue-800 transition">
            Sign In
          </button>

          <div className="flex items-center gap-2 my-5">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-xs text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <button className="w-full border p-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              className="w-4"
            />
            Sign in with Google
          </button>

          <p className="text-xs text-gray-500 text-center mt-6">
            Need help? Contact support@weblight.com
          </p>

        </div>

      </div>

    </div>
  );
}