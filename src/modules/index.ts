import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { projectSlice } from "./projects";
// import { userSlice } from "./users";

const store = configureStore({
  reducer: {
    projects: projectSlice.projectReducer,
    // users: userSlice.userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
