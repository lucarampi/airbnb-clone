"use client";

import Image from "next/image";

export default function Banner() {
  return (
    <div className="relative object-contain h-[200px] sm:h-[300px] md:h-[450px] transition-all">
      <Image
        className="overflow-hidden [144px]:rounded-b-lg"
        src="/banner-crop-img.png"
        fill
        objectFit={"cover"}
        objectPosition={"center"}
        alt="logo"
      />
      
      <div className="absolute items-center justify-center gap-2 flex flex-col top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-sm sm:text-lg">
        <span className="font-semibold">Not sure where to go? Perfect!</span>
        <button
          type="button"
          className="bg-white rounded-full text-purple-500 px-10 w-fit py-4 shadow-md font-bold hover:shadow-xl active:scale-95 duration-200 transition-all"
        >
          I'm flexible
        </button>
      </div>
    </div>
  );
}
