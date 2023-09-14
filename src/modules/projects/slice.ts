import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createProject, findProject } from "./api";
import { Project } from "../../pages/projects/index";

export const PROJECT_SLICE_KEY = "projects";

export enum ProjectStateStatus {
  idle,
  loading,
  succeeded,
  failed,
}

type Project = {
  id: string;
  name: string;
  status: string;
};

type ProjectState = {
  project: Project;
  status: ProjectStateStatus;
};

const initialState: ProjectState = {
  project: {
    id: "",
    name: "",
    status: "",
  },
  status: ProjectStateStatus.idle,
};

const projectSlice = createSlice({
  name: PROJECT_SLICE_KEY,
  initialState,
  reducers: {
    setProject: (state, action: PayloadAction<Project>) => {
      state.project = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(findProject.pending, (state) => {
        state.status = ProjectStateStatus.loading;
      })
      .addCase(findProject.fulfilled, (state, action) => {
        state.status = ProjectStateStatus.succeeded;
        state.project = action.payload;
      })
      .addCase(findProject.rejected, (state) => {
        state.status = ProjectStateStatus.failed;
      })
      .addCase(createProject.pending, (state) => {
        state.status = ProjectStateStatus.loading;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.status = ProjectStateStatus.succeeded;
        state.project = action.payload;
      })
      .addCase(createProject.rejected, (state) => {
        state.status = ProjectStateStatus.failed;
      });
  },
});

export const { setProject } = projectSlice.actions;

export const projectReducer = projectSlice.reducer;
