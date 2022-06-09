import { useMutation, useQuery, useQueryClient } from "react-query";
import { getHackathonByIdApi, getMyHktsApi, getUserHackathonsApi, updateHackathonApi } from "../api/hackathon";

export const useHackathonByIdQuery = (hktId) => {
  console.log("hktId", hktId)
  const getHktById = async () => {
    const { data: hktDeatail } = await getHackathonByIdApi(hktId);
    console.log("hktDeatail fetched", hktDeatail);
    return hktDeatail;
  };
  const { data, isFetching, isLoading, isSuccess, isError } = useQuery("get-hkt-by-id", getHktById);

  const updateHackathonInfo = async ({ id, values }) => {
    try {
      const updatedHackathon = await updateHackathonApi(id, values);
      console.log("updatedHackathon", updatedHackathon);
      return updatedHackathon;
    } catch (error) {
      console.log("hackathon updated error", error);
    }
  };
  
  const queryClient = useQueryClient();

  const mutationUpdateHackathon = useMutation(updateHackathonInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-hkt-by-id");
    },
  });


  return { data, isFetching, mutationUpdateHackathon, isLoading, isSuccess, isError };
}


export const useMyHackathonQuery = () => {
  const getMyHkts = async () => {
    const { data: myHkts } = await getUserHackathonsApi();
    console.log("myHkts fetched", myHkts);
    return myHkts;
  };
  const { data, isFetching, isLoading } = useQuery("get-my-hackathons", getMyHkts);

  return { data, isFetching,isLoading };
}

