import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import base_url from "../../base_url";
import axios from "axios";
const initialState = {
  user: null,
  isAuth: false,
  isLoading: false,
  status: "idle",
  isError: null,
};

export const loginRequest = createAsyncThunk(
  "login-request",
  async (data, { rejectWithValue }) => {
    try {
        console.log("data",data)
      const res = await axios.post(`${base_url}/user/verify`, data);
      return res.data;
    } catch (error) {
     return   rejectWithValue(
        error.response?.data || `api end point is not correct for verifying user or login ...`
     )
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.isAuth = true;
      state.status = "success";
      state.user = action.payload;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
