import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import base_url from "../../base_url";
import axios from "axios";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  auth: JSON.parse(localStorage.getItem("auth")) || false,
  isLoading: false,
  status: "idle",
  isError: null,
};

export const registerRequest = createAsyncThunk(
  "singup-request",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/user/register`, data);
      return res.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data ||
          `api end point is not correct for registering user or signup ...`,
      );
    }
  },
);

export const loginRequest = createAsyncThunk(
  "login-request",
  async ({ data, navigate }, { rejectWithValue }) => {
    try {
      const res = await axios.post(`${base_url}/user/verify`, data);
      if (res.status === 201) {
        navigate("/");
      }
      console.log(res);

      return res.data;
    } catch (error) {
      console.log("error -----", error);
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
      state.status = "loading";
    });
    builder.addCase(registerRequest.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(registerRequest.rejected, (state, action) => {
      state.status = "failed";
      state.isError =
        action.payload || "Error in loging user promise rejected...";
      state.isLoading = false;
    });

    // login reducers ...
    builder.addCase(loginRequest.pending, (state, action) => {
      state.isLoading = true;
      state.status = "loading";
    });
    builder.addCase(loginRequest.fulfilled, (state, action) => {
      state.status = "success";
      state.user = action.payload;
      state.auth = true;
      localStorage.setItem("auth", JSON.stringify(state.auth));
      state.isLoading = false;
    });
    builder.addCase(loginRequest.rejected, (state, action) => {
      state.status = "failed";
      state.isError =
        action.payload || "Error in loging user promise rejected...";
      state.isLoading = false;
    });
  },
});

export default authSlice.reducer;
