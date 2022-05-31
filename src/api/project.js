import { publicRequest, userRequest } from ".";


export const createProjectApi = (data) => {
    return userRequest().post('/projects', data);
};

export const getProjectApi = (id) => {
    return publicRequest.get(`/projects/${id}`);
}


export const updateProjectApi = (projectId, formData) => {
    return userRequest().post(`/projects/${projectId}`, formData);
}