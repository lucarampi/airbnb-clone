"use client";

import Image from "next/image";
import { Globe, List, UserCircle } from "phosphor-react";

function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md ">
      <div className="flex flex-1 mx-auto max-w-[1440px] gap-4 py-5 px-4 md:px-10 items-center justify-between">
        {/* Left */}
        <div className="relative sm:flex items-center w-8 sm:w-10 md:w-32 h-10">
          <Image
            className="hidden md:block"
            src="/airbnb-logo.png"
            fill
            objectFit={"contain"}
            objectPosition={"left"}
            alt="logo"
          />
          <Image
            className=" md:hidden"
            src="/airbnb-small-logo.png"
            fill
            objectFit={"contain"}
            objectPosition={"left"}
            alt="logo"
          />
        </div>

        {/* Center */}
        <div className="flex flex-1 max-w-xs sm:max-w-sm md:max-w-xl items-center justify-between shadow border rounded-full h-10 md:h-[50px] text-sm md:text-base px-1 md:px-2">
          <input
            className="h-full w-full flex-1 bg-transparent outline-none px-2 text-sm text-gray-500 placeholder:text-gray-300"
            type="text"
            placeholder="Search a place..."
          />
          <button
            className="inline-flex items-center justify-center h-8 w-8 bg-red-500 p-1.5 rounded-full text-white"
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

        {/* Right */}
        <div className="flex items-center gap-2 justify-end text-gray-700">
          <span className="hidden md:text-center md:inline-flex cursor-pointer">
            Become a host
          </span>
          <button
            type="button"
            className="hidden sm:flex items-center justify-center hover:bg-gray-100 transition-all p-4 rounded-full"
          >
            <Globe size={22} />
          </button>
          <div className=" hidden sm:flex items-center space-x-2 border-2 md:p-2 rounded-full">
            <List className="ml-2 cursor-pointer" size={22} />
            <UserCircle className="cursor-pointer" size={36} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
