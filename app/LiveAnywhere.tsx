import { LiveAnywereType } from "../pages/api/getLiveAnywhere";
import supabase from "../service/supabase";
import MediumCard from "./MediumCard";

export default async function LiveAnywhere() {
  const { data, error } = await supabase.from("live_anywhere").select("*");
  const cardsData:LiveAnywereType[] = data || [];
  if (error) {
    console.log(error);
    return <p>Error while loading data...</p>;
  }
  return (
    <article className="flex flex-col  justify-center space-y-6 pb-6">
      <h2 className="text-4xl font-semibold">Explore Nearby</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 px-4">
        {cardsData?.map((item) => (
          <MediumCard key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}
