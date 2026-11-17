export default function Signin() {
  return (
    <div className="flex min-h-screen" >
      <div className=" bg-blue-950 w-2/3 ">
        <div className=" p-8 m-15 text-white">
          <h1 className="text-4xl font-extrabold">Empower Education <br />
            With Technology</h1>
          <p className="mt-6 gap-8 text-gray-300 ">Streamline your institution's workflow with the all-in-one <br />
            Learning Managment System designed seamlessly for modern <br />
            educators.</p>
          <div className="flex items-center gap-4 p-4 rounded-lg">

            <span className="material-symbols-outlined text-white text-3xl">book</span>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Course Management
              </h4>
              <p className="text-gray-300 text-sm">
                Easily organize, distribute, and manage learning materials.
              </p>
            </div>

          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">

            <span className="material-symbols-outlined text-white">
              analytics
            </span>

            <div>
              <h4 className="text-white text-lg font-semibold">
                Advanced Analytics
              </h4>
              <p className="text-gray-300 text-sm">
                Monitor student progress and performance in real-time.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 rounded-lg">

            <span className="material-symbols-outlined text-white">
              group
            </span>
            <div>
              <h4 className="text-white text-lg font-semibold">
                Seamless Collaborations
              </h4>
              <p className="text-gray-300 text-sm">
                Connect students and teachers on a unified platform.
              </p>
            </div>
          </div>
        </div>
        <p className="text-white text-sm text-center">&copy; 2026 TechWLS Solutions PVT.LTD</p>
      </div>
      <div className="w-1/2 flex items-center justify-center">
        <div className="flex flex-col w-full max-w-md p-8 bg-white rounded-xl ">

          <h1 className="text-2xl font-bold text-center mb-2">
            TechWLS Admin
          </h1>

          <p className="text-sm text-gray-500 text-center mb-6">
            Welcome back! Please enter your details
          </p>

          <div className="relative w-full mb-4">
            <input
              type="text"
              id="email"
              placeholder=" "
              className="peer w-full p-3 pt-5 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label
              htmlFor="email"
              className="absolute left-3 top-2 text-blue-600 text-sm transition-all 
        peer-placeholder-shown:top-2.5 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-1 
        peer-focus:text-sm 
        peer-focus:text-blue-600"
            >
              Email Address or Username
            </label>
          </div>

      
          <div className="relative w-full mb-2">
            <input
              type="password"
              id="password"
              placeholder=" "
              className="peer w-full p-3 pt-5 border rounded-lg border-gray-300 focus:outline-none focus:border-blue-600"
            />
            <label
              htmlFor="password"
              className="absolute left-3 top-2 text-blue-600 text-sm transition-all 
        peer-placeholder-shown:top-2.5 
        peer-placeholder-shown:text-base 
        peer-placeholder-shown:text-gray-400 
        peer-focus:top-1 
        peer-focus:text-sm 
        peer-focus:text-blue-600"
            >
              Password
            </label>
          </div>

          <p className="text-sm text-blue-600 text-right mb-4 cursor-pointer hover:underline">
            Forgot Password?
          </p>

          <button className="w-full bg-blue-700 text-white p-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            Sign in
          </button>

        </div>
      </div>
    </div>

  );
}