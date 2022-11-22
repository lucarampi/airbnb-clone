import { DataType as PlaceType } from "../pages/api/getExploreNearby";
import { axiosClient } from "../service/axios";

type APIResponseType = {
  data: PlaceType[];
};

export async function getExploreNearby() {
  const { data } = await axiosClient.get<APIResponseType>(`/api/getExploreNearby`)
  return (data || [])
}

