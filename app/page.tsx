import Banner from "./Banner";
import ExploreNearby from "./ExploreNearby";

export default async function Page() {
  return (
    <div
    className=" w-full mx-auto  max-w-[1440px]"
    >
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 justify-self-start pt-4">
        {/* @ts-expect-error */}
        <ExploreNearby />
      </main>
    </div>
  );
}
