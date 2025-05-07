import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-blue-800 to-blue-500 py-4 px-6 flex justify-between items-center">
      <div className="text-white font-bold text-2xl">Cyberly</div>
      <nav className="flex space-x-6 text-white font-medium text-xl">
        <a href="#">Browse Experts</a>
        <a href="#">Post a Service</a>
        <a href="#">Help</a>
        <a href="#">Login</a>
      </nav>
    </div>
  );
};

export default Navbar;
