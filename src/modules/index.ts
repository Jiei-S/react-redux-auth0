import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { authSlice } from "./auth";
import { projectSlice } from "./projects";

const store = configureStore({
  reducer: {
    project: projectSlice.projectReducer,
    projects: projectSlice.projectsReducer,
    auth: authSlice.authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export default store;
