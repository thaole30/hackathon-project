import { publicRequest,userRequest } from "./index";


export const signInApi = (formData) => {
    return userRequest().post('/users/signin', formData);
}

export const signUpApi = (formData) => {
    return publicRequest.post('/users/signup', formData);
}



export const getUserApi = () => {
    return userRequest().get(`/users`);
}


export const updateUserApi = (formData) => {
    return userRequest().post('/users/update', formData);
}
