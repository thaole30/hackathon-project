import { createSlice, createAsyncThunk, isFulfilled } from "@reduxjs/toolkit";
import { hackathons } from "../pages/HackathonPage/data/data";
import { showMessage } from "../utils/showMessage";
import { nanoid } from 'nanoid';


export const fetchHackathonDetail = createAsyncThunk(
  "hackathon/fetchHackathonDetail",
  async (hackathonId, thunkApi) => {
    const {hackathon} = thunkApi.getState();
    // console.log("hackathonsArr", hackathon.hackathonsArr)
    const hackathonDetail = await new Promise((res, rej) => {
      const hktDetail = hackathon.hackathonsArr.find((item) => item._id == hackathonId);
      setTimeout(() => {
        res(hktDetail);
      }, 2000);
    });
    // console.log("hackathonDetail reducer", hackathonDetail)
    return hackathonDetail; //action.payload
  }
);

export const hackathonSlice = createSlice({
  name: "hackathon",
  initialState: {
    hackathonsArr: hackathons,
    hackathonDetail: {},
    isLoading: false,
    isError: false,
  },

  reducers: {
    createHktDraft: (state, action) => {
			const newHkt = action.payload;
			state.hackathonsArr.push(newHkt);
		},
    updateHkt: (state, action) => {
			let index = state.hackathonsArr.findIndex(hkt => hkt.id === action.payload.id);
      if(index >= 0) {
        state.hackathonsArr[index] = {
          ...state.hackathonsArr[index],
          ...action.payload,
        }
      }
		},
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchHackathonDetail.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchHackathonDetail.fulfilled, (state, action) => {
        console.log("hackathonDetail payload fulfilled", action.payload);
        state.hackathonDetail = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchHackathonDetail.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      });
  },
});

export const { createHktDraft } = hackathonSlice.actions;


export default hackathonSlice.reducer;
