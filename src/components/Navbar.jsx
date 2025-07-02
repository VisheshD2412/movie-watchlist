import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">Movie Watchlist</h1>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-indigo-200 transition">
              Search
            </Link>
          </li>
          <li>
            <Link to="/watchlist" className="hover:text-indigo-200 transition">
              Watchlist
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
