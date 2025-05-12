import React from "react";
import image2 from "../pages/image2.png";

const Login = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <img
        src={image2}
        alt="Login Visual"
        className="absolute top-0 left-0 w-[1400px]  h-[900px]  object-cover z-0 ml-[300px]"
      />

      {/* Overlay (optional: for dark effect) */}
      <div className="absolute inset-0  z-0"></div>

      {/* Centered Form */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-10 space-y-6 mr-[650px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-900">
              Welcome Back!
            </h2>
            <p className="text-xl text-gray-500 mt-1">
              Please fill in your Email and Password to Sign In.
            </p>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <div>
              <label className="block text-xl font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="************"
                className="w-full px-4 py-2 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-black"
              />
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-black text-white rounded-full hover:bg-gray-900 transition duration-300"
            >
              Sign in
            </button>
          </form>

          <p className="text-center text-xl text-gray-700">
            Don’t have an Account?{" "}
            <a href="#" className="text-black underline font-semibold">
              Sign-Up here!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
