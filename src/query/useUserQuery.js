import { useMutation, useQuery, useQueryClient } from "react-query";
import { getUserByUsernameApi } from "../api/auth";

export const useUserInfoByUsernameQuery = (userName) => {
  const getUserByUsername = async () => {
    const { data: user } = await getUserByUsernameApi(userName);
    console.log("user fetched", user);
    return user;
  };
  const { data, isFetching, isLoading } = useQuery("get-user-by-username", getUserByUsername, {
    initialData : {}
  });



  return { data, isFetching,isLoading };
}
