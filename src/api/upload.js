import { userRequest } from ".";


export const uploadFile = (file) => {
    const formData = new FormData();
    formData.append("file", file);
    return userRequest().post('/uploads', formData);
};