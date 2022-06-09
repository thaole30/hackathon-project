import { loginWithGoogle } from "../../redux/userSlice";
import { showMessage } from "../../utils/showMessage";
import { getUserOnlyGoogleInfoApi, logInWithGoogleApi, signInApi, signInWithhGoogleApi, signUpApi, updateUserApi } from "../auth";

export const signUpCall = async (formData) => {

    try {
        //log in user
        const {data} = await signUpApi(formData);
        console.log("signin user", data);

        localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
        localStorage.setItem('token', JSON.stringify(data.token));

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

export const signInWithGoogleCall = async (token, dispatch) => {
    try {
        //log in user
        const {data} = await getUserOnlyGoogleInfoApi(token);
        console.log("signin google user", data);

        // const {data: normalUser} = await logInWithGoogleApi({email: data.email});
        // console.log("normalUser", normalUser);

        if(data) {
            dispatch(loginWithGoogle(data.userInfo));
            localStorage.setItem('userInfo', JSON.stringify(data.userInfo));
            localStorage.setItem('token', JSON.stringify(data.token));
            showMessage("success", "Sign In success");
    
            return data;
        } else {
            showMessage("error", "Sign In failed. Please try again");
        }


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