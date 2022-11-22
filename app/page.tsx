
import Banner from "./Banner";
import ExploreNearby from "./ExploreNearby";

export default async function Page() {
  return (
    <div
    // className="flex flex-col gap-4"
    >
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 justify-self-start pt-4">
        <ExploreNearby />
      </main>
    </div>
  );
}
