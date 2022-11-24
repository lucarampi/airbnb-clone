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
    <article className="flex flex-col gap-5">
      <h2 className="text-4xl font-semibold">Live Anywhere</h2>
      <div className="flex gap-4 snap-x overflow-scroll scrollbar-hide p-4 -m-3">
        {cardsData?.map((item) => (
          <MediumCard key={item.id} item={item} />
        ))}
      </div>
    </article>
  );
}
