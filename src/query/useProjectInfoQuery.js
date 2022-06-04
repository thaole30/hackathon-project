import { getProjectApi, updateProjectApi } from "../api/project";
import { useMutation, useQuery, useQueryClient } from "react-query";

export default function useProjectInfoQuery(projectId) {
  const getProject = async () => {
    const { data: project } = await getProjectApi(projectId);
    console.log("project fetched", project);
    return project;
  };
  const { data, isFetching, isLoading } = useQuery("get-project", getProject);

  const updateProjectInfo = async ({ id, values }) => {
    try {
      const updatedProject = await updateProjectApi(id, values);
      console.log("updatedProject", updatedProject);
      return updatedProject;
    } catch (error) {
      console.log("project updated error", error);
    }
  };
  
  const queryClient = useQueryClient();

  const mutationUpdateProject = useMutation(updateProjectInfo, {
    onSuccess: () => {
      queryClient.invalidateQueries("get-project");
    },
  });

  return { data, isFetching, mutationUpdateProject, isLoading };
}
