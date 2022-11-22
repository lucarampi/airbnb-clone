import { DataType as PlaceType } from "../pages/api/getExploreNearby";

type FetchResponseType = {
  data: PlaceType[];
};

export async function getExploreNearby() {
  const baseUrl = process.env.VERCEL_ENV! == 'production' ? 
  `https://${process.env.VERCEL_URL}`:`http://localhost:3000`
  const { data }: FetchResponseType = await fetch(
    `${baseUrl}/api/getExploreNearby`
  ).then((res) => res.json());
  return data;
}

