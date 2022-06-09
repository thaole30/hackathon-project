import { publicRequest, userRequest } from ".";


export const getAllHackathons = () => {
    return publicRequest.get(`/hackathons`);
}

export const getHackathonByIdApi = (id) => {
    return publicRequest.get(`/hackathons/${id}`);
}

export const getMyHktsApi = () => {
    return userRequest().get(`/myHackathons`);
}

export const getUserHackathonsApi = () => {
    return userRequest().get(`/hackathons/userHackathons`);
}

export const createHackathonApi = (data) => {
    return userRequest().post('/hackathons', data);
};


export const updateHackathonApi = (hackathonId, formData) => {
    return userRequest().post(`/hackathons/${hackathonId}`, formData);
}