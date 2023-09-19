import { createAsyncThunk } from "@reduxjs/toolkit";
import { ProjectCreateParams, ProjectResponse } from "../../api/openapi/gen/v1.0";
import { APIParams, ProjectClient } from "../_shared/config/openapi/config";

export const findProject = createAsyncThunk<ProjectResponse, APIParams<string>>(
  "projects/findProject",
  async ({ params: id, accessToken }) => {
    const c = new ProjectClient({ accessToken });
    return {
      ...(await c.findProject(id)).data,
    };
  }
);

export const createProject = createAsyncThunk<ProjectResponse, APIParams<ProjectCreateParams>>(
  "projects/createProject",
  async ({ params, accessToken }) => {
    const c = new ProjectClient({ accessToken });
    return {
      ...(await c.createProject(params)).data,
    };
  }
);

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
