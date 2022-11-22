import { getExploreNearby } from "../utils/getExploreNearby";
import SmallCard from "./SmallCard";



export default async function ExploreNearby() {
  const places = await getExploreNearby()

  return (
    <article className="flex flex-col  justify-center space-y-6 pb-6">
      <h2 className="text-4xl font-semibold">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
        {places?.map((item) => (
          <SmallCard key={item.id} place={item} />
        ))}
      </div>
    </article>
  );
}
