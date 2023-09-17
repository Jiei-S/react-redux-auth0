import { createSlice } from "@reduxjs/toolkit";
import { createProject, findProject, getProjects } from "./api";

export enum ProjectSliceName {
  project = "project",
  projects = "projects",
}

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

const initialProject: ProjectState = {
  project: {
    id: "",
    name: "",
    status: "",
  },
  status: ProjectStateStatus.idle,
};

const projectSlice = createSlice({
  name: ProjectSliceName.project,
  initialState: initialProject,
  reducers: {},
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

export const projectReducer = projectSlice.reducer;

type ProjectsState = {
  projects: Project[];
  status: ProjectStateStatus;
};

const initialProjects: ProjectsState = {
  projects: [],
  status: ProjectStateStatus.idle,
};

const projectsSlice = createSlice({
  name: ProjectSliceName.projects,
  initialState: initialProjects,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state) => {
        state.status = ProjectStateStatus.loading;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.status = ProjectStateStatus.succeeded;
        state.projects = action.payload;
      })
      .addCase(findProject.rejected, (state) => {
        state.status = ProjectStateStatus.failed;
      });
  },
});

export const projectsReducer = projectsSlice.reducer;
