import { publicRequest,userRequest } from "./index";


export const signInApi = (formData) => {
    return userRequest().post('/users/signin', formData);
}

export const getUserOnlyGoogleInfoApi = (token) => {
    return publicRequest.post(`/users/login/google/${token}`);
}
export const logInWithGoogleApi = (formData) => {  //signup bth
    return publicRequest.post(`/users/logInWithGoogle`, formData);
}

export const signUpApi = (formData) => {
    return publicRequest.post('/users/signup', formData);
}



export const getUserLoginApi = () => {
    return userRequest().get(`/users/getLoginUser`);
}

export const getUserByUsernameApi = (userName) => {
    return publicRequest.get(`/users/getUserByUsername/${userName}`);
}


export const updateUserApi = (formData) => {
    return userRequest().post('/users/update', formData);
}

