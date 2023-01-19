'use client';
import { handleSignOut } from "@/lib/Firebase/auth";
import React from "react";

const TopBar = () => {
  return (
    <div className="flex justify-between mt-4">
      <button className="px-3 my-2 bg-white text-white rounded-md hover:bg-white hover:text-white focus:bg-white focus:text-white focus:outline-none focus:ring-0 active:bg-white active:text-white transition duration-150 ease-in-out">
        Sign Out
      </button>
      <div className="text-3xl text-center font-mono mb-3 uppercase">
        iglu&apos;s grocery list
      </div>
      <button
        className="px-3 my-2 bg-orange-500 text-white rounded-md shadow-md  hover:bg-orange-200 hover:text-orange-900 hover:shadow-lg focus:bg-orange-200 focus:text-orange-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-200 active:text-orange-900 active:shadow-lg transition duration-150 ease-in-out"
        onClick={handleSignOut}
      >
        Sign Out
      </button>
    </div>
  );
};

export default TopBar;
