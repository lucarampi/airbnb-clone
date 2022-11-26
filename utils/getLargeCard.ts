import { LargeCardType } from "../pages/api/getLargeCard";
import { axiosClient } from "../service/axios";

type APIResponseType = {
  data: LargeCardType;
  other:string[]
};

export async function getLargeCard() {
  const { data:response } = await axiosClient.get<APIResponseType>(`/api/getLargeCard`)
  // console.log(response)
  return (response)
}

