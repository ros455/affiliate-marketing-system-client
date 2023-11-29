import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "../http/BaseUrl";
import axios from "axios";
import { AUTH_TOKEN } from "../utils/Token";
import { apiInstance } from "../http/Api";
export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (payload, thunkAPI) => {
    const { email, name, password } = payload;
    const response = await fetch(`${BASE_URL}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        name,
        password,
      }),
    });
    const data = await response.json();

    if (data.message === "Email already exists") {
      return { message: "Email already exists" };
    }

    thunkAPI.dispatch(authSlice.actions.setData(data));

    return data || null;
  }
);

export const fetchAuth = createAsyncThunk(
  "auth/fetchAuth",
  async (payload, thunkAPI) => {
    const { email, password } = payload;
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
    if (data.message === "User not found") {
      return { message: "User not found" };
    }
    if (data.message === "Password or email wrong") {
      return { message: "Password or email wrong" };
    }
    thunkAPI.dispatch(authSlice.actions.setData(data));

    return data || null;
  }
);

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
  const response = await fetch(`${BASE_URL}/get-me`, {
    headers: {
      authorization: AUTH_TOKEN,
    },
  });
  const data = await response.json();
  // if(!data.loggedIn) {
  //     window.localStorage.removeItem("token");
  // }
  return data;
});
export const fetchAllUsers = createAsyncThunk(
  "auth/fetchAllUsers",
  async (_, thunkAPI) => {
    const response = await fetch(`${BASE_URL}/get-all-users`, {
      headers: {
        authorization: AUTH_TOKEN,
      },
    });
    const data = await response.json();
    thunkAPI.dispatch(authSlice.actions.setAllUsers(data));
    // if(!data.loggedIn) {
    //     window.localStorage.removeItem("token");
    // }
    return data;
  }
);

export const fetchIsAdmin = createAsyncThunk("auth/fetchIsAdmin", async () => {
  const { data } = await fetch(`${BASE_URL}/get-me`);
  return data.isadmin;
});

// Admin statistic
export const fetchAdminStatistic = createAsyncThunk(
  "auth/fetchAdminStatistic",
  async () => {
    const response = await fetch(`${BASE_URL}/get-admin-statistic`, {
      headers: {
        authorization: AUTH_TOKEN,
      },
    });
    const data = await response.json();
    // if(!data.loggedIn) {
    //     window.localStorage.removeItem("token");
    // }
    return data[0];
  }
);

const initialState = {
  data: null,
  user: null,
  users: null,
  isAdmin: false,
  status: "loading",
  adminStatistics: [],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.data = null;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setAllUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
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
    [fetchAdminStatistic.pending]: (state) => {
      state.status = "loading";
      state.adminStatistics = false;
    },
    [fetchAdminStatistic.fulfilled]: (state, action) => {
      state.status = "loaded";
      state.adminStatistics = action.payload;
    },
    [fetchAdminStatistic.rejected]: (state) => {
      state.status = "error";
      state.adminStatistics = false;
    },
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export const currentUser = (state) => state.auth.data;

export const allUsers = (state) => state.auth.users;

export const selectIsAdmin = (state) => state.auth.isAdmin;

export const statisticAdmin = (state) => state.auth.adminStatistics;

export const authReducer = authSlice.reducer;

export const { logout } = authSlice.actions;
