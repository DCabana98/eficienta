import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <h1 className="font-bold text-2xl">Eficienta</h1>
        <div className="space-x-6">
          <Link to="/" className="hover:text-blue-600 font-medium">Home</Link>
          <Link to="/tools" className="hover:text-blue-600 font-medium">Tools</Link>
          <Link to="/about" className="hover:text-blue-600 font-medium">About</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
