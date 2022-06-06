import { useMutation, useQuery, useQueryClient } from "react-query";
import { getHackathonByIdApi } from "../api/hackathon";

export const useHackathonByIdQuery = (hktId) => {
  console.log("hktId", hktId)
  const getHktById = async () => {
    const { data: hktDeatail } = await getHackathonByIdApi(hktId);
    console.log("hktDeatail fetched", hktDeatail);
    return hktDeatail;
  };
  const { data, isFetching, isLoading } = useQuery("get-hkt-by-id", getHktById);



  return { data, isFetching,isLoading };
}
