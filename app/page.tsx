import supabase from "../service/supabase";
import createDataFromBucketFolder from "../utils/supabase/createDataFromBucketFolder";
import getDataBucketFolder from "../utils/supabase/getDataBucketFolder";
import Banner from "./Banner";
import ExploreNearby from "./ExploreNearby";
import LiveAnywhere from "./LiveAnywhere";

export default async function Page() {
  // const folderData = await getDataBucketFolder('airbnb','live_anywhere')
  // const createData = createDataFromBucketFolder('airbnb',folderData)
  // console.log("BUCKETS >>>", createData);

  return (
    <div className=" w-full mx-auto  max-w-[1440px]">
      <Banner />
      <main className="max-w-7xl mx-auto px-8 sm:px-16 justify-self-start pt-4">
        {/* @ts-expect-error */}
        <ExploreNearby />
        {/* @ts-expect-error */}
        <LiveAnywhere />
      </main>
    </div>
  );
}
