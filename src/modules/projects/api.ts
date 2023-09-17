import { createAsyncThunk } from "@reduxjs/toolkit";
import { projectApi } from "../../api/openapi/client";
import { ProjectCreateParams, ProjectResponse } from "../../api/openapi/gen/v1.0";

export const findProject = createAsyncThunk<ProjectResponse, string>("projects/findProject", async (id) => {
  return {
    ...(await projectApi.findProject(id)).data,
  };
});

export const getProjects = createAsyncThunk<ProjectResponse[]>("projects/getProjects", async () => {
  return [
    {
      id: "1",
      name: "Project 1",
      status: "todo",
    },
    {
      id: "2",
      name: "Project 2",
      status: "todo",
    },
  ];
});

export const createProject = createAsyncThunk<ProjectResponse, ProjectCreateParams>(
  "projects/createProject",
  async (params) => {
    return {
      ...(await projectApi.createProject(params)).data,
    };
  }
);
