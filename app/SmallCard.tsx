'use client'
import Image from "next/image";
import { DataType as PlaceType } from "../pages/api/getExploreNearby";
import { getExploreNearby } from "../utils/getExploreNearby";

interface SmallCard {
  place: PlaceType;
}

export default function SmallCard({ place }: SmallCard) {
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
          src={place.img}
          alt={place.location}
          fill
        />
      </div>

      <div className="flex flex-col items-start justify-start">
        <h2 className="capitalize font-semibold">{place.location}</h2>
        <h3 className="text-gray-400">{place.time_distance}</h3>
      </div>
    </section>
  );
}
