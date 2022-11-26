"use client";
import Image from "next/image";
import { LiveAnywereType } from "../pages/api/getLiveAnywhere";

interface MediumCardProps {
  item: LiveAnywereType;
}

export default function MediumCard({ item }: MediumCardProps) {
  // const logData = async()=>{
  //   const {other} = await getExploreNearby();
  //   console.log(other);
  // }
  // logData()
  return (
    <button type="button" className="flex flex-col gap-1 snap-center cursor-pointer rounded-xl hover:scale-105 transition-all duration-300 ease-out">
      <div className="relative h-80 w-80">
        <Image
          className="rounded-xl"
          src={item.publicUrl}
          alt={item.title}
          fill
        />
      </div>

      <h3 className="text-gray-400 font-medium first-letter:capitalize">
        {item.title}
      </h3>
    </button>
  );
}
