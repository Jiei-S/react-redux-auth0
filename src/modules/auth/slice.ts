import { createSlice } from "@reduxjs/toolkit";

export enum AuthSliceName {
  auth = "auth",
}

type Auth = {
  id: string;
  accessToken: string;
};

type AuthState = {
  initialized: boolean;
  auth: Auth;
};

const initialState: AuthState = {
  initialized: false,
  auth: {
    id: "",
    accessToken: "",
  },
};

const authSlice = createSlice({
  name: AuthSliceName.auth,
  initialState,
  reducers: {
    setInitialized: (state, action) => {
      state.initialized = action.payload;
    },
    setAccessToken: (state, action) => {
      state.auth.accessToken = action.payload;
    },
  },
});

export const { setInitialized, setAccessToken } = authSlice.actions;

export const authReducer = authSlice.reducer;
