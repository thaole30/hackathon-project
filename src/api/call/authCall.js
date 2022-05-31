import { showMessage } from "../../utils/showMessage";
import { signInApi, signUpApi, updateUserApi } from "../auth";

export const signUpCall = async (formData) => {

    try {
        //log in user
        const {data} = await signUpApi(formData);
        console.log("signin user", data);

        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        localStorage.setItem('token', JSON.stringify(data.token));
        // history.push("/");
        return data;
    } catch (error) {
        showMessage("error", "Sign Up failed");
    }
}


export const signInCall = async (formData) => {
    try {
        //log in user
        const {data} = await signInApi(formData);
        console.log("signin user", data);

        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        localStorage.setItem('token', JSON.stringify(data.token));

        return data;

    } catch (error) {
        showMessage("error", "Sign In failed");
    }
}


export const updateUserCall = async (formData) => {
    // console.log("formData", formData)
    try {
        const {data} = await updateUserApi(formData);
        // console.log("updated user", data);

        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        localStorage.setItem('token', JSON.stringify(data.token));

        return data;
    } catch (error) {
        console.error(error);
        // showMessage("error", "Update user failed");
    }
}