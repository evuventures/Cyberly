import React from "react";
import image from "../pages/image.jpg";
import logo from "../pages/logo.jpg";
const Signup = () => {
  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Left Side - Image Section */}
      <div className="w-[800px] h-[700px] bg-gray-100 flex items-center justify-center p-10">
        <img src={image} alt="Cyberly team" className="rounded-xl shadow-lg" />
      </div>

      {/* Right Side - Form Section */}
      <div className="w-1/2 bg-gray-100 flex flex-col justify-center px-12 py-10 shadow-lg rounded-l-3xl">
        <div className="max-w-md w-full mx-auto">
          <div className="mb-6">
            {/* <img src={logo} alt="Cyberly Logo" className="w-12 h-12 mx-auto" /> */}
            <h2 className="mt-4 text-center text-3xl font-bold text-gray-800">
              Create new account
            </h2>
            <p className="text-center text-xl text-gray-500">
              and get a 30-day free trial
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-xl text-gray-600 block mb-1">
                Full name
              </label>
              <input
                type="text"
                placeholder="William Shakespeare"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="text-xl text-gray-600 block mb-1">Email</label>
              <input
                type="email"
                placeholder="youremail@cyberly.com"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <div>
              <label className="text-xl text-gray-600 block mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="********"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg font-semibold"
            >
              Sign up
            </button>

            <div className="flex items-center justify-between space-x-4 mt-4">
              <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
                  alt="Apple"
                  className="w-5 h-5 mr-2"
                />
                Apple
              </button>
              <button className="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-100">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Google
              </button>
            </div>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <a href="#" className="text-cyan-600 hover:underline">
              Log in
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
