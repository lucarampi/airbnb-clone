import supabase from "../service/supabase";
import { BucketInfoType } from "../typings";
import Banner from "./Banner";
import ExploreNearby from "./ExploreNearby";
import Footer from "./Footer";
import LargeCard from "./LargeCard";
import LiveAnywhere from "./LiveAnywhere";

export default async function Page() {
  return (
    <div className=" w-full mx-auto  max-w-[1440px]">
      <Banner />
      <main className="flex flex-col gap-8 max-w-7xl mx-auto px-8 sm:px-16 justify-self-start pt-4">
        {/* @ts-expect-error */}
        <ExploreNearby />
        {/* @ts-expect-error */}
        <LiveAnywhere />
        {/* @ts-expect-error */}
        <LargeCard />
      </main>
    </div>
  );
}
