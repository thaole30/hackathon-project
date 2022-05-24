import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { showMessage } from "../utils/showMessage";

const userInfo = JSON.parse(localStorage.getItem("userInfo")) || null;

export const signUpThunk = createAsyncThunk(
  "user/signUp",
  async (userData, thunkApi) => {
    const userInfo = await new Promise((res, rej) => {
      setTimeout(() => {
        res(userData);
      }, 2000);
    });
    return userInfo; //action.payload
  }
);
export const signInThunk = createAsyncThunk(
  "user/signIn",
  async (formData, thunkApi) => {
      const storedUser = JSON.parse(localStorage.getItem("userInfo"));
    const userInfo = await new Promise((res, rej) => {
      setTimeout(() => {
          if(formData.email !== storedUser.email || formData.password !== storedUser.password) {
            rej(); 
            return;
          }
        res(storedUser);
      }, 2000);
    });
    return userInfo; //action.payload
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
        console.log("userInfo payload fulfilled", action.payload);
        state.userInfo = {
          ...action.payload,
          name: `${action.payload.firstName}${action.payload.lastName}`,
          img: `https://i.pravatar.cc/150?u=${action.payload.firstName}${action.payload.lastName}`,
        };
        state.isLogin = true;
        localStorage.setItem(
          "userInfo",
          JSON.stringify({
            ...action.payload,
            name: `${action.payload.firstName}${action.payload.lastName}`,
            img: `https://i.pravatar.cc/150?u=${action.payload.firstName}${action.payload.lastName}`,
          })
        );
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
        state.userInfo = action.payload;
        state.isLogin = true;
        state.isLoading = false;
        state.isError = false;
        showMessage("success", "Sign In success");

      })
      .addCase(signInThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        showMessage("error", "Sign In failed. Please try again");

      })
  },
});

export const { logOut } = userSlice.actions;

export default userSlice.reducer;
