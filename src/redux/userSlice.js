import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { signInCall, signUpCall, updateUserCall } from "../api/call/authCall";
import { showMessage } from "../utils/showMessage";

const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

export const signUpThunk = createAsyncThunk(
  "user/signUp",
  async (formData, thunkApi) => {
    // const userInfo = await new Promise((res, rej) => {
    //   setTimeout(() => {
    //     res(userData);
    //   }, 2000);
    // });
    const userInfo = signUpCall(formData);
    console.log("userInfo", userInfo);
    return userInfo; //action.payload
  }
);
export const signInThunk = createAsyncThunk(
  "user/signIn",
  async (formData, thunkApi) => {
    //   const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    // const userInfo = await new Promise((res, rej) => {
    //   setTimeout(() => {
    //       if(formData.email !== storedUser.email || formData.password !== storedUser.password) {
    //         rej(); 
    //         return;
    //       }
    //     res(storedUser);
    //   }, 2000);
    // });

    const userInfo = signInCall(formData);
    console.log("userInfo", userInfo);

    return userInfo; //action.payload
  }
);


export const updateUserThunk = createAsyncThunk(
  "user/update",
  async (formData, thunkApi) => {

    const result = await updateUserCall(formData);
    // console.log("result", result);

    return result; //action.payload
  }
);




export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: userInfo,
    isLogin: userInfo ? true : false,
    isLoading: false,
    isError: false,
  },

  reducers: {
    logOut: (state) => {
      state.isLogin = false;
      state.userInfo = null;
      localStorage.removeItem('userInfo');
      localStorage.removeItem('token');
      showMessage("success", "Log out success");

    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(signUpThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signUpThunk.fulfilled, (state, action) => {
        console.log("userInfo payload fulfilled", action.payload.userInfo);
        state.userInfo = {
          ...action.payload.userInfo,
        };
        state.isLogin = true;
        state.isLoading = false;
        state.isError = false;
        showMessage("success", "Sign Up success");

      })
      .addCase(signUpThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showMessage("error", "Sign Up failed. Please try again");

      })

      .addCase(signInThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signInThunk.fulfilled, (state, action) => {
        console.log("userInfo payload fulfilled", action.payload);
        state.isLogin = true;
        state.userInfo = {
          ...action.payload.userInfo,
        };
        state.isLoading = false;
        state.isError = false;
        showMessage("success", "Sign In success");

      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showMessage("error", "Sign In failed. Please try again");

      })

      
      .addCase(updateUserThunk.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(updateUserThunk.fulfilled, (state, action) => {
        console.log("userInfo payload fulfilled", action.payload);
        state.userInfo = {
          ...action.payload.userInfo,
        };
        state.isLoading = false;
        state.isError = false;
        showMessage("success", "All info has been saved");

      })
      .addCase(updateUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showMessage("error", "Update User failed. Please try again");

      })
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
