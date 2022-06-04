import { publicRequest, userRequest } from ".";


export const getAllProjects = () => {
    return publicRequest.get(`/projects`);
}

export const getProjectApi = (id) => {
    return publicRequest.get(`/projects/${id}`);
}

export const getUserProjectsApi = () => {
    return userRequest().get(`/projects/userProjects`);
}

export const createProjectApi = (data) => {
    return userRequest().post('/projects', data);
};



export const updateProjectApi = (projectId, formData) => {
    return userRequest().post(`/projects/${projectId}`, formData);
}