"use client";

import Image from "next/image";
import { Globe, List, UserCircle } from "phosphor-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white grid grid-cols-3 gap-4 shadow-md py-5 px-6 md:px-10 items-center">
      {/* Left */}
      <div className="relative flex items-center h-10">
        <Image
          src="/airbnb-logo.png"
          layout={"fill"}
          objectFit={"contain"}
          objectPosition={"left"}
          alt="logo"
        />
      </div>

      <div className="flex items-center justify-between shadow border rounded-full h-[50px] px-2">
        <input
          className="h-full w-full flex-1 bg-transparent outline-none px-2 text-sm text-gray-500 placeholder:text-gray-300"
          type="text"
          placeholder="Search a place..."
        />
        <button
          className="hidden md:inline-flex items-center justify-center h-8 w-8 bg-red-500 p-1.5 rounded-full text-white"
          type="button"
        >
          <svg
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            className="flex  fill-transparent h-3 w-3 stroke-current stroke-[5] overflow-visible"
          >
            <g fill="none">
              <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
            </g>
          </svg>
        </button>
      </div>

      <div className="flex items-center space-x-4 justify-end text-gray-700">
        <span className="hidden md:inline-flex cursor-pointer">
          Become a host
        </span>
        <button
          type="button"
          className="flex items-center justify-center hover:bg-gray-100 transition-all p-4 rounded-full"
        >
          <Globe size={22} />
        </button>
        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <List size={22} />
          <UserCircle size={36} />
        </div>
      </div>
    </header>
  );
}

export default Header;
