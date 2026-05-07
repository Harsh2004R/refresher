import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import base_url from "../../base_url";
import axios from "axios";
const initialState = {
  user: null,
  isLoading: false,
  status: "idle",
  isError: null,
};

export const registerRequest = createAsyncThunk(
  "login-request",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/user/register`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          `api end point is not correct for verifying user or login ...`,
      );
    }
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerRequest.pending, (state) => {
      state.isLoading = true;
      state.status = "pending ...";
    });
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(registerRequest.rejected, (state) => {
      state.status = "rejected ...";
      state.isError = "Error in loging user promise rejected...";
      state.isLoading = false;
    });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
