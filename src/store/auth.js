import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../http/BaseUrl";
import axios from "axios";
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params) => {
    const { data } = await fetch(`${BASE_URL}/register`);
    return data;
  }
);

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async ({ email, password }) => {
    const response = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await response.json();
    return data || null;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const response = await fetch(`${BASE_URL}/get-me`, {
    headers: {
      authorization: window.localStorage.getItem("A-M-S-token"),
    },
  });
  const data = await response.json();
  // if(!data.loggedIn) {
  //     window.localStorage.removeItem("token");
  // }
  return data;
});

export const fetchIsAdmin = createAsyncThunk("auth/fetchIsAdmin", async () => {
  const { data } = await fetch(`${BASE_URL}/get-me`);
  return data.isadmin;
});

const initialState = {
  data: null,
  user: null,
  users: null,
  isAdmin: false,
  status: "loading",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
  },
  extraReducers: {
    [fetchRegister.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchRegister.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchRegister.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuth.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuth.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuth.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchAuthMe.pending]: (state) => {
      state.status = "loading";
      state.data = null;
    },
    [fetchAuthMe.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.data = action.payload;
    },
    [fetchAuthMe.rejected]: (state) => {
      state.status = "error";
      state.data = null;
    },
    [fetchIsAdmin.pending]: (state) => {
      state.status = "loading";
      state.isAdmin = false;
    },
    [fetchIsAdmin.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.isAdmin = action.payload;
    },
    [fetchIsAdmin.rejected]: (state) => {
      state.status = "error";
      state.isAdmin = false;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const currentUser = (state) => state.auth.data;

export const allUsers = (state) => state.auth.users;

export const selectIsAdmin = (state) => state.auth.isAdmin;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
