import { DataType as PlaceType } from "../pages/api/getExploreNearby";
import { axiosClient } from "../service/axios";

type APIResponseType = {
  data: PlaceType[];
  other:string[]
};

export async function getExploreNearby() {
  const { data:response } = await axiosClient.get<APIResponseType>(`/api/getExploreNearby`)
  console.log(response)
  return (response)
}

