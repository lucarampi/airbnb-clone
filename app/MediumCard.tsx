'use client'
import Image from "next/image";
import { DataType as PlaceType } from "../pages/api/getExploreNearby";
import { LiveAnywereType } from "../pages/api/getLiveAnywhere";

interface MediumCardProps {
  item: LiveAnywereType;
}

export default function MediumCard({  item }: MediumCardProps) {
  // const logData = async()=>{
  //   const {other} = await getExploreNearby();
  //   console.log(other);
  // }
  // logData()
  return (
    <section className="flex items-center space-x-4 cursor-pointer rounded-xl hover:bg-gray-100 hover:scale-105 transition-all duration-200 ease-out">
      <div className="relative h-16 w-16">
        <Image
          className="rounded-lg"
          src={item.publicUrl}
          alt={item.title}
          fill
        />
      </div>

      <div className="flex flex-col items-start justify-start">
        <h3 className="text-gray-400">{item.title}</h3>
      </div>
    </section>
  );
}
