// eslint-disable-next-line no-unused-vars
import React from "react";
import { assets } from "../assets/assets";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div className="shadow py-4 sticky top-0 bg-white z-50">
      <div className="container px-4 2xl:px-20 mx-auto flex justify-between items-center">
        <Link to="/">
          <img src={assets.logo} alt="Logo" className="h-10" />
        </Link>
        {user ? (
          <div className="flex items-center gap-3">
            <Link to={"/application"}>Applied Jobs</Link>
            <p> | </p>
            <p className="max-sm:hidden">
              Hi, {user.firstName + " " + user.lastName}
            </p>
            <UserButton />
          </div>
        ) : (
          <div className="flex gap-4 max-sm:text-xs">
            <button className="text-gray-600">Recruiter Login</button>
            <button
              onClick={() => openSignIn()}
              className="bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
